// ═══════════════════════════════════════════════════════════════════════════════
// ASK-GARY™ - PHASE 1: ONBOARDING QUESTIONS
// 37 Questions - Identity, Contact, Emergency, Employment
// Version 1.0 | December 2025
// ═══════════════════════════════════════════════════════════════════════════════

const Q_TYPES = {
  TEXT: 'text',
  PHONE: 'phone',
  EMAIL: 'email',
  DATE: 'date',
  SELECT: 'select',
  YESNO: 'yesno',
  ADDRESS: 'address',
  TEXTAREA: 'textarea',
};

export const PHASE_1_ONBOARDING = [
  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: PERSONAL IDENTITY (Questions 1-10)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 1, 
    section: 'PERSONAL IDENTITY', 
    type: Q_TYPES.TEXT, 
    q: 'Legal First Name', 
    placeholder: 'Enter your first name',
    sample: 'Maria',
    required: true,
    guidance: 'As shown on your driver\'s license'
  },
  { 
    id: 2, 
    section: 'PERSONAL IDENTITY', 
    type: Q_TYPES.TEXT, 
    q: 'Legal Middle Name', 
    placeholder: 'Enter your middle name',
    sample: 'Elena',
    required: false 
  },
  { 
    id: 3, 
    section: 'PERSONAL IDENTITY', 
    type: Q_TYPES.TEXT, 
    q: 'Legal Last Name', 
    placeholder: 'Enter your last name',
    sample: 'Vasquez',
    required: true 
  },
  { 
    id: 4, 
    section: 'PERSONAL IDENTITY', 
    type: Q_TYPES.TEXT, 
    q: 'Suffix (if any)', 
    placeholder: 'Jr., Sr., III, etc.',
    sample: '',
    required: false 
  },
  { 
    id: 5, 
    section: 'PERSONAL IDENTITY', 
    type: Q_TYPES.TEXT, 
    q: 'Preferred Name', 
    placeholder: 'What should we call you?',
    sample: 'Maria',
    required: false,
    guidance: 'If different from your legal name'
  },
  { 
    id: 6, 
    section: 'PERSONAL IDENTITY', 
    type: Q_TYPES.DATE, 
    q: 'Date of Birth', 
    placeholder: 'MM/DD/YYYY',
    sample: '03/15/1985',
    required: true 
  },
  { 
    id: 7, 
    section: 'PERSONAL IDENTITY', 
    type: Q_TYPES.SELECT, 
    q: 'Gender', 
    options: ['Female', 'Male', 'Non-binary', 'Prefer not to say'],
    sample: 'Female',
    required: true 
  },
  { 
    id: 8, 
    section: 'PERSONAL IDENTITY', 
    type: Q_TYPES.TEXT, 
    q: 'Social Security Number', 
    placeholder: 'XXX-XX-XXXX',
    sample: '***-**-4567',
    required: true,
    guidance: 'Required for medical billing & records'
  },
  { 
    id: 9, 
    section: 'PERSONAL IDENTITY', 
    type: Q_TYPES.SELECT, 
    q: 'Marital Status', 
    options: ['Single', 'Married', 'Divorced', 'Widowed', 'Separated', 'Domestic Partnership'],
    sample: 'Married',
    required: true 
  },
  { 
    id: 10, 
    section: 'PERSONAL IDENTITY', 
    type: Q_TYPES.SELECT, 
    q: 'Primary Language', 
    options: ['English', 'Spanish', 'Portuguese', 'Haitian Creole', 'Vietnamese', 'Chinese', 'Tagalog', 'Other'],
    sample: 'English',
    required: true 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: CONTACT INFORMATION (Questions 11-20)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 11, 
    section: 'CONTACT INFO', 
    type: Q_TYPES.PHONE, 
    q: 'Primary Phone Number', 
    placeholder: '(555) 555-5555',
    sample: '(813) 555-0147',
    required: true,
    guidance: 'Best number to reach you'
  },
  { 
    id: 12, 
    section: 'CONTACT INFO', 
    type: Q_TYPES.SELECT, 
    q: 'Primary Phone Type', 
    options: ['Mobile', 'Home', 'Work'],
    sample: 'Mobile',
    required: true 
  },
  { 
    id: 13, 
    section: 'CONTACT INFO', 
    type: Q_TYPES.YESNO, 
    q: 'Can we text this number?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 14, 
    section: 'CONTACT INFO', 
    type: Q_TYPES.PHONE, 
    q: 'Alternate Phone Number', 
    placeholder: '(555) 555-5555',
    sample: '(813) 555-0199',
    required: false 
  },
  { 
    id: 15, 
    section: 'CONTACT INFO', 
    type: Q_TYPES.EMAIL, 
    q: 'Email Address', 
    placeholder: 'you@email.com',
    sample: 'maria.vasquez@email.com',
    required: true 
  },
  { 
    id: 16, 
    section: 'CONTACT INFO', 
    type: Q_TYPES.ADDRESS, 
    q: 'Home Street Address', 
    placeholder: '123 Main Street',
    sample: '4521 Bay Shore Drive',
    required: true 
  },
  { 
    id: 17, 
    section: 'CONTACT INFO', 
    type: Q_TYPES.TEXT, 
    q: 'Apartment/Unit Number', 
    placeholder: 'Apt, Suite, Unit, etc.',
    sample: '',
    required: false 
  },
  { 
    id: 18, 
    section: 'CONTACT INFO', 
    type: Q_TYPES.TEXT, 
    q: 'City', 
    placeholder: 'City name',
    sample: 'Tampa',
    required: true 
  },
  { 
    id: 19, 
    section: 'CONTACT INFO', 
    type: Q_TYPES.SELECT, 
    q: 'State', 
    options: ['Florida', 'Alabama', 'Georgia', 'Other'],
    sample: 'Florida',
    required: true 
  },
  { 
    id: 20, 
    section: 'CONTACT INFO', 
    type: Q_TYPES.TEXT, 
    q: 'ZIP Code', 
    placeholder: '12345',
    sample: '33611',
    required: true 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: ADDRESS HISTORY (Questions 21-24)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 21, 
    section: 'ADDRESS HISTORY', 
    type: Q_TYPES.YESNO, 
    q: 'Have you lived at this address for more than 2 years?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 22, 
    section: 'ADDRESS HISTORY', 
    type: Q_TYPES.DATE, 
    q: 'When did you move to this address?', 
    placeholder: 'MM/YYYY',
    sample: '06/2020',
    required: false,
    guidance: 'Approximate date is fine'
  },
  { 
    id: 23, 
    section: 'ADDRESS HISTORY', 
    type: Q_TYPES.ADDRESS, 
    q: 'Previous Address (if less than 2 years)', 
    placeholder: 'Full previous address',
    sample: '',
    required: false 
  },
  { 
    id: 24, 
    section: 'ADDRESS HISTORY', 
    type: Q_TYPES.YESNO, 
    q: 'Is your mailing address different from home address?', 
    sample: 'No',
    required: true 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: EMERGENCY CONTACT (Questions 25-29)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 25, 
    section: 'EMERGENCY CONTACT', 
    type: Q_TYPES.TEXT, 
    q: 'Emergency Contact Full Name', 
    placeholder: 'First and Last Name',
    sample: 'Carlos Vasquez',
    required: true 
  },
  { 
    id: 26, 
    section: 'EMERGENCY CONTACT', 
    type: Q_TYPES.SELECT, 
    q: 'Relationship to You', 
    options: ['Spouse', 'Parent', 'Child', 'Sibling', 'Other Family', 'Friend', 'Other'],
    sample: 'Spouse',
    required: true 
  },
  { 
    id: 27, 
    section: 'EMERGENCY CONTACT', 
    type: Q_TYPES.PHONE, 
    q: 'Emergency Contact Phone', 
    placeholder: '(555) 555-5555',
    sample: '(813) 555-0199',
    required: true 
  },
  { 
    id: 28, 
    section: 'EMERGENCY CONTACT', 
    type: Q_TYPES.EMAIL, 
    q: 'Emergency Contact Email', 
    placeholder: 'email@example.com',
    sample: 'carlos.v@email.com',
    required: false 
  },
  { 
    id: 29, 
    section: 'EMERGENCY CONTACT', 
    type: Q_TYPES.YESNO, 
    q: 'Can we share case updates with this person?', 
    sample: 'Yes',
    required: true,
    guidance: 'They may receive status updates on your behalf'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: EMPLOYMENT (Questions 30-37)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 30, 
    section: 'EMPLOYMENT', 
    type: Q_TYPES.SELECT, 
    q: 'Current Employment Status', 
    options: ['Employed Full-Time', 'Employed Part-Time', 'Self-Employed', 'Unemployed', 'Retired', 'Student', 'Disabled', 'Homemaker'],
    sample: 'Employed Full-Time',
    required: true 
  },
  { 
    id: 31, 
    section: 'EMPLOYMENT', 
    type: Q_TYPES.TEXT, 
    q: 'Employer Name', 
    placeholder: 'Company name',
    sample: 'Bright Smile Dental',
    required: false,
    guidance: 'If currently employed'
  },
  { 
    id: 32, 
    section: 'EMPLOYMENT', 
    type: Q_TYPES.TEXT, 
    q: 'Job Title / Position', 
    placeholder: 'Your title',
    sample: 'Dental Hygienist',
    required: false 
  },
  { 
    id: 33, 
    section: 'EMPLOYMENT', 
    type: Q_TYPES.ADDRESS, 
    q: 'Employer Address', 
    placeholder: 'Work address',
    sample: '1200 Kennedy Blvd, Tampa, FL 33602',
    required: false 
  },
  { 
    id: 34, 
    section: 'EMPLOYMENT', 
    type: Q_TYPES.PHONE, 
    q: 'Employer Phone Number', 
    placeholder: '(555) 555-5555',
    sample: '(813) 555-2200',
    required: false 
  },
  { 
    id: 35, 
    section: 'EMPLOYMENT', 
    type: Q_TYPES.DATE, 
    q: 'Employment Start Date', 
    placeholder: 'MM/YYYY',
    sample: '03/2019',
    required: false,
    guidance: 'When did you start this job?'
  },
  { 
    id: 36, 
    section: 'EMPLOYMENT', 
    type: Q_TYPES.YESNO, 
    q: 'Are you currently missing work due to this accident?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 37, 
    section: 'EMPLOYMENT', 
    type: Q_TYPES.DATE, 
    q: 'Last Day Worked', 
    placeholder: 'MM/DD/YYYY',
    sample: '01/02/2025',
    required: false,
    guidance: 'If missing work due to accident'
  },
];

// Export for use in main app
export default PHASE_1_ONBOARDING;
