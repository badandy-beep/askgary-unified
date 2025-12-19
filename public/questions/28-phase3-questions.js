// ═══════════════════════════════════════════════════════════════════════════════
// ASK-GARY™ - PHASE 3: VEHICLES & PARTIES QUESTIONS
// 127 Questions - Your Vehicle, Other Vehicles, Drivers, Insurance, Passengers
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
  NUMBER: 'number',
  CURRENCY: 'currency',
  PHOTO: 'photo',
};

export const PHASE_3_VEHICLES = [
  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: YOUR VEHICLE INFO (Questions 1-20)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 1, 
    section: 'YOUR VEHICLE', 
    type: Q_TYPES.SELECT, 
    q: 'Your role in the vehicle', 
    options: ['Driver', 'Front Passenger', 'Rear Passenger', 'Other'],
    sample: 'Driver',
    required: true 
  },
  { 
    id: 2, 
    section: 'YOUR VEHICLE', 
    type: Q_TYPES.NUMBER, 
    q: 'Vehicle Year', 
    placeholder: 'YYYY',
    sample: '2021',
    required: true 
  },
  { 
    id: 3, 
    section: 'YOUR VEHICLE', 
    type: Q_TYPES.TEXT, 
    q: 'Vehicle Make', 
    placeholder: 'Honda, Toyota, Ford, etc.',
    sample: 'Honda',
    required: true 
  },
  { 
    id: 4, 
    section: 'YOUR VEHICLE', 
    type: Q_TYPES.TEXT, 
    q: 'Vehicle Model', 
    placeholder: 'Civic, Camry, F-150, etc.',
    sample: 'Civic',
    required: true 
  },
  { 
    id: 5, 
    section: 'YOUR VEHICLE', 
    type: Q_TYPES.SELECT, 
    q: 'Vehicle Color', 
    options: ['White', 'Black', 'Silver/Gray', 'Blue', 'Red', 'Green', 'Gold/Tan', 'Other'],
    sample: 'Blue',
    required: true 
  },
  { 
    id: 6, 
    section: 'YOUR VEHICLE', 
    type: Q_TYPES.TEXT, 
    q: 'License Plate Number', 
    placeholder: 'ABC1234',
    sample: 'FLA-2847',
    required: true 
  },
  { 
    id: 7, 
    section: 'YOUR VEHICLE', 
    type: Q_TYPES.SELECT, 
    q: 'License Plate State', 
    options: ['Florida', 'Georgia', 'Alabama', 'Other'],
    sample: 'Florida',
    required: true 
  },
  { 
    id: 8, 
    section: 'YOUR VEHICLE', 
    type: Q_TYPES.TEXT, 
    q: 'VIN (Vehicle Identification Number)', 
    placeholder: '17 characters',
    sample: '1HGBH41JXMN109186',
    required: false,
    guidance: 'Found on registration or driver side door frame'
  },
  { 
    id: 9, 
    section: 'YOUR VEHICLE', 
    type: Q_TYPES.SELECT, 
    q: 'Vehicle Type', 
    options: ['Sedan', 'SUV', 'Truck', 'Van/Minivan', 'Coupe', 'Convertible', 'Motorcycle', 'Other'],
    sample: 'Sedan',
    required: true 
  },
  { 
    id: 10, 
    section: 'YOUR VEHICLE', 
    type: Q_TYPES.NUMBER, 
    q: 'Odometer Reading (approximate)', 
    placeholder: 'Miles',
    sample: '28000',
    required: false 
  },
  { 
    id: 11, 
    section: 'YOUR VEHICLE', 
    type: Q_TYPES.SELECT, 
    q: 'Who owns this vehicle?', 
    options: ['I own it', 'Spouse/Partner owns it', 'Family member owns it', 'Leased', 'Company vehicle', 'Rental', 'Borrowed', 'Other'],
    sample: 'I own it',
    required: true 
  },
  { 
    id: 12, 
    section: 'YOUR VEHICLE', 
    type: Q_TYPES.TEXT, 
    q: 'Registered Owner Name (if not you)', 
    placeholder: 'Owner\'s full name',
    sample: '',
    required: false 
  },
  { 
    id: 13, 
    section: 'YOUR VEHICLE', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have an outstanding loan on this vehicle?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 14, 
    section: 'YOUR VEHICLE', 
    type: Q_TYPES.TEXT, 
    q: 'Lienholder/Bank Name', 
    placeholder: 'Bank or finance company',
    sample: 'Bank of America',
    required: false 
  },
  { 
    id: 15, 
    section: 'YOUR VEHICLE', 
    type: Q_TYPES.CURRENCY, 
    q: 'Amount Still Owed', 
    placeholder: '$0.00',
    sample: '$18,000',
    required: false 
  },
  { 
    id: 16, 
    section: 'YOUR VEHICLE', 
    type: Q_TYPES.YESNO, 
    q: 'Was your vehicle damaged in this accident?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 17, 
    section: 'YOUR VEHICLE', 
    type: Q_TYPES.SELECT, 
    q: 'Level of damage to your vehicle', 
    options: ['Minor (scratches, dents)', 'Moderate (significant body damage)', 'Severe (not drivable)', 'Total Loss'],
    sample: 'Severe (not drivable)',
    required: true 
  },
  { 
    id: 18, 
    section: 'YOUR VEHICLE', 
    type: Q_TYPES.TEXTAREA, 
    q: 'Describe damage to your vehicle', 
    placeholder: 'List all damaged areas...',
    sample: 'Driver side door crushed, all left windows shattered, frame bent, front wheel pushed in, airbags deployed.',
    required: true 
  },
  { 
    id: 19, 
    section: 'YOUR VEHICLE', 
    type: Q_TYPES.YESNO, 
    q: 'Did you have any pre-existing damage?', 
    sample: 'No',
    required: true,
    guidance: 'Important to document what was there before'
  },
  { 
    id: 20, 
    section: 'YOUR VEHICLE', 
    type: Q_TYPES.TEXTAREA, 
    q: 'Describe any pre-existing damage', 
    placeholder: 'Existing dents, scratches, mechanical issues...',
    sample: '',
    required: false 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: YOUR VEHICLE - LOCATION & STATUS (Questions 21-30)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 21, 
    section: 'VEHICLE STATUS', 
    type: Q_TYPES.SELECT, 
    q: 'Current location of your vehicle', 
    options: ['At body shop', 'At my home', 'Tow yard', 'Insurance took possession', 'Totaled/Disposed', 'Other'],
    sample: 'At body shop',
    required: true 
  },
  { 
    id: 22, 
    section: 'VEHICLE STATUS', 
    type: Q_TYPES.TEXT, 
    q: 'Body Shop / Repair Facility Name', 
    placeholder: 'Shop name',
    sample: 'Tampa Auto Body',
    required: false 
  },
  { 
    id: 23, 
    section: 'VEHICLE STATUS', 
    type: Q_TYPES.ADDRESS, 
    q: 'Body Shop Address', 
    placeholder: 'Address',
    sample: '5500 Memorial Hwy, Tampa, FL 33634',
    required: false 
  },
  { 
    id: 24, 
    section: 'VEHICLE STATUS', 
    type: Q_TYPES.PHONE, 
    q: 'Body Shop Phone', 
    placeholder: '(555) 555-5555',
    sample: '(813) 555-4400',
    required: false 
  },
  { 
    id: 25, 
    section: 'VEHICLE STATUS', 
    type: Q_TYPES.YESNO, 
    q: 'Have you received a repair estimate?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 26, 
    section: 'VEHICLE STATUS', 
    type: Q_TYPES.CURRENCY, 
    q: 'Repair Estimate Amount', 
    placeholder: '$0.00',
    sample: '$25,000',
    required: false 
  },
  { 
    id: 27, 
    section: 'VEHICLE STATUS', 
    type: Q_TYPES.YESNO, 
    q: 'Has insurance declared your vehicle a total loss?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 28, 
    section: 'VEHICLE STATUS', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have a rental car?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 29, 
    section: 'VEHICLE STATUS', 
    type: Q_TYPES.TEXT, 
    q: 'Rental Company Name', 
    placeholder: 'Enterprise, Hertz, etc.',
    sample: 'Enterprise',
    required: false 
  },
  { 
    id: 30, 
    section: 'VEHICLE STATUS', 
    type: Q_TYPES.CURRENCY, 
    q: 'Daily rental cost', 
    placeholder: '$0.00 per day',
    sample: '$45/day',
    required: false 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: YOUR INSURANCE (Questions 31-45)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 31, 
    section: 'YOUR INSURANCE', 
    type: Q_TYPES.TEXT, 
    q: 'Your Insurance Company', 
    placeholder: 'Company name',
    sample: 'State Farm',
    required: true 
  },
  { 
    id: 32, 
    section: 'YOUR INSURANCE', 
    type: Q_TYPES.TEXT, 
    q: 'Policy Number', 
    placeholder: 'Policy #',
    sample: '123-456-789',
    required: true 
  },
  { 
    id: 33, 
    section: 'YOUR INSURANCE', 
    type: Q_TYPES.TEXT, 
    q: 'Policy Holder Name', 
    placeholder: 'Name on policy',
    sample: 'Maria Elena Vasquez',
    required: true,
    guidance: 'May be different from driver'
  },
  { 
    id: 34, 
    section: 'YOUR INSURANCE', 
    type: Q_TYPES.PHONE, 
    q: 'Insurance Company Phone', 
    placeholder: '(800) 555-5555',
    sample: '(800) 782-8332',
    required: false 
  },
  { 
    id: 35, 
    section: 'YOUR INSURANCE', 
    type: Q_TYPES.TEXT, 
    q: 'Insurance Agent Name', 
    placeholder: 'Agent\'s name',
    sample: 'Robert Chen',
    required: false 
  },
  { 
    id: 36, 
    section: 'YOUR INSURANCE', 
    type: Q_TYPES.PHONE, 
    q: 'Agent Phone Number', 
    placeholder: '(555) 555-5555',
    sample: '(813) 555-3300',
    required: false 
  },
  { 
    id: 37, 
    section: 'YOUR INSURANCE', 
    type: Q_TYPES.TEXT, 
    q: 'Claim Number (if filed)', 
    placeholder: 'Claim #',
    sample: 'CLM-2025-88432',
    required: false 
  },
  { 
    id: 38, 
    section: 'YOUR INSURANCE', 
    type: Q_TYPES.YESNO, 
    q: 'Have you filed a claim with your insurance?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 39, 
    section: 'YOUR INSURANCE', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have PIP (Personal Injury Protection)?', 
    sample: 'Yes',
    required: true,
    guidance: 'Required in Florida'
  },
  { 
    id: 40, 
    section: 'YOUR INSURANCE', 
    type: Q_TYPES.CURRENCY, 
    q: 'PIP Coverage Limit', 
    placeholder: '$10,000 typical',
    sample: '$10,000',
    required: false 
  },
  { 
    id: 41, 
    section: 'YOUR INSURANCE', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have Bodily Injury (BI) coverage?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 42, 
    section: 'YOUR INSURANCE', 
    type: Q_TYPES.TEXT, 
    q: 'BI Coverage Limits', 
    placeholder: '$100,000/$300,000',
    sample: '$100,000/$300,000',
    required: false 
  },
  { 
    id: 43, 
    section: 'YOUR INSURANCE', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have Uninsured/Underinsured Motorist (UM/UIM)?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 44, 
    section: 'YOUR INSURANCE', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have MedPay coverage?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 45, 
    section: 'YOUR INSURANCE', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have rental car coverage?', 
    sample: 'Yes',
    required: true 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: OTHER VEHICLE #1 (Questions 46-65)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 46, 
    section: 'OTHER VEHICLE #1', 
    type: Q_TYPES.NUMBER, 
    q: 'Other Vehicle Year', 
    placeholder: 'YYYY',
    sample: '2022',
    required: true 
  },
  { 
    id: 47, 
    section: 'OTHER VEHICLE #1', 
    type: Q_TYPES.TEXT, 
    q: 'Other Vehicle Make', 
    placeholder: 'Ford, Chevy, etc.',
    sample: 'Ford',
    required: true 
  },
  { 
    id: 48, 
    section: 'OTHER VEHICLE #1', 
    type: Q_TYPES.TEXT, 
    q: 'Other Vehicle Model', 
    placeholder: 'Model name',
    sample: 'F-150',
    required: true 
  },
  { 
    id: 49, 
    section: 'OTHER VEHICLE #1', 
    type: Q_TYPES.SELECT, 
    q: 'Other Vehicle Color', 
    options: ['White', 'Black', 'Silver/Gray', 'Blue', 'Red', 'Green', 'Gold/Tan', 'Other'],
    sample: 'Black',
    required: true 
  },
  { 
    id: 50, 
    section: 'OTHER VEHICLE #1', 
    type: Q_TYPES.SELECT, 
    q: 'Other Vehicle Type', 
    options: ['Sedan', 'SUV', 'Pickup Truck', 'Van', 'Commercial Truck', 'Semi/18-Wheeler', 'Motorcycle', 'Other'],
    sample: 'Pickup Truck',
    required: true 
  },
  { 
    id: 51, 
    section: 'OTHER VEHICLE #1', 
    type: Q_TYPES.TEXT, 
    q: 'Other Vehicle License Plate', 
    placeholder: 'Plate number',
    sample: 'FLA-9182',
    required: false 
  },
  { 
    id: 52, 
    section: 'OTHER VEHICLE #1', 
    type: Q_TYPES.SELECT, 
    q: 'Other Vehicle Plate State', 
    options: ['Florida', 'Georgia', 'Alabama', 'Other', 'Unknown'],
    sample: 'Florida',
    required: false 
  },
  { 
    id: 53, 
    section: 'OTHER VEHICLE #1', 
    type: Q_TYPES.TEXTAREA, 
    q: 'Damage to Other Vehicle', 
    placeholder: 'Describe visible damage',
    sample: 'Front bumper crushed, hood dented, headlight broken.',
    required: false 
  },
  { 
    id: 54, 
    section: 'OTHER VEHICLE #1', 
    type: Q_TYPES.YESNO, 
    q: 'Was other vehicle a commercial vehicle?', 
    sample: 'No',
    required: true,
    guidance: 'Company truck, delivery vehicle, Uber/Lyft, etc.'
  },
  { 
    id: 55, 
    section: 'OTHER VEHICLE #1', 
    type: Q_TYPES.TEXT, 
    q: 'Company Name (if commercial)', 
    placeholder: 'Business name',
    sample: '',
    required: false 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: OTHER DRIVER #1 (Questions 56-75)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 56, 
    section: 'OTHER DRIVER #1', 
    type: Q_TYPES.TEXT, 
    q: 'Other Driver\'s First Name', 
    placeholder: 'First name',
    sample: 'James',
    required: true 
  },
  { 
    id: 57, 
    section: 'OTHER DRIVER #1', 
    type: Q_TYPES.TEXT, 
    q: 'Other Driver\'s Last Name', 
    placeholder: 'Last name',
    sample: 'Wilson',
    required: true 
  },
  { 
    id: 58, 
    section: 'OTHER DRIVER #1', 
    type: Q_TYPES.ADDRESS, 
    q: 'Other Driver\'s Address', 
    placeholder: 'Full address',
    sample: '789 Oak Street, Tampa, FL 33609',
    required: false 
  },
  { 
    id: 59, 
    section: 'OTHER DRIVER #1', 
    type: Q_TYPES.PHONE, 
    q: 'Other Driver\'s Phone', 
    placeholder: '(555) 555-5555',
    sample: '(813) 555-7722',
    required: false 
  },
  { 
    id: 60, 
    section: 'OTHER DRIVER #1', 
    type: Q_TYPES.TEXT, 
    q: 'Other Driver\'s License Number', 
    placeholder: 'License #',
    sample: 'W123-456-78-901-0',
    required: false 
  },
  { 
    id: 61, 
    section: 'OTHER DRIVER #1', 
    type: Q_TYPES.SELECT, 
    q: 'Other Driver\'s License State', 
    options: ['Florida', 'Georgia', 'Alabama', 'Other', 'Unknown'],
    sample: 'Florida',
    required: false 
  },
  { 
    id: 62, 
    section: 'OTHER DRIVER #1', 
    type: Q_TYPES.SELECT, 
    q: 'Other Driver\'s Approximate Age', 
    options: ['Under 25', '25-35', '36-45', '46-55', '56-65', 'Over 65', 'Unknown'],
    sample: '46-55',
    required: false 
  },
  { 
    id: 63, 
    section: 'OTHER DRIVER #1', 
    type: Q_TYPES.SELECT, 
    q: 'Other Driver\'s Gender', 
    options: ['Male', 'Female', 'Unknown'],
    sample: 'Male',
    required: false 
  },
  { 
    id: 64, 
    section: 'OTHER DRIVER #1', 
    type: Q_TYPES.YESNO, 
    q: 'Did you speak with the other driver?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 65, 
    section: 'OTHER DRIVER #1', 
    type: Q_TYPES.TEXTAREA, 
    q: 'What did the other driver say?', 
    placeholder: 'Any statements made...',
    sample: 'He said he didn\'t see the light change.',
    required: false,
    guidance: 'Admissions can be important'
  },
  { 
    id: 66, 
    section: 'OTHER DRIVER #1', 
    type: Q_TYPES.YESNO, 
    q: 'Did the other driver apologize?', 
    sample: 'Yes',
    required: false 
  },
  { 
    id: 67, 
    section: 'OTHER DRIVER #1', 
    type: Q_TYPES.YESNO, 
    q: 'Did the other driver appear injured?', 
    sample: 'No',
    required: false 
  },
  { 
    id: 68, 
    section: 'OTHER DRIVER #1', 
    type: Q_TYPES.YESNO, 
    q: 'Did the other driver appear impaired (drugs/alcohol)?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 69, 
    section: 'OTHER DRIVER #1', 
    type: Q_TYPES.YESNO, 
    q: 'Was the other driver using a phone?', 
    sample: 'Unknown',
    required: false 
  },
  { 
    id: 70, 
    section: 'OTHER DRIVER #1', 
    type: Q_TYPES.YESNO, 
    q: 'Was the other driver cited by police?', 
    sample: 'Yes',
    required: true 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: OTHER DRIVER'S INSURANCE (Questions 71-85)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 71, 
    section: 'OTHER INSURANCE', 
    type: Q_TYPES.TEXT, 
    q: 'Other Driver\'s Insurance Company', 
    placeholder: 'Company name',
    sample: 'Geico',
    required: true 
  },
  { 
    id: 72, 
    section: 'OTHER INSURANCE', 
    type: Q_TYPES.TEXT, 
    q: 'Other Driver\'s Policy Number', 
    placeholder: 'Policy #',
    sample: 'GKO-4892751',
    required: false 
  },
  { 
    id: 73, 
    section: 'OTHER INSURANCE', 
    type: Q_TYPES.PHONE, 
    q: 'Other Insurance Phone', 
    placeholder: '(800) 555-5555',
    sample: '(800) 841-3000',
    required: false 
  },
  { 
    id: 74, 
    section: 'OTHER INSURANCE', 
    type: Q_TYPES.TEXT, 
    q: 'Their Claim Number (if known)', 
    placeholder: 'Claim #',
    sample: 'CLM-G-2025-443892',
    required: false 
  },
  { 
    id: 75, 
    section: 'OTHER INSURANCE', 
    type: Q_TYPES.YESNO, 
    q: 'Have you been contacted by their insurance?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 76, 
    section: 'OTHER INSURANCE', 
    type: Q_TYPES.YESNO, 
    q: 'Did you give a recorded statement to their insurance?', 
    sample: 'No',
    required: true,
    guidance: 'Important - should consult attorney first'
  },
  { 
    id: 77, 
    section: 'OTHER INSURANCE', 
    type: Q_TYPES.YESNO, 
    q: 'Did you sign anything from their insurance?', 
    sample: 'No',
    required: true 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: ADDITIONAL VEHICLES (Questions 78-90)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 78, 
    section: 'ADDITIONAL VEHICLES', 
    type: Q_TYPES.YESNO, 
    q: 'Were more than 2 vehicles involved?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 79, 
    section: 'ADDITIONAL VEHICLES', 
    type: Q_TYPES.NUMBER, 
    q: 'Total number of vehicles involved', 
    placeholder: 'Number',
    sample: '2',
    required: true 
  },
  { 
    id: 80, 
    section: 'ADDITIONAL VEHICLES', 
    type: Q_TYPES.TEXT, 
    q: 'Vehicle #3 Description (if any)', 
    placeholder: 'Year Make Model Color',
    sample: '',
    required: false 
  },
  { 
    id: 81, 
    section: 'ADDITIONAL VEHICLES', 
    type: Q_TYPES.TEXT, 
    q: 'Vehicle #3 Driver Name (if any)', 
    placeholder: 'Driver name',
    sample: '',
    required: false 
  },
  { 
    id: 82, 
    section: 'ADDITIONAL VEHICLES', 
    type: Q_TYPES.TEXT, 
    q: 'Vehicle #3 Insurance (if known)', 
    placeholder: 'Insurance company',
    sample: '',
    required: false 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: PASSENGERS IN YOUR VEHICLE (Questions 83-100)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 83, 
    section: 'YOUR PASSENGERS', 
    type: Q_TYPES.YESNO, 
    q: 'Were there passengers in YOUR vehicle?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 84, 
    section: 'YOUR PASSENGERS', 
    type: Q_TYPES.NUMBER, 
    q: 'Number of passengers in your vehicle', 
    placeholder: 'Number',
    sample: '0',
    required: false 
  },
  { 
    id: 85, 
    section: 'YOUR PASSENGERS', 
    type: Q_TYPES.TEXT, 
    q: 'Passenger #1 Name', 
    placeholder: 'Full name',
    sample: '',
    required: false 
  },
  { 
    id: 86, 
    section: 'YOUR PASSENGERS', 
    type: Q_TYPES.SELECT, 
    q: 'Passenger #1 Relationship', 
    options: ['Spouse', 'Child', 'Parent', 'Sibling', 'Friend', 'Coworker', 'Other'],
    sample: '',
    required: false 
  },
  { 
    id: 87, 
    section: 'YOUR PASSENGERS', 
    type: Q_TYPES.NUMBER, 
    q: 'Passenger #1 Age', 
    placeholder: 'Age',
    sample: '',
    required: false 
  },
  { 
    id: 88, 
    section: 'YOUR PASSENGERS', 
    type: Q_TYPES.YESNO, 
    q: 'Was Passenger #1 injured?', 
    sample: '',
    required: false 
  },
  { 
    id: 89, 
    section: 'YOUR PASSENGERS', 
    type: Q_TYPES.SELECT, 
    q: 'Passenger #1 Seat Position', 
    options: ['Front Passenger', 'Rear Left', 'Rear Middle', 'Rear Right', 'Other'],
    sample: '',
    required: false 
  },
  { 
    id: 90, 
    section: 'YOUR PASSENGERS', 
    type: Q_TYPES.YESNO, 
    q: 'Was Passenger #1 wearing seatbelt?', 
    sample: '',
    required: false 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: PASSENGERS IN OTHER VEHICLE (Questions 91-100)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 91, 
    section: 'OTHER PASSENGERS', 
    type: Q_TYPES.YESNO, 
    q: 'Were there passengers in the OTHER vehicle?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 92, 
    section: 'OTHER PASSENGERS', 
    type: Q_TYPES.NUMBER, 
    q: 'Number of passengers in other vehicle', 
    placeholder: 'Number',
    sample: '0',
    required: false 
  },
  { 
    id: 93, 
    section: 'OTHER PASSENGERS', 
    type: Q_TYPES.TEXT, 
    q: 'Other Vehicle Passenger Name(s)', 
    placeholder: 'Names if known',
    sample: '',
    required: false 
  },
  { 
    id: 94, 
    section: 'OTHER PASSENGERS', 
    type: Q_TYPES.YESNO, 
    q: 'Were any other vehicle passengers injured?', 
    sample: 'No',
    required: false 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: SPECIAL VEHICLE TYPES (Questions 95-110)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 95, 
    section: 'SPECIAL VEHICLES', 
    type: Q_TYPES.YESNO, 
    q: 'Was a commercial truck (semi/18-wheeler) involved?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 96, 
    section: 'SPECIAL VEHICLES', 
    type: Q_TYPES.TEXT, 
    q: 'Trucking Company Name', 
    placeholder: 'Company name',
    sample: '',
    required: false 
  },
  { 
    id: 97, 
    section: 'SPECIAL VEHICLES', 
    type: Q_TYPES.TEXT, 
    q: 'DOT Number (on truck)', 
    placeholder: 'DOT #',
    sample: '',
    required: false 
  },
  { 
    id: 98, 
    section: 'SPECIAL VEHICLES', 
    type: Q_TYPES.YESNO, 
    q: 'Was an Uber, Lyft, or rideshare involved?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 99, 
    section: 'SPECIAL VEHICLES', 
    type: Q_TYPES.SELECT, 
    q: 'Which rideshare service?', 
    options: ['Uber', 'Lyft', 'Other', 'Not Applicable'],
    sample: 'Not Applicable',
    required: false 
  },
  { 
    id: 100, 
    section: 'SPECIAL VEHICLES', 
    type: Q_TYPES.YESNO, 
    q: 'Were you a passenger in the rideshare?', 
    sample: 'No',
    required: false 
  },
  { 
    id: 101, 
    section: 'SPECIAL VEHICLES', 
    type: Q_TYPES.YESNO, 
    q: 'Was a government/city vehicle involved?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 102, 
    section: 'SPECIAL VEHICLES', 
    type: Q_TYPES.YESNO, 
    q: 'Was a bus involved?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 103, 
    section: 'SPECIAL VEHICLES', 
    type: Q_TYPES.YESNO, 
    q: 'Was a motorcycle involved?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 104, 
    section: 'SPECIAL VEHICLES', 
    type: Q_TYPES.YESNO, 
    q: 'Was a bicycle involved?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 105, 
    section: 'SPECIAL VEHICLES', 
    type: Q_TYPES.YESNO, 
    q: 'Was a pedestrian involved?', 
    sample: 'No',
    required: true 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: HIT AND RUN (Questions 106-115)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 106, 
    section: 'HIT AND RUN', 
    type: Q_TYPES.YESNO, 
    q: 'Did any vehicle leave the scene (hit and run)?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 107, 
    section: 'HIT AND RUN', 
    type: Q_TYPES.TEXT, 
    q: 'Description of vehicle that fled', 
    placeholder: 'Color, make, model, any details',
    sample: '',
    required: false 
  },
  { 
    id: 108, 
    section: 'HIT AND RUN', 
    type: Q_TYPES.TEXT, 
    q: 'License plate (partial or full)', 
    placeholder: 'Any characters you saw',
    sample: '',
    required: false 
  },
  { 
    id: 109, 
    section: 'HIT AND RUN', 
    type: Q_TYPES.SELECT, 
    q: 'Direction vehicle fled', 
    options: ['North', 'South', 'East', 'West', 'Unknown'],
    sample: '',
    required: false 
  },
  { 
    id: 110, 
    section: 'HIT AND RUN', 
    type: Q_TYPES.TEXT, 
    q: 'Description of driver who fled', 
    placeholder: 'Any details remembered',
    sample: '',
    required: false 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: PHOTOS & DOCUMENTATION (Questions 111-120)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 111, 
    section: 'PHOTOS', 
    type: Q_TYPES.YESNO, 
    q: 'Did you take photos at the scene?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 112, 
    section: 'PHOTOS', 
    type: Q_TYPES.NUMBER, 
    q: 'How many photos did you take?', 
    placeholder: 'Number',
    sample: '15',
    required: false 
  },
  { 
    id: 113, 
    section: 'PHOTOS', 
    type: Q_TYPES.YESNO, 
    q: 'Did you photograph the other vehicle?', 
    sample: 'Yes',
    required: false 
  },
  { 
    id: 114, 
    section: 'PHOTOS', 
    type: Q_TYPES.YESNO, 
    q: 'Did you photograph the other driver\'s info (license, insurance)?', 
    sample: 'Yes',
    required: false 
  },
  { 
    id: 115, 
    section: 'PHOTOS', 
    type: Q_TYPES.YESNO, 
    q: 'Did you photograph the scene/intersection?', 
    sample: 'Yes',
    required: false 
  },
  { 
    id: 116, 
    section: 'PHOTOS', 
    type: Q_TYPES.YESNO, 
    q: 'Did you photograph your injuries?', 
    sample: 'Yes',
    required: false 
  },
  { 
    id: 117, 
    section: 'PHOTOS', 
    type: Q_TYPES.YESNO, 
    q: 'Is there any dashcam footage?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 118, 
    section: 'PHOTOS', 
    type: Q_TYPES.YESNO, 
    q: 'Are there any surveillance cameras nearby?', 
    sample: 'Unknown',
    required: false,
    guidance: 'Gas stations, businesses often have cameras'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: EMERGENCY RESPONSE (Questions 119-127)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 119, 
    section: 'EMERGENCY RESPONSE', 
    type: Q_TYPES.YESNO, 
    q: 'Was an ambulance called?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 120, 
    section: 'EMERGENCY RESPONSE', 
    type: Q_TYPES.YESNO, 
    q: 'Did you leave by ambulance?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 121, 
    section: 'EMERGENCY RESPONSE', 
    type: Q_TYPES.TEXT, 
    q: 'Ambulance Service Name', 
    placeholder: 'Company name',
    sample: 'Tampa Fire Rescue',
    required: false 
  },
  { 
    id: 122, 
    section: 'EMERGENCY RESPONSE', 
    type: Q_TYPES.YESNO, 
    q: 'Was a fire truck at the scene?', 
    sample: 'Yes',
    required: false 
  },
  { 
    id: 123, 
    section: 'EMERGENCY RESPONSE', 
    type: Q_TYPES.TEXT, 
    q: 'Hospital you were taken to', 
    placeholder: 'Hospital name',
    sample: 'Tampa General Hospital',
    required: false 
  },
  { 
    id: 124, 
    section: 'EMERGENCY RESPONSE', 
    type: Q_TYPES.YESNO, 
    q: 'Was anyone else taken by ambulance?', 
    sample: 'No',
    required: false 
  },
  { 
    id: 125, 
    section: 'EMERGENCY RESPONSE', 
    type: Q_TYPES.YESNO, 
    q: 'Did you refuse ambulance transport?', 
    sample: 'No',
    required: false 
  },
  { 
    id: 126, 
    section: 'EMERGENCY RESPONSE', 
    type: Q_TYPES.SELECT, 
    q: 'How did you leave the scene? (if not ambulance)', 
    options: ['Ambulance', 'Family/friend picked me up', 'Taxi/Uber', 'Drove another vehicle', 'Walked', 'Other'],
    sample: 'Ambulance',
    required: true 
  },
  { 
    id: 127, 
    section: 'EMERGENCY RESPONSE', 
    type: Q_TYPES.TEXT, 
    q: 'Who picked you up? (if not ambulance)', 
    placeholder: 'Name',
    sample: '',
    required: false 
  },
];

export default PHASE_3_VEHICLES;
