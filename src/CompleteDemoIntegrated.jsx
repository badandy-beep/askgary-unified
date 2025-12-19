import React, { useState, useEffect, useCallback } from 'react';

// ═══════════════════════════════════════════════════════════════════════════════
// ASK-GARY COMPLETE INTAKE SYSTEM
// Full seamless flow: Audio Interview → Transcript Review → Full Questionnaire
// Presenter Mode: Double-tap or SKIP button to advance quickly
// Version 1.0 | December 2025 | Noetic Dharma
// ═══════════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════════
// DESIGN SYSTEM
// ═══════════════════════════════════════════════════════════════════════════════
const COLORS = {
  primary: '#C41E3A', primaryDark: '#991B1B', primaryLight: '#FFF0F0',
  success: '#30D158', successDark: '#248A3D', successLight: '#E8FFF0',
  warning: '#FFD60A', warningDark: '#B59410', warningLight: '#FFF8E8',
  danger: '#FF3B30', dangerLight: '#FFF5F5',
  info: '#007AFF', infoLight: '#E8F4FF',
  purple: '#AF52DE', purpleLight: '#F3E8FF',
  orange: '#FF9500', orangeLight: '#FFF4E6',
  black: '#000000', charcoal: '#1C1C1E', darkGray: '#3A3A3C',
  gray: '#8E8E93', lightGray: '#E5E5EA', offWhite: '#F2F2F7', white: '#FFFFFF',
};

const FONT = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif';

// ═══════════════════════════════════════════════════════════════════════════════
// AUDIO INTERVIEW QUESTIONS (19 Questions)
// ═══════════════════════════════════════════════════════════════════════════════
const AUDIO_QUESTIONS = [
  { id: 1, section: 'YOUR STORY', title: 'What Happened', prompt: 'In your own words, tell us what happened.', guidance: 'Start from the beginning. Where were you going? What were you doing right before the accident?', sample: "I was driving home from work on US-41, heading south toward my apartment. I was stopped at a red light at the intersection with Fruitville Road. It was around 5:30 PM during rush hour. I was just sitting there waiting for the light to change when suddenly I heard screeching brakes behind me. Before I could even react, I was slammed from behind. My head whipped back against the headrest really hard. When I got out, I saw it was a white box truck that hit me. The driver got out and immediately said, 'I'm so sorry, I was looking at my GPS and didn't see you stopped.'" },
  { id: 2, section: 'LOCATION', title: 'Accident Location', prompt: 'Where exactly did the accident happen?', guidance: 'Street names, intersections, landmarks, city', sample: "The accident happened at the intersection of US Highway 41 and Fruitville Road in Sarasota, Florida. It's right by the Publix shopping center on the southwest corner." },
  { id: 3, section: 'DATE & TIME', title: 'When It Happened', prompt: 'When did the accident occur?', guidance: 'Date, day of week, approximate time', sample: "The accident occurred on Thursday, November 28th, 2025. It was approximately 5:30 in the evening, during rush hour traffic." },
  { id: 4, section: 'YOUR TRIP', title: 'Trip Details', prompt: 'Where were you going and coming from?', guidance: 'Starting point, destination, purpose of trip', sample: "I was driving home from work. I'm a registered nurse at Tampa General Hospital. I work the day shift and was heading back to my apartment in Sarasota." },
  { id: 5, section: 'CONDITIONS', title: 'Weather & Road', prompt: 'What were the weather and road conditions?', guidance: 'Weather, visibility, road surface, traffic', sample: "The weather was clear and sunny. The roads were completely dry. It was still daylight with good visibility. There was no rain, fog, or anything that would have affected visibility." },
  { id: 6, section: 'VEHICLES', title: 'Vehicles Involved', prompt: 'How many vehicles were involved? Describe them.', guidance: 'Number of vehicles, types, colors, any markings', sample: "There were two vehicles involved. My car, which is a Honda Accord, and a large white box truck. The truck had 'ABC Plumbing Services' written on the side." },
  { id: 7, section: 'YOUR VEHICLE', title: 'Your Vehicle Damage', prompt: 'Describe the damage to your vehicle.', guidance: 'What parts are damaged? Is it drivable? Where is it now?', sample: "I drive a 2022 Honda Accord, white in color. The damage is severe — the entire rear end is smashed in. The trunk won't open, the rear bumper is destroyed, and the rear lights are completely shattered. The car was towed because it couldn't be driven. I believe it may be totaled." },
  { id: 8, section: 'PASSENGERS', title: 'Passengers', prompt: 'Was anyone else in your vehicle?', guidance: 'Names, relationships, were they injured?', sample: "I was alone in the car at the time of the accident. There were no passengers with me." },
  { id: 9, section: 'FAULT', title: 'Who Was At Fault', prompt: 'In your opinion, who was at fault?', guidance: 'Why do you believe this?', sample: "In my opinion, the truck driver was 100% at fault. I was completely stopped at a red light, not moving at all. He rear-ended me because he admitted he was distracted by his GPS." },
  { id: 10, section: 'STATEMENTS', title: 'Other Driver Statements', prompt: 'Did the other driver say anything?', guidance: 'Any admissions, apologies, explanations?', sample: "Yes, the other driver made several statements admitting fault. Immediately after the accident, he said: 'I'm so sorry, I didn't see you stopped there. I was looking at my GPS.' He repeated this apology multiple times." },
  { id: 11, section: 'CITATIONS', title: 'Traffic Citations', prompt: 'Were any traffic citations issued?', guidance: 'Who got tickets? For what?', sample: "Yes, the truck driver received a traffic citation from the police officer at the scene. He was cited for careless driving. I did not receive any citation." },
  { id: 12, section: 'WITNESSES', title: 'Witnesses', prompt: 'Were there any witnesses?', guidance: 'Names, contact info, what did they see?', sample: "Yes, there was a witness. A woman named Jennifer was in the car next to me at the light and saw the whole thing happen. She gave me her phone number and said she would provide a statement." },
  { id: 13, section: 'POLICE', title: 'Police Response', prompt: 'Did police respond? Report filed?', guidance: 'Department, officer name, report number', sample: "Yes, the police responded. The Sarasota Police Department sent officers to the scene. Officer Martinez was the responding officer who took the report. An accident report was filed." },
  { id: 14, section: 'YOUR INSURANCE', title: 'Your Insurance', prompt: 'What is your insurance information?', guidance: 'Company name, type of coverage', sample: "My car insurance company is GEICO. I have full coverage including collision and comprehensive." },
  { id: 15, section: 'THEIR INSURANCE', title: "Other Driver's Insurance", prompt: "Do you have the other driver's insurance info?", guidance: 'Company, did you get their card?', sample: "The other driver's insurance company is Progressive. We exchanged information at the scene, and I took a photo of his insurance card." },
  { id: 16, section: 'INJURIES', title: 'Your Injuries', prompt: 'Describe all of your injuries.', guidance: 'Every pain, symptom, limitation you\'re experiencing', sample: "I have multiple injuries. My neck hurts the most — I can barely turn my head. I have a large bruise across my chest from the seatbelt. I'm experiencing back pain that shoots down my left leg. I have a persistent headache. I'm having trouble sleeping. I also feel anxious and scared to drive now." },
  { id: 17, section: 'MEDICAL CARE', title: 'Medical Treatment', prompt: 'What medical treatment have you received?', guidance: 'ER visit, doctors, tests, medications', sample: "Yes, I went to the emergency room at Sarasota Memorial Hospital the night of the accident. They took X-rays of my neck and back. The doctor gave me prescription pain medication and muscle relaxers. They said I need to follow up with my primary care doctor and get an MRI." },
  { id: 18, section: 'EMPLOYMENT', title: 'Work Impact', prompt: 'How has this affected your work?', guidance: 'Job, missed work, ability to perform duties', sample: "I'm a registered nurse at Tampa General Hospital, full-time day shift. Because of my injuries, I've already missed 3 days of work. I don't know when I'll be able to return because my job requires physical activity — lifting patients, standing for long periods." },
  { id: 19, section: 'ADDITIONAL', title: 'Anything Else', prompt: 'Is there anything else you want us to know?', guidance: 'Family impact, concerns, questions', sample: "I'm really stressed out about this situation. I'm a single mother with two kids, ages 8 and 12. This was my only car, and now I have no way to get to work or take my kids to school. Bills are already piling up. Please help me get the compensation I deserve so I can take care of my family." },
];

// ═══════════════════════════════════════════════════════════════════════════════
// QUESTIONNAIRE PHASES (7 Phases, ~90 representative questions for demo)
// ═══════════════════════════════════════════════════════════════════════════════
const PHASES = [
  { id: 1, name: 'ONBOARDING', title: 'Your Information', icon: '👤', color: COLORS.primary },
  { id: 2, name: 'ACCIDENT', title: 'Accident Details', icon: '🚗', color: COLORS.orange },
  { id: 3, name: 'VEHICLES', title: 'Vehicles & Parties', icon: '🚙', color: COLORS.info },
  { id: 4, name: 'EVIDENCE', title: 'Evidence & Documents', icon: '📷', color: COLORS.purple },
  { id: 5, name: 'MEDICAL', title: 'Medical & Injuries', icon: '🏥', color: COLORS.success },
  { id: 6, name: 'DAMAGES', title: 'Damages & Losses', icon: '💰', color: COLORS.warning },
  { id: 7, name: 'FINAL', title: 'Finalization', icon: '✍️', color: COLORS.charcoal },
];

