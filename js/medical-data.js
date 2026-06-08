// ============================================================
//  CurePd Rx — Local Medical Dataset (Zero Cost, No API)
//  Bangladeshi medicine brand names + diagnosis mapping
// ============================================================

window.MedicalData = {

  // ── 200+ Common medicines used in Bangladesh ──
  medicines: [
    // Analgesics / Antipyretics
    { name: "Napa 500mg", generic: "Paracetamol", category: "Analgesic" },
    { name: "Napa Extra", generic: "Paracetamol + Caffeine", category: "Analgesic" },
    { name: "Napa 250mg", generic: "Paracetamol", category: "Analgesic" },
    { name: "Ace 500mg", generic: "Paracetamol", category: "Analgesic" },
    { name: "Fastum Gel", generic: "Ketoprofen", category: "Topical Analgesic" },
    { name: "Voltaren 50mg", generic: "Diclofenac", category: "NSAID" },
    { name: "Flamex 500mg", generic: "Naproxen", category: "NSAID" },
    { name: "Ibupax 400mg", generic: "Ibuprofen", category: "NSAID" },
    { name: "Ibufen 400mg", generic: "Ibuprofen", category: "NSAID" },
    { name: "Ketofen 50mg", generic: "Ketoprofen", category: "NSAID" },
    { name: "Toradol 10mg", generic: "Ketorolac", category: "NSAID" },
    { name: "Mefenamic Acid 500mg", generic: "Mefenamic Acid", category: "NSAID" },
    { name: "Tramadol 50mg", generic: "Tramadol", category: "Opioid Analgesic" },

    // Antibiotics
    { name: "Azithromycin 500mg", generic: "Azithromycin", category: "Antibiotic" },
    { name: "Zithromax 500mg", generic: "Azithromycin", category: "Antibiotic" },
    { name: "Zimax 500mg", generic: "Azithromycin", category: "Antibiotic" },
    { name: "Amoxicillin 500mg", generic: "Amoxicillin", category: "Antibiotic" },
    { name: "Moxacil 500mg", generic: "Amoxicillin", category: "Antibiotic" },
    { name: "Ciprofloxacin 500mg", generic: "Ciprofloxacin", category: "Antibiotic" },
    { name: "Ciprocin 500mg", generic: "Ciprofloxacin", category: "Antibiotic" },
    { name: "Metronidazole 400mg", generic: "Metronidazole", category: "Antibiotic" },
    { name: "Amodis 400mg", generic: "Metronidazole", category: "Antibiotic" },
    { name: "Flagyl 400mg", generic: "Metronidazole", category: "Antibiotic" },
    { name: "Cefalexin 500mg", generic: "Cefalexin", category: "Antibiotic" },
    { name: "Cefixime 200mg", generic: "Cefixime", category: "Antibiotic" },
    { name: "Cef-3 200mg", generic: "Cefixime", category: "Antibiotic" },
    { name: "Ceftriaxone 1g", generic: "Ceftriaxone", category: "Antibiotic" },
    { name: "Doxycycline 100mg", generic: "Doxycycline", category: "Antibiotic" },
    { name: "Levofloxacin 500mg", generic: "Levofloxacin", category: "Antibiotic" },
    { name: "Levox 500mg", generic: "Levofloxacin", category: "Antibiotic" },
    { name: "Clindamycin 300mg", generic: "Clindamycin", category: "Antibiotic" },
    { name: "Erythromycin 500mg", generic: "Erythromycin", category: "Antibiotic" },
    { name: "Clarithromycin 500mg", generic: "Clarithromycin", category: "Antibiotic" },
    { name: "Cephalexin 500mg", generic: "Cephalexin", category: "Antibiotic" },
    { name: "Co-trimoxazole 480mg", generic: "Co-trimoxazole", category: "Antibiotic" },

    // GI / Antacids
    { name: "Omeprazole 20mg", generic: "Omeprazole", category: "PPI" },
    { name: "Losectil 20mg", generic: "Omeprazole", category: "PPI" },
    { name: "Pantoprazole 40mg", generic: "Pantoprazole", category: "PPI" },
    { name: "Pantonix 40mg", generic: "Pantoprazole", category: "PPI" },
    { name: "Ranitidine 150mg", generic: "Ranitidine", category: "H2 Blocker" },
    { name: "Antacid Plus", generic: "Aluminium Hydroxide", category: "Antacid" },
    { name: "Gaviscon", generic: "Sodium Alginate", category: "Antacid" },
    { name: "Maxolon 10mg", generic: "Metoclopramide", category: "Antiemetic" },
    { name: "Domperidone 10mg", generic: "Domperidone", category: "Antiemetic" },
    { name: "Dominol 10mg", generic: "Domperidone", category: "Antiemetic" },
    { name: "Ondansetron 4mg", generic: "Ondansetron", category: "Antiemetic" },
    { name: "Onset 4mg", generic: "Ondansetron", category: "Antiemetic" },
    { name: "Loperamide 2mg", generic: "Loperamide", category: "Antidiarrheal" },
    { name: "Imodium 2mg", generic: "Loperamide", category: "Antidiarrheal" },
    { name: "Smecta 3g", generic: "Diosmectite", category: "Antidiarrheal" },
    { name: "Flagyl 400mg", generic: "Metronidazole", category: "Antiprotozoal" },
    { name: "ORS Saline", generic: "Oral Rehydration Salt", category: "Rehydration" },

    // Respiratory
    { name: "Salbutamol 2mg", generic: "Salbutamol", category: "Bronchodilator" },
    { name: "Ventolin Inhaler", generic: "Salbutamol", category: "Bronchodilator" },
    { name: "Montelukast 10mg", generic: "Montelukast", category: "Leukotriene Antagonist" },
    { name: "Singulair 10mg", generic: "Montelukast", category: "Leukotriene Antagonist" },
    { name: "Cetirizine 10mg", generic: "Cetirizine", category: "Antihistamine" },
    { name: "Actin 10mg", generic: "Cetirizine", category: "Antihistamine" },
    { name: "Fexofenadine 120mg", generic: "Fexofenadine", category: "Antihistamine" },
    { name: "Histacin 120mg", generic: "Fexofenadine", category: "Antihistamine" },
    { name: "Loratadine 10mg", generic: "Loratadine", category: "Antihistamine" },
    { name: "Loratin 10mg", generic: "Loratadine", category: "Antihistamine" },
    { name: "Dextromethorphan Syrup", generic: "DXM", category: "Cough Suppressant" },
    { name: "Ambroxol 30mg", generic: "Ambroxol", category: "Mucolytic" },
    { name: "Mucosolvan 30mg", generic: "Ambroxol", category: "Mucolytic" },
    { name: "Fluticasone Inhaler", generic: "Fluticasone", category: "Corticosteroid Inhaler" },
    { name: "Seretide Inhaler", generic: "Salmeterol+Fluticasone", category: "Combination Inhaler" },
    { name: "Budecort Inhaler", generic: "Budesonide", category: "Corticosteroid Inhaler" },
    { name: "Theophylline 200mg", generic: "Theophylline", category: "Bronchodilator" },

    // Cardiovascular
    { name: "Amlodipine 5mg", generic: "Amlodipine", category: "Calcium Channel Blocker" },
    { name: "Amlodipine 10mg", generic: "Amlodipine", category: "Calcium Channel Blocker" },
    { name: "Atenolol 50mg", generic: "Atenolol", category: "Beta Blocker" },
    { name: "Tenolol 50mg", generic: "Atenolol", category: "Beta Blocker" },
    { name: "Metoprolol 50mg", generic: "Metoprolol", category: "Beta Blocker" },
    { name: "Losartan 50mg", generic: "Losartan", category: "ARB" },
    { name: "Losartan 100mg", generic: "Losartan", category: "ARB" },
    { name: "Losaten 50mg", generic: "Losartan", category: "ARB" },
    { name: "Ramipril 5mg", generic: "Ramipril", category: "ACE Inhibitor" },
    { name: "Enalapril 5mg", generic: "Enalapril", category: "ACE Inhibitor" },
    { name: "Aspirin 75mg", generic: "Aspirin", category: "Antiplatelet" },
    { name: "Ecosprin 75mg", generic: "Aspirin", category: "Antiplatelet" },
    { name: "Atorvastatin 10mg", generic: "Atorvastatin", category: "Statin" },
    { name: "Atorvastatin 20mg", generic: "Atorvastatin", category: "Statin" },
    { name: "Lipitor 20mg", generic: "Atorvastatin", category: "Statin" },
    { name: "Rosuvastatin 10mg", generic: "Rosuvastatin", category: "Statin" },
    { name: "Furosemide 40mg", generic: "Furosemide", category: "Diuretic" },

    // Diabetes
    { name: "Metformin 500mg", generic: "Metformin", category: "Antidiabetic" },
    { name: "Metformin 1000mg", generic: "Metformin", category: "Antidiabetic" },
    { name: "Glucomin 500mg", generic: "Metformin", category: "Antidiabetic" },
    { name: "Glibenclamide 5mg", generic: "Glibenclamide", category: "Antidiabetic" },
    { name: "Gliclazide 80mg", generic: "Gliclazide", category: "Antidiabetic" },
    { name: "Sitagliptin 100mg", generic: "Sitagliptin", category: "Antidiabetic" },
    { name: "Januvia 100mg", generic: "Sitagliptin", category: "Antidiabetic" },
    { name: "Insulin Mixtard", generic: "Biphasic Insulin", category: "Insulin" },
    { name: "Insulin Actrapid", generic: "Soluble Insulin", category: "Insulin" },

    // Vitamins / Supplements
    { name: "Vitamin C 500mg", generic: "Ascorbic Acid", category: "Vitamin" },
    { name: "Vitamin D3 1000IU", generic: "Cholecalciferol", category: "Vitamin" },
    { name: "Calcium + D3", generic: "Calcium Carbonate", category: "Supplement" },
    { name: "Zinc 20mg", generic: "Zinc Sulfate", category: "Mineral" },
    { name: "Iron Syrup", generic: "Ferrous Sulfate", category: "Iron" },
    { name: "Folic Acid 5mg", generic: "Folic Acid", category: "Vitamin" },
    { name: "Vitamin B Complex", generic: "B-Complex", category: "Vitamin" },
    { name: "Neurobion Forte", generic: "B1+B6+B12", category: "Vitamin" },
    { name: "Beston Plus", generic: "Multivitamin", category: "Supplement" },

    // Skin / Topical
    { name: "Clotrimazole Cream", generic: "Clotrimazole", category: "Antifungal" },
    { name: "Betamethasone Cream", generic: "Betamethasone", category: "Corticosteroid" },
    { name: "Hydrocortisone Cream", generic: "Hydrocortisone", category: "Corticosteroid" },
    { name: "Fluconazole 150mg", generic: "Fluconazole", category: "Antifungal" },
    { name: "Itraconazole 200mg", generic: "Itraconazole", category: "Antifungal" },

    // Neurological / Sleep
    { name: "Diazepam 5mg", generic: "Diazepam", category: "Benzodiazepine" },
    { name: "Clonazepam 0.5mg", generic: "Clonazepam", category: "Benzodiazepine" },
    { name: "Phenobarbitone 60mg", generic: "Phenobarbitone", category: "Anticonvulsant" },
    { name: "Carbamazepine 200mg", generic: "Carbamazepine", category: "Anticonvulsant" },
    { name: "Gabapentin 300mg", generic: "Gabapentin", category: "Anticonvulsant" },
    { name: "Amitriptyline 25mg", generic: "Amitriptyline", category: "Antidepressant" },

    // Thyroid
    { name: "Thyroxine 50mcg", generic: "Levothyroxine", category: "Thyroid" },
    { name: "Thyroxine 100mcg", generic: "Levothyroxine", category: "Thyroid" },
    { name: "Euthyrox 50mcg", generic: "Levothyroxine", category: "Thyroid" },

    // Eye / ENT
    { name: "Chloramphenicol Eye Drop", generic: "Chloramphenicol", category: "Eye Drop" },
    { name: "Ciprofloxacin Eye Drop", generic: "Ciprofloxacin", category: "Eye Drop" },
    { name: "Otigo Ear Drop", generic: "Ofloxacin", category: "Ear Drop" },
    { name: "Nasoclear Nasal Spray", generic: "Sodium Chloride", category: "Nasal" },
    { name: "Xylomethazoline Nasal Spray", generic: "Xylomethazoline", category: "Nasal Decongestant" },
  ],

  // ── Diagnosis → suggested medicines (for doctor helper) ──
  diagnosisMedicines: {
    "fever": [
      "Napa 500mg", "Napa Extra", "Cetirizine 10mg", "Vitamin C 500mg"
    ],
    "viral fever": [
      "Napa 500mg", "Cetirizine 10mg", "Vitamin C 500mg", "Zinc 20mg", "ORS Saline"
    ],
    "typhoid": [
      "Ciprofloxacin 500mg", "Azithromycin 500mg", "Napa 500mg", "ORS Saline"
    ],
    "common cold": [
      "Napa 500mg", "Cetirizine 10mg", "Dextromethorphan Syrup", "Ambroxol 30mg", "Vitamin C 500mg"
    ],
    "cough": [
      "Ambroxol 30mg", "Dextromethorphan Syrup", "Salbutamol 2mg", "Cetirizine 10mg"
    ],
    "sore throat": [
      "Azithromycin 500mg", "Napa 500mg", "Cetirizine 10mg"
    ],
    "tonsillitis": [
      "Amoxicillin 500mg", "Azithromycin 500mg", "Napa 500mg", "Cetirizine 10mg"
    ],
    "pneumonia": [
      "Azithromycin 500mg", "Amoxicillin 500mg", "Napa 500mg", "Salbutamol 2mg"
    ],
    "asthma": [
      "Salbutamol 2mg", "Ventolin Inhaler", "Montelukast 10mg", "Budecort Inhaler", "Theophylline 200mg"
    ],
    "bronchitis": [
      "Ambroxol 30mg", "Salbutamol 2mg", "Azithromycin 500mg", "Montelukast 10mg"
    ],
    "hypertension": [
      "Amlodipine 5mg", "Losartan 50mg", "Atenolol 50mg", "Aspirin 75mg", "Atorvastatin 20mg"
    ],
    "high blood pressure": [
      "Amlodipine 5mg", "Losartan 50mg", "Atenolol 50mg", "Aspirin 75mg"
    ],
    "diabetes": [
      "Metformin 500mg", "Gliclazide 80mg", "Sitagliptin 100mg", "Aspirin 75mg", "Atorvastatin 20mg"
    ],
    "type 2 diabetes": [
      "Metformin 500mg", "Gliclazide 80mg", "Atorvastatin 20mg", "Aspirin 75mg"
    ],
    "gastritis": [
      "Omeprazole 20mg", "Antacid Plus", "Domperidone 10mg", "Metronidazole 400mg"
    ],
    "peptic ulcer": [
      "Omeprazole 20mg", "Amoxicillin 500mg", "Metronidazole 400mg", "Antacid Plus"
    ],
    "gerd": [
      "Pantoprazole 40mg", "Domperidone 10mg", "Antacid Plus", "Gaviscon"
    ],
    "acid reflux": [
      "Omeprazole 20mg", "Gaviscon", "Antacid Plus", "Domperidone 10mg"
    ],
    "diarrhea": [
      "ORS Saline", "Metronidazole 400mg", "Loperamide 2mg", "Smecta 3g", "Zinc 20mg"
    ],
    "vomiting": [
      "Domperidone 10mg", "Ondansetron 4mg", "ORS Saline"
    ],
    "nausea": [
      "Domperidone 10mg", "Ondansetron 4mg", "Maxolon 10mg"
    ],
    "uti": [
      "Ciprofloxacin 500mg", "Cefixime 200mg", "Co-trimoxazole 480mg"
    ],
    "urinary tract infection": [
      "Ciprofloxacin 500mg", "Levofloxacin 500mg", "Cefixime 200mg"
    ],
    "skin infection": [
      "Cefalexin 500mg", "Amoxicillin 500mg", "Clotrimazole Cream", "Betamethasone Cream"
    ],
    "fungal infection": [
      "Fluconazole 150mg", "Itraconazole 200mg", "Clotrimazole Cream"
    ],
    "allergy": [
      "Cetirizine 10mg", "Fexofenadine 120mg", "Loratadine 10mg"
    ],
    "headache": [
      "Napa 500mg", "Ibupax 400mg", "Voltaren 50mg"
    ],
    "migraine": [
      "Napa Extra", "Ibupax 400mg", "Domperidone 10mg", "Amitriptyline 25mg"
    ],
    "body pain": [
      "Napa 500mg", "Ibupax 400mg", "Voltaren 50mg", "Ketofen 50mg"
    ],
    "joint pain": [
      "Ibupax 400mg", "Voltaren 50mg", "Mefenamic Acid 500mg", "Calcium + D3"
    ],
    "back pain": [
      "Ibupax 400mg", "Voltaren 50mg", "Clonazepam 0.5mg", "Calcium + D3"
    ],
    "anemia": [
      "Iron Syrup", "Folic Acid 5mg", "Vitamin B Complex", "Vitamin C 500mg"
    ],
    "hypothyroidism": [
      "Thyroxine 50mcg", "Thyroxine 100mcg", "Calcium + D3"
    ],
    "hyperlipidemia": [
      "Atorvastatin 20mg", "Rosuvastatin 10mg", "Aspirin 75mg"
    ],
    "conjunctivitis": [
      "Ciprofloxacin Eye Drop", "Chloramphenicol Eye Drop"
    ],
    "otitis media": [
      "Amoxicillin 500mg", "Napa 500mg", "Otigo Ear Drop", "Cetirizine 10mg"
    ],
    "sinusitis": [
      "Amoxicillin 500mg", "Cetirizine 10mg", "Xylomethazoline Nasal Spray", "Nasoclear Nasal Spray"
    ],
    "dengue": [
      "Napa 500mg", "ORS Saline", "Vitamin C 500mg", "Zinc 20mg"
    ],
    "chickenpox": [
      "Cetirizine 10mg", "Napa 500mg", "Vitamin C 500mg"
    ],
    "malaria": [
      "Doxycycline 100mg", "Ciprofloxacin 500mg", "Napa 500mg"
    ],
  },

  // ── Diagnosis → lab tests suggestions ──
  diagnosisTests: {
    "fever": ["CBC", "CRP", "Blood Sugar (F)", "Urine R/E"],
    "viral fever": ["CBC", "CRP", "Widal Test", "NS1 Antigen"],
    "typhoid": ["Widal Test", "CBC", "Blood Culture"],
    "dengue": ["CBC", "NS1 Antigen", "Dengue IgG/IgM"],
    "diabetes": ["Blood Sugar (F)", "Blood Sugar (PP)", "HbA1c", "Urine R/E", "Lipid Profile"],
    "hypertension": ["ECG", "Lipid Profile", "Urine R/E", "Creatinine", "CBC"],
    "uti": ["Urine R/E", "Urine C/S", "Creatinine"],
    "anemia": ["CBC", "Serum Ferritin", "Peripheral Blood Film", "Reticulocyte Count"],
    "hypothyroidism": ["T3", "T4", "TSH"],
    "asthma": ["Spirometry", "Chest X-Ray", "CBC", "IgE Level"],
    "pneumonia": ["Chest X-Ray", "CBC", "CRP", "Sputum C/S"],
    "gastritis": ["H. Pylori Antigen", "Upper GI Endoscopy", "Stool R/E"],
    "peptic ulcer": ["H. Pylori Antigen", "Stool Antigen", "CBC"],
    "hepatitis": ["LFT", "HBsAg", "Anti-HCV", "CBC"],
    "malaria": ["Blood Film for MP", "RDT for Malaria", "CBC"],
    "hyperlipidemia": ["Lipid Profile", "LDL", "HDL", "Triglycerides"],
    "skin infection": ["CBC", "Blood Culture", "Wound Swab C/S"],
    "joint pain": ["X-Ray Joint", "RA Factor", "CRP", "Uric Acid", "CBC"],
    "back pain": ["X-Ray Lumbo-sacral", "MRI Spine", "CBC"],
    "migraine": ["CBC", "Blood Pressure", "MRI Brain (if needed)"],
  },

  // ── Medicine → explanation for patients ──
  medicineInfo: {
    "napa": { purpose: "Reduces fever and relieves mild to moderate pain (headache, body pain)", timing: "After meal", warning: "Do not take more than 4 times a day" },
    "paracetamol": { purpose: "Fever reducer and pain reliever", timing: "After meal", warning: "Avoid alcohol while taking this" },
    "omeprazole": { purpose: "Reduces acid in the stomach, treats acidity and ulcers", timing: "Before meal", warning: "Take 30 minutes before eating" },
    "pantoprazole": { purpose: "Reduces stomach acid, relieves heartburn and GERD", timing: "Before meal", warning: "Take 30-60 minutes before breakfast" },
    "metformin": { purpose: "Controls blood sugar levels in Type 2 Diabetes", timing: "After meal", warning: "May cause stomach upset initially" },
    "amlodipine": { purpose: "Lowers high blood pressure and prevents chest pain", timing: "Any time", warning: "Do not stop suddenly without doctor's advice" },
    "atorvastatin": { purpose: "Lowers bad cholesterol (LDL) to protect heart", timing: "Night time", warning: "Report any muscle pain to your doctor" },
    "aspirin": { purpose: "Prevents blood clots, protects heart and brain", timing: "After meal", warning: "Do not take on empty stomach" },
    "losartan": { purpose: "Treats high blood pressure and protects kidneys", timing: "Any time", warning: "Stay well hydrated" },
    "azithromycin": { purpose: "Antibiotic that kills bacteria causing infections", timing: "Before meal", warning: "Complete the full course even if you feel better" },
    "amoxicillin": { purpose: "Antibiotic for bacterial infections (throat, ear, chest)", timing: "After meal", warning: "Inform doctor if allergic to penicillin" },
    "ciprofloxacin": { purpose: "Antibiotic for urinary, gut, and skin infections", timing: "After meal", warning: "Avoid dairy products 2 hours before/after dose" },
    "cetirizine": { purpose: "Relieves allergy symptoms: sneezing, itching, runny nose", timing: "Night time", warning: "May cause drowsiness" },
    "salbutamol": { purpose: "Opens airways quickly to relieve breathing difficulty", timing: "As needed", warning: "Shake inhaler well before use" },
    "montelukast": { purpose: "Prevents asthma attacks and allergic breathing problems", timing: "Night time", warning: "Take regularly even when feeling well" },
    "metronidazole": { purpose: "Kills certain bacteria and parasites in the gut", timing: "After meal", warning: "Strictly avoid alcohol during treatment" },
    "loperamide": { purpose: "Slows bowel movement to control diarrhea", timing: "After meal", warning: "Do not use for bloody diarrhea" },
    "domperidone": { purpose: "Reduces nausea, vomiting and bloating", timing: "Before meal", warning: "Take 15-30 minutes before eating" },
    "thyroxine": { purpose: "Replaces thyroid hormone in hypothyroidism", timing: "Empty stomach", warning: "Take 30-60 min before breakfast, at same time daily" },
    "vitamin c": { purpose: "Boosts immunity and helps body heal faster", timing: "After meal", warning: "Large doses may cause stomach upset" },
    "zinc": { purpose: "Supports immunity, wound healing, and reduces diarrhea", timing: "After meal", warning: "Take with food to reduce nausea" },
    "ors": { purpose: "Replaces water and salts lost during diarrhea or vomiting", timing: "Anytime", warning: "Drink small sips frequently, not large amounts at once" },
  },

  // ── Search medicines by prefix ──
  searchMedicines(query) {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();
    return this.medicines.filter(m =>
      m.name.toLowerCase().startsWith(q) ||
      m.generic.toLowerCase().startsWith(q) ||
      m.name.toLowerCase().includes(q)
    ).slice(0, 8);
  },

  // ── Get suggested medicines for a diagnosis ──
  getSuggestedMedicines(diagnosisText, complaintText) {
    const text = ((diagnosisText || '') + ' ' + (complaintText || '')).toLowerCase();
    let suggestions = [];
    for (const [key, meds] of Object.entries(this.diagnosisMedicines)) {
      if (text.includes(key)) {
        meds.forEach(m => { if (!suggestions.includes(m)) suggestions.push(m); });
      }
    }
    return suggestions.slice(0, 6);
  },

  // ── Get suggested tests for a diagnosis ──
  getSuggestedTests(diagnosisText, complaintText) {
    const text = ((diagnosisText || '') + ' ' + (complaintText || '')).toLowerCase();
    let tests = [];
    for (const [key, t] of Object.entries(this.diagnosisTests)) {
      if (text.includes(key)) {
        t.forEach(x => { if (!tests.includes(x)) tests.push(x); });
      }
    }
    return tests.slice(0, 6);
  },

  // ── Get patient-friendly medicine explanation ──
  getMedicineInfo(medicineName) {
    if (!medicineName) return null;
    const n = medicineName.toLowerCase();
    for (const [key, info] of Object.entries(this.medicineInfo)) {
      if (n.includes(key)) return info;
    }
    return null;
  }
};