// ═══════════════════════════════════════════════════════════════════════════════
// ASK-GARY™ - PHASE 7: FINALIZATION QUESTIONS
// 32 Questions - Attorney Agreement, Signatures, Consents, Authorizations
// Version 1.0 | December 2025
// ═══════════════════════════════════════════════════════════════════════════════

const Q_TYPES = {
  TEXT: 'text',
  PHONE: 'phone',
  DATE: 'date',
  SELECT: 'select',
  YESNO: 'yesno',
  TEXTAREA: 'textarea',
  SIGNATURE: 'signature',
  CHECKBOX: 'checkbox',
  DOCUSIGN: 'docusign',
};

export const PHASE_7_FINALIZE = [
  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: ATTORNEY RELATIONSHIP (Questions 1-8)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 1, 
    section: 'ATTORNEY', 
    type: Q_TYPES.YESNO, 
    q: 'Have you spoken with any other attorneys about this case?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 2, 
    section: 'ATTORNEY', 
    type: Q_TYPES.TEXT, 
    q: 'Which attorneys did you speak with?', 
    placeholder: 'Attorney/firm names',
    sample: '',
    required: false 
  },
  { 
    id: 3, 
    section: 'ATTORNEY', 
    type: Q_TYPES.YESNO, 
    q: 'Have you signed anything with another attorney?', 
    sample: 'No',
    required: true,
    guidance: 'Important to disclose'
  },
  { 
    id: 4, 
    section: 'ATTORNEY', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have any pending lawsuits (other than this)?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 5, 
    section: 'ATTORNEY', 
    type: Q_TYPES.YESNO, 
    q: 'Have you filed for bankruptcy in the past 7 years?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 6, 
    section: 'ATTORNEY', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have any outstanding judgments or liens?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 7, 
    section: 'ATTORNEY', 
    type: Q_TYPES.TEXT, 
    q: 'How did you hear about our firm?', 
    placeholder: 'Referral, TV, internet, etc.',
    sample: '1-800-ASK-GARY',
    required: true 
  },
  { 
    id: 8, 
    section: 'ATTORNEY', 
    type: Q_TYPES.TEXT, 
    q: 'Who referred you? (if applicable)', 
    placeholder: 'Name of person who referred you',
    sample: '',
    required: false 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: RETAINER AGREEMENT (Questions 9-14)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 9, 
    section: 'RETAINER', 
    type: Q_TYPES.YESNO, 
    q: 'Do you understand this is a contingency fee arrangement?', 
    sample: 'Yes',
    required: true,
    guidance: 'No fee unless we recover money for you'
  },
  { 
    id: 10, 
    section: 'RETAINER', 
    type: Q_TYPES.YESNO, 
    q: 'Do you understand the attorney fee percentage?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 11, 
    section: 'RETAINER', 
    type: Q_TYPES.YESNO, 
    q: 'Do you understand costs may be deducted from recovery?', 
    sample: 'Yes',
    required: true,
    guidance: 'Medical records, court fees, expert witnesses, etc.'
  },
  { 
    id: 12, 
    section: 'RETAINER', 
    type: Q_TYPES.YESNO, 
    q: 'Do you authorize the firm to negotiate on your behalf?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 13, 
    section: 'RETAINER', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have questions about the retainer agreement?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 14, 
    section: 'RETAINER', 
    type: Q_TYPES.DOCUSIGN, 
    q: 'Sign Retainer Agreement', 
    sample: '[DocuSign Pending]',
    required: true,
    guidance: 'Electronic signature required'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: MEDICAL AUTHORIZATION (Questions 15-20)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 15, 
    section: 'MEDICAL AUTH', 
    type: Q_TYPES.YESNO, 
    q: 'Do you authorize release of your medical records?', 
    sample: 'Yes',
    required: true,
    guidance: 'Required to prove your injuries'
  },
  { 
    id: 16, 
    section: 'MEDICAL AUTH', 
    type: Q_TYPES.YESNO, 
    q: 'Do you authorize release of medical billing records?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 17, 
    section: 'MEDICAL AUTH', 
    type: Q_TYPES.YESNO, 
    q: 'Do you authorize release of prescription records?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 18, 
    section: 'MEDICAL AUTH', 
    type: Q_TYPES.YESNO, 
    q: 'Do you authorize release of prior medical history?', 
    sample: 'Yes',
    required: true,
    guidance: 'May be needed to prove injuries are new'
  },
  { 
    id: 19, 
    section: 'MEDICAL AUTH', 
    type: Q_TYPES.YESNO, 
    q: 'Do you understand HIPAA authorization requirements?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 20, 
    section: 'MEDICAL AUTH', 
    type: Q_TYPES.DOCUSIGN, 
    q: 'Sign HIPAA Medical Authorization', 
    sample: '[DocuSign Pending]',
    required: true,
    guidance: 'Electronic signature required'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: OTHER AUTHORIZATIONS (Questions 21-26)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 21, 
    section: 'OTHER AUTH', 
    type: Q_TYPES.YESNO, 
    q: 'Do you authorize release of employment records?', 
    sample: 'Yes',
    required: true,
    guidance: 'For lost wage claims'
  },
  { 
    id: 22, 
    section: 'OTHER AUTH', 
    type: Q_TYPES.YESNO, 
    q: 'Do you authorize release of insurance records?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 23, 
    section: 'OTHER AUTH', 
    type: Q_TYPES.YESNO, 
    q: 'Do you authorize request for police report?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 24, 
    section: 'OTHER AUTH', 
    type: Q_TYPES.YESNO, 
    q: 'Do you authorize request for ambulance/EMS records?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 25, 
    section: 'OTHER AUTH', 
    type: Q_TYPES.YESNO, 
    q: 'Do you consent to electronic communications?', 
    sample: 'Yes',
    required: true,
    guidance: 'Email and text updates about your case'
  },
  { 
    id: 26, 
    section: 'OTHER AUTH', 
    type: Q_TYPES.DOCUSIGN, 
    q: 'Sign General Authorization Form', 
    sample: '[DocuSign Pending]',
    required: true,
    guidance: 'Electronic signature required'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: FINAL CONFIRMATIONS (Questions 27-32)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 27, 
    section: 'FINAL', 
    type: Q_TYPES.YESNO, 
    q: 'Is all information you provided true and accurate?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 28, 
    section: 'FINAL', 
    type: Q_TYPES.YESNO, 
    q: 'Do you understand you must keep the firm updated?', 
    sample: 'Yes',
    required: true,
    guidance: 'New treatment, contact changes, etc.'
  },
  { 
    id: 29, 
    section: 'FINAL', 
    type: Q_TYPES.YESNO, 
    q: 'Do you understand not to speak with other insurance companies?', 
    sample: 'Yes',
    required: true,
    guidance: 'Refer all calls to your attorney'
  },
  { 
    id: 30, 
    section: 'FINAL', 
    type: Q_TYPES.YESNO, 
    q: 'Do you understand not to post about the accident on social media?', 
    sample: 'Yes',
    required: true,
    guidance: 'Insurance companies monitor social media'
  },
  { 
    id: 31, 
    section: 'FINAL', 
    type: Q_TYPES.TEXTAREA, 
    q: 'Any final questions or concerns for the attorney?', 
    placeholder: 'Anything else we should know',
    sample: 'How long will this process take?',
    required: false 
  },
  { 
    id: 32, 
    section: 'FINAL', 
    type: Q_TYPES.SIGNATURE, 
    q: 'Your signature confirming all information is accurate', 
    sample: '[Signature Captured]',
    required: true,
    guidance: 'Sign with your finger below'
  },
];

export default PHASE_7_FINALIZE;