const FORM_QUESTIONS = {
  1: [
    { id: '1.1', section: 'PERSONAL', title: 'Legal First Name', prompt: 'What is your legal first name?', type: 'text', sample: 'Maria' },
    { id: '1.2', section: 'PERSONAL', title: 'Legal Middle Name', prompt: 'What is your middle name?', type: 'text', sample: 'Elena' },
    { id: '1.3', section: 'PERSONAL', title: 'Legal Last Name', prompt: 'What is your legal last name?', type: 'text', sample: 'Vasquez' },
    { id: '1.4', section: 'PERSONAL', title: 'Date of Birth', prompt: 'What is your date of birth?', type: 'date', sample: '1987-05-15' },
    { id: '1.5', section: 'PERSONAL', title: 'Social Security', prompt: 'What is your SSN?', type: 'ssn', guidance: '🔒 Encrypted & protected', sample: '***-**-4521' },
    { id: '1.6', section: 'CONTACT', title: 'Primary Phone', prompt: 'What is your primary phone number?', type: 'phone', sample: '(813) 555-9247' },
    { id: '1.7', section: 'CONTACT', title: 'Can We Text?', prompt: 'Can we send text messages?', type: 'yesno', sample: 'yes' },
    { id: '1.8', section: 'CONTACT', title: 'Email Address', prompt: 'What is your email address?', type: 'email', sample: 'maria.vasquez@email.com' },
    { id: '1.9', section: 'ADDRESS', title: 'Street Address', prompt: 'What is your street address?', type: 'text', sample: '4521 Palm Bay Drive, Apt 204' },
    { id: '1.10', section: 'ADDRESS', title: 'City', prompt: 'What city do you live in?', type: 'text', sample: 'Sarasota' },
    { id: '1.11', section: 'ADDRESS', title: 'State', prompt: 'What state?', type: 'select', options: ['Florida', 'Georgia', 'Alabama', 'Other'], sample: 'Florida' },
    { id: '1.12', section: 'ADDRESS', title: 'ZIP Code', prompt: 'What is your ZIP code?', type: 'text', sample: '34231' },
    { id: '1.13', section: 'EMERGENCY', title: 'Emergency Contact', prompt: 'Emergency contact name?', type: 'text', sample: 'Rosa Vasquez' },
    { id: '1.14', section: 'EMERGENCY', title: 'Relationship', prompt: 'Their relationship to you?', type: 'select', options: ['Spouse', 'Parent', 'Child', 'Sibling', 'Friend', 'Other'], sample: 'Parent' },
    { id: '1.15', section: 'EMERGENCY', title: 'Emergency Phone', prompt: 'Their phone number?', type: 'phone', sample: '(813) 555-1234' },
  ],
  2: [
    { id: '2.1', section: 'DATE & TIME', title: 'Date of Accident', prompt: 'What date did the accident occur?', type: 'date', sample: '2025-11-28' },
    { id: '2.2', section: 'DATE & TIME', title: 'Time of Day', prompt: 'What time of day?', type: 'select', options: ['Morning (6am-12pm)', 'Afternoon (12pm-5pm)', 'Evening (5pm-9pm)', 'Night (9pm-6am)'], sample: 'Evening (5pm-9pm)' },
    { id: '2.3', section: 'DATE & TIME', title: 'Day of Week', prompt: 'What day of the week?', type: 'select', options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], sample: 'Thursday' },
    { id: '2.4', section: 'LOCATION', title: 'Street Name', prompt: 'What street did it happen on?', type: 'text', sample: 'US Highway 41' },
    { id: '2.5', section: 'LOCATION', title: 'Cross Street', prompt: 'Nearest cross street?', type: 'text', sample: 'Fruitville Road' },
    { id: '2.6', section: 'LOCATION', title: 'City', prompt: 'What city?', type: 'text', sample: 'Sarasota' },
    { id: '2.7', section: 'LOCATION', title: 'County', prompt: 'What county?', type: 'text', sample: 'Sarasota County' },
    { id: '2.8', section: 'TYPE', title: 'Accident Type', prompt: 'What type of accident?', type: 'radio', options: ['Rear-end', 'Side-impact (T-bone)', 'Head-on', 'Sideswipe', 'Hit and run', 'Multi-vehicle', 'Single vehicle', 'Other'], sample: 'Rear-end' },
    { id: '2.9', section: 'TYPE', title: 'Who Hit Who', prompt: 'Who hit who?', type: 'radio', options: ['They hit me', 'I hit them', 'Both collided', 'Not sure'], sample: 'They hit me' },
    { id: '2.10', section: 'TYPE', title: 'Point of Impact', prompt: 'Where were you hit?', type: 'radio', options: ['Front', 'Rear', 'Driver side', 'Passenger side', 'Multiple'], sample: 'Rear' },
    { id: '2.11', section: 'CONDITIONS', title: 'Weather', prompt: 'What was the weather?', type: 'radio', options: ['Clear/Sunny', 'Cloudy', 'Raining', 'Heavy Rain', 'Fog', 'Other'], sample: 'Clear/Sunny' },
    { id: '2.12', section: 'CONDITIONS', title: 'Road Surface', prompt: 'Road conditions?', type: 'radio', options: ['Dry', 'Wet', 'Icy', 'Construction', 'Other'], sample: 'Dry' },
    { id: '2.13', section: 'CONDITIONS', title: 'Lighting', prompt: 'Lighting conditions?', type: 'radio', options: ['Daylight', 'Dusk/Dawn', 'Dark with lights', 'Dark no lights'], sample: 'Daylight' },
  ],
  3: [
    { id: '3.1', section: 'YOUR VEHICLE', title: 'Vehicle Year', prompt: 'What year is your vehicle?', type: 'select', options: ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', 'Older'], sample: '2022' },
    { id: '3.2', section: 'YOUR VEHICLE', title: 'Make', prompt: 'Vehicle make?', type: 'text', sample: 'Honda' },
    { id: '3.3', section: 'YOUR VEHICLE', title: 'Model', prompt: 'Vehicle model?', type: 'text', sample: 'Accord' },
    { id: '3.4', section: 'YOUR VEHICLE', title: 'Color', prompt: 'Vehicle color?', type: 'text', sample: 'White' },
    { id: '3.5', section: 'YOUR VEHICLE', title: 'License Plate', prompt: 'License plate number?', type: 'text', sample: 'FLSUN22' },
    { id: '3.6', section: 'YOUR VEHICLE', title: 'Own or Lease', prompt: 'Do you own or lease?', type: 'radio', options: ['Own outright', 'Have a loan', 'Lease', 'Belongs to someone else'], sample: 'Have a loan' },
    { id: '3.7', section: 'DAMAGE', title: 'Damage Severity', prompt: 'How severe is the damage?', type: 'radio', options: ['Minor scratches', 'Moderate', 'Severe', 'Totaled'], sample: 'Totaled' },
    { id: '3.8', section: 'DAMAGE', title: 'Damage Areas', prompt: 'What areas are damaged?', type: 'checkbox', options: ['Front bumper', 'Rear bumper', 'Hood', 'Trunk', 'Driver side', 'Passenger side', 'Windshield', 'Lights'], sample: ['Rear bumper', 'Trunk', 'Lights'] },
    { id: '3.9', section: 'DAMAGE', title: 'Drivable?', prompt: 'Is it drivable?', type: 'yesno', sample: 'no' },
    { id: '3.10', section: 'DAMAGE', title: 'Where Is It?', prompt: 'Where is your vehicle now?', type: 'radio', options: ['At home', 'Body shop', 'Tow yard', 'Dealership', 'Unknown'], sample: 'Tow yard' },
    { id: '3.11', section: 'OTHER VEHICLE', title: 'Other Vehicle Type', prompt: 'What type of vehicle hit you?', type: 'radio', options: ['Car/Sedan', 'SUV', 'Pickup', 'Van', 'Box Truck', 'Semi/18-Wheeler', 'Other'], sample: 'Box Truck' },
    { id: '3.12', section: 'OTHER VEHICLE', title: 'Commercial?', prompt: 'Was it a commercial vehicle?', type: 'yesno', sample: 'yes' },
    { id: '3.13', section: 'OTHER VEHICLE', title: 'Company Name', prompt: 'Company name on vehicle?', type: 'text', sample: 'ABC Plumbing Services' },
    { id: '3.14', section: 'OTHER DRIVER', title: 'Driver Name', prompt: 'Other driver\'s name?', type: 'text', sample: 'Robert Johnson' },
    { id: '3.15', section: 'OTHER DRIVER', title: 'Their Insurance', prompt: 'Their insurance company?', type: 'text', sample: 'Progressive' },
    { id: '3.16', section: 'WITNESSES', title: 'Any Witnesses?', prompt: 'Were there witnesses?', type: 'yesno', sample: 'yes' },
    { id: '3.17', section: 'WITNESSES', title: 'Witness Name', prompt: 'Witness name?', type: 'text', sample: 'Jennifer Williams' },
    { id: '3.18', section: 'WITNESSES', title: 'Witness Phone', prompt: 'Witness phone number?', type: 'phone', sample: '(941) 555-4567' },
  ],
  4: [
    { id: '4.1', section: 'PHOTOS', title: 'Photos Taken?', prompt: 'Did you take photos at scene?', type: 'yesno', sample: 'yes' },
    { id: '4.2', section: 'PHOTOS', title: 'What Photos', prompt: 'What did you photograph?', type: 'checkbox', options: ['My vehicle', 'Other vehicle', 'Scene', 'Street signs', 'Injuries', 'Other driver info'], sample: ['My vehicle', 'Other vehicle', 'Scene', 'Other driver info'] },
    { id: '4.3', section: 'PHOTOS', title: 'How Many', prompt: 'Approximately how many?', type: 'select', options: ['1-5', '6-10', '11-20', '20+'], sample: '6-10' },
    { id: '4.4', section: 'POLICE', title: 'Police Called?', prompt: 'Were police called?', type: 'yesno', sample: 'yes' },
    { id: '4.5', section: 'POLICE', title: 'Have Report?', prompt: 'Do you have the police report?', type: 'yesno', sample: 'no' },
    { id: '4.6', section: 'POLICE', title: 'Report Number', prompt: 'Report number if known?', type: 'text', sample: 'SPD-2025-118547' },
    { id: '4.7', section: 'VIDEO', title: 'Dashcam?', prompt: 'Do you have a dashcam?', type: 'yesno', sample: 'no' },
    { id: '4.8', section: 'DOCUMENTS', title: 'Insurance Docs?', prompt: 'Have your insurance documents?', type: 'yesno', sample: 'yes' },
    { id: '4.9', section: 'DOCUMENTS', title: 'Medical Bills?', prompt: 'Have medical bills?', type: 'yesno', sample: 'yes' },
  ],
  5: [
    { id: '5.1', section: 'ER VISIT', title: 'ER Visit?', prompt: 'Did you go to the ER?', type: 'yesno', sample: 'yes' },
    { id: '5.2', section: 'ER VISIT', title: 'Which Hospital', prompt: 'Which hospital?', type: 'text', sample: 'Sarasota Memorial Hospital' },
    { id: '5.3', section: 'ER VISIT', title: 'ER Date', prompt: 'Date of ER visit?', type: 'date', sample: '2025-11-28' },
    { id: '5.4', section: 'ER VISIT', title: 'How Got There', prompt: 'How did you get there?', type: 'radio', options: ['Ambulance', 'Someone drove me', 'Drove myself', 'Uber/Lyft'], sample: 'Someone drove me' },
    { id: '5.5', section: 'INJURIES', title: 'Body Parts Hurt', prompt: 'What body parts are injured?', type: 'checkbox', options: ['Head', 'Neck', 'Upper Back', 'Lower Back', 'Shoulder', 'Arm', 'Chest', 'Hip', 'Leg', 'Ankle/Foot'], sample: ['Neck', 'Upper Back', 'Lower Back', 'Chest'] },
    { id: '5.6', section: 'INJURIES', title: 'Describe Pain', prompt: 'Describe your pain in your own words', type: 'audio', guidance: 'Where does it hurt? How bad (1-10)? What makes it worse?', sample: 'My neck hurts constantly, rated 7 out of 10. Lower back pain shoots down my left leg. Chest is sore from the seatbelt. I get headaches every day and have trouble sleeping because of the pain.' },
    { id: '5.7', section: 'INJURIES', title: 'Headaches?', prompt: 'Are you having headaches?', type: 'yesno', sample: 'yes' },
    { id: '5.8', section: 'INJURIES', title: 'Sleep Issues?', prompt: 'Trouble sleeping?', type: 'yesno', sample: 'yes' },
    { id: '5.9', section: 'INJURIES', title: 'Emotional Impact', prompt: 'Any emotional impact?', type: 'checkbox', options: ['Anxiety', 'Depression', 'Fear of driving', 'Nightmares', 'Flashbacks', 'None'], sample: ['Anxiety', 'Fear of driving'] },
    { id: '5.10', section: 'TREATMENT', title: 'Current Treatment?', prompt: 'Currently receiving treatment?', type: 'yesno', sample: 'yes' },
    { id: '5.11', section: 'TREATMENT', title: 'Treatment Types', prompt: 'What types of treatment?', type: 'checkbox', options: ['Primary care', 'Chiropractor', 'Physical therapy', 'Pain management', 'Orthopedist', 'Neurologist', 'Other'], sample: ['Primary care', 'Physical therapy'] },
    { id: '5.12', section: 'TREATMENT', title: 'Medications?', prompt: 'Taking any medications?', type: 'yesno', sample: 'yes' },
    { id: '5.13', section: 'TREATMENT', title: 'Which Medications', prompt: 'List your medications', type: 'text', sample: 'Flexeril, Ibuprofen 800mg, Tramadol' },
    { id: '5.14', section: 'PIP', title: 'First Treatment Date', prompt: 'Date of first treatment?', type: 'date', guidance: '⚠️ Must be within 14 days for PIP!', sample: '2025-11-28' },
  ],
  6: [
    { id: '6.1', section: 'VEHICLE', title: 'Vehicle Value', prompt: 'Vehicle value before accident?', type: 'currency', sample: '28000' },
    { id: '6.2', section: 'VEHICLE', title: 'Repair Estimate?', prompt: 'Have a repair estimate?', type: 'yesno', sample: 'no' },
    { id: '6.3', section: 'VEHICLE', title: 'Total Loss?', prompt: 'Declared total loss?', type: 'radio', options: ['Yes', 'No', 'Pending'], sample: 'Pending' },
    { id: '6.4', section: 'RENTAL', title: 'Rental Car?', prompt: 'Had to rent a car?', type: 'yesno', sample: 'no' },
    { id: '6.5', section: 'RENTAL', title: 'Days Without Car', prompt: 'Days without your vehicle?', type: 'number', sample: '5' },
    { id: '6.6', section: 'EMPLOYMENT', title: 'Employed?', prompt: 'Were you employed?', type: 'yesno', sample: 'yes' },
    { id: '6.7', section: 'EMPLOYMENT', title: 'Employer', prompt: 'Who is your employer?', type: 'text', sample: 'Tampa General Hospital' },
    { id: '6.8', section: 'EMPLOYMENT', title: 'Job Title', prompt: 'Your job title?', type: 'text', sample: 'Registered Nurse' },
    { id: '6.9', section: 'EMPLOYMENT', title: 'Pay Type', prompt: 'Hourly or salary?', type: 'radio', options: ['Hourly', 'Salary', 'Commission', 'Self-employed'], sample: 'Hourly' },
    { id: '6.10', section: 'EMPLOYMENT', title: 'Hourly Rate', prompt: 'Hourly rate?', type: 'currency', sample: '38' },
    { id: '6.11', section: 'EMPLOYMENT', title: 'Missed Work?', prompt: 'Missed any work?', type: 'yesno', sample: 'yes' },
    { id: '6.12', section: 'EMPLOYMENT', title: 'Days Missed', prompt: 'Days missed so far?', type: 'number', sample: '3' },
    { id: '6.13', section: 'MEDICAL COSTS', title: 'Total Medical Bills', prompt: 'Total medical bills?', type: 'currency', sample: '4500' },
    { id: '6.14', section: 'MEDICAL COSTS', title: 'Out of Pocket', prompt: 'Paid out of pocket?', type: 'currency', sample: '150' },
  ],
  7: [
    { id: '7.1', section: 'YOUR INSURANCE', title: 'Insurance Company', prompt: 'Your auto insurance company?', type: 'text', sample: 'GEICO' },
    { id: '7.2', section: 'YOUR INSURANCE', title: 'Policy Number', prompt: 'Policy number?', type: 'text', sample: 'GKO-485721-FL' },
    { id: '7.3', section: 'YOUR INSURANCE', title: 'Claim Filed?', prompt: 'Filed a claim?', type: 'yesno', sample: 'yes' },
    { id: '7.4', section: 'YOUR INSURANCE', title: 'Claim Number', prompt: 'Claim number?', type: 'text', sample: 'CLM-2025-118547' },
    { id: '7.5', section: 'YOUR INSURANCE', title: 'PIP Coverage?', prompt: 'Have PIP coverage?', type: 'radio', options: ['Yes', 'No', 'Not sure'], sample: 'Yes' },
    { id: '7.6', section: 'HEALTH INS', title: 'Health Insurance?', prompt: 'Have health insurance?', type: 'yesno', sample: 'yes' },
    { id: '7.7', section: 'HEALTH INS', title: 'Health Company', prompt: 'Health insurance company?', type: 'text', sample: 'Blue Cross Blue Shield' },
    { id: '7.8', section: 'LEGAL', title: 'Other Attorneys?', prompt: 'Talked to other attorneys?', type: 'yesno', sample: 'no' },
    { id: '7.9', section: 'LEGAL', title: 'Signed Contract?', prompt: 'Signed with any attorney?', type: 'yesno', sample: 'no' },
    { id: '7.10', section: 'DECLARATIONS', title: 'Info Accurate?', prompt: 'Is all info accurate and true?', type: 'yesno', guidance: 'Your honesty is essential', sample: 'yes' },
    { id: '7.11', section: 'DECLARATIONS', title: 'Authorize Records', prompt: 'Authorize us to get your records?', type: 'yesno', sample: 'yes' },
    { id: '7.12', section: 'CONTACT', title: 'Preferred Contact', prompt: 'Preferred contact method?', type: 'radio', options: ['Phone', 'Text', 'Email', 'Any'], sample: 'Text' },
    { id: '7.13', section: 'FINAL', title: 'Anything Else?', prompt: 'Anything else to tell us?', type: 'audio', guidance: 'Share anything we haven\'t covered', sample: 'I just want to make sure my kids are taken care of. This has really impacted our family financially and emotionally. How long will this process take?' },
    { id: '7.14', section: 'SIGNATURE', title: 'Electronic Signature', prompt: 'Sign to confirm accuracy', type: 'signature', guidance: 'By signing, you confirm all info is true', sample: 'Maria Elena Vasquez' },
  ],
};

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
export default function AskGaryCompleteDemo() {
  // Main flow state
  const [mainScreen, setMainScreen] = useState('splash'); // splash, audio, audioReview, transcriptReview, formIntro, form, complete
  
  // Audio interview state
  const [audioQIdx, setAudioQIdx] = useState(0);
  const [recording, setRecording] = useState(false);
  const [recordTime, setRecordTime] = useState(0);
  const [showAudioText, setShowAudioText] = useState(false);
  const [audioText, setAudioText] = useState('');
  const [audioAnswers, setAudioAnswers] = useState({});
  const [showAudioJumper, setShowAudioJumper] = useState(false);
  
  // Transcript review state
  const [transcriptIdx, setTranscriptIdx] = useState(0);
  const [approvedTranscripts, setApprovedTranscripts] = useState({});
  
  // Form state
  const [formPhase, setFormPhase] = useState(1);
  const [formQIdx, setFormQIdx] = useState(0);
  const [formAnswers, setFormAnswers] = useState({});
  const [showFormJumper, setShowFormJumper] = useState(false);
  const [formRecording, setFormRecording] = useState(false);
  const [formRecordTime, setFormRecordTime] = useState(0);
  const [showFormAudioReview, setShowFormAudioReview] = useState(false);
  const [formAudioText, setFormAudioText] = useState('');
  
  // Presenter mode
  const [lastTap, setLastTap] = useState(0);
  
  // Recording timer
  useEffect(() => {
    let interval;
    if (recording || formRecording) {
      interval = setInterval(() => {
        if (recording) setRecordTime(t => t + 1);
        if (formRecording) setFormRecordTime(t => t + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [recording, formRecording]);

  // Double-tap handler
  const handleDoubleTap = useCallback(() => {
    const now = Date.now();
    if (now - lastTap < 300) {
      handleSkip();
    }
    setLastTap(now);
  }, [lastTap, mainScreen, audioQIdx, transcriptIdx, formPhase, formQIdx]);

  // Universal skip handler
  const handleSkip = () => {
    if (mainScreen === 'splash') {
      setMainScreen('audio');
    } else if (mainScreen === 'audio') {
      // Auto-fill audio and advance
      const q = AUDIO_QUESTIONS[audioQIdx];
      setAudioAnswers(a => ({ ...a, [q.id]: q.sample }));
      if (audioQIdx < AUDIO_QUESTIONS.length - 1) {
        setAudioQIdx(i => i + 1);
        setShowAudioText(false);
        setAudioText('');
        setRecording(false);
      } else {
        setMainScreen('transcriptReview');
      }
    } else if (mainScreen === 'transcriptReview') {
      // Auto-approve transcript and advance
      const q = AUDIO_QUESTIONS[transcriptIdx];
      setApprovedTranscripts(a => ({ ...a, [q.id]: audioAnswers[q.id] || q.sample }));
      if (transcriptIdx < AUDIO_QUESTIONS.length - 1) {
        setTranscriptIdx(i => i + 1);
      } else {
        setMainScreen('formIntro');
      }
    } else if (mainScreen === 'formIntro') {
      setMainScreen('form');
    } else if (mainScreen === 'form') {
      // Auto-fill form question and advance
      const questions = FORM_QUESTIONS[formPhase] || [];
      const q = questions[formQIdx];
      if (q) {
        setFormAnswers(a => ({ ...a, [q.id]: q.sample }));
      }
      if (formQIdx < questions.length - 1) {
        setFormQIdx(i => i + 1);
        setShowFormAudioReview(false);
        setFormAudioText('');
        setFormRecording(false);
      } else if (formPhase < 7) {
        setFormPhase(p => p + 1);
        setFormQIdx(0);
        setShowFormAudioReview(false);
      } else {
        setMainScreen('complete');
      }
    } else if (mainScreen === 'complete') {
      // Reset everything
      setMainScreen('splash');
      setAudioQIdx(0);
      setAudioAnswers({});
      setTranscriptIdx(0);
      setApprovedTranscripts({});
      setFormPhase(1);
      setFormQIdx(0);
      setFormAnswers({});
    }
  };

  const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  // ═══════════════════════════════════════════════════════════════════════════
  // SKIP BUTTON COMPONENT
  // ═══════════════════════════════════════════════════════════════════════════
  const SkipButton = () => (
    <button onClick={handleSkip} style={{
      position: 'fixed', bottom: 100, right: 20, background: COLORS.info,
      color: COLORS.white, border: 'none', padding: '12px 20px', fontSize: 15,
      fontWeight: 700, borderRadius: 25, cursor: 'pointer', fontFamily: FONT,
      boxShadow: '0 4px 15px rgba(0,122,255,0.4)', zIndex: 100,
    }}>SKIP →</button>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // LOGO COMPONENT
  // ═══════════════════════════════════════════════════════════════════════════
  const Logo = ({ size = 'large' }) => (
    <div style={{
      background: 'linear-gradient(90deg, #000 38%, #C41E3A 38%)',
      padding: size === 'large' ? '14px 28px' : '8px 16px',
      borderRadius: size === 'large' ? 10 : 6,
      boxShadow: size === 'large' ? '0 12px 40px rgba(196,30,58,0.4)' : 'none',
      display: 'inline-block',
    }}>
      <span style={{ color: COLORS.white, fontWeight: 800, fontSize: size === 'large' ? 26 : 14 }}>
        1-800 ASK-GARY
      </span>
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // SPLASH SCREEN
  // ═══════════════════════════════════════════════════════════════════════════
  if (mainScreen === 'splash') {
    return (
      <div onClick={handleDoubleTap} style={{
        minHeight: '100vh', background: `linear-gradient(180deg, ${COLORS.charcoal} 0%, #000 100%)`,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: 24, fontFamily: FONT,
      }}>
        <Logo />
        <h1 style={{ color: COLORS.white, fontSize: 32, fontWeight: 700, textAlign: 'center', marginTop: 40, marginBottom: 12 }}>
          Accident Intake
        </h1>
        <p style={{ color: COLORS.warning, fontSize: 18, fontWeight: 500, textAlign: 'center', marginBottom: 50 }}>
          Your Story. Your Case. Your Future.
        </p>
        <button onClick={() => setMainScreen('audio')} style={{
          background: COLORS.primary, color: COLORS.white, border: 'none', padding: '18px 50px',
          fontSize: 20, fontWeight: 700, borderRadius: 50, cursor: 'pointer', fontFamily: FONT,
          boxShadow: '0 8px 30px rgba(196,30,58,0.5)',
        }}>START →</button>
        <p style={{ color: '#888', fontSize: 16, fontWeight: 500, marginTop: 40, textAlign: 'center' }}>
          Takes 10-15 minutes<br /><strong style={{ color: COLORS.warning }}>Speak — Don't Type</strong>
        </p>
        <div style={{
          position: 'absolute', bottom: 80, background: 'rgba(255,255,255,0.1)',
          padding: '8px 16px', borderRadius: 20, color: '#888', fontSize: 12,
        }}>
          💡 Double-tap anywhere to skip • Blue SKIP button always works
        </div>
        <SkipButton />
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // AUDIO INTERVIEW SCREEN
  // ═══════════════════════════════════════════════════════════════════════════
  if (mainScreen === 'audio') {
    const q = AUDIO_QUESTIONS[audioQIdx];
    const hasAnswer = !!audioAnswers[q.id] || showAudioText;

    // Audio Question Jumper
    const AudioJumper = () => (
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.95)', zIndex: 1000, padding: 20, fontFamily: FONT,
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h2 style={{ color: COLORS.white, fontSize: 22, fontWeight: 700, margin: 0 }}>Jump to Question</h2>
          <button onClick={() => setShowAudioJumper(false)} style={{
            background: COLORS.charcoal, color: COLORS.white, border: 'none',
            width: 44, height: 44, borderRadius: 22, fontSize: 24, cursor: 'pointer',
          }}>✕</button>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          {AUDIO_QUESTIONS.map((aq, idx) => (
            <button key={aq.id} onClick={() => { setAudioQIdx(idx); setShowAudioJumper(false); setShowAudioText(false); setAudioText(''); }} style={{
              background: idx === audioQIdx ? COLORS.primary : COLORS.charcoal, color: COLORS.white,
              border: audioAnswers[aq.id] ? `3px solid ${COLORS.success}` : 'none',
              borderRadius: 12, padding: 15, cursor: 'pointer',
            }}>
              <div style={{ fontSize: 24, fontWeight: 700 }}>{aq.id}</div>
              <div style={{ fontSize: 9, marginTop: 4, opacity: 0.8 }}>{aq.section}</div>
            </button>
          ))}
        </div>
      </div>
    );

    return (
      <div style={{ minHeight: '100vh', background: COLORS.offWhite, display: 'flex', flexDirection: 'column', fontFamily: FONT }}>
        {showAudioJumper && <AudioJumper />}
        
        {/* Header */}
        <div style={{ background: COLORS.white, padding: 16, borderBottom: `4px solid ${COLORS.primary}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <button onClick={() => setShowAudioJumper(true)} style={{
              background: COLORS.primary, color: COLORS.white, padding: '6px 14px',
              borderRadius: 20, fontSize: 14, fontWeight: 700, border: 'none', cursor: 'pointer',
            }}>Q{q.id}/{AUDIO_QUESTIONS.length} ▼</button>
            <span style={{ color: COLORS.black, fontSize: 14, fontWeight: 600, background: COLORS.lightGray, padding: '6px 12px', borderRadius: 8 }}>{q.section}</span>
          </div>
          <div style={{ background: COLORS.lightGray, height: 8, borderRadius: 4 }}>
            <div style={{ background: COLORS.primary, height: '100%', width: `${(q.id / AUDIO_QUESTIONS.length) * 100}%`, borderRadius: 4, transition: 'width 0.3s' }} />
          </div>
        </div>

        {/* Content */}
        <div onClick={handleDoubleTap} style={{ flex: 1, padding: 20, overflowY: 'auto' }}>
          <h1 style={{ color: COLORS.black, fontSize: 28, fontWeight: 700, marginBottom: 16 }}>{q.title}</h1>
          
          <div style={{ background: COLORS.infoLight, borderRadius: 14, padding: 18, marginBottom: 20 }}>
            <p style={{ color: COLORS.black, fontSize: 19, fontWeight: 500, margin: 0, lineHeight: 1.4 }}>"{q.prompt}"</p>
          </div>
          
          <div style={{ background: COLORS.warning, borderRadius: 14, padding: 16, marginBottom: 24 }}>
            <p style={{ color: COLORS.black, fontSize: 17, fontWeight: 600, margin: 0, lineHeight: 1.4 }}>💡 {q.guidance}</p>
          </div>

          {/* Recording Area */}
          <div style={{ background: COLORS.white, borderRadius: 20, padding: 28, textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            {recording ? (
              <>
                <div onClick={() => { setRecording(false); setShowAudioText(true); let c = 0; const iv = setInterval(() => { if (c < q.sample.length) { setAudioText(q.sample.slice(0, ++c)); } else { clearInterval(iv); setAudioAnswers(a => ({ ...a, [q.id]: q.sample })); } }, 8); }} style={{
                  width: 120, height: 120, borderRadius: '50%', background: COLORS.success,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px', cursor: 'pointer', boxShadow: '0 0 0 12px rgba(48,209,88,0.25)',
                }}>
                  <div style={{ width: 36, height: 36, background: COLORS.white, borderRadius: 6 }} />
                </div>
                <div style={{ color: COLORS.success, fontSize: 22, fontWeight: 700 }}>RECORDING...</div>
                <div style={{ color: COLORS.black, fontSize: 28, fontWeight: 700, marginTop: 8 }}>{formatTime(recordTime)}</div>
                <div style={{ color: '#666', fontSize: 16, fontWeight: 500, marginTop: 12 }}>Tap <strong style={{ color: COLORS.success }}>GREEN</strong> to stop</div>
              </>
            ) : showAudioText ? (
              <>
                <div style={{ color: COLORS.success, fontSize: 20, fontWeight: 700, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  <span style={{ background: COLORS.success, color: COLORS.white, width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</span>
                  SAVED!
                </div>
                <div style={{ background: COLORS.offWhite, borderRadius: 12, padding: 16, textAlign: 'left', maxHeight: 160, overflowY: 'auto' }}>
                  <p style={{ color: COLORS.black, fontSize: 16, lineHeight: 1.5, margin: 0 }}>{audioText}</p>
                </div>
                <button onClick={() => { setShowAudioText(false); setAudioText(''); setRecording(true); setRecordTime(0); }} style={{
                  marginTop: 16, background: 'transparent', border: `3px solid ${COLORS.primary}`,
                  color: COLORS.primary, padding: '12px 24px', borderRadius: 25, fontSize: 16,
                  fontWeight: 700, cursor: 'pointer', fontFamily: FONT,
                }}>🎤 RECORD AGAIN</button>
              </>
            ) : (
              <>
                <div onClick={() => { setRecording(true); setRecordTime(0); }} style={{
                  width: 120, height: 120, borderRadius: '50%', background: COLORS.primary,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px', cursor: 'pointer', boxShadow: '0 8px 35px rgba(196,30,58,0.4)',
                }}>
                  <span style={{ fontSize: 50 }}>🎤</span>
                </div>
                <div style={{ color: COLORS.primary, fontSize: 22, fontWeight: 700 }}>TAP TO RECORD</div>
                <div style={{ color: '#666', fontSize: 16, fontWeight: 500, marginTop: 8 }}>Speak your answer clearly</div>
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div style={{ background: COLORS.white, padding: 16, borderTop: `2px solid ${COLORS.lightGray}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={() => { if (audioQIdx > 0) { setAudioQIdx(i => i - 1); setShowAudioText(false); setAudioText(''); } }} disabled={audioQIdx === 0} style={{
            background: audioQIdx === 0 ? COLORS.lightGray : COLORS.charcoal,
            color: audioQIdx === 0 ? '#999' : COLORS.white, border: 'none', padding: '14px 24px',
            fontSize: 17, fontWeight: 700, borderRadius: 12, cursor: audioQIdx === 0 ? 'not-allowed' : 'pointer', fontFamily: FONT,
          }}>← BACK</button>
          <button onClick={handleSkip} style={{
            background: COLORS.info, color: COLORS.white, border: 'none', padding: '14px 20px',
            fontSize: 15, fontWeight: 700, borderRadius: 12, cursor: 'pointer', fontFamily: FONT,
          }}>SKIP →</button>
          <button onClick={() => {
            if (audioQIdx < AUDIO_QUESTIONS.length - 1) { setAudioQIdx(i => i + 1); setShowAudioText(false); setAudioText(''); }
            else { setMainScreen('transcriptReview'); }
          }} disabled={!hasAnswer} style={{
            background: hasAnswer ? COLORS.warning : COLORS.lightGray,
            color: hasAnswer ? COLORS.black : '#999', border: 'none', padding: '14px 28px',
            fontSize: 17, fontWeight: 700, borderRadius: 12, cursor: hasAnswer ? 'pointer' : 'not-allowed',
            fontFamily: FONT, boxShadow: hasAnswer ? '0 4px 15px rgba(255,214,10,0.4)' : 'none',
          }}>{audioQIdx === AUDIO_QUESTIONS.length - 1 ? 'REVIEW' : 'NEXT'} →</button>
        </div>
        <SkipButton />
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // TRANSCRIPT REVIEW SCREEN
  // ═══════════════════════════════════════════════════════════════════════════
  if (mainScreen === 'transcriptReview') {
    const q = AUDIO_QUESTIONS[transcriptIdx];
    const transcript = audioAnswers[q.id] || q.sample;
    const approvedCount = Object.keys(approvedTranscripts).length;

    return (
      <div style={{ minHeight: '100vh', background: COLORS.offWhite, display: 'flex', flexDirection: 'column', fontFamily: FONT }}>
        {/* Header */}
        <div style={{ background: COLORS.white, padding: 16, borderBottom: `4px solid ${COLORS.success}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ background: COLORS.success, color: COLORS.white, padding: '6px 14px', borderRadius: 20, fontSize: 14, fontWeight: 700 }}>{transcriptIdx + 1} of 19</span>
            <span style={{ color: COLORS.black, fontSize: 14, fontWeight: 600, background: COLORS.lightGray, padding: '6px 12px', borderRadius: 8 }}>{q.section}</span>
          </div>
          <div style={{ background: COLORS.lightGray, height: 8, borderRadius: 4 }}>
            <div style={{ background: COLORS.success, height: '100%', width: `${((transcriptIdx + 1) / 19) * 100}%`, borderRadius: 4, transition: 'width 0.3s' }} />
          </div>
        </div>

        {/* Content */}
        <div onClick={handleDoubleTap} style={{ flex: 1, padding: 20, overflowY: 'auto' }}>
          <h1 style={{ color: COLORS.black, fontSize: 24, fontWeight: 700, marginBottom: 8 }}>{q.title}</h1>
          <div style={{ color: COLORS.gray, fontSize: 14, marginBottom: 20 }}>📅 Recorded November 28, 2025 • ~2 hours after accident</div>

          <div style={{ background: COLORS.warning, borderRadius: 14, padding: 16, marginBottom: 20 }}>
            <p style={{ color: COLORS.black, fontSize: 17, fontWeight: 600, margin: 0 }}>💡 Review this transcript. Approve if accurate, or tap Edit to make changes.</p>
          </div>

          <div style={{ background: COLORS.white, borderRadius: 20, padding: 24, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ background: COLORS.successLight, color: COLORS.success, padding: '4px 10px', borderRadius: 8, fontSize: 12, fontWeight: 700 }}>✓ TRANSCRIBED & CLEANED</span>
            </div>
            <div style={{ background: COLORS.offWhite, borderRadius: 12, padding: 16, maxHeight: 200, overflowY: 'auto' }}>
              <p style={{ color: COLORS.black, fontSize: 17, lineHeight: 1.6, margin: 0 }}>"{transcript}"</p>
            </div>
          </div>

          <button onClick={() => {
            setApprovedTranscripts(a => ({ ...a, [q.id]: transcript }));
            if (transcriptIdx < AUDIO_QUESTIONS.length - 1) { setTranscriptIdx(i => i + 1); }
            else { setMainScreen('formIntro'); }
          }} style={{
            width: '100%', background: COLORS.success, color: COLORS.white, border: 'none',
            padding: 20, fontSize: 20, fontWeight: 700, borderRadius: 14, cursor: 'pointer',
            fontFamily: FONT, boxShadow: '0 6px 25px rgba(48,209,88,0.4)', marginBottom: 12,
          }}>✓ I APPROVE THIS</button>

          <button style={{
            width: '100%', background: 'transparent', color: COLORS.info,
            border: `3px solid ${COLORS.info}`, padding: 16, fontSize: 17,
            fontWeight: 700, borderRadius: 14, cursor: 'pointer', fontFamily: FONT,
          }}>✏️ EDIT THIS RESPONSE</button>
        </div>

        {/* Footer */}
        <div style={{ background: COLORS.white, padding: 16, borderTop: `2px solid ${COLORS.lightGray}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={() => { if (transcriptIdx > 0) setTranscriptIdx(i => i - 1); }} disabled={transcriptIdx === 0} style={{
            background: transcriptIdx === 0 ? COLORS.lightGray : COLORS.charcoal,
            color: transcriptIdx === 0 ? '#999' : COLORS.white, border: 'none', padding: '14px 24px',
            fontSize: 17, fontWeight: 700, borderRadius: 12, cursor: transcriptIdx === 0 ? 'not-allowed' : 'pointer', fontFamily: FONT,
          }}>← BACK</button>
          <button onClick={handleSkip} style={{
            background: COLORS.info, color: COLORS.white, border: 'none', padding: '14px 20px',
            fontSize: 15, fontWeight: 700, borderRadius: 12, cursor: 'pointer', fontFamily: FONT,
          }}>SKIP →</button>
          <div style={{ color: COLORS.success, fontSize: 15, fontWeight: 700 }}>{approvedCount}/19 ✓</div>
        </div>
        <SkipButton />
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // FORM INTRO SCREEN
  // ═══════════════════════════════════════════════════════════════════════════
  if (mainScreen === 'formIntro') {
    const totalFormQuestions = Object.values(FORM_QUESTIONS).reduce((sum, qs) => sum + qs.length, 0);
    
    return (
      <div onClick={handleDoubleTap} style={{
        minHeight: '100vh', background: `linear-gradient(180deg, ${COLORS.charcoal}, #000)`,
        padding: 20, fontFamily: FONT, display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ textAlign: 'center', paddingTop: 30, marginBottom: 30 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: COLORS.success, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 40 }}>✓</div>
          <h1 style={{ color: COLORS.white, fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Audio Interview Complete!</h1>
          <p style={{ color: COLORS.warning, fontSize: 17, fontWeight: 500 }}>All 19 transcripts approved</p>
        </div>

        <div style={{ background: COLORS.white, borderRadius: 20, padding: 24, marginBottom: 20 }}>
          <h2 style={{ color: COLORS.black, fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Now: Detailed Questionnaire</h2>
          <p style={{ color: COLORS.darkGray, fontSize: 16, lineHeight: 1.5, marginBottom: 20 }}>
            We'll gather specific details about vehicles, insurance, medical treatment, and damages to build your complete case file.
          </p>

          {PHASES.map((p, i) => (
            <div key={p.id} style={{
              display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12,
              padding: 12, background: i % 2 === 0 ? COLORS.offWhite : COLORS.white, borderRadius: 10,
            }}>
              <span style={{ width: 36, height: 36, borderRadius: 8, background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{p.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ color: COLORS.black, fontSize: 15, fontWeight: 600 }}>Phase {p.id}: {p.title}</div>
                <div style={{ color: COLORS.gray, fontSize: 12 }}>{FORM_QUESTIONS[p.id]?.length || 0} questions</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
          <div style={{ flex: 1, background: COLORS.white, borderRadius: 14, padding: 16, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: COLORS.primary }}>{totalFormQuestions}</div>
            <div style={{ fontSize: 12, color: COLORS.gray }}>Questions</div>
          </div>
          <div style={{ flex: 1, background: COLORS.white, borderRadius: 14, padding: 16, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: COLORS.info }}>~20</div>
            <div style={{ fontSize: 12, color: COLORS.gray }}>Minutes</div>
          </div>
          <div style={{ flex: 1, background: COLORS.white, borderRadius: 14, padding: 16, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: COLORS.success }}>💾</div>
            <div style={{ fontSize: 12, color: COLORS.gray }}>Auto-Save</div>
          </div>
        </div>

        <button onClick={() => setMainScreen('form')} style={{
          width: '100%', background: COLORS.primary, color: COLORS.white, border: 'none',
          padding: 20, fontSize: 20, fontWeight: 700, borderRadius: 14, cursor: 'pointer',
          fontFamily: FONT, boxShadow: '0 6px 25px rgba(196,30,58,0.4)',
        }}>BEGIN QUESTIONNAIRE →</button>
        <SkipButton />
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // FORM AUDIO REVIEW SCREEN
  // ═══════════════════════════════════════════════════════════════════════════
  if (showFormAudioReview && mainScreen === 'form') {
    const questions = FORM_QUESTIONS[formPhase] || [];
    const q = questions[formQIdx];

    return (
      <div style={{ minHeight: '100vh', background: COLORS.offWhite, padding: 20, fontFamily: FONT, display: 'flex', flexDirection: 'column' }}>
        <div style={{ background: COLORS.white, padding: 16, borderRadius: 12, marginBottom: 20, borderBottom: `4px solid ${COLORS.success}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <span style={{ background: COLORS.success, color: COLORS.white, padding: '4px 12px', borderRadius: 15, fontSize: 14, fontWeight: 700 }}>✓ RECORDED</span>
            <span style={{ color: COLORS.gray, fontSize: 14 }}>Review your response</span>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <h1 style={{ color: COLORS.black, fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Review Your Answer</h1>
          <p style={{ color: COLORS.gray, fontSize: 15, marginBottom: 20 }}>{q?.title}</p>

          <div style={{ background: COLORS.warning, borderRadius: 14, padding: 16, marginBottom: 20 }}>
            <p style={{ color: COLORS.black, fontSize: 17, fontWeight: 600, margin: 0 }}>💡 We've cleaned up spelling and punctuation. Please review and approve.</p>
          </div>

          <div style={{ background: COLORS.white, borderRadius: 20, padding: 24, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <div style={{ background: COLORS.offWhite, borderRadius: 12, padding: 16, maxHeight: 250, overflowY: 'auto' }}>
              <p style={{ color: COLORS.black, fontSize: 17, lineHeight: 1.6, margin: 0 }}>"{formAudioText}"</p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
          <button onClick={() => {
            setFormAnswers(a => ({ ...a, [q.id]: formAudioText }));
            setShowFormAudioReview(false);
            setFormAudioText('');
            // Move to next question
            const questions = FORM_QUESTIONS[formPhase] || [];
            if (formQIdx < questions.length - 1) { setFormQIdx(i => i + 1); }
            else if (formPhase < 7) { setFormPhase(p => p + 1); setFormQIdx(0); }
            else { setMainScreen('complete'); }
          }} style={{
            width: '100%', background: COLORS.success, color: COLORS.white, border: 'none',
            padding: 20, fontSize: 20, fontWeight: 700, borderRadius: 14, cursor: 'pointer',
            fontFamily: FONT, boxShadow: '0 6px 25px rgba(48,209,88,0.4)',
          }}>✓ APPROVE & CONTINUE</button>
          <button onClick={() => { setShowFormAudioReview(false); setFormAudioText(''); }} style={{
            width: '100%', background: 'transparent', color: COLORS.primary,
            border: `3px solid ${COLORS.primary}`, padding: 16, fontSize: 17,
            fontWeight: 700, borderRadius: 14, cursor: 'pointer', fontFamily: FONT,
          }}>🎤 RE-RECORD</button>
        </div>
        <SkipButton />
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // FORM QUESTION SCREEN
  // ═══════════════════════════════════════════════════════════════════════════
  if (mainScreen === 'form') {
    const questions = FORM_QUESTIONS[formPhase] || [];
    const q = questions[formQIdx];
    const currentPhaseData = PHASES.find(p => p.id === formPhase);
    const hasAnswer = q && (formAnswers[q.id] !== undefined && formAnswers[q.id] !== '');

    const totalFormQuestions = Object.values(FORM_QUESTIONS).reduce((sum, qs) => sum + qs.length, 0);
    const completedFormQuestions = Object.keys(formAnswers).length;
    const overallProgress = Math.round((completedFormQuestions / totalFormQuestions) * 100);

    // Phase Jumper
    const FormJumper = () => (
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.95)', zIndex: 1000, padding: 20, fontFamily: FONT,
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h2 style={{ color: COLORS.white, fontSize: 22, fontWeight: 700, margin: 0 }}>Jump to Phase</h2>
          <button onClick={() => setShowFormJumper(false)} style={{
            background: COLORS.charcoal, color: COLORS.white, border: 'none',
            width: 44, height: 44, borderRadius: 22, fontSize: 24, cursor: 'pointer',
          }}>✕</button>
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {PHASES.map((p) => {
            const phaseQs = FORM_QUESTIONS[p.id] || [];
            const answered = phaseQs.filter(fq => formAnswers[fq.id]).length;
            return (
              <button key={p.id} onClick={() => { setFormPhase(p.id); setFormQIdx(0); setShowFormJumper(false); }} style={{
                width: '100%', background: p.id === formPhase ? p.color : COLORS.charcoal,
                border: `2px solid ${p.color}`, borderRadius: 14, padding: 16,
                marginBottom: 12, cursor: 'pointer', textAlign: 'left',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 28 }}>{p.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: COLORS.white, fontSize: 17, fontWeight: 700 }}>Phase {p.id}: {p.title}</div>
                    <div style={{ color: '#888', fontSize: 13, marginTop: 4 }}>{answered}/{phaseQs.length} answered</div>
                  </div>
                  {answered === phaseQs.length && phaseQs.length > 0 && (
                    <span style={{ color: COLORS.success, fontSize: 24 }}>✓</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );

    if (!q) return null;

    return (
      <div style={{ minHeight: '100vh', background: COLORS.offWhite, display: 'flex', flexDirection: 'column', fontFamily: FONT }}>
        {showFormJumper && <FormJumper />}

        {/* Header */}
        <div style={{ background: COLORS.white, padding: 16, borderBottom: `4px solid ${currentPhaseData?.color || COLORS.primary}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <button onClick={() => setShowFormJumper(true)} style={{
              background: currentPhaseData?.color || COLORS.primary, color: COLORS.white,
              padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 700,
              border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
            }}>{currentPhaseData?.icon} Phase {formPhase} ▼</button>
            <span style={{ color: COLORS.black, fontSize: 13, fontWeight: 600, background: COLORS.lightGray, padding: '6px 12px', borderRadius: 8 }}>{q.section}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: COLORS.gray, marginBottom: 8 }}>
            <span>Q{formQIdx + 1}/{questions.length}</span>
            <span>{overallProgress}% overall</span>
          </div>
          <div style={{ background: COLORS.lightGray, height: 6, borderRadius: 3 }}>
            <div style={{ background: currentPhaseData?.color || COLORS.primary, height: '100%', width: `${((formQIdx + 1) / questions.length) * 100}%`, borderRadius: 3 }} />
          </div>
        </div>

        {/* Content */}
        <div onClick={handleDoubleTap} style={{ flex: 1, padding: 20, overflowY: 'auto' }}>
          <h1 style={{ color: COLORS.black, fontSize: 26, fontWeight: 700, marginBottom: 16 }}>{q.title}</h1>
          <div style={{ background: COLORS.infoLight, borderRadius: 14, padding: 18, marginBottom: 20 }}>
            <p style={{ color: COLORS.black, fontSize: 18, fontWeight: 500, margin: 0 }}>"{q.prompt}"</p>
          </div>
          {q.guidance && (
            <div style={{ background: COLORS.warning, borderRadius: 14, padding: 16, marginBottom: 20 }}>
              <p style={{ color: COLORS.black, fontSize: 16, fontWeight: 600, margin: 0 }}>💡 {q.guidance}</p>
            </div>
          )}

          {/* Input based on type */}
          <div style={{ background: COLORS.white, borderRadius: 20, padding: 24, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            
            {/* TEXT/PHONE/EMAIL/SSN */}
            {['text', 'phone', 'email', 'ssn'].includes(q.type) && (
              <input type={q.type === 'email' ? 'email' : 'text'} value={formAnswers[q.id] || ''} onChange={(e) => setFormAnswers(a => ({ ...a, [q.id]: e.target.value }))} placeholder={q.placeholder || 'Type your answer...'} style={{
                width: '100%', padding: 18, fontSize: 18, fontFamily: FONT,
                border: `2px solid ${COLORS.lightGray}`, borderRadius: 12, boxSizing: 'border-box',
              }} />
            )}

            {/* DATE */}
            {q.type === 'date' && (
              <input type="date" value={formAnswers[q.id] || ''} onChange={(e) => setFormAnswers(a => ({ ...a, [q.id]: e.target.value }))} style={{
                width: '100%', padding: 18, fontSize: 18, fontFamily: FONT,
                border: `2px solid ${COLORS.lightGray}`, borderRadius: 12, boxSizing: 'border-box',
              }} />
            )}

            {/* NUMBER/CURRENCY */}
            {['number', 'currency'].includes(q.type) && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {q.type === 'currency' && <span style={{ fontSize: 24, fontWeight: 700, color: COLORS.gray }}>$</span>}
                <input type="number" value={formAnswers[q.id] || ''} onChange={(e) => setFormAnswers(a => ({ ...a, [q.id]: e.target.value }))} placeholder="0" style={{
                  flex: 1, padding: 18, fontSize: 18, fontFamily: FONT,
                  border: `2px solid ${COLORS.lightGray}`, borderRadius: 12, boxSizing: 'border-box',
                }} />
              </div>
            )}

            {/* SELECT */}
            {q.type === 'select' && (
              <select value={formAnswers[q.id] || ''} onChange={(e) => setFormAnswers(a => ({ ...a, [q.id]: e.target.value }))} style={{
                width: '100%', padding: 18, fontSize: 18, fontFamily: FONT,
                border: `2px solid ${COLORS.lightGray}`, borderRadius: 12, background: COLORS.white, cursor: 'pointer',
              }}>
                <option value="">Select an option...</option>
                {q.options?.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
              </select>
            )}

            {/* RADIO */}
            {q.type === 'radio' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {q.options?.map((opt, i) => (
                  <button key={i} onClick={() => setFormAnswers(a => ({ ...a, [q.id]: opt }))} style={{
                    padding: 16, fontSize: 17, fontFamily: FONT, fontWeight: 500,
                    border: `3px solid ${formAnswers[q.id] === opt ? currentPhaseData?.color : COLORS.lightGray}`,
                    borderRadius: 12, cursor: 'pointer', textAlign: 'left',
                    background: formAnswers[q.id] === opt ? `${currentPhaseData?.color}15` : COLORS.white, color: COLORS.black,
                  }}>{formAnswers[q.id] === opt && '✓ '}{opt}</button>
                ))}
              </div>
            )}

            {/* YESNO */}
            {q.type === 'yesno' && (
              <div style={{ display: 'flex', gap: 12 }}>
                {['yes', 'no'].map((opt) => (
                  <button key={opt} onClick={() => setFormAnswers(a => ({ ...a, [q.id]: opt }))} style={{
                    flex: 1, padding: 20, fontSize: 18, fontFamily: FONT, fontWeight: 700,
                    border: `3px solid ${formAnswers[q.id] === opt ? (opt === 'yes' ? COLORS.success : COLORS.primary) : COLORS.lightGray}`,
                    borderRadius: 14, cursor: 'pointer',
                    background: formAnswers[q.id] === opt ? (opt === 'yes' ? COLORS.successLight : COLORS.primaryLight) : COLORS.white,
                    color: formAnswers[q.id] === opt ? (opt === 'yes' ? COLORS.successDark : COLORS.primaryDark) : COLORS.black,
                  }}>{opt === 'yes' ? '✓ YES' : '✕ NO'}</button>
                ))}
              </div>
            )}

            {/* CHECKBOX */}
            {q.type === 'checkbox' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {q.options?.map((opt, i) => {
                  const selected = (formAnswers[q.id] || []).includes(opt);
                  return (
                    <button key={i} onClick={() => {
                      const current = formAnswers[q.id] || [];
                      if (selected) { setFormAnswers(a => ({ ...a, [q.id]: current.filter(x => x !== opt) })); }
                      else { setFormAnswers(a => ({ ...a, [q.id]: [...current, opt] })); }
                    }} style={{
                      padding: 16, fontSize: 17, fontFamily: FONT, fontWeight: 500,
                      border: `3px solid ${selected ? currentPhaseData?.color : COLORS.lightGray}`,
                      borderRadius: 12, cursor: 'pointer', textAlign: 'left',
                      background: selected ? `${currentPhaseData?.color}15` : COLORS.white, color: COLORS.black,
                    }}>{selected ? '☑ ' : '☐ '}{opt}</button>
                  );
                })}
              </div>
            )}

            {/* AUDIO */}
            {q.type === 'audio' && (
              <div style={{ textAlign: 'center' }}>
                {formRecording ? (
                  <>
                    <div onClick={() => {
                      setFormRecording(false);
                      setShowFormAudioReview(true);
                      let c = 0;
                      const iv = setInterval(() => {
                        if (c < q.sample.length) { setFormAudioText(q.sample.slice(0, ++c)); }
                        else { clearInterval(iv); }
                      }, 8);
                    }} style={{
                      width: 100, height: 100, borderRadius: '50%', background: COLORS.success,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 16px', cursor: 'pointer', boxShadow: '0 0 0 12px rgba(48,209,88,0.25)',
                    }}>
                      <div style={{ width: 30, height: 30, background: COLORS.white, borderRadius: 6 }} />
                    </div>
                    <div style={{ color: COLORS.success, fontSize: 20, fontWeight: 700 }}>RECORDING...</div>
                    <div style={{ color: COLORS.black, fontSize: 24, fontWeight: 700, marginTop: 8 }}>{formatTime(formRecordTime)}</div>
                    <div style={{ color: COLORS.gray, fontSize: 15, marginTop: 8 }}>Tap GREEN to stop</div>
                  </>
                ) : (
                  <>
                    <div onClick={() => { setFormRecording(true); setFormRecordTime(0); }} style={{
                      width: 100, height: 100, borderRadius: '50%', background: COLORS.primary,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 16px', cursor: 'pointer', boxShadow: '0 8px 30px rgba(196,30,58,0.4)',
                    }}>
                      <span style={{ fontSize: 40 }}>🎤</span>
                    </div>
                    <div style={{ color: COLORS.primary, fontSize: 20, fontWeight: 700 }}>TAP TO RECORD</div>
                    <div style={{ color: COLORS.gray, fontSize: 15, marginTop: 8 }}>Speak your answer</div>
                  </>
                )}
              </div>
            )}

            {/* SIGNATURE */}
            {q.type === 'signature' && (
              <div>
                <div style={{ border: `2px dashed ${COLORS.lightGray}`, borderRadius: 12, padding: 40, textAlign: 'center', marginBottom: 16, background: COLORS.offWhite }}>
                  {formAnswers[q.id] ? (
                    <div style={{ fontFamily: 'cursive', fontSize: 32, color: COLORS.black }}>{formAnswers[q.id]}</div>
                  ) : (
                    <div style={{ color: COLORS.gray, fontSize: 16 }}>Signature will appear here</div>
                  )}
                </div>
                <input type="text" value={formAnswers[q.id] || ''} onChange={(e) => setFormAnswers(a => ({ ...a, [q.id]: e.target.value }))} placeholder="Type your full legal name to sign" style={{
                  width: '100%', padding: 18, fontSize: 18, fontFamily: FONT,
                  border: `2px solid ${COLORS.lightGray}`, borderRadius: 12, boxSizing: 'border-box',
                }} />
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div style={{ background: COLORS.white, padding: 16, borderTop: `2px solid ${COLORS.lightGray}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={() => {
            if (formQIdx > 0) { setFormQIdx(i => i - 1); }
            else if (formPhase > 1) { setFormPhase(p => p - 1); setFormQIdx(FORM_QUESTIONS[formPhase - 1].length - 1); }
          }} disabled={formPhase === 1 && formQIdx === 0} style={{
            background: (formPhase === 1 && formQIdx === 0) ? COLORS.lightGray : COLORS.charcoal,
            color: (formPhase === 1 && formQIdx === 0) ? '#999' : COLORS.white,
            border: 'none', padding: '14px 20px', fontSize: 16, fontWeight: 700,
            borderRadius: 12, cursor: (formPhase === 1 && formQIdx === 0) ? 'not-allowed' : 'pointer', fontFamily: FONT,
          }}>← BACK</button>
          <button onClick={handleSkip} style={{
            background: COLORS.info, color: COLORS.white, border: 'none',
            padding: '14px 18px', fontSize: 14, fontWeight: 700, borderRadius: 12,
            cursor: 'pointer', fontFamily: FONT,
          }}>SKIP →</button>
          <button onClick={() => {
            if (formQIdx < questions.length - 1) { setFormQIdx(i => i + 1); }
            else if (formPhase < 7) { setFormPhase(p => p + 1); setFormQIdx(0); }
            else { setMainScreen('complete'); }
          }} style={{
            background: hasAnswer ? COLORS.warning : COLORS.lightGray,
            color: hasAnswer ? COLORS.black : '#999',
            border: 'none', padding: '14px 24px', fontSize: 16, fontWeight: 700,
            borderRadius: 12, cursor: 'pointer', fontFamily: FONT,
            boxShadow: hasAnswer ? '0 4px 15px rgba(255,214,10,0.4)' : 'none',
          }}>{formPhase === 7 && formQIdx === questions.length - 1 ? 'FINISH' : 'NEXT'} →</button>
        </div>
        <SkipButton />
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // COMPLETE SCREEN
  // ═══════════════════════════════════════════════════════════════════════════
  if (mainScreen === 'complete') {
    return (
      <div onClick={handleDoubleTap} style={{
        minHeight: '100vh', background: `linear-gradient(180deg, ${COLORS.charcoal}, #000)`,
        padding: 20, fontFamily: FONT, display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ textAlign: 'center', paddingTop: 40, marginBottom: 30 }}>
          <div style={{ width: 100, height: 100, borderRadius: '50%', background: COLORS.success, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 50 }}>🎉</div>
          <h1 style={{ color: COLORS.white, fontSize: 28, fontWeight: 700, marginBottom: 8 }}>CASE FILE COMPLETE!</h1>
          <p style={{ color: COLORS.warning, fontSize: 18, fontWeight: 500 }}>Your information is safely submitted</p>
        </div>

        <div style={{ background: COLORS.white, borderRadius: 20, padding: 24, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, padding: 16, background: COLORS.successLight, borderRadius: 12 }}>
            <span style={{ fontSize: 32 }}>✓</span>
            <div>
              <div style={{ color: COLORS.successDark, fontSize: 18, fontWeight: 700 }}>All Sections Complete</div>
              <div style={{ color: COLORS.gray, fontSize: 14 }}>Audio interview + 7 phase questionnaire</div>
            </div>
          </div>

          <h2 style={{ color: COLORS.black, fontSize: 20, fontWeight: 700, marginBottom: 16 }}>What Happens Next:</h2>
          {[
            { icon: '📋', title: 'Case File Submitted', sub: 'Your attorney will review' },
            { icon: '📞', title: 'Attorney Contact', sub: 'Within 24-48 hours' },
            { icon: '🏥', title: 'Medical Referral', sub: 'If you need treatment' },
            { icon: '⚖️', title: 'Case Evaluation', sub: 'Strategy discussion' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: i === 0 ? COLORS.successLight : i === 1 ? COLORS.infoLight : i === 2 ? COLORS.primaryLight : COLORS.warningLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>{item.icon}</div>
              <div>
                <div style={{ color: COLORS.black, fontSize: 17, fontWeight: 700 }}>{item.title}</div>
                <div style={{ color: COLORS.gray, fontSize: 14 }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: COLORS.primary, borderRadius: 16, padding: 20, marginBottom: 20 }}>
          <div style={{ color: COLORS.white, fontSize: 16, fontWeight: 600, textAlign: 'center', marginBottom: 12 }}>Questions? Need medical care NOW?</div>
          <div style={{ background: COLORS.white, borderRadius: 12, padding: 16, textAlign: 'center' }}>
            <div style={{ color: COLORS.primary, fontSize: 24, fontWeight: 800 }}>1-800-ASK-GARY</div>
            <div style={{ color: COLORS.gray, fontSize: 14, marginTop: 4 }}>Available 24/7</div>
          </div>
        </div>

        <button onClick={() => {
          setMainScreen('splash');
          setAudioQIdx(0); setAudioAnswers({}); setShowAudioText(false); setAudioText('');
          setTranscriptIdx(0); setApprovedTranscripts({});
          setFormPhase(1); setFormQIdx(0); setFormAnswers({});
        }} style={{
          width: '100%', background: COLORS.info, color: COLORS.white, border: 'none',
          padding: 18, fontSize: 18, fontWeight: 700, borderRadius: 14, cursor: 'pointer', fontFamily: FONT,
        }}>↻ RESTART DEMO</button>

        <div style={{ textAlign: 'center', marginTop: 30 }}>
          <div style={{ fontFamily: 'Georgia', color: '#666', fontSize: 12, letterSpacing: 3 }}>NOETIC DHARMA</div>
          <div style={{ color: '#555', fontSize: 8, marginTop: 4, letterSpacing: 1 }}>PRIVATE EQUITY | VENTURE CAPITAL | STRATEGIC PLANNING</div>
        </div>
        <SkipButton />
      </div>
    );
  }

  return null;
}
