// ═══════════════════════════════════════════════════════════════════════════════
// ASK-GARY™ - PHASE 4: EVIDENCE QUESTIONS
// 22 Questions - Photos, Documents, Videos, Records Upload
// Version 1.0 | December 2025
// ═══════════════════════════════════════════════════════════════════════════════

const Q_TYPES = {
  TEXT: 'text',
  DATE: 'date',
  SELECT: 'select',
  YESNO: 'yesno',
  TEXTAREA: 'textarea',
  PHOTO: 'photo',
  DOCUMENT: 'document',
};

export const PHASE_4_EVIDENCE = [
  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: ACCIDENT SCENE PHOTOS (Questions 1-6)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 1, 
    section: 'SCENE PHOTOS', 
    type: Q_TYPES.PHOTO, 
    q: 'Upload photos of YOUR vehicle damage', 
    placeholder: 'Take or upload photos',
    sample: '[3 photos uploaded]',
    required: true,
    guidance: 'All angles - front, back, sides, interior damage'
  },
  { 
    id: 2, 
    section: 'SCENE PHOTOS', 
    type: Q_TYPES.PHOTO, 
    q: 'Upload photos of the OTHER vehicle', 
    placeholder: 'Take or upload photos',
    sample: '[2 photos uploaded]',
    required: false 
  },
  { 
    id: 3, 
    section: 'SCENE PHOTOS', 
    type: Q_TYPES.PHOTO, 
    q: 'Upload photos of the accident scene/location', 
    placeholder: 'Take or upload photos',
    sample: '[4 photos uploaded]',
    required: false,
    guidance: 'Intersection, road conditions, traffic signals'
  },
  { 
    id: 4, 
    section: 'SCENE PHOTOS', 
    type: Q_TYPES.PHOTO, 
    q: 'Upload photos of skid marks or debris', 
    placeholder: 'Take or upload photos',
    sample: '[1 photo uploaded]',
    required: false 
  },
  { 
    id: 5, 
    section: 'SCENE PHOTOS', 
    type: Q_TYPES.PHOTO, 
    q: 'Upload photos of traffic signals/signs', 
    placeholder: 'Take or upload photos',
    sample: '[2 photos uploaded]',
    required: false 
  },
  { 
    id: 6, 
    section: 'SCENE PHOTOS', 
    type: Q_TYPES.PHOTO, 
    q: 'Upload any other scene photos', 
    placeholder: 'Take or upload photos',
    sample: '[3 photos uploaded]',
    required: false 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: INJURY PHOTOS (Questions 7-9)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 7, 
    section: 'INJURY PHOTOS', 
    type: Q_TYPES.PHOTO, 
    q: 'Upload photos of your visible injuries', 
    placeholder: 'Take or upload photos',
    sample: '[4 photos uploaded]',
    required: true,
    guidance: 'Bruises, cuts, swelling - take new photos as they develop'
  },
  { 
    id: 8, 
    section: 'INJURY PHOTOS', 
    type: Q_TYPES.DATE, 
    q: 'Date these injury photos were taken', 
    placeholder: 'MM/DD/YYYY',
    sample: '01/02/2025',
    required: false 
  },
  { 
    id: 9, 
    section: 'INJURY PHOTOS', 
    type: Q_TYPES.YESNO, 
    q: 'Will you upload more injury photos as they develop?', 
    sample: 'Yes',
    required: false,
    guidance: 'Bruises often look worse after 2-3 days'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: POLICE DOCUMENTS (Questions 10-12)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 10, 
    section: 'POLICE DOCS', 
    type: Q_TYPES.DOCUMENT, 
    q: 'Upload Police Report', 
    placeholder: 'PDF or photo of document',
    sample: '[Document uploaded]',
    required: true,
    guidance: 'Full crash report from police department'
  },
  { 
    id: 11, 
    section: 'POLICE DOCS', 
    type: Q_TYPES.DOCUMENT, 
    q: 'Upload Police Exchange Card', 
    placeholder: 'PDF or photo of document',
    sample: '[Document uploaded]',
    required: false,
    guidance: 'Card given at scene with report number'
  },
  { 
    id: 12, 
    section: 'POLICE DOCS', 
    type: Q_TYPES.DOCUMENT, 
    q: 'Upload any Citations/Tickets issued', 
    placeholder: 'PDF or photo of document',
    sample: '[Document uploaded]',
    required: false 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: INSURANCE DOCUMENTS (Questions 13-16)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 13, 
    section: 'INSURANCE DOCS', 
    type: Q_TYPES.DOCUMENT, 
    q: 'Upload YOUR Insurance Card (front)', 
    placeholder: 'Photo of card',
    sample: '[Document uploaded]',
    required: true 
  },
  { 
    id: 14, 
    section: 'INSURANCE DOCS', 
    type: Q_TYPES.DOCUMENT, 
    q: 'Upload YOUR Insurance Card (back)', 
    placeholder: 'Photo of card',
    sample: '[Document uploaded]',
    required: false 
  },
  { 
    id: 15, 
    section: 'INSURANCE DOCS', 
    type: Q_TYPES.DOCUMENT, 
    q: 'Upload OTHER driver\'s Insurance Card', 
    placeholder: 'Photo of card',
    sample: '[Document uploaded]',
    required: false 
  },
  { 
    id: 16, 
    section: 'INSURANCE DOCS', 
    type: Q_TYPES.DOCUMENT, 
    q: 'Upload YOUR Insurance Declarations Page', 
    placeholder: 'PDF or photo',
    sample: '[Document uploaded]',
    required: false,
    guidance: 'Shows your coverage limits'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: IDENTITY DOCUMENTS (Questions 17-19)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 17, 
    section: 'IDENTITY DOCS', 
    type: Q_TYPES.DOCUMENT, 
    q: 'Upload YOUR Driver\'s License (front)', 
    placeholder: 'Photo of license',
    sample: '[Document uploaded]',
    required: true 
  },
  { 
    id: 18, 
    section: 'IDENTITY DOCS', 
    type: Q_TYPES.DOCUMENT, 
    q: 'Upload OTHER driver\'s License (if you have it)', 
    placeholder: 'Photo of license',
    sample: '[Document uploaded]',
    required: false 
  },
  { 
    id: 19, 
    section: 'IDENTITY DOCS', 
    type: Q_TYPES.DOCUMENT, 
    q: 'Upload Vehicle Registration', 
    placeholder: 'Photo or PDF',
    sample: '[Document uploaded]',
    required: false 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: VIDEO EVIDENCE (Questions 20-22)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 20, 
    section: 'VIDEO EVIDENCE', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have any video of the accident?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 21, 
    section: 'VIDEO EVIDENCE', 
    type: Q_TYPES.SELECT, 
    q: 'Source of video evidence', 
    options: ['Dashcam', 'Phone recording', 'Security camera', 'Witness video', 'Other', 'None'],
    sample: 'None',
    required: false 
  },
  { 
    id: 22, 
    section: 'VIDEO EVIDENCE', 
    type: Q_TYPES.TEXTAREA, 
    q: 'Describe any potential video sources', 
    placeholder: 'Nearby businesses with cameras, etc.',
    sample: 'Walgreens on corner may have parking lot camera.',
    required: false,
    guidance: 'We may be able to obtain footage before it\'s deleted'
  },
];

export default PHASE_4_EVIDENCE;
