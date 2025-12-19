// ═══════════════════════════════════════════════════════════════════════════════
// ASK-GARY™ - PHASE 5: MEDICAL QUESTIONS
// 89 Questions - Immediate Care, Hospital, Symptoms, Doctors, History, Medications
// Version 1.0 | December 2025
// ═══════════════════════════════════════════════════════════════════════════════

const Q_TYPES = {
  TEXT: 'text',
  PHONE: 'phone',
  DATE: 'date',
  SELECT: 'select',
  YESNO: 'yesno',
  ADDRESS: 'address',
  TEXTAREA: 'textarea',
  NUMBER: 'number',
  CHECKBOX: 'checkbox',
  AUDIO: 'audio',
};

export const PHASE_5_MEDICAL = [
  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: IMMEDIATE MEDICAL CARE (Questions 1-12)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 1, 
    section: 'IMMEDIATE CARE', 
    type: Q_TYPES.YESNO, 
    q: 'Did you receive medical care at the accident scene?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 2, 
    section: 'IMMEDIATE CARE', 
    type: Q_TYPES.YESNO, 
    q: 'Were you transported by ambulance?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 3, 
    section: 'IMMEDIATE CARE', 
    type: Q_TYPES.YESNO, 
    q: 'Did you go to the Emergency Room?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 4, 
    section: 'IMMEDIATE CARE', 
    type: Q_TYPES.TEXT, 
    q: 'Hospital/ER Name', 
    placeholder: 'Hospital name',
    sample: 'Tampa General Hospital',
    required: true 
  },
  { 
    id: 5, 
    section: 'IMMEDIATE CARE', 
    type: Q_TYPES.ADDRESS, 
    q: 'Hospital Address', 
    placeholder: 'Address',
    sample: '1 Tampa General Cir, Tampa, FL 33606',
    required: false 
  },
  { 
    id: 6, 
    section: 'IMMEDIATE CARE', 
    type: Q_TYPES.DATE, 
    q: 'Date of ER Visit', 
    placeholder: 'MM/DD/YYYY',
    sample: '01/02/2025',
    required: true 
  },
  { 
    id: 7, 
    section: 'IMMEDIATE CARE', 
    type: Q_TYPES.NUMBER, 
    q: 'Hours spent in ER', 
    placeholder: 'Hours',
    sample: '5',
    required: false 
  },
  { 
    id: 8, 
    section: 'IMMEDIATE CARE', 
    type: Q_TYPES.YESNO, 
    q: 'Were you admitted to the hospital?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 9, 
    section: 'IMMEDIATE CARE', 
    type: Q_TYPES.NUMBER, 
    q: 'Days admitted (if hospitalized)', 
    placeholder: 'Days',
    sample: '0',
    required: false 
  },
  { 
    id: 10, 
    section: 'IMMEDIATE CARE', 
    type: Q_TYPES.YESNO, 
    q: 'Did you refuse any medical treatment?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 11, 
    section: 'IMMEDIATE CARE', 
    type: Q_TYPES.TEXTAREA, 
    q: 'What treatment did you refuse? (if any)', 
    placeholder: 'Describe',
    sample: '',
    required: false 
  },
  { 
    id: 12, 
    section: 'IMMEDIATE CARE', 
    type: Q_TYPES.YESNO, 
    q: 'Did you receive any medical treatment within 14 days?', 
    sample: 'Yes',
    required: true,
    guidance: 'CRITICAL for Florida PIP coverage'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: ER DIAGNOSIS & TREATMENT (Questions 13-22)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 13, 
    section: 'ER TREATMENT', 
    type: Q_TYPES.YESNO, 
    q: 'Did you have X-rays taken?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 14, 
    section: 'ER TREATMENT', 
    type: Q_TYPES.TEXT, 
    q: 'Which body parts were X-rayed?', 
    placeholder: 'List areas',
    sample: 'Head, neck, shoulder',
    required: false 
  },
  { 
    id: 15, 
    section: 'ER TREATMENT', 
    type: Q_TYPES.YESNO, 
    q: 'Did you have a CT scan?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 16, 
    section: 'ER TREATMENT', 
    type: Q_TYPES.YESNO, 
    q: 'Did you have an MRI?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 17, 
    section: 'ER TREATMENT', 
    type: Q_TYPES.TEXTAREA, 
    q: 'What diagnosis did the ER give you?', 
    placeholder: 'List all diagnoses',
    sample: 'Concussion, whiplash, left shoulder contusion, multiple bruises.',
    required: true 
  },
  { 
    id: 18, 
    section: 'ER TREATMENT', 
    type: Q_TYPES.YESNO, 
    q: 'Were you given a neck brace or collar?', 
    sample: 'Yes',
    required: false 
  },
  { 
    id: 19, 
    section: 'ER TREATMENT', 
    type: Q_TYPES.YESNO, 
    q: 'Were you given crutches, a sling, or other equipment?', 
    sample: 'No',
    required: false 
  },
  { 
    id: 20, 
    section: 'ER TREATMENT', 
    type: Q_TYPES.YESNO, 
    q: 'Were you given prescription medication?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 21, 
    section: 'ER TREATMENT', 
    type: Q_TYPES.TEXT, 
    q: 'What medications were prescribed?', 
    placeholder: 'List medications',
    sample: 'Hydrocodone, Flexeril (muscle relaxer), Ibuprofen 800mg',
    required: false 
  },
  { 
    id: 22, 
    section: 'ER TREATMENT', 
    type: Q_TYPES.TEXTAREA, 
    q: 'What follow-up instructions were you given?', 
    placeholder: 'ER discharge instructions',
    sample: 'Follow up with primary care in 3 days, see orthopedic specialist for shoulder, watch for concussion symptoms.',
    required: false 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: CURRENT SYMPTOMS (Questions 23-40)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 23, 
    section: 'CURRENT SYMPTOMS', 
    type: Q_TYPES.AUDIO, 
    q: 'Describe all your current pain and symptoms', 
    placeholder: 'Tap to record',
    sample: 'Neck pain, headaches, shoulder pain, back pain, knee swelling.',
    required: true,
    guidance: 'Speak in detail - this is very important'
  },
  { 
    id: 24, 
    section: 'CURRENT SYMPTOMS', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have neck pain?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 25, 
    section: 'CURRENT SYMPTOMS', 
    type: Q_TYPES.SELECT, 
    q: 'Rate your neck pain (1-10)', 
    options: ['1 - Minimal', '2', '3', '4', '5 - Moderate', '6', '7', '8', '9', '10 - Severe'],
    sample: '7',
    required: false 
  },
  { 
    id: 26, 
    section: 'CURRENT SYMPTOMS', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have back pain?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 27, 
    section: 'CURRENT SYMPTOMS', 
    type: Q_TYPES.SELECT, 
    q: 'Where is your back pain?', 
    options: ['Upper back', 'Middle back', 'Lower back', 'Multiple areas'],
    sample: 'Lower back',
    required: false 
  },
  { 
    id: 28, 
    section: 'CURRENT SYMPTOMS', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have headaches?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 29, 
    section: 'CURRENT SYMPTOMS', 
    type: Q_TYPES.SELECT, 
    q: 'How often do you have headaches?', 
    options: ['Constant', 'Daily', 'Several times a week', 'Once a week', 'Occasionally'],
    sample: 'Constant',
    required: false 
  },
  { 
    id: 30, 
    section: 'CURRENT SYMPTOMS', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have shoulder pain?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 31, 
    section: 'CURRENT SYMPTOMS', 
    type: Q_TYPES.SELECT, 
    q: 'Which shoulder hurts?', 
    options: ['Left', 'Right', 'Both'],
    sample: 'Left',
    required: false 
  },
  { 
    id: 32, 
    section: 'CURRENT SYMPTOMS', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have arm or hand pain/numbness?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 33, 
    section: 'CURRENT SYMPTOMS', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have leg or foot pain/numbness?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 34, 
    section: 'CURRENT SYMPTOMS', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have knee pain?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 35, 
    section: 'CURRENT SYMPTOMS', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have dizziness or balance problems?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 36, 
    section: 'CURRENT SYMPTOMS', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have memory problems or confusion?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 37, 
    section: 'CURRENT SYMPTOMS', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have trouble sleeping?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 38, 
    section: 'CURRENT SYMPTOMS', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have anxiety or emotional distress?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 39, 
    section: 'CURRENT SYMPTOMS', 
    type: Q_TYPES.YESNO, 
    q: 'Are your symptoms getting better, worse, or staying the same?', 
    sample: 'Staying the same',
    required: true 
  },
  { 
    id: 40, 
    section: 'CURRENT SYMPTOMS', 
    type: Q_TYPES.TEXTAREA, 
    q: 'List any other symptoms not mentioned', 
    placeholder: 'Additional symptoms',
    sample: 'Anxiety when riding in cars, difficulty concentrating.',
    required: false 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: CURRENT DOCTORS & TREATMENT (Questions 41-55)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 41, 
    section: 'CURRENT TREATMENT', 
    type: Q_TYPES.TEXT, 
    q: 'Primary Care Doctor Name', 
    placeholder: 'Doctor\'s name',
    sample: 'Dr. Sarah Williams',
    required: true 
  },
  { 
    id: 42, 
    section: 'CURRENT TREATMENT', 
    type: Q_TYPES.TEXT, 
    q: 'Primary Care Practice Name', 
    placeholder: 'Clinic name',
    sample: 'Tampa Bay Family Medicine',
    required: false 
  },
  { 
    id: 43, 
    section: 'CURRENT TREATMENT', 
    type: Q_TYPES.PHONE, 
    q: 'Primary Care Phone', 
    placeholder: '(555) 555-5555',
    sample: '(813) 555-6000',
    required: false 
  },
  { 
    id: 44, 
    section: 'CURRENT TREATMENT', 
    type: Q_TYPES.NUMBER, 
    q: 'How many times have you seen them since accident?', 
    placeholder: 'Visits',
    sample: '2',
    required: false 
  },
  { 
    id: 45, 
    section: 'CURRENT TREATMENT', 
    type: Q_TYPES.YESNO, 
    q: 'Have you been referred to any specialists?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 46, 
    section: 'CURRENT TREATMENT', 
    type: Q_TYPES.TEXT, 
    q: 'Specialist #1 Name & Type', 
    placeholder: 'e.g., Dr. Smith - Orthopedic',
    sample: 'Dr. Michael Torres - Orthopedic',
    required: false 
  },
  { 
    id: 47, 
    section: 'CURRENT TREATMENT', 
    type: Q_TYPES.PHONE, 
    q: 'Specialist #1 Phone', 
    placeholder: '(555) 555-5555',
    sample: '(813) 555-7500',
    required: false 
  },
  { 
    id: 48, 
    section: 'CURRENT TREATMENT', 
    type: Q_TYPES.TEXT, 
    q: 'Specialist #2 Name & Type', 
    placeholder: 'e.g., Dr. Jones - Neurologist',
    sample: 'Dr. Lisa Chen - Neurologist',
    required: false 
  },
  { 
    id: 49, 
    section: 'CURRENT TREATMENT', 
    type: Q_TYPES.PHONE, 
    q: 'Specialist #2 Phone', 
    placeholder: '(555) 555-5555',
    sample: '(813) 555-8200',
    required: false 
  },
  { 
    id: 50, 
    section: 'CURRENT TREATMENT', 
    type: Q_TYPES.YESNO, 
    q: 'Are you doing physical therapy?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 51, 
    section: 'CURRENT TREATMENT', 
    type: Q_TYPES.TEXT, 
    q: 'Physical Therapy Clinic Name', 
    placeholder: 'Clinic name',
    sample: 'ProMotion Physical Therapy',
    required: false 
  },
  { 
    id: 52, 
    section: 'CURRENT TREATMENT', 
    type: Q_TYPES.NUMBER, 
    q: 'PT visits per week', 
    placeholder: 'Times per week',
    sample: '3',
    required: false 
  },
  { 
    id: 53, 
    section: 'CURRENT TREATMENT', 
    type: Q_TYPES.YESNO, 
    q: 'Are you seeing a chiropractor?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 54, 
    section: 'CURRENT TREATMENT', 
    type: Q_TYPES.YESNO, 
    q: 'Have you had any injections (cortisone, epidural, etc.)?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 55, 
    section: 'CURRENT TREATMENT', 
    type: Q_TYPES.YESNO, 
    q: 'Is surgery being discussed?', 
    sample: 'Yes',
    required: true,
    guidance: 'Even if not scheduled yet'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: MEDICATIONS (Questions 56-62)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 56, 
    section: 'MEDICATIONS', 
    type: Q_TYPES.YESNO, 
    q: 'Are you currently taking prescription pain medication?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 57, 
    section: 'MEDICATIONS', 
    type: Q_TYPES.TEXTAREA, 
    q: 'List all prescription medications for this accident', 
    placeholder: 'Medication names and dosages',
    sample: 'Hydrocodone 5mg as needed, Flexeril 10mg at night, Ibuprofen 800mg 3x daily',
    required: true 
  },
  { 
    id: 58, 
    section: 'MEDICATIONS', 
    type: Q_TYPES.YESNO, 
    q: 'Are you taking over-the-counter pain relievers?', 
    sample: 'Yes',
    required: false 
  },
  { 
    id: 59, 
    section: 'MEDICATIONS', 
    type: Q_TYPES.TEXT, 
    q: 'Which OTC medications?', 
    placeholder: 'Tylenol, Advil, etc.',
    sample: 'Extra Strength Tylenol',
    required: false 
  },
  { 
    id: 60, 
    section: 'MEDICATIONS', 
    type: Q_TYPES.YESNO, 
    q: 'Are you using any creams, patches, or topical treatments?', 
    sample: 'Yes',
    required: false 
  },
  { 
    id: 61, 
    section: 'MEDICATIONS', 
    type: Q_TYPES.YESNO, 
    q: 'Have you had any side effects from medications?', 
    sample: 'Yes',
    required: false 
  },
  { 
    id: 62, 
    section: 'MEDICATIONS', 
    type: Q_TYPES.TEXT, 
    q: 'Describe medication side effects', 
    placeholder: 'Drowsiness, nausea, etc.',
    sample: 'Drowsiness from pain medication',
    required: false 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: PRIOR MEDICAL HISTORY (Questions 63-75)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 63, 
    section: 'PRIOR HISTORY', 
    type: Q_TYPES.YESNO, 
    q: 'Have you ever been in a car accident before?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 64, 
    section: 'PRIOR HISTORY', 
    type: Q_TYPES.NUMBER, 
    q: 'How many prior accidents?', 
    placeholder: 'Number',
    sample: '0',
    required: false 
  },
  { 
    id: 65, 
    section: 'PRIOR HISTORY', 
    type: Q_TYPES.DATE, 
    q: 'Most recent prior accident date', 
    placeholder: 'MM/YYYY',
    sample: '',
    required: false 
  },
  { 
    id: 66, 
    section: 'PRIOR HISTORY', 
    type: Q_TYPES.YESNO, 
    q: 'Did you have any neck or back problems BEFORE this accident?', 
    sample: 'No',
    required: true,
    guidance: 'Be honest - this will come out in records'
  },
  { 
    id: 67, 
    section: 'PRIOR HISTORY', 
    type: Q_TYPES.TEXTAREA, 
    q: 'Describe any prior neck/back issues', 
    placeholder: 'Previous conditions or injuries',
    sample: '',
    required: false 
  },
  { 
    id: 68, 
    section: 'PRIOR HISTORY', 
    type: Q_TYPES.YESNO, 
    q: 'Have you had any prior surgeries?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 69, 
    section: 'PRIOR HISTORY', 
    type: Q_TYPES.TEXTAREA, 
    q: 'List prior surgeries', 
    placeholder: 'Type and year',
    sample: '',
    required: false 
  },
  { 
    id: 70, 
    section: 'PRIOR HISTORY', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have any chronic health conditions?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 71, 
    section: 'PRIOR HISTORY', 
    type: Q_TYPES.TEXTAREA, 
    q: 'List chronic conditions', 
    placeholder: 'Diabetes, heart disease, etc.',
    sample: '',
    required: false 
  },
  { 
    id: 72, 
    section: 'PRIOR HISTORY', 
    type: Q_TYPES.YESNO, 
    q: 'Were you taking any medications BEFORE the accident?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 73, 
    section: 'PRIOR HISTORY', 
    type: Q_TYPES.TEXTAREA, 
    q: 'List pre-accident medications', 
    placeholder: 'Medications before accident',
    sample: '',
    required: false 
  },
  { 
    id: 74, 
    section: 'PRIOR HISTORY', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have any allergies to medications?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 75, 
    section: 'PRIOR HISTORY', 
    type: Q_TYPES.TEXT, 
    q: 'List medication allergies', 
    placeholder: 'Penicillin, etc.',
    sample: '',
    required: false 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: FUTURE TREATMENT (Questions 76-82)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 76, 
    section: 'FUTURE TREATMENT', 
    type: Q_TYPES.YESNO, 
    q: 'Have doctors recommended additional tests (MRI, EMG, etc.)?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 77, 
    section: 'FUTURE TREATMENT', 
    type: Q_TYPES.TEXT, 
    q: 'What tests have been recommended?', 
    placeholder: 'MRI, nerve study, etc.',
    sample: 'MRI of left shoulder',
    required: false 
  },
  { 
    id: 78, 
    section: 'FUTURE TREATMENT', 
    type: Q_TYPES.YESNO, 
    q: 'Is surgery likely or being recommended?', 
    sample: 'Possible',
    required: true 
  },
  { 
    id: 79, 
    section: 'FUTURE TREATMENT', 
    type: Q_TYPES.TEXT, 
    q: 'What type of surgery is being discussed?', 
    placeholder: 'Type of surgery',
    sample: 'Shoulder arthroscopy depending on MRI',
    required: false 
  },
  { 
    id: 80, 
    section: 'FUTURE TREATMENT', 
    type: Q_TYPES.NUMBER, 
    q: 'How many more weeks of PT are expected?', 
    placeholder: 'Weeks',
    sample: '8',
    required: false 
  },
  { 
    id: 81, 
    section: 'FUTURE TREATMENT', 
    type: Q_TYPES.YESNO, 
    q: 'Are you expected to make a full recovery?', 
    sample: 'Unknown',
    required: false 
  },
  { 
    id: 82, 
    section: 'FUTURE TREATMENT', 
    type: Q_TYPES.TEXTAREA, 
    q: 'What have doctors said about your long-term prognosis?', 
    placeholder: 'Doctor\'s expectations',
    sample: 'Too early to tell, depends on how shoulder responds to PT and possible surgery.',
    required: false 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: MEDICAL BILLS (Questions 83-89)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 83, 
    section: 'MEDICAL BILLS', 
    type: Q_TYPES.YESNO, 
    q: 'Have you received any medical bills yet?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 84, 
    section: 'MEDICAL BILLS', 
    type: Q_TYPES.NUMBER, 
    q: 'Approximate total of bills received so far', 
    placeholder: 'Dollar amount',
    sample: '8500',
    required: false 
  },
  { 
    id: 85, 
    section: 'MEDICAL BILLS', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have health insurance?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 86, 
    section: 'MEDICAL BILLS', 
    type: Q_TYPES.TEXT, 
    q: 'Health Insurance Company', 
    placeholder: 'Company name',
    sample: 'Blue Cross Blue Shield',
    required: false 
  },
  { 
    id: 87, 
    section: 'MEDICAL BILLS', 
    type: Q_TYPES.YESNO, 
    q: 'Has health insurance paid any bills?', 
    sample: 'No',
    required: false 
  },
  { 
    id: 88, 
    section: 'MEDICAL BILLS', 
    type: Q_TYPES.YESNO, 
    q: 'Has auto insurance PIP paid any bills?', 
    sample: 'Yes',
    required: false 
  },
  { 
    id: 89, 
    section: 'MEDICAL BILLS', 
    type: Q_TYPES.YESNO, 
    q: 'Are any bills in collections?', 
    sample: 'No',
    required: false 
  },
];

export default PHASE_5_MEDICAL;
