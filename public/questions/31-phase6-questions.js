// ═══════════════════════════════════════════════════════════════════════════════
// ASK-GARY™ - PHASE 6: DAMAGES QUESTIONS
// 55 Questions - Lost Wages, Property Damage, Out-of-Pocket, Pain & Suffering
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
  CURRENCY: 'currency',
  AUDIO: 'audio',
  DOCUMENT: 'document',
};

export const PHASE_6_DAMAGES = [
  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: LOST WAGES (Questions 1-18)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 1, 
    section: 'LOST WAGES', 
    type: Q_TYPES.YESNO, 
    q: 'Have you missed work due to this accident?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 2, 
    section: 'LOST WAGES', 
    type: Q_TYPES.DATE, 
    q: 'First day of missed work', 
    placeholder: 'MM/DD/YYYY',
    sample: '01/03/2025',
    required: true 
  },
  { 
    id: 3, 
    section: 'LOST WAGES', 
    type: Q_TYPES.YESNO, 
    q: 'Are you still missing work?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 4, 
    section: 'LOST WAGES', 
    type: Q_TYPES.DATE, 
    q: 'Date you returned to work (if applicable)', 
    placeholder: 'MM/DD/YYYY',
    sample: '',
    required: false 
  },
  { 
    id: 5, 
    section: 'LOST WAGES', 
    type: Q_TYPES.NUMBER, 
    q: 'Total days missed so far', 
    placeholder: 'Days',
    sample: '12',
    required: true 
  },
  { 
    id: 6, 
    section: 'LOST WAGES', 
    type: Q_TYPES.SELECT, 
    q: 'How are you paid?', 
    options: ['Hourly', 'Salary', 'Commission', 'Hourly + Tips', 'Self-employed', 'Other'],
    sample: 'Hourly',
    required: true 
  },
  { 
    id: 7, 
    section: 'LOST WAGES', 
    type: Q_TYPES.CURRENCY, 
    q: 'Hourly wage (if applicable)', 
    placeholder: '$0.00 per hour',
    sample: '$32.00',
    required: false 
  },
  { 
    id: 8, 
    section: 'LOST WAGES', 
    type: Q_TYPES.NUMBER, 
    q: 'Average hours worked per week', 
    placeholder: 'Hours',
    sample: '40',
    required: true 
  },
  { 
    id: 9, 
    section: 'LOST WAGES', 
    type: Q_TYPES.CURRENCY, 
    q: 'Weekly gross pay (before taxes)', 
    placeholder: '$0.00 per week',
    sample: '$1,280',
    required: true 
  },
  { 
    id: 10, 
    section: 'LOST WAGES', 
    type: Q_TYPES.CURRENCY, 
    q: 'Annual gross income', 
    placeholder: '$0.00 per year',
    sample: '$66,560',
    required: false 
  },
  { 
    id: 11, 
    section: 'LOST WAGES', 
    type: Q_TYPES.CURRENCY, 
    q: 'Estimated total lost wages so far', 
    placeholder: '$0.00',
    sample: '$3,840',
    required: true,
    guidance: 'Weekly pay × weeks missed'
  },
  { 
    id: 12, 
    section: 'LOST WAGES', 
    type: Q_TYPES.YESNO, 
    q: 'Did you use any PTO or sick days?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 13, 
    section: 'LOST WAGES', 
    type: Q_TYPES.NUMBER, 
    q: 'How many PTO/sick days used?', 
    placeholder: 'Days',
    sample: '5',
    required: false 
  },
  { 
    id: 14, 
    section: 'LOST WAGES', 
    type: Q_TYPES.YESNO, 
    q: 'Did you lose any bonuses or commissions?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 15, 
    section: 'LOST WAGES', 
    type: Q_TYPES.CURRENCY, 
    q: 'Value of lost bonuses/commissions', 
    placeholder: '$0.00',
    sample: '',
    required: false 
  },
  { 
    id: 16, 
    section: 'LOST WAGES', 
    type: Q_TYPES.YESNO, 
    q: 'Can your employer provide a lost wage letter?', 
    sample: 'Yes',
    required: true,
    guidance: 'We will need this documentation'
  },
  { 
    id: 17, 
    section: 'LOST WAGES', 
    type: Q_TYPES.TEXT, 
    q: 'HR contact name for wage verification', 
    placeholder: 'HR contact name',
    sample: 'Jennifer Adams',
    required: false 
  },
  { 
    id: 18, 
    section: 'LOST WAGES', 
    type: Q_TYPES.PHONE, 
    q: 'HR contact phone number', 
    placeholder: '(555) 555-5555',
    sample: '(813) 555-2201',
    required: false 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: REDUCED CAPACITY (Questions 19-25)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 19, 
    section: 'REDUCED CAPACITY', 
    type: Q_TYPES.YESNO, 
    q: 'Have you returned to work with restrictions?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 20, 
    section: 'REDUCED CAPACITY', 
    type: Q_TYPES.TEXTAREA, 
    q: 'What work restrictions do you have?', 
    placeholder: 'Light duty, no lifting, etc.',
    sample: '',
    required: false 
  },
  { 
    id: 21, 
    section: 'REDUCED CAPACITY', 
    type: Q_TYPES.YESNO, 
    q: 'Are you working fewer hours than before?', 
    sample: 'No',
    required: false 
  },
  { 
    id: 22, 
    section: 'REDUCED CAPACITY', 
    type: Q_TYPES.NUMBER, 
    q: 'Hours per week now (if reduced)', 
    placeholder: 'Hours',
    sample: '',
    required: false 
  },
  { 
    id: 23, 
    section: 'REDUCED CAPACITY', 
    type: Q_TYPES.YESNO, 
    q: 'Has your earning capacity been affected long-term?', 
    sample: 'Unknown',
    required: true 
  },
  { 
    id: 24, 
    section: 'REDUCED CAPACITY', 
    type: Q_TYPES.YESNO, 
    q: 'Are you unable to do the same job duties as before?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 25, 
    section: 'REDUCED CAPACITY', 
    type: Q_TYPES.TEXTAREA, 
    q: 'What job duties can you no longer perform?', 
    placeholder: 'Lifting, standing, etc.',
    sample: 'Cannot perform patient positioning due to shoulder injury',
    required: false 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: PROPERTY DAMAGE (Questions 26-35)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 26, 
    section: 'PROPERTY DAMAGE', 
    type: Q_TYPES.CURRENCY, 
    q: 'Vehicle repair estimate', 
    placeholder: '$0.00',
    sample: '$25,000',
    required: true 
  },
  { 
    id: 27, 
    section: 'PROPERTY DAMAGE', 
    type: Q_TYPES.CURRENCY, 
    q: 'Vehicle fair market value (before accident)', 
    placeholder: '$0.00',
    sample: '$22,000',
    required: false,
    guidance: 'Check KBB or similar'
  },
  { 
    id: 28, 
    section: 'PROPERTY DAMAGE', 
    type: Q_TYPES.YESNO, 
    q: 'Is your vehicle a total loss?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 29, 
    section: 'PROPERTY DAMAGE', 
    type: Q_TYPES.CURRENCY, 
    q: 'Insurance total loss offer (if any)', 
    placeholder: '$0.00',
    sample: '$19,500',
    required: false 
  },
  { 
    id: 30, 
    section: 'PROPERTY DAMAGE', 
    type: Q_TYPES.YESNO, 
    q: 'Did you have personal property damaged in the car?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 31, 
    section: 'PROPERTY DAMAGE', 
    type: Q_TYPES.TEXTAREA, 
    q: 'List damaged personal property', 
    placeholder: 'Phone, laptop, glasses, etc.',
    sample: 'iPhone 14 (cracked), prescription sunglasses, work laptop bag',
    required: false 
  },
  { 
    id: 32, 
    section: 'PROPERTY DAMAGE', 
    type: Q_TYPES.CURRENCY, 
    q: 'Value of damaged personal property', 
    placeholder: '$0.00',
    sample: '$1,200',
    required: false 
  },
  { 
    id: 33, 
    section: 'PROPERTY DAMAGE', 
    type: Q_TYPES.YESNO, 
    q: 'Did you have a child car seat damaged?', 
    sample: 'No',
    required: true,
    guidance: 'Car seats must be replaced after any accident'
  },
  { 
    id: 34, 
    section: 'PROPERTY DAMAGE', 
    type: Q_TYPES.CURRENCY, 
    q: 'Car seat replacement cost', 
    placeholder: '$0.00',
    sample: '',
    required: false 
  },
  { 
    id: 35, 
    section: 'PROPERTY DAMAGE', 
    type: Q_TYPES.YESNO, 
    q: 'Have you received any property damage payment yet?', 
    sample: 'No',
    required: true 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: OUT-OF-POCKET EXPENSES (Questions 36-45)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 36, 
    section: 'OUT-OF-POCKET', 
    type: Q_TYPES.CURRENCY, 
    q: 'Towing costs', 
    placeholder: '$0.00',
    sample: '$175',
    required: false 
  },
  { 
    id: 37, 
    section: 'OUT-OF-POCKET', 
    type: Q_TYPES.CURRENCY, 
    q: 'Rental car costs (not covered by insurance)', 
    placeholder: '$0.00',
    sample: '$450',
    required: false 
  },
  { 
    id: 38, 
    section: 'OUT-OF-POCKET', 
    type: Q_TYPES.CURRENCY, 
    q: 'Uber/Lyft/Transportation costs', 
    placeholder: '$0.00',
    sample: '$85',
    required: false 
  },
  { 
    id: 39, 
    section: 'OUT-OF-POCKET', 
    type: Q_TYPES.CURRENCY, 
    q: 'Medical copays and deductibles', 
    placeholder: '$0.00',
    sample: '$250',
    required: false 
  },
  { 
    id: 40, 
    section: 'OUT-OF-POCKET', 
    type: Q_TYPES.CURRENCY, 
    q: 'Prescription medication costs', 
    placeholder: '$0.00',
    sample: '$120',
    required: false 
  },
  { 
    id: 41, 
    section: 'OUT-OF-POCKET', 
    type: Q_TYPES.CURRENCY, 
    q: 'Medical equipment costs (braces, crutches, etc.)', 
    placeholder: '$0.00',
    sample: '$75',
    required: false 
  },
  { 
    id: 42, 
    section: 'OUT-OF-POCKET', 
    type: Q_TYPES.CURRENCY, 
    q: 'Home care or help costs', 
    placeholder: '$0.00',
    sample: '$0',
    required: false,
    guidance: 'Hired help for cleaning, childcare, etc.'
  },
  { 
    id: 43, 
    section: 'OUT-OF-POCKET', 
    type: Q_TYPES.CURRENCY, 
    q: 'Parking fees for medical appointments', 
    placeholder: '$0.00',
    sample: '$40',
    required: false 
  },
  { 
    id: 44, 
    section: 'OUT-OF-POCKET', 
    type: Q_TYPES.TEXTAREA, 
    q: 'List any other out-of-pocket expenses', 
    placeholder: 'Other costs related to accident',
    sample: 'Ice packs, heating pad, neck pillow for sleeping',
    required: false 
  },
  { 
    id: 45, 
    section: 'OUT-OF-POCKET', 
    type: Q_TYPES.CURRENCY, 
    q: 'Total out-of-pocket expenses so far', 
    placeholder: '$0.00',
    sample: '$1,195',
    required: true 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: IMPACT ON DAILY LIFE (Questions 46-55)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 46, 
    section: 'LIFE IMPACT', 
    type: Q_TYPES.AUDIO, 
    q: 'Describe how this accident has affected your daily life', 
    placeholder: 'Tap to record',
    sample: 'Cannot exercise, sleep poorly, constant pain, can\'t pick up my kids.',
    required: true,
    guidance: 'Speak from the heart - this matters for your case'
  },
  { 
    id: 47, 
    section: 'LIFE IMPACT', 
    type: Q_TYPES.YESNO, 
    q: 'Has this affected your ability to care for your home?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 48, 
    section: 'LIFE IMPACT', 
    type: Q_TYPES.TEXTAREA, 
    q: 'What household tasks can you no longer do?', 
    placeholder: 'Cleaning, yard work, cooking, etc.',
    sample: 'Cannot vacuum, do laundry, or clean bathrooms due to shoulder pain.',
    required: false 
  },
  { 
    id: 49, 
    section: 'LIFE IMPACT', 
    type: Q_TYPES.YESNO, 
    q: 'Has this affected your ability to care for family members?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 50, 
    section: 'LIFE IMPACT', 
    type: Q_TYPES.TEXTAREA, 
    q: 'Describe how family caregiving has been affected', 
    placeholder: 'Childcare, eldercare, etc.',
    sample: 'Cannot lift my 3-year-old, husband has to handle bath time and bedtime.',
    required: false 
  },
  { 
    id: 51, 
    section: 'LIFE IMPACT', 
    type: Q_TYPES.YESNO, 
    q: 'Has this affected your hobbies or recreational activities?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 52, 
    section: 'LIFE IMPACT', 
    type: Q_TYPES.TEXTAREA, 
    q: 'What activities can you no longer enjoy?', 
    placeholder: 'Sports, exercise, hobbies, etc.',
    sample: 'Used to go to gym 4x/week, play tennis on weekends, garden. Cannot do any of it.',
    required: false 
  },
  { 
    id: 53, 
    section: 'LIFE IMPACT', 
    type: Q_TYPES.YESNO, 
    q: 'Has this affected your relationships?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 54, 
    section: 'LIFE IMPACT', 
    type: Q_TYPES.TEXTAREA, 
    q: 'How have relationships been affected?', 
    placeholder: 'Spouse, children, friends, etc.',
    sample: 'Short-tempered due to pain, less patient with kids, too tired for social events.',
    required: false 
  },
  { 
    id: 55, 
    section: 'LIFE IMPACT', 
    type: Q_TYPES.TEXTAREA, 
    q: 'What do you want the attorney to know about your suffering?', 
    placeholder: 'Anything else about how this has affected you',
    sample: 'I was healthy and active before this. Now I feel like a different person. I wake up in pain and go to bed in pain. I\'m scared I won\'t fully recover.',
    required: true 
  },
];

export default PHASE_6_DAMAGES;
