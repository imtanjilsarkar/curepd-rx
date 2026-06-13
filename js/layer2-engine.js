// ============================================================
//  CurePd Rx — LAYER 2: Clinical Logic Engine
//  Bridges Disease KB + Medicine Registry
//  Context: pregnancy, renal, hepatic, elderly, pediatric,
//           asthma, peptic ulcer, dengue, heart disease, CKD
// ============================================================

window.ClinicalEngine = {

  // ── Main entry: get smart suggestions for a patient ──────
  getSuggestions(diagnosisText, complaintText, patientContext = {}) {
    const diseases = DiseaseKB.matchMultiple(diagnosisText, complaintText);
    if (!diseases.length) return { diseases: [], suggestions: [], tests: [], advice: [], warnings: [] };

    const allCategories = new Set();
    const contraCategories = new Set();
    const allTests = [];
    const allAdvice = [];
    const emergencyFlags = [];
    const diseaseNotes = [];

    diseases.forEach(disease => {
      // Gather medicine categories — context-aware
      let cats = disease.medicineCategories;

      // If structured contextual categories exist
      if (cats && typeof cats === 'object' && !Array.isArray(cats)) {
        // Add first-line always
        (cats.firstLine || []).forEach(c => allCategories.add(c));

        // Add context-specific categories
        const ctx = cats.contextual || {};
        if (patientContext.pregnancy && ctx.pregnancy) ctx.pregnancy.forEach(c => allCategories.add(c));
        else if (patientContext.ckd && ctx.withCKD) ctx.withCKD.forEach(c => allCategories.add(c));
        else if (patientContext.elderly && ctx.elderly) ctx.elderly.forEach(c => allCategories.add(c));
        else if (patientContext.heartDisease && ctx.withHeartDisease) ctx.withHeartDisease.forEach(c => allCategories.add(c));
        else if (patientContext.obesity && ctx.obesity) ctx.obesity.forEach(c => allCategories.add(c));
        else {
          // Default: add second-line too
          (cats.secondLine || []).forEach(c => allCategories.add(c));
        }
        (cats.advanced || []).forEach(c => {
          if (patientContext.poorControl) allCategories.add(c);
        });
      } else if (Array.isArray(cats)) {
        cats.forEach(c => allCategories.add(c));
      }

      // Gather contraindicated categories
      (disease.contraindicatedCategories || []).forEach(c => contraCategories.add(c));

      // Context-specific contraindications
      const ctxContra = disease.contraindicatedContextual || {};
      if (patientContext.pregnancy && ctxContra.pregnancy) ctxContra.pregnancy.forEach(c => contraCategories.add(c));
      if (patientContext.ckd && ctxContra.ckd) ctxContra.ckd.forEach(c => contraCategories.add(c));
      if (patientContext.elderly && ctxContra.elderly) ctxContra.elderly.forEach(c => contraCategories.add(c));
      if (patientContext.asthma && ctxContra.asthma) ctxContra.asthma.forEach(c => contraCategories.add(c));
      if (patientContext.pepticUlcer && ctxContra.pepticUlcer) ctxContra.pepticUlcer.forEach(c => contraCategories.add(c));

      // Tests & advice
      (disease.tests || []).forEach(t => { if (!allTests.includes(t)) allTests.push(t); });
      (disease.advice || []).forEach(a => { if (!allAdvice.includes(a)) allAdvice.push(a); });
      (disease.emergencyFlags || []).forEach(f => { if (!emergencyFlags.includes(f)) emergencyFlags.push(f); });
      if (disease.note) diseaseNotes.push(`[${disease.displayName}] ${disease.note}`);
    });

    // Resolve categories → medicines (excluding contraindicated)
    const suggestions = [];
    const addedMeds = new Set();
    const warnings = [];

    allCategories.forEach(cat => {
      if (contraCategories.has(cat)) return; // skip contraindicated category
      const meds = MedicineRegistry.getByCategory(cat);
      meds.forEach(med => {
        if (addedMeds.has(med.name)) return;
        // Check individual medicine safety
        const safety = MedicineRegistry.isSafeFor(med.name, patientContext);
        if (safety.warnings.length > 0) {
          // Still show but with warning flag
          suggestions.push({ ...med, safetyWarnings: safety.warnings, flagged: true });
          warnings.push(...safety.warnings.map(w => `${med.name}: ${w}`));
        } else {
          suggestions.push({ ...med, safetyWarnings: [], flagged: false });
        }
        addedMeds.add(med.name);
      });
    });

    // Add dengue-specific hard warning
    if (patientContext.dengue || diagnosisText?.toLowerCase().includes('dengue')) {
      warnings.push('⛔ DENGUE PROTOCOL: NSAIDs and Aspirin are contraindicated. Paracetamol only.');
    }

    return {
      diseases: diseases.map(d => ({ name: d.displayName, icd10: d.icd10, note: d.note })),
      suggestions: suggestions.slice(0, 10),
      tests: allTests.slice(0, 8),
      advice: allAdvice.slice(0, 6),
      emergencyFlags,
      warnings: [...new Set(warnings)],
      notes: diseaseNotes
    };
  },

  // ── Validate a single medicine against patient context ───
  validateMedicine(medicineName, patientContext = {}) {
    if (!medicineName || medicineName.trim().length < 2) return null;
    const safety = MedicineRegistry.isSafeFor(medicineName, patientContext);
    const med = MedicineRegistry.get(medicineName);
    return {
      found: !!med,
      name: med ? med.name : medicineName,
      generic: med ? med.generic : null,
      category: med ? med.category : null,
      ...safety,
      caution: med ? med.caution : null,
      timing: med ? med.timing : null,
    };
  },

  // ── Build patient context from form fields ───────────────
  buildContext(formData) {
    const age = parseInt(formData.patientAge) || 0;
    const diagnosis = (formData.diagnosis || '').toLowerCase();
    const complaint = (formData.complaint || '').toLowerCase();
    const combined = diagnosis + ' ' + complaint;
    return {
      pregnancy: formData.patientGender === 'Female' && formData.isPregnant,
      renal: formData.hasRenalDisease || combined.includes('ckd') || combined.includes('kidney'),
      hepatic: formData.hasLiverDisease || combined.includes('liver') || combined.includes('hepatic'),
      elderly: age >= 65,
      pediatric: age > 0 && age < 12,
      asthma: formData.hasAsthma || combined.includes('asthma'),
      pepticUlcer: formData.hasPepticUlcer || combined.includes('ulcer') || combined.includes('gastritis'),
      dengue: combined.includes('dengue'),
      ckd: formData.hasCKD || combined.includes('ckd') || combined.includes('kidney disease'),
      heartDisease: combined.includes('heart') || combined.includes('cardiac'),
      obesity: combined.includes('obese') || combined.includes('obesity'),
      poorControl: combined.includes('poor control') || combined.includes('uncontrolled'),
    };
  }
};