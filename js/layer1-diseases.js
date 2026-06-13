// ============================================================
//  CurePd Rx — LAYER 1: Disease Knowledge Base
//  No medicine names here — only categories.
//  Full clinical structure: symptoms, ICD-10, severity,
//  medicine categories, tests, advice, contraindicated categories
// ============================================================

window.DiseaseKB = {

  diseases: {

    // ── INFECTIONS ─────────────────────────────────────────
    "viral_fever": {
      displayName: "Viral Fever",
      icd10: "A99",
      aliases: ["viral fever", "fever", "pyrexia"],
      symptoms: ["High temperature", "Headache", "Body ache", "Fatigue", "Loss of appetite"],
      severity: { levels: ["Mild (<38.5°C)", "Moderate (38.5-40°C)", "Severe (>40°C or >5 days)"] },
      medicineCategories: ["Analgesic/Antipyretic", "Antihistamine", "Vitamin", "Rehydration", "Mineral/Supplement"],
      contraindicatedCategories: ["NSAID"],
      tests: ["CBC", "CRP", "ESR", "Blood Sugar (F)", "Urine R/E"],
      advice: [
        "Rest for at least 3 days",
        "Drink 8-10 glasses of water daily",
        "Take paracetamol every 6 hours if temperature > 38.5°C",
        "Avoid cold water bath for fever",
        "See doctor immediately if fever > 5 days or temperature > 40°C"
      ],
      emergencyFlags: ["Fever > 40°C", "Seizures", "Altered consciousness", "Rash with fever"],
      note: "NSAIDs (ibuprofen, diclofenac) are generally avoided in undifferentiated fever — paracetamol preferred."
    },

    "dengue": {
      displayName: "Dengue Fever",
      icd10: "A90",
      aliases: ["dengue", "dengue fever", "break-bone fever"],
      symptoms: ["High fever (sudden onset)", "Severe headache", "Eye pain", "Rash", "Severe body/joint pain", "Bleeding tendency"],
      severity: {
        levels: ["Dengue without warning signs", "Dengue with warning signs", "Severe Dengue (DHF/DSS)"],
        warningSignsPrompt: "Abdominal pain, persistent vomiting, bleeding, rapid breathing, drowsiness"
      },
      medicineCategories: ["Analgesic/Antipyretic", "Rehydration", "Vitamin", "Mineral/Supplement"],
      contraindicatedCategories: ["NSAID", "Antiplatelet"],
      tests: ["CBC (daily platelet count)", "NS1 Antigen (Day 1-5)", "Dengue IgG/IgM", "PCV/Hematocrit", "Liver Function Test"],
      advice: [
        "NEVER give Aspirin, Brufen, Diclofenac — increases bleeding risk",
        "Only Paracetamol (Napa) allowed for fever",
        "Drink minimum 2-3 liters of fluid daily (ORS, coconut water, juice)",
        "Monitor for warning signs: vomiting blood, black stool, severe abdominal pain",
        "Check platelet count every 24 hours",
        "Admit if platelet < 50,000 or any warning signs"
      ],
      emergencyFlags: ["Platelet < 50,000", "Bleeding from any site", "Severe abdominal pain", "Altered consciousness"],
      note: "CRITICAL: NSAIDs and Aspirin are contraindicated in Dengue. Only Paracetamol."
    },

    "typhoid": {
      displayName: "Typhoid Fever",
      icd10: "A01.0",
      aliases: ["typhoid", "enteric fever", "typhoid fever"],
      symptoms: ["Stepwise rising fever", "Abdominal pain", "Headache", "Constipation or diarrhea", "Rose spots", "Bradycardia"],
      severity: { levels: ["Uncomplicated", "Complicated (with perforation/bleeding)"] },
      medicineCategories: ["Fluoroquinolone Antibiotic", "Cephalosporin Antibiotic", "Macrolide Antibiotic", "Analgesic/Antipyretic", "Rehydration"],
      contraindicatedCategories: [],
      tests: ["Widal Test", "CBC", "Blood Culture (gold standard)", "LFT", "Urine R/E"],
      advice: [
        "Complete the full antibiotic course (7-14 days)",
        "Soft, easily digestible diet",
        "Rest completely",
        "Drink boiled or filtered water only",
        "Wash hands before eating"
      ],
      emergencyFlags: ["Intestinal perforation (sudden severe pain)", "Heavy bleeding", "Encephalopathy"],
      note: "Ciprofloxacin first-line. Azithromycin if fluoroquinolone resistant."
    },

    "common_cold": {
      displayName: "Common Cold / URTI",
      icd10: "J00",
      aliases: ["common cold", "cold", "urti", "upper respiratory tract infection", "rhinitis"],
      symptoms: ["Runny nose", "Sneezing", "Sore throat", "Mild fever", "Cough", "Congestion"],
      severity: { levels: ["Mild (self-limiting)", "Moderate (with bacterial superinfection)"] },
      medicineCategories: ["Analgesic/Antipyretic", "Antihistamine", "Mucolytic", "Vitamin"],
      contraindicatedCategories: [],
      tests: [],
      advice: [
        "Self-limiting — usually resolves in 7-10 days",
        "Rest and drink warm fluids",
        "Steam inhalation for congestion",
        "Antibiotics NOT needed unless bacterial infection suspected",
        "Honey with ginger tea helps soothe sore throat"
      ],
      emergencyFlags: ["Fever > 5 days", "Chest pain", "Difficulty breathing"],
      note: "Antibiotics not indicated for viral URTI. Antihistamines help symptoms."
    },

    "pneumonia": {
      displayName: "Community-Acquired Pneumonia",
      icd10: "J18.9",
      aliases: ["pneumonia", "chest infection", "lung infection", "cap"],
      symptoms: ["Productive cough", "Fever", "Chest pain", "Shortness of breath", "Rusty sputum"],
      severity: { levels: ["Mild (outpatient)", "Moderate (PSI class III)", "Severe (ICU)"] },
      medicineCategories: ["Macrolide Antibiotic", "Penicillin Antibiotic", "Fluoroquinolone Antibiotic", "Analgesic/Antipyretic"],
      contraindicatedCategories: [],
      tests: ["Chest X-Ray", "CBC", "CRP", "Sputum C/S", "Blood Culture (if severe)", "SpO2"],
      advice: [
        "Complete full antibiotic course (5-7 days)",
        "Deep breathing exercises",
        "Adequate hydration",
        "Refer to hospital if SpO2 < 94% or severe distress"
      ],
      emergencyFlags: ["SpO2 < 90%", "Respiratory rate > 30", "Confusion", "Hypotension"],
      note: "Azithromycin + Amoxicillin combination for atypical coverage."
    },

    "asthma": {
      displayName: "Bronchial Asthma",
      icd10: "J45",
      aliases: ["asthma", "bronchial asthma", "reactive airway disease"],
      symptoms: ["Wheezing", "Shortness of breath", "Chest tightness", "Cough (especially at night)"],
      severity: { levels: ["Intermittent", "Mild Persistent", "Moderate Persistent", "Severe Persistent"] },
      medicineCategories: ["Short-Acting Beta Agonist", "Inhaled Corticosteroid", "Leukotriene Receptor Antagonist"],
      contraindicatedCategories: ["Beta Blocker", "NSAID"],
      tests: ["Spirometry (FEV1/FVC)", "Peak Flow Rate", "Chest X-Ray", "CBC (eosinophils)", "IgE Level"],
      advice: [
        "Identify and avoid triggers (dust, smoke, cold air, pets)",
        "Always carry reliever inhaler (Ventolin)",
        "Use controller inhaler (Budecort) every day even when feeling well",
        "Rinse mouth after steroid inhaler use",
        "Breathing exercises and pursed-lip breathing"
      ],
      emergencyFlags: ["Unable to speak in full sentences", "Cyanosis (blue lips)", "Silent chest", "SpO2 < 90%"],
      note: "Beta blockers (Atenolol, Metoprolol) are contraindicated in asthma."
    },

    // ── CARDIOVASCULAR ─────────────────────────────────────
    "hypertension": {
      displayName: "Hypertension",
      icd10: "I10",
      aliases: ["hypertension", "high blood pressure", "htn", "high bp"],
      symptoms: ["Usually asymptomatic", "Headache (occipital)", "Visual disturbance", "Palpitations"],
      severity: {
        levels: ["Normal (<120/80)", "Elevated (120-129/<80)", "Stage 1 (130-139/80-89)", "Stage 2 (≥140/≥90)", "Hypertensive Crisis (>180/120)"],
      },
      medicineCategories: {
        firstLine: ["Calcium Channel Blocker", "ARB", "ACE Inhibitor"],
        secondLine: ["Beta Blocker", "Loop Diuretic"],
        contextual: {
          withDiabetes: ["ARB", "ACE Inhibitor", "Calcium Channel Blocker"],
          withCKD: ["ARB", "ACE Inhibitor"],
          withHeartFailure: ["ACE Inhibitor", "Beta Blocker", "Loop Diuretic"],
          elderly: ["Calcium Channel Blocker", "ARB"],
          pregnancy: ["Calcium Channel Blocker"],
          asthma: ["Calcium Channel Blocker", "ARB", "ACE Inhibitor"]
        }
      },
      contraindicatedCategories: [],
      contraindicatedContextual: {
        pregnancy: ["Beta Blocker", "ARB", "ACE Inhibitor"],
        asthma: ["Beta Blocker"],
        hyperkalemia: ["ARB", "ACE Inhibitor"]
      },
      tests: ["Blood Pressure (both arms)", "ECG", "Urine R/E", "Creatinine + eGFR", "Lipid Profile", "Blood Sugar (F)", "Echo (if indicated)"],
      advice: [
        "Low salt diet (< 5g/day)",
        "Regular exercise 30 min daily",
        "Maintain healthy weight (BMI 18.5-24.9)",
        "Quit smoking and alcohol",
        "Monitor BP at home daily",
        "Never stop medication suddenly"
      ],
      emergencyFlags: ["BP > 180/120 with symptoms", "Chest pain with high BP", "Stroke symptoms", "Papilledema"],
      note: "CCBs (Amlodipine) preferred in elderly and when Beta Blockers are contraindicated. ACE/ARB preferred with diabetes/CKD."
    },

    "heart_failure": {
      displayName: "Heart Failure",
      icd10: "I50",
      aliases: ["heart failure", "cardiac failure", "chf", "congestive heart failure"],
      symptoms: ["Breathlessness on exertion", "Orthopnea", "Ankle swelling", "Fatigue", "Cough at night"],
      severity: { levels: ["NYHA Class I", "NYHA Class II", "NYHA Class III", "NYHA Class IV"] },
      medicineCategories: {
        firstLine: ["ACE Inhibitor", "Beta Blocker", "Loop Diuretic"],
        secondLine: ["ARB", "Statin", "Antiplatelet"]
      },
      contraindicatedCategories: ["Calcium Channel Blocker"],
      tests: ["ECG", "Echo (EF)", "Chest X-Ray", "CBC", "LFT", "RFT", "BNP/NT-proBNP"],
      advice: ["Fluid restriction 1.5L/day", "Daily weight monitoring", "Low salt diet", "Regular follow-up"],
      emergencyFlags: ["Acute pulmonary edema", "Orthopnea at rest", "SpO2 < 90%"],
      note: "Calcium channel blockers (except Amlodipine) contraindicated in HFrEF."
    },

    // ── DIABETES ───────────────────────────────────────────
    "type2_diabetes": {
      displayName: "Type 2 Diabetes Mellitus",
      icd10: "E11",
      aliases: ["type 2 diabetes", "diabetes", "dm", "t2dm", "diabetes mellitus", "sugar"],
      symptoms: ["Polyuria", "Polydipsia", "Polyphagia", "Weight loss", "Fatigue", "Blurred vision", "Recurrent infections"],
      severity: { levels: ["Controlled (HbA1c < 7%)", "Uncontrolled (HbA1c 7-9%)", "Poorly Controlled (HbA1c > 9%)"] },
      medicineCategories: {
        firstLine: ["Biguanide Antidiabetic"],
        secondLine: ["DPP-4 Inhibitor", "SGLT2 Inhibitor", "Sulfonylurea Antidiabetic"],
        advanced: ["Mixed Insulin", "Long-Acting Insulin"],
        contextual: {
          withCKD: ["DPP-4 Inhibitor", "Long-Acting Insulin"],
          withHeartDisease: ["SGLT2 Inhibitor", "DPP-4 Inhibitor"],
          elderly: ["DPP-4 Inhibitor"],
          obesity: ["SGLT2 Inhibitor", "Biguanide Antidiabetic"],
          pregnancy: ["Long-Acting Insulin", "Mixed Insulin"],
          poorControl: ["Mixed Insulin", "Long-Acting Insulin"]
        }
      },
      contraindicatedContextual: {
        ckd: ["Biguanide Antidiabetic"],
        elderly: ["Sulfonylurea Antidiabetic"],
        pregnancy: ["Biguanide Antidiabetic", "Sulfonylurea Antidiabetic", "DPP-4 Inhibitor", "SGLT2 Inhibitor"]
      },
      tests: ["Blood Sugar Fasting", "Blood Sugar 2hr PP", "HbA1c", "Urine R/E (for microalbuminuria)", "Creatinine + eGFR", "Lipid Profile", "ECG", "Foot examination"],
      advice: [
        "Diet: avoid white rice, sweets, sugary drinks",
        "Walk 30 min daily after meals",
        "Monitor blood sugar at home",
        "Annual eye exam and foot check",
        "Do not skip meals with sulfonylurea — risk of hypoglycemia",
        "Carry glucose tablets if on insulin or sulfonylurea"
      ],
      emergencyFlags: ["Blood sugar > 400 mg/dL", "Confusion or unconsciousness", "Signs of DKA (vomiting, fruity breath)", "Hypoglycemia (sugar < 70)"],
      note: "Metformin contraindicated in eGFR < 30. Sulfonylureas avoided in elderly due to hypoglycemia risk. Insulin in pregnancy."
    },

    // ── GI ─────────────────────────────────────────────────
    "gastritis_gerd": {
      displayName: "Gastritis / GERD",
      icd10: "K29.7 / K21",
      aliases: ["gastritis", "gerd", "acid reflux", "acidity", "heartburn", "peptic ulcer", "stomach ulcer", "dyspepsia"],
      symptoms: ["Epigastric pain", "Burning sensation", "Nausea", "Bloating", "Regurgitation", "Pain worse on empty stomach"],
      severity: { levels: ["Mild (occasional)", "Moderate (daily)", "Severe (with ulceration/bleeding)"] },
      medicineCategories: ["PPI", "Antiemetic/Prokinetic", "Antiprotozoal/Antibiotic"],
      contraindicatedCategories: ["NSAID"],
      tests: ["H. Pylori Stool Antigen", "Upper GI Endoscopy (if severe)", "CBC", "Stool R/E"],
      advice: [
        "Eat small, frequent meals",
        "Avoid spicy, oily, acidic food",
        "Do not lie down within 2 hours after eating",
        "Avoid NSAIDs (Brufen, Voltaren)",
        "Elevate head of bed",
        "Avoid coffee, alcohol, carbonated drinks"
      ],
      emergencyFlags: ["Vomiting blood", "Black tarry stools", "Severe sudden abdominal pain", "Weight loss"],
      note: "PPI should be taken 30-60 min before breakfast. Avoid NSAIDs."
    },

    "diarrhea": {
      displayName: "Acute Diarrhea / Gastroenteritis",
      icd10: "K59.1 / A09",
      aliases: ["diarrhea", "diarrhoea", "gastroenteritis", "loose stool", "food poisoning"],
      symptoms: ["Frequent loose stools", "Abdominal cramps", "Nausea/vomiting", "Fever", "Dehydration"],
      severity: { levels: ["Mild (< 3 stools/day)", "Moderate (3-6 stools/day)", "Severe (> 6/day or bloody)"] },
      medicineCategories: ["Rehydration", "Antiprotozoal/Antibiotic", "Antidiarrheal", "Mineral/Supplement"],
      contraindicatedCategories: [],
      tests: ["Stool R/E", "Stool C/S (if bloody/chronic)", "CBC", "Electrolytes"],
      advice: [
        "ORS is the MOST important treatment",
        "Drink 200-400ml ORS after each loose stool",
        "Continue breastfeeding in infants",
        "BRAT diet: banana, rice, apple, toast",
        "Zinc reduces duration especially in children",
        "Antibiotics only if bacterial or parasitic cause confirmed"
      ],
      emergencyFlags: ["Bloody diarrhea", "No urine for 6+ hours (dehydration)", "Sunken eyes", "Unable to keep fluids down"],
      note: "Loperamide NOT recommended if bloody diarrhea or fever present. ORS is cornerstone."
    },

    // ── UTI ────────────────────────────────────────────────
    "uti": {
      displayName: "Urinary Tract Infection",
      icd10: "N39.0",
      aliases: ["uti", "urinary tract infection", "cystitis", "urine infection"],
      symptoms: ["Burning on urination", "Frequency", "Urgency", "Cloudy urine", "Pelvic pain", "Fever (if pyelonephritis)"],
      severity: { levels: ["Uncomplicated (lower UTI)", "Complicated (upper/pyelonephritis)", "Recurrent"] },
      medicineCategories: {
        firstLine: ["Fluoroquinolone Antibiotic", "Cephalosporin Antibiotic"],
        contextual: {
          pregnancy: ["Cephalosporin Antibiotic", "Penicillin Antibiotic"],
          allergic: ["Cephalosporin Antibiotic"]
        }
      },
      contraindicatedContextual: {
        pregnancy: ["Fluoroquinolone Antibiotic"]
      },
      tests: ["Urine R/E", "Urine C/S (sensitivity)", "CBC", "Creatinine"],
      advice: [
        "Drink 8-10 glasses of water daily",
        "Complete the full antibiotic course",
        "Urinate after intercourse",
        "Avoid holding urine",
        "Wipe front to back (women)"
      ],
      emergencyFlags: ["High fever with UTI (pyelonephritis)", "Flank pain", "Vomiting", "Unable to take oral antibiotics"],
      note: "Ciprofloxacin avoided in pregnancy. Cefixime preferred in pregnancy."
    },

    // ── RESPIRATORY ALLERGY ────────────────────────────────
    "allergic_rhinitis": {
      displayName: "Allergic Rhinitis",
      icd10: "J30",
      aliases: ["allergic rhinitis", "allergy", "hay fever", "rhinitis", "runny nose", "sneezing", "nasal allergy"],
      symptoms: ["Sneezing", "Runny nose (clear)", "Nasal congestion", "Itchy eyes/nose", "Postnasal drip"],
      severity: { levels: ["Intermittent", "Persistent Mild", "Persistent Moderate-Severe"] },
      medicineCategories: ["Antihistamine", "Short-Acting Beta Agonist"],
      contraindicatedCategories: [],
      tests: ["None required for mild cases", "Allergy skin prick test (if severe/chronic)", "IgE (total)"],
      advice: [
        "Identify and avoid triggers (dust, pollen, pet dander)",
        "Use air purifier or HEPA filter",
        "Nasal saline rinse daily",
        "Keep windows closed during high pollen season",
        "Antihistamines work best when taken before exposure"
      ],
      emergencyFlags: ["Angioedema (swelling of face/lips/tongue)", "Difficulty breathing"],
      note: "Non-sedating antihistamines (Fexofenadine, Loratadine) preferred for daytime use."
    },

    // ── MUSCULOSKELETAL ────────────────────────────────────
    "osteoarthritis": {
      displayName: "Osteoarthritis / Joint Pain",
      icd10: "M19",
      aliases: ["osteoarthritis", "joint pain", "knee pain", "arthritis", "bone pain"],
      symptoms: ["Joint pain (worse with activity)", "Stiffness (morning < 30 min)", "Crepitus", "Reduced range of motion"],
      severity: { levels: ["Mild", "Moderate", "Severe (requiring joint replacement)"] },
      medicineCategories: ["Analgesic/Antipyretic", "NSAID", "Supplement"],
      contraindicatedContextual: {
        pepticUlcer: ["NSAID"],
        renal: ["NSAID"],
        elderly: []
      },
      tests: ["X-Ray joint", "CBC", "CRP", "ESR", "Uric Acid", "RA Factor"],
      advice: [
        "Low-impact exercise: swimming, cycling",
        "Weight reduction if overweight",
        "Hot/cold therapy",
        "Physiotherapy",
        "Avoid climbing stairs if knee involved"
      ],
      emergencyFlags: ["Sudden severe pain", "Joint locked", "Hot red swollen joint (may be septic arthritis)"],
      note: "NSAIDs effective but avoid in elderly with renal impairment or peptic ulcer."
    },

    // ── ANEMIA ─────────────────────────────────────────────
    "anemia": {
      displayName: "Iron Deficiency Anemia",
      icd10: "D50",
      aliases: ["anemia", "anaemia", "iron deficiency", "low hemoglobin"],
      symptoms: ["Fatigue", "Pallor", "Breathlessness on exertion", "Palpitations", "Brittle nails", "Headache"],
      severity: { levels: ["Mild (Hb 10-11.9)", "Moderate (Hb 8-9.9)", "Severe (Hb < 8)"] },
      medicineCategories: ["Hematinics", "Vitamin"],
      contraindicatedCategories: [],
      tests: ["CBC with differential", "Peripheral Blood Film", "Serum Ferritin", "Serum Iron + TIBC", "Reticulocyte count"],
      advice: [
        "Iron-rich foods: red meat, lentils, spinach, dates",
        "Vitamin C with iron improves absorption",
        "Avoid tea/coffee within 1 hour of iron tablet",
        "Black stools with iron tablet — normal",
        "Separate iron from calcium supplements by 4 hours"
      ],
      emergencyFlags: ["Hb < 7 (transfusion may be needed)", "Symptomatic anemia at rest"],
      note: "Iron + Folic acid combination. Vitamin C co-administration improves absorption."
    },

    // ── THYROID ────────────────────────────────────────────
    "hypothyroidism": {
      displayName: "Hypothyroidism",
      icd10: "E03.9",
      aliases: ["hypothyroidism", "underactive thyroid", "thyroid problem", "low thyroid"],
      symptoms: ["Fatigue", "Weight gain", "Cold intolerance", "Dry skin", "Hair loss", "Constipation", "Depression"],
      severity: { levels: ["Subclinical (TSH elevated, T3/T4 normal)", "Overt (TSH elevated, T4 low)"] },
      medicineCategories: ["Thyroid Hormone", "Supplement"],
      contraindicatedCategories: [],
      tests: ["TSH", "Free T4", "Free T3", "CBC", "Lipid Profile", "Anti-TPO antibody (if autoimmune)"],
      advice: [
        "Take thyroxine on empty stomach 30-60 min before breakfast",
        "Take at same time every day",
        "Lifelong treatment in most cases",
        "TSH check every 3-6 months initially, then annually",
        "Separate calcium/iron tablets by 4 hours from thyroxine"
      ],
      emergencyFlags: ["Myxoedema coma (rare — altered consciousness, hypothermia)"],
      note: "Calcium and iron tablets interfere with thyroxine absorption — take 4 hours apart."
    },

    // ── SKIN ───────────────────────────────────────────────
    "skin_infection": {
      displayName: "Skin / Soft Tissue Infection",
      icd10: "L08.9",
      aliases: ["skin infection", "cellulitis", "wound infection", "abscess", "infected wound"],
      symptoms: ["Redness", "Warmth", "Swelling", "Pain", "Pus discharge", "Fever"],
      severity: { levels: ["Localized (mild)", "Spreading cellulitis (moderate)", "Systemic sepsis (severe)"] },
      medicineCategories: ["Cephalosporin Antibiotic", "Penicillin Antibiotic", "Topical Antifungal"],
      contraindicatedCategories: [],
      tests: ["CBC", "CRP", "Blood Culture (if fever)", "Wound swab C/S"],
      advice: [
        "Keep wound clean and dry",
        "Complete antibiotic course",
        "Wound dressing change daily",
        "Do not squeeze or pierce abscess without drainage"
      ],
      emergencyFlags: ["Spreading redness rapidly", "High fever", "Confusion", "Red streaks on skin"],
      note: "Cefalexin for mild-moderate skin infections. IV antibiotics if severe."
    },

    // ── MIGRAINE ───────────────────────────────────────────
    "migraine": {
      displayName: "Migraine",
      icd10: "G43",
      aliases: ["migraine", "severe headache", "one-sided headache", "migraine headache"],
      symptoms: ["Unilateral throbbing headache", "Nausea/vomiting", "Photophobia", "Phonophobia", "Aura (in some)"],
      severity: { levels: ["Episodic (< 15 days/month)", "Chronic (≥ 15 days/month)"] },
      medicineCategories: ["Analgesic/Antipyretic", "NSAID", "Antiemetic/Prokinetic"],
      contraindicatedCategories: [],
      tests: ["No routine test needed", "MRI Brain (if atypical features)", "CBC", "Blood Pressure"],
      advice: [
        "Keep migraine diary (triggers: stress, food, sleep)",
        "Regular sleep schedule",
        "Avoid skipping meals",
        "Reduce screen time",
        "Take pain relief early at onset"
      ],
      emergencyFlags: ["Thunderclap headache (sudden worst ever)", "Headache with fever + stiff neck", "Neurological symptoms", "First severe headache"],
      note: "Domperidone with analgesic helps nausea and improves absorption."
    },

  },

  // ── Helper: match disease from free text ────────────────
  matchDisease(text) {
    if (!text) return null;
    const lower = text.toLowerCase();
    let best = null;
    let bestScore = 0;
    for (const [key, disease] of Object.entries(this.diseases)) {
      const aliases = disease.aliases || [];
      for (const alias of aliases) {
        if (lower.includes(alias)) {
          if (alias.length > bestScore) { bestScore = alias.length; best = { key, ...disease }; }
        }
      }
    }
    return best;
  },

  // ── Get multiple matching diseases ──────────────────────
  matchMultiple(diagnosisText, complaintText) {
    const combined = ((diagnosisText||'') + ' ' + (complaintText||'')).toLowerCase();
    const found = [];
    const seen = new Set();
    for (const [key, disease] of Object.entries(this.diseases)) {
      if (seen.has(key)) continue;
      for (const alias of (disease.aliases||[])) {
        if (combined.includes(alias)) {
          found.push({ key, ...disease });
          seen.add(key);
          break;
        }
      }
    }
    return found;
  }
};