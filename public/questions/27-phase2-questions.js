// ═══════════════════════════════════════════════════════════════════════════════
// ASK-GARY™ - PHASE 2: ACCIDENT CORE QUESTIONS
// 68 Questions - Date/Time, Location, Conditions, Impact, Police
// Version 1.0 | December 2025
// ═══════════════════════════════════════════════════════════════════════════════

const Q_TYPES = {
  TEXT: 'text',
  PHONE: 'phone',
  DATE: 'date',
  TIME: 'time',
  SELECT: 'select',
  YESNO: 'yesno',
  ADDRESS: 'address',
  TEXTAREA: 'textarea',
  NUMBER: 'number',
  AUDIO: 'audio',
};

export const PHASE_2_ACCIDENT = [
  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: DATE & TIME (Questions 1-8)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 1, 
    section: 'DATE & TIME', 
    type: Q_TYPES.DATE, 
    q: 'Date of Accident', 
    placeholder: 'MM/DD/YYYY',
    sample: '01/02/2025',
    required: true 
  },
  { 
    id: 2, 
    section: 'DATE & TIME', 
    type: Q_TYPES.TIME, 
    q: 'Approximate Time of Accident', 
    placeholder: 'HH:MM AM/PM',
    sample: '3:30 PM',
    required: true 
  },
  { 
    id: 3, 
    section: 'DATE & TIME', 
    type: Q_TYPES.SELECT, 
    q: 'Day of the Week', 
    options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    sample: 'Thursday',
    required: true 
  },
  { 
    id: 4, 
    section: 'DATE & TIME', 
    type: Q_TYPES.YESNO, 
    q: 'Was this during rush hour?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 5, 
    section: 'DATE & TIME', 
    type: Q_TYPES.SELECT, 
    q: 'How certain are you of the time?', 
    options: ['Exact time (checked clock/phone)', 'Within 15 minutes', 'Within 30 minutes', 'Within 1 hour', 'Rough estimate'],
    sample: 'Within 15 minutes',
    required: true 
  },
  { 
    id: 6, 
    section: 'DATE & TIME', 
    type: Q_TYPES.NUMBER, 
    q: 'Days since accident', 
    placeholder: 'Auto-calculated',
    sample: '13',
    required: false,
    guidance: 'Important for PIP deadline tracking'
  },
  { 
    id: 7, 
    section: 'DATE & TIME', 
    type: Q_TYPES.YESNO, 
    q: 'Did you seek medical care within 14 days?', 
    sample: 'Yes',
    required: true,
    guidance: 'Florida PIP requires treatment within 14 days'
  },
  { 
    id: 8, 
    section: 'DATE & TIME', 
    type: Q_TYPES.DATE, 
    q: 'Date of first medical treatment', 
    placeholder: 'MM/DD/YYYY',
    sample: '01/02/2025',
    required: true 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: ACCIDENT LOCATION (Questions 9-20)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 9, 
    section: 'LOCATION', 
    type: Q_TYPES.ADDRESS, 
    q: 'Accident Street Address or Intersection', 
    placeholder: '123 Main St or Main St & Oak Ave',
    sample: 'Dale Mabry Hwy & Kennedy Blvd',
    required: true 
  },
  { 
    id: 10, 
    section: 'LOCATION', 
    type: Q_TYPES.TEXT, 
    q: 'City', 
    placeholder: 'City name',
    sample: 'Tampa',
    required: true 
  },
  { 
    id: 11, 
    section: 'LOCATION', 
    type: Q_TYPES.TEXT, 
    q: 'County', 
    placeholder: 'County name',
    sample: 'Hillsborough',
    required: true 
  },
  { 
    id: 12, 
    section: 'LOCATION', 
    type: Q_TYPES.SELECT, 
    q: 'State', 
    options: ['Florida', 'Alabama', 'Georgia', 'Other'],
    sample: 'Florida',
    required: true 
  },
  { 
    id: 13, 
    section: 'LOCATION', 
    type: Q_TYPES.SELECT, 
    q: 'Type of Road/Area', 
    options: ['Highway/Interstate', 'Major Road/Boulevard', 'Residential Street', 'Parking Lot', 'Private Property', 'Toll Road', 'Other'],
    sample: 'Major Road/Boulevard',
    required: true 
  },
  { 
    id: 14, 
    section: 'LOCATION', 
    type: Q_TYPES.SELECT, 
    q: 'What was nearby? (Landmark)', 
    options: ['Gas Station', 'Shopping Center', 'Restaurant', 'School', 'Hospital', 'None notable', 'Other'],
    sample: 'Gas Station',
    required: false,
    guidance: 'Helps locate the exact spot'
  },
  { 
    id: 15, 
    section: 'LOCATION', 
    type: Q_TYPES.YESNO, 
    q: 'Was this at an intersection?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 16, 
    section: 'LOCATION', 
    type: Q_TYPES.SELECT, 
    q: 'Was there a traffic signal?', 
    options: ['Yes - Traffic Light', 'Yes - Stop Sign', 'Yes - Yield Sign', 'No - Uncontrolled', 'Other'],
    sample: 'Yes - Traffic Light',
    required: true 
  },
  { 
    id: 17, 
    section: 'LOCATION', 
    type: Q_TYPES.SELECT, 
    q: 'What was your traffic signal showing?', 
    options: ['Green', 'Yellow', 'Red', 'Flashing', 'Not Applicable'],
    sample: 'Green',
    required: true 
  },
  { 
    id: 18, 
    section: 'LOCATION', 
    type: Q_TYPES.NUMBER, 
    q: 'Speed Limit at Location', 
    placeholder: 'MPH',
    sample: '45',
    required: false 
  },
  { 
    id: 19, 
    section: 'LOCATION', 
    type: Q_TYPES.SELECT, 
    q: 'Number of Lanes (your direction)', 
    options: ['1 lane', '2 lanes', '3 lanes', '4+ lanes'],
    sample: '3 lanes',
    required: false 
  },
  { 
    id: 20, 
    section: 'LOCATION', 
    type: Q_TYPES.SELECT, 
    q: 'Which lane were you in?', 
    options: ['Left/Fast Lane', 'Middle Lane', 'Right Lane', 'Turn Lane', 'Not Applicable'],
    sample: 'Middle Lane',
    required: true 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: WEATHER & CONDITIONS (Questions 21-28)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 21, 
    section: 'CONDITIONS', 
    type: Q_TYPES.SELECT, 
    q: 'Weather Conditions', 
    options: ['Clear/Sunny', 'Cloudy', 'Light Rain', 'Heavy Rain', 'Fog', 'Windy', 'Storm', 'Other'],
    sample: 'Clear/Sunny',
    required: true 
  },
  { 
    id: 22, 
    section: 'CONDITIONS', 
    type: Q_TYPES.SELECT, 
    q: 'Road Surface Conditions', 
    options: ['Dry', 'Wet', 'Standing Water', 'Icy', 'Debris on Road', 'Under Construction', 'Potholes'],
    sample: 'Dry',
    required: true 
  },
  { 
    id: 23, 
    section: 'CONDITIONS', 
    type: Q_TYPES.SELECT, 
    q: 'Lighting Conditions', 
    options: ['Daylight', 'Dawn', 'Dusk', 'Dark - Street Lights', 'Dark - No Lights'],
    sample: 'Daylight',
    required: true 
  },
  { 
    id: 24, 
    section: 'CONDITIONS', 
    type: Q_TYPES.YESNO, 
    q: 'Was visibility affected by sun glare?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 25, 
    section: 'CONDITIONS', 
    type: Q_TYPES.SELECT, 
    q: 'Traffic Level', 
    options: ['Light Traffic', 'Moderate Traffic', 'Heavy Traffic', 'Stop and Go', 'No Other Traffic'],
    sample: 'Moderate Traffic',
    required: true 
  },
  { 
    id: 26, 
    section: 'CONDITIONS', 
    type: Q_TYPES.YESNO, 
    q: 'Was there any construction in the area?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 27, 
    section: 'CONDITIONS', 
    type: Q_TYPES.YESNO, 
    q: 'Were there any road hazards?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 28, 
    section: 'CONDITIONS', 
    type: Q_TYPES.TEXTAREA, 
    q: 'Describe any unusual conditions', 
    placeholder: 'Any other factors that may have contributed...',
    sample: 'Normal conditions, no unusual factors.',
    required: false 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: YOUR DIRECTION & ACTIONS (Questions 29-38)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 29, 
    section: 'YOUR DIRECTION', 
    type: Q_TYPES.SELECT, 
    q: 'What direction were you traveling?', 
    options: ['North', 'South', 'East', 'West', 'Unknown'],
    sample: 'South',
    required: true 
  },
  { 
    id: 30, 
    section: 'YOUR DIRECTION', 
    type: Q_TYPES.TEXT, 
    q: 'What street/road were you on?', 
    placeholder: 'Street name',
    sample: 'Dale Mabry Highway',
    required: true 
  },
  { 
    id: 31, 
    section: 'YOUR DIRECTION', 
    type: Q_TYPES.SELECT, 
    q: 'What were you doing just before the accident?', 
    options: ['Driving straight', 'Turning left', 'Turning right', 'Changing lanes', 'Stopped at light/sign', 'Slowing down', 'Accelerating', 'Backing up', 'Parked'],
    sample: 'Driving straight',
    required: true 
  },
  { 
    id: 32, 
    section: 'YOUR DIRECTION', 
    type: Q_TYPES.NUMBER, 
    q: 'Estimated speed before impact (MPH)', 
    placeholder: 'Your speed',
    sample: '40',
    required: true 
  },
  { 
    id: 33, 
    section: 'YOUR DIRECTION', 
    type: Q_TYPES.TEXT, 
    q: 'Where were you coming from?', 
    placeholder: 'Location/address',
    sample: 'Doctor\'s appointment at 3200 Kennedy Blvd',
    required: false 
  },
  { 
    id: 34, 
    section: 'YOUR DIRECTION', 
    type: Q_TYPES.TEXT, 
    q: 'Where were you going?', 
    placeholder: 'Destination',
    sample: 'Home',
    required: false 
  },
  { 
    id: 35, 
    section: 'YOUR DIRECTION', 
    type: Q_TYPES.YESNO, 
    q: 'Were you using turn signals?', 
    sample: 'No',
    required: true,
    guidance: 'If you were turning or changing lanes'
  },
  { 
    id: 36, 
    section: 'YOUR DIRECTION', 
    type: Q_TYPES.YESNO, 
    q: 'Did you see the other vehicle before impact?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 37, 
    section: 'YOUR DIRECTION', 
    type: Q_TYPES.YESNO, 
    q: 'Did you attempt to brake?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 38, 
    section: 'YOUR DIRECTION', 
    type: Q_TYPES.YESNO, 
    q: 'Did you attempt to steer away?', 
    sample: 'No',
    required: true 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: THE IMPACT (Questions 39-50)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 39, 
    section: 'THE IMPACT', 
    type: Q_TYPES.SELECT, 
    q: 'Type of Collision', 
    options: ['Rear-end (you were hit from behind)', 'Rear-end (you hit someone)', 'Side impact (T-bone)', 'Head-on', 'Sideswipe', 'Rollover', 'Hit and Run', 'Multi-vehicle', 'Single vehicle', 'Other'],
    sample: 'Side impact (T-bone)',
    required: true 
  },
  { 
    id: 40, 
    section: 'THE IMPACT', 
    type: Q_TYPES.SELECT, 
    q: 'Which part of YOUR vehicle was hit?', 
    options: ['Front', 'Rear', 'Driver Side', 'Passenger Side', 'Front Driver Corner', 'Front Passenger Corner', 'Rear Driver Corner', 'Rear Passenger Corner', 'Multiple Areas'],
    sample: 'Driver Side',
    required: true 
  },
  { 
    id: 41, 
    section: 'THE IMPACT', 
    type: Q_TYPES.SELECT, 
    q: 'How hard was the impact?', 
    options: ['Minor bump', 'Moderate', 'Severe', 'Extremely severe'],
    sample: 'Severe',
    required: true 
  },
  { 
    id: 42, 
    section: 'THE IMPACT', 
    type: Q_TYPES.YESNO, 
    q: 'Did your airbags deploy?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 43, 
    section: 'THE IMPACT', 
    type: Q_TYPES.SELECT, 
    q: 'Which airbags deployed?', 
    options: ['Driver front', 'Passenger front', 'Side curtain', 'Multiple', 'None', 'Unknown'],
    sample: 'Driver front',
    required: false 
  },
  { 
    id: 44, 
    section: 'THE IMPACT', 
    type: Q_TYPES.YESNO, 
    q: 'Were you wearing a seatbelt?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 45, 
    section: 'THE IMPACT', 
    type: Q_TYPES.YESNO, 
    q: 'Did your vehicle spin or rotate?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 46, 
    section: 'THE IMPACT', 
    type: Q_TYPES.YESNO, 
    q: 'Were you pushed into another vehicle or object?', 
    sample: 'Yes',
    required: true,
    guidance: 'Secondary impacts matter'
  },
  { 
    id: 47, 
    section: 'THE IMPACT', 
    type: Q_TYPES.TEXTAREA, 
    q: 'Describe what you hit (if secondary impact)', 
    placeholder: 'Another car, guardrail, pole, etc.',
    sample: 'Pushed into oncoming traffic lane',
    required: false 
  },
  { 
    id: 48, 
    section: 'THE IMPACT', 
    type: Q_TYPES.YESNO, 
    q: 'Was your vehicle drivable after the accident?', 
    sample: 'No',
    required: true 
  },
  { 
    id: 49, 
    section: 'THE IMPACT', 
    type: Q_TYPES.SELECT, 
    q: 'How was your vehicle removed from scene?', 
    options: ['Drove it myself', 'Towed', 'Someone else drove it', 'Left at scene', 'Police impound'],
    sample: 'Towed',
    required: true 
  },
  { 
    id: 50, 
    section: 'THE IMPACT', 
    type: Q_TYPES.TEXT, 
    q: 'Tow company name (if towed)', 
    placeholder: 'Company name',
    sample: 'AAA Towing Tampa',
    required: false 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: POLICE RESPONSE (Questions 51-62)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 51, 
    section: 'POLICE', 
    type: Q_TYPES.YESNO, 
    q: 'Were police called to the scene?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 52, 
    section: 'POLICE', 
    type: Q_TYPES.YESNO, 
    q: 'Did police come to the scene?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 53, 
    section: 'POLICE', 
    type: Q_TYPES.SELECT, 
    q: 'Which agency responded?', 
    options: ['City Police', 'County Sheriff', 'State Highway Patrol', 'Florida Highway Patrol', 'Multiple agencies', 'Unknown'],
    sample: 'City Police',
    required: true 
  },
  { 
    id: 54, 
    section: 'POLICE', 
    type: Q_TYPES.TEXT, 
    q: 'Police Department Name', 
    placeholder: 'e.g., Tampa Police Department',
    sample: 'Tampa Police Department',
    required: false 
  },
  { 
    id: 55, 
    section: 'POLICE', 
    type: Q_TYPES.TEXT, 
    q: 'Police Report/Case Number', 
    placeholder: 'Report number',
    sample: 'TPD-2025-00234',
    required: false,
    guidance: 'Found on the card officers give you'
  },
  { 
    id: 56, 
    section: 'POLICE', 
    type: Q_TYPES.TEXT, 
    q: 'Responding Officer Name(s)', 
    placeholder: 'Officer name',
    sample: 'Officer Rodriguez, Officer Chen',
    required: false 
  },
  { 
    id: 57, 
    section: 'POLICE', 
    type: Q_TYPES.TEXT, 
    q: 'Officer Badge Number(s)', 
    placeholder: 'Badge number',
    sample: '4521, 3897',
    required: false 
  },
  { 
    id: 58, 
    section: 'POLICE', 
    type: Q_TYPES.YESNO, 
    q: 'Was anyone given a citation/ticket?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 59, 
    section: 'POLICE', 
    type: Q_TYPES.SELECT, 
    q: 'Who received the citation?', 
    options: ['Other driver', 'Me', 'Both', 'No one', 'Unknown'],
    sample: 'Other driver',
    required: true 
  },
  { 
    id: 60, 
    section: 'POLICE', 
    type: Q_TYPES.TEXT, 
    q: 'What was the citation for?', 
    placeholder: 'Violation type',
    sample: 'Running red light',
    required: false 
  },
  { 
    id: 61, 
    section: 'POLICE', 
    type: Q_TYPES.YESNO, 
    q: 'Do you have a copy of the police report?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 62, 
    section: 'POLICE', 
    type: Q_TYPES.YESNO, 
    q: 'Did police take photos at the scene?', 
    sample: 'Yes',
    required: false 
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION: WITNESSES (Questions 63-68)
  // ═══════════════════════════════════════════════════════════════════════════
  { 
    id: 63, 
    section: 'WITNESSES', 
    type: Q_TYPES.YESNO, 
    q: 'Were there any witnesses?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 64, 
    section: 'WITNESSES', 
    type: Q_TYPES.NUMBER, 
    q: 'How many witnesses?', 
    placeholder: 'Number',
    sample: '2',
    required: false 
  },
  { 
    id: 65, 
    section: 'WITNESSES', 
    type: Q_TYPES.YESNO, 
    q: 'Did you get any witness contact information?', 
    sample: 'Yes',
    required: true 
  },
  { 
    id: 66, 
    section: 'WITNESSES', 
    type: Q_TYPES.TEXT, 
    q: 'Witness #1 Name', 
    placeholder: 'Full name',
    sample: 'Sandra Miller',
    required: false 
  },
  { 
    id: 67, 
    section: 'WITNESSES', 
    type: Q_TYPES.PHONE, 
    q: 'Witness #1 Phone', 
    placeholder: '(555) 555-5555',
    sample: '(813) 555-8899',
    required: false 
  },
  { 
    id: 68, 
    section: 'WITNESSES', 
    type: Q_TYPES.TEXTAREA, 
    q: 'What did witnesses say they saw?', 
    placeholder: 'Brief description',
    sample: 'Witness said the truck ran the red light and hit my car.',
    required: false 
  },
];

export default PHASE_2_ACCIDENT;
