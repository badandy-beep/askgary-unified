import React, { useState } from 'react';

// ============================================================
// ASKGARY FEATURE SHOWCASE DEMO
// 18 Screens | Security, Audio, Photos, AI Matching
// Presenter Mode | VoiceFlow Pro Design System
// For Dr. Gary Presentation
// ============================================================

// Photo data - These will be replaced with actual uploaded photos
const DEMO_PHOTOS = {
  vehicleDamage: [
    { id: 1, src: '/photos/vehicle-damage-red-car.jpg', caption: 'Front-end collision damage', category: 'Vehicle Damage' },
    { id: 2, src: '/photos/accident-scene-roadside.jpg', caption: 'Accident scene - roadside', category: 'Accident Scene' },
    { id: 3, src: '/photos/accident-aerial-view.jpg', caption: 'Aerial view of collision', category: 'Accident Scene' },
    { id: 4, src: '/photos/vehicle-crashed-building.jpg', caption: 'Vehicle struck building', category: 'Vehicle Damage' },
  ],
  injuries: [
    { id: 5, src: '/photos/injury-bruised-elbow.jpg', caption: 'Bruising on elbow', category: 'Injuries' },
    { id: 6, src: '/photos/injury-arm-cast.jpg', caption: 'Arm cast after fracture', category: 'Injuries' },
    { id: 7, src: '/photos/injury-neck-pain.jpg', caption: 'Neck pain/whiplash symptoms', category: 'Injuries' },
  ],
  emergency: [
    { id: 8, src: '/photos/paramedic-roadside.jpg', caption: 'Paramedics at scene', category: 'Emergency Response' },
    { id: 9, src: '/photos/ambulance-scene.jpg', caption: 'Ambulance response', category: 'Emergency Response' },
    { id: 10, src: '/photos/paramedics-neck-brace.jpg', caption: 'Neck stabilization', category: 'Emergency Response' },
  ],
  workplace: [
    { id: 11, src: '/photos/workplace-forklift.jpg', caption: 'Forklift accident scene', category: 'Workplace' },
    { id: 12, src: '/photos/workplace-warehouse-accident.jpg', caption: 'Warehouse incident', category: 'Workplace' },
    { id: 13, src: '/photos/hazard-wet-floor.jpg', caption: 'Slip hazard - wet floor', category: 'Hazards' },
    { id: 14, src: '/photos/hazard-broken-stairs.jpg', caption: 'Trip hazard - broken stairs', category: 'Hazards' },
  ],
  documentation: [
    { id: 15, src: '/photos/police-report.jpg', caption: 'Police report documentation', category: 'Documentation' },
    { id: 16, src: '/photos/upset-driver.jpg', caption: 'Driver at accident scene', category: 'Documentation' },
  ],
};

const SCREENS = [
  // ─────────────────────────────────────────────────────────
  // SCREEN 1: WELCOME
  // ─────────────────────────────────────────────────────────
  {
    id: 'welcome',
    type: 'WELCOME',
    title: 'Welcome to AskGary',
    subtitle: 'Your Personal Injury Intake Assistant',
    description: 'Complete your intake in about 20 minutes using voice or text. Your information is secure and confidential.',
    icon: '⚖️',
  },
  
  // ─────────────────────────────────────────────────────────
  // SCREEN 2: SECURITY OVERVIEW
  // ─────────────────────────────────────────────────────────
  {
    id: 'security-overview',
    type: 'SECURITY',
    title: 'Bank-Level Security',
    subtitle: 'Your information is protected',
    features: [
      { icon: '🔒', label: 'HIPAA Compliant', desc: 'Healthcare data protection' },
      { icon: '🛡️', label: 'AES-256 Encryption', desc: 'Military-grade security' },
      { icon: '📱', label: 'Two-Factor Auth', desc: 'Extra account protection' },
      { icon: '✓', label: 'SOC 2 Certified', desc: 'Enterprise security standards' },
    ],
  },
  
  // ─────────────────────────────────────────────────────────
  // SCREEN 3: IDENTITY VERIFICATION
  // ─────────────────────────────────────────────────────────
  {
    id: 'identity-verify',
    type: 'IDENTITY',
    title: 'Verify Your Identity',
    subtitle: 'Quick and secure verification',
    methods: [
      { icon: '📧', label: 'Email Verification', status: 'complete' },
      { icon: '📱', label: 'SMS Code Sent', status: 'active' },
      { icon: '🪪', label: 'ID Upload (Optional)', status: 'pending' },
    ],
    codeInput: true,
  },
  
  // ─────────────────────────────────────────────────────────
  // SCREEN 4: SSO / LOGIN OPTIONS
  // ─────────────────────────────────────────────────────────
  {
    id: 'sso-login',
    type: 'SSO',
    title: 'Secure Sign In',
    subtitle: 'Choose your preferred method',
    options: [
      { icon: '🍎', label: 'Continue with Apple', color: '#000000' },
      { icon: '🔵', label: 'Continue with Google', color: '#4285F4' },
      { icon: '📧', label: 'Continue with Email', color: '#64748B' },
    ],
  },
  
  // ─────────────────────────────────────────────────────────
  // SCREEN 5: HIPAA NOTICE
  // ─────────────────────────────────────────────────────────
  {
    id: 'hipaa-notice',
    type: 'HIPAA',
    title: 'HIPAA Privacy Notice',
    subtitle: 'Protected Health Information',
    icon: '🏥',
    content: 'Your health information is protected under the Health Insurance Portability and Accountability Act (HIPAA). We will only share your information with authorized medical providers and legal representatives involved in your case.',
  },
  
  // ─────────────────────────────────────────────────────────
  // SCREEN 6: PRIVACY POLICY (Scroll)
  // ─────────────────────────────────────────────────────────
  {
    id: 'privacy-policy',
    type: 'LEGAL_SCROLL',
    title: 'Privacy Policy',
    subtitle: 'Please review and accept',
    legalText: `PRIVACY POLICY

Last Updated: December 2024

1. INFORMATION WE COLLECT
We collect information you provide directly, including your name, contact information, medical records, accident details, and any other information you submit through our intake system.

2. HOW WE USE YOUR INFORMATION
• To evaluate and process your personal injury claim
• To connect you with appropriate medical providers
• To communicate with you about your case
• To comply with legal obligations

3. INFORMATION SHARING
We may share your information with:
• Your selected medical providers for treatment
• Legal professionals handling your case
• Courts or legal proceedings as required by law
• Insurance companies as necessary for your claim

We will NOT share your information with:
• Third-party marketers
• Data brokers
• Any party not directly involved in your case

4. DATA SECURITY
We implement bank-level security measures including AES-256 encryption, secure data centers, and regular security audits to protect your information.

5. YOUR RIGHTS
You have the right to:
• Access your personal information
• Request corrections to your data
• Request deletion of your data
• Opt-out of marketing communications

6. AI TECHNOLOGY DISCLOSURE
This application uses artificial intelligence to:
• Transcribe voice recordings
• Match you with appropriate providers
• Improve service quality

Your de-identified data may be used to improve our AI systems.

7. APPLICATION DEVELOPER
This application is developed by Noetic Dharma and licensed to 800-ASK-GARY. Both parties are committed to protecting your privacy.

8. CONTACT US
For privacy questions, contact us at privacy@askgary.com

By continuing, you acknowledge you have read and agree to this Privacy Policy.`,
  },
  
  // ─────────────────────────────────────────────────────────
  // SCREEN 7: DATA CONSENT
  // ─────────────────────────────────────────────────────────
  {
    id: 'data-consent',
    type: 'CONSENT',
    title: 'Your Data, Your Control',
    subtitle: 'How we handle your information',
    consents: [
      { id: 'medical', label: 'Share with my medical providers', required: true, checked: true },
      { id: 'legal', label: 'Share with legal representatives', required: true, checked: true },
      { id: 'court', label: 'Provide to courts if legally required', required: true, checked: true },
      { id: 'ai', label: 'Use for AI improvement (de-identified)', required: false, checked: false },
    ],
  },
  
  // ─────────────────────────────────────────────────────────
  // SCREEN 8: MARKETING OPT-INS
  // ─────────────────────────────────────────────────────────
  {
    id: 'opt-ins',
    type: 'OPTINS',
    title: 'Stay Connected',
    subtitle: 'Optional - You can change these anytime',
    options: [
      { id: 'sms', label: 'Text message updates about my case', icon: '💬' },
      { id: 'email', label: 'Email updates and newsletters', icon: '📧' },
      { id: 'askgary', label: 'Tips and information from AskGary', icon: '⚖️' },
      { id: 'physicians', label: 'Health tips from Physicians Group', icon: '🏥' },
    ],
  },
  
  // ─────────────────────────────────────────────────────────
  // SCREEN 9: AUDIO FEATURE INTRO
  // ─────────────────────────────────────────────────────────
  {
    id: 'audio-intro',
    type: 'AUDIO_INTRO',
    title: 'Tell Your Story',
    subtitle: 'In your own words',
    description: 'Our voice recording feature lets you describe what happened naturally. No typing required - just speak and we\'ll transcribe everything.',
    benefits: [
      '🎤 Speak naturally - 3x faster than typing',
      '📝 Automatic transcription',
      '🔒 Secure & confidential',
      '♿ Accessible for everyone',
    ],
  },
  
  // ─────────────────────────────────────────────────────────
  // SCREEN 10: AUDIO RECORDING
  // ─────────────────────────────────────────────────────────
  {
    id: 'audio-record',
    type: 'AUDIO_RECORD',
    title: 'What happened?',
    subtitle: 'Tell us about your accident',
    prompt: 'In your own words, describe what happened. Take your time.',
    maxTime: '10:00',
    currentTime: '00:00',
  },
  
  // ─────────────────────────────────────────────────────────
  // SCREEN 11: AUDIO TRANSCRIPT REVIEW
  // ─────────────────────────────────────────────────────────
  {
    id: 'audio-transcript',
    type: 'AUDIO_TRANSCRIPT',
    title: 'Review Your Recording',
    subtitle: '2:34 recorded',
    transcript: '"I was driving down Main Street around 3pm when the other driver ran a red light and hit the passenger side of my car. The airbags deployed and I hit my head on the window. The police came and the other driver admitted fault at the scene..."',
  },
  
  // ─────────────────────────────────────────────────────────
  // SCREEN 12: PHOTO UPLOAD INTRO
  // ─────────────────────────────────────────────────────────
  {
    id: 'photo-intro',
    type: 'PHOTO_INTRO',
    title: 'Document Everything',
    subtitle: 'Photos strengthen your case',
    categories: [
      { icon: '🚗', label: 'Vehicle Damage', count: '0 photos' },
      { icon: '🩹', label: 'Injuries', count: '0 photos' },
      { icon: '📍', label: 'Accident Scene', count: '0 photos' },
      { icon: '📄', label: 'Documents', count: '0 photos' },
    ],
  },
  
  // ─────────────────────────────────────────────────────────
  // SCREEN 13: PHOTO GALLERY - VEHICLE DAMAGE
  // ─────────────────────────────────────────────────────────
  {
    id: 'photo-gallery-vehicle',
    type: 'PHOTO_GALLERY',
    title: 'Vehicle Damage',
    subtitle: '4 photos uploaded',
    category: 'vehicleDamage',
  },
  
  // ─────────────────────────────────────────────────────────
  // SCREEN 14: PHOTO GALLERY - INJURIES
  // ─────────────────────────────────────────────────────────
  {
    id: 'photo-gallery-injuries',
    type: 'PHOTO_GALLERY',
    title: 'Injury Photos',
    subtitle: '3 photos uploaded',
    category: 'injuries',
  },
  
  // ─────────────────────────────────────────────────────────
  // SCREEN 15: PHOTO GALLERY - EMERGENCY/WORKPLACE
  // ─────────────────────────────────────────────────────────
  {
    id: 'photo-gallery-misc',
    type: 'PHOTO_GALLERY',
    title: 'Additional Evidence',
    subtitle: 'Emergency response & workplace incidents',
    category: 'emergency',
    secondaryCategory: 'workplace',
  },
  
  // ─────────────────────────────────────────────────────────
  // SCREEN 16: DOCUSIGN SIGNATURE
  // ─────────────────────────────────────────────────────────
  {
    id: 'signature',
    type: 'SIGNATURE',
    title: 'Sign Authorization',
    subtitle: 'HIPAA Medical Records Release',
    document: 'Authorization to Release Medical Records',
    signedBy: 'John Smith',
    signedDate: 'December 3, 2024',
  },
  
  // ─────────────────────────────────────────────────────────
  // SCREEN 17: AI MATCHING PREVIEW
  // ─────────────────────────────────────────────────────────
  {
    id: 'ai-matching',
    type: 'AI_MATCHING',
    title: 'Finding Your Match',
    subtitle: 'AI-powered provider matching',
    description: 'Our AI analyzes your case details to connect you with the best medical providers and legal specialists for your specific injuries and situation.',
    matchFactors: [
      'Injury type & severity',
      'Location & availability',
      'Insurance compatibility',
      'Specialization match',
      'Past case success rates',
    ],
  },
  
  // ─────────────────────────────────────────────────────────
  // SCREEN 18: COMPLETION
  // ─────────────────────────────────────────────────────────
  {
    id: 'complete',
    type: 'COMPLETE',
    title: 'Intake Complete!',
    subtitle: 'What happens next',
    steps: [
      { icon: '✓', label: 'Information received', status: 'done' },
      { icon: '🔍', label: 'Case review in progress', status: 'active' },
      { icon: '📞', label: 'Attorney will call within 24 hours', status: 'pending' },
      { icon: '🏥', label: 'Medical appointment scheduling', status: 'pending' },
    ],
    caseNumber: 'AG-2024-001234',
  },
];

// ============================================================
// COLORS
// ============================================================
const COLORS = {
  record: '#DC2626',
  stop: '#16A34A',
  next: '#F59E0B',
  skip: '#2563EB',
  background: '#F8FAFC',
  surface: '#FFFFFF',
  textPrimary: '#1E293B',
  textSecondary: '#64748B',
  border: '#E2E8F0',
  brandPrimary: '#DC2626',
  brandSecondary: '#1E293B',
};

// ============================================================
// MAIN COMPONENT
// ============================================================
const FeatureShowcaseDemo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [optIns, setOptIns] = useState({});
  const [consents, setConsents] = useState({ medical: true, legal: true, court: true, ai: false });
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  
  const screen = SCREENS[currentIndex];
  const progress = ((currentIndex + 1) / SCREENS.length) * 100;

  const goNext = () => {
    if (currentIndex < SCREENS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleDoubleClick = () => goNext();

  // ──────────────────────────────────────────────────────────
  // STYLES
  // ──────────────────────────────────────────────────────────
  const styles = {
    container: {
      minHeight: '100vh',
      background: COLORS.background,
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
      WebkitFontSmoothing: 'antialiased',
    },
    presenterBadge: {
      position: 'fixed',
      top: '12px',
      right: '12px',
      background: 'rgba(37, 99, 235, 0.9)',
      color: '#FFFFFF',
      padding: '6px 12px',
      borderRadius: '8px',
      fontSize: '11px',
      fontWeight: '700',
      letterSpacing: '0.5px',
      zIndex: 100,
    },
    header: {
      background: COLORS.brandPrimary,
      padding: '16px 20px 20px',
      color: '#FFFFFF',
    },
    headerTop: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '12px',
    },
    headerTitle: { fontSize: '13px', fontWeight: '600', opacity: 0.9 },
    headerProgress: { fontSize: '13px', fontWeight: '700' },
    progressBarOuter: {
      height: '6px',
      background: 'rgba(255,255,255,0.3)',
      borderRadius: '3px',
      overflow: 'hidden',
    },
    progressBarInner: {
      height: '100%',
      background: '#FFFFFF',
      borderRadius: '3px',
      transition: 'width 0.3s ease',
    },
    mainContent: {
      padding: '24px 20px',
      paddingBottom: '100px',
    },
    card: {
      background: COLORS.surface,
      borderRadius: '20px',
      padding: '28px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      marginBottom: '20px',
    },
    cardTitle: {
      fontSize: '28px',
      fontWeight: '800',
      color: COLORS.textPrimary,
      marginBottom: '8px',
      lineHeight: 1.2,
    },
    cardSubtitle: {
      fontSize: '16px',
      color: COLORS.textSecondary,
      marginBottom: '24px',
    },
    iconCircle: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: '#FEE2E2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '40px',
      margin: '0 auto 20px',
      border: `3px solid ${COLORS.brandPrimary}`,
    },
    featureRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '16px',
      background: '#F8FAFC',
      borderRadius: '12px',
      marginBottom: '12px',
    },
    featureIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '12px',
      background: COLORS.surface,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    },
    featureContent: { flex: 1 },
    featureLabel: { fontSize: '16px', fontWeight: '700', color: COLORS.textPrimary },
    featureDesc: { fontSize: '14px', color: COLORS.textSecondary },
    legalBox: {
      background: '#F8FAFC',
      border: `1px solid ${COLORS.border}`,
      borderRadius: '12px',
      padding: '16px',
      maxHeight: '300px',
      overflowY: 'auto',
      fontSize: '13px',
      lineHeight: 1.6,
      color: COLORS.textSecondary,
      marginBottom: '20px',
      whiteSpace: 'pre-wrap',
    },
    checkboxRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '14px 16px',
      background: '#F8FAFC',
      borderRadius: '10px',
      marginBottom: '10px',
      cursor: 'pointer',
    },
    checkboxRowChecked: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '14px 16px',
      background: '#F0FDF4',
      border: `2px solid ${COLORS.stop}`,
      borderRadius: '10px',
      marginBottom: '10px',
      cursor: 'pointer',
    },
    checkbox: {
      width: '24px',
      height: '24px',
      borderRadius: '6px',
      border: `2px solid ${COLORS.border}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkboxChecked: {
      width: '24px',
      height: '24px',
      borderRadius: '6px',
      background: COLORS.stop,
      border: `2px solid ${COLORS.stop}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFFFFF',
    },
    recordButton: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      border: `4px solid ${COLORS.record}`,
      background: COLORS.surface,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '48px',
      margin: '30px auto',
      cursor: 'pointer',
      boxShadow: '0 4px 20px rgba(220, 38, 38, 0.2)',
    },
    recordButtonActive: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      border: 'none',
      background: COLORS.record,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '48px',
      margin: '30px auto',
      cursor: 'pointer',
      boxShadow: '0 4px 24px rgba(220, 38, 38, 0.4)',
      animation: 'pulse 1.5s infinite',
    },
    waveform: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '3px',
      height: '60px',
      margin: '20px 0',
    },
    waveBar: {
      width: '4px',
      background: COLORS.brandPrimary,
      borderRadius: '2px',
    },
    timer: {
      fontSize: '32px',
      fontWeight: '700',
      textAlign: 'center',
      color: COLORS.textPrimary,
      fontFamily: 'monospace',
    },
    photoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '12px',
    },
    photoCard: {
      borderRadius: '12px',
      overflow: 'hidden',
      background: '#E2E8F0',
      aspectRatio: '4/3',
      position: 'relative',
    },
    photoPlaceholder: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 100%)',
      color: COLORS.textSecondary,
      fontSize: '14px',
      textAlign: 'center',
      padding: '10px',
    },
    photoCaption: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
      color: '#FFFFFF',
      padding: '20px 10px 10px',
      fontSize: '12px',
      fontWeight: '500',
    },
    signatureBox: {
      border: `3px dashed ${COLORS.stop}`,
      borderRadius: '16px',
      padding: '30px',
      textAlign: 'center',
      background: '#F0FDF4',
    },
    signatureLine: {
      borderBottom: `2px solid ${COLORS.textPrimary}`,
      width: '80%',
      margin: '20px auto 10px',
      paddingBottom: '10px',
      fontFamily: 'cursive',
      fontSize: '24px',
      color: COLORS.textPrimary,
    },
    stepRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '16px',
      borderBottom: `1px solid ${COLORS.border}`,
    },
    stepIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
    },
    stepIconDone: { background: '#D1FAE5', color: COLORS.stop },
    stepIconActive: { background: '#FEF3C7', color: '#D97706' },
    stepIconPending: { background: '#F1F5F9', color: COLORS.textSecondary },
    navContainer: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      gap: '12px',
      padding: '16px 20px',
      background: COLORS.surface,
      borderTop: `1px solid ${COLORS.border}`,
      boxShadow: '0 -4px 20px rgba(0,0,0,0.05)',
    },
    prevButton: {
      flex: 1,
      padding: '16px',
      borderRadius: '12px',
      border: `2px solid ${COLORS.border}`,
      background: 'transparent',
      color: COLORS.textSecondary,
      fontSize: '16px',
      fontWeight: '700',
      cursor: 'pointer',
    },
    nextButton: {
      flex: 2,
      padding: '16px',
      borderRadius: '12px',
      border: 'none',
      background: COLORS.next,
      color: '#FFFFFF',
      fontSize: '16px',
      fontWeight: '700',
      cursor: 'pointer',
    },
    skipButton: {
      position: 'fixed',
      bottom: '90px',
      right: '20px',
      background: COLORS.skip,
      color: '#FFFFFF',
      padding: '12px 20px',
      borderRadius: '24px',
      fontSize: '14px',
      fontWeight: '700',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
      zIndex: 100,
    },
    ssoButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      width: '100%',
      padding: '16px',
      borderRadius: '12px',
      border: `2px solid ${COLORS.border}`,
      background: COLORS.surface,
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      marginBottom: '12px',
    },
    codeInput: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      margin: '24px 0',
    },
    codeBox: {
      width: '50px',
      height: '60px',
      borderRadius: '12px',
      border: `2px solid ${COLORS.border}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      fontWeight: '700',
    },
    transcriptBox: {
      background: '#F8FAFC',
      borderRadius: '12px',
      padding: '20px',
      fontStyle: 'italic',
      fontSize: '16px',
      lineHeight: 1.6,
      color: COLORS.textPrimary,
      borderLeft: `4px solid ${COLORS.brandPrimary}`,
    },
    matchFactor: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px 0',
      fontSize: '15px',
      color: COLORS.textPrimary,
    },
    caseNumberBox: {
      background: '#F0FDF4',
      border: `2px solid ${COLORS.stop}`,
      borderRadius: '12px',
      padding: '20px',
      textAlign: 'center',
      marginTop: '20px',
    },
    caseNumberLabel: {
      fontSize: '12px',
      fontWeight: '700',
      color: COLORS.textSecondary,
      letterSpacing: '1px',
    },
    caseNumber: {
      fontSize: '24px',
      fontWeight: '800',
      color: COLORS.stop,
      marginTop: '8px',
    },
  };

  // ──────────────────────────────────────────────────────────
  // RENDER SCREEN BY TYPE
  // ──────────────────────────────────────────────────────────
  const renderScreen = () => {
    switch (screen.type) {
      case 'WELCOME':
        return (
          <div style={styles.card}>
            <div style={styles.iconCircle}>{screen.icon}</div>
            <h1 style={{ ...styles.cardTitle, textAlign: 'center' }}>{screen.title}</h1>
            <p style={{ ...styles.cardSubtitle, textAlign: 'center' }}>{screen.subtitle}</p>
            <p style={{ fontSize: '15px', color: COLORS.textSecondary, textAlign: 'center', lineHeight: 1.6 }}>
              {screen.description}
            </p>
          </div>
        );

      case 'SECURITY':
        return (
          <div style={styles.card}>
            <h1 style={styles.cardTitle}>{screen.title}</h1>
            <p style={styles.cardSubtitle}>{screen.subtitle}</p>
            {screen.features.map((feat, i) => (
              <div key={i} style={styles.featureRow}>
                <div style={styles.featureIcon}>{feat.icon}</div>
                <div style={styles.featureContent}>
                  <div style={styles.featureLabel}>{feat.label}</div>
                  <div style={styles.featureDesc}>{feat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'IDENTITY':
        return (
          <div style={styles.card}>
            <h1 style={styles.cardTitle}>{screen.title}</h1>
            <p style={styles.cardSubtitle}>{screen.subtitle}</p>
            {screen.methods.map((method, i) => (
              <div key={i} style={styles.featureRow}>
                <div style={{
                  ...styles.featureIcon,
                  background: method.status === 'complete' ? '#D1FAE5' : method.status === 'active' ? '#FEF3C7' : '#F1F5F9'
                }}>
                  {method.status === 'complete' ? '✓' : method.icon}
                </div>
                <div style={styles.featureLabel}>{method.label}</div>
              </div>
            ))}
            <div style={styles.codeInput}>
              {['4', '7', '2', '', '', ''].map((num, i) => (
                <div key={i} style={{ ...styles.codeBox, borderColor: num ? COLORS.stop : COLORS.border }}>
                  {num}
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', color: COLORS.textSecondary, fontSize: '14px' }}>
              Enter the 6-digit code sent to your phone
            </p>
          </div>
        );

      case 'SSO':
        return (
          <div style={styles.card}>
            <h1 style={styles.cardTitle}>{screen.title}</h1>
            <p style={styles.cardSubtitle}>{screen.subtitle}</p>
            {screen.options.map((opt, i) => (
              <div key={i} style={{ ...styles.ssoButton, borderColor: opt.color }}>
                <span style={{ fontSize: '24px' }}>{opt.icon}</span>
                <span>{opt.label}</span>
              </div>
            ))}
          </div>
        );

      case 'HIPAA':
        return (
          <div style={styles.card}>
            <div style={{ ...styles.iconCircle, background: '#DBEAFE', borderColor: '#2563EB' }}>{screen.icon}</div>
            <h1 style={{ ...styles.cardTitle, textAlign: 'center' }}>{screen.title}</h1>
            <p style={{ ...styles.cardSubtitle, textAlign: 'center' }}>{screen.subtitle}</p>
            <div style={{ ...styles.featureRow, background: '#EFF6FF', border: '1px solid #BFDBFE' }}>
              <p style={{ fontSize: '15px', lineHeight: 1.6, color: COLORS.textPrimary, margin: 0 }}>
                {screen.content}
              </p>
            </div>
          </div>
        );

      case 'LEGAL_SCROLL':
        return (
          <div style={styles.card}>
            <h1 style={styles.cardTitle}>{screen.title}</h1>
            <p style={styles.cardSubtitle}>{screen.subtitle}</p>
            <div style={styles.legalBox}>{screen.legalText}</div>
            <div style={styles.checkboxRowChecked}>
              <div style={styles.checkboxChecked}>✓</div>
              <span style={{ fontSize: '15px', fontWeight: '500' }}>I have read and agree to the Privacy Policy</span>
            </div>
          </div>
        );

      case 'CONSENT':
        return (
          <div style={styles.card}>
            <h1 style={styles.cardTitle}>{screen.title}</h1>
            <p style={styles.cardSubtitle}>{screen.subtitle}</p>
            {screen.consents.map((consent, i) => (
              <div
                key={i}
                style={consents[consent.id] ? styles.checkboxRowChecked : styles.checkboxRow}
                onClick={() => !consent.required && setConsents({ ...consents, [consent.id]: !consents[consent.id] })}
              >
                <div style={consents[consent.id] ? styles.checkboxChecked : styles.checkbox}>
                  {consents[consent.id] && '✓'}
                </div>
                <span style={{ fontSize: '15px', fontWeight: '500', flex: 1 }}>{consent.label}</span>
                {consent.required && <span style={{ fontSize: '12px', color: COLORS.record }}>Required</span>}
              </div>
            ))}
          </div>
        );

      case 'OPTINS':
        return (
          <div style={styles.card}>
            <h1 style={styles.cardTitle}>{screen.title}</h1>
            <p style={styles.cardSubtitle}>{screen.subtitle}</p>
            {screen.options.map((opt, i) => (
              <div
                key={i}
                style={optIns[opt.id] ? styles.checkboxRowChecked : styles.checkboxRow}
                onClick={() => setOptIns({ ...optIns, [opt.id]: !optIns[opt.id] })}
              >
                <div style={optIns[opt.id] ? styles.checkboxChecked : styles.checkbox}>
                  {optIns[opt.id] && '✓'}
                </div>
                <span style={{ fontSize: '20px' }}>{opt.icon}</span>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>{opt.label}</span>
              </div>
            ))}
          </div>
        );

      case 'AUDIO_INTRO':
        return (
          <div style={styles.card}>
            <div style={{ ...styles.iconCircle, background: '#FEE2E2', borderColor: COLORS.record }}>🎤</div>
            <h1 style={{ ...styles.cardTitle, textAlign: 'center' }}>{screen.title}</h1>
            <p style={{ ...styles.cardSubtitle, textAlign: 'center' }}>{screen.subtitle}</p>
            <p style={{ fontSize: '15px', color: COLORS.textSecondary, textAlign: 'center', marginBottom: '24px' }}>
              {screen.description}
            </p>
            {screen.benefits.map((benefit, i) => (
              <div key={i} style={{ padding: '10px 0', fontSize: '15px', color: COLORS.textPrimary }}>
                {benefit}
              </div>
            ))}
          </div>
        );

      case 'AUDIO_RECORD':
        return (
          <div style={styles.card}>
            <h1 style={{ ...styles.cardTitle, textAlign: 'center' }}>{screen.title}</h1>
            <p style={{ ...styles.cardSubtitle, textAlign: 'center' }}>{screen.prompt}</p>
            
            <div
              style={isRecording ? styles.recordButtonActive : styles.recordButton}
              onClick={() => setIsRecording(!isRecording)}
            >
              {isRecording ? '⏹' : '🎤'}
            </div>
            
            <p style={{ textAlign: 'center', fontSize: '15px', color: COLORS.textSecondary, marginBottom: '20px' }}>
              {isRecording ? 'TAP TO STOP' : 'TAP TO RECORD'}
            </p>
            
            {isRecording && (
              <div style={styles.waveform}>
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      ...styles.waveBar,
                      height: `${Math.random() * 40 + 10}px`,
                      opacity: 0.7 + Math.random() * 0.3,
                    }}
                  />
                ))}
              </div>
            )}
            
            <div style={styles.timer}>
              {isRecording ? '02:34' : '00:00'} / {screen.maxTime}
            </div>
          </div>
        );

      case 'AUDIO_TRANSCRIPT':
        return (
          <div style={styles.card}>
            <h1 style={styles.cardTitle}>{screen.title}</h1>
            <p style={styles.cardSubtitle}>{screen.subtitle}</p>
            
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
              <div style={{ ...styles.featureIcon, background: '#D1FAE5' }}>▶️</div>
              <div style={styles.featureContent}>
                <div style={styles.featureLabel}>Play Recording</div>
                <div style={styles.featureDesc}>Review your audio</div>
              </div>
            </div>
            
            <div style={styles.transcriptBox}>
              {screen.transcript}
            </div>
            
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              <button style={{ ...styles.prevButton, flex: 1 }}>🔄 Re-record</button>
              <button style={{ ...styles.nextButton, flex: 1, background: COLORS.stop }}>✓ Approve</button>
            </div>
          </div>
        );

      case 'PHOTO_INTRO':
        return (
          <div style={styles.card}>
            <div style={{ ...styles.iconCircle, background: '#E0E7FF', borderColor: '#4F46E5' }}>📷</div>
            <h1 style={{ ...styles.cardTitle, textAlign: 'center' }}>{screen.title}</h1>
            <p style={{ ...styles.cardSubtitle, textAlign: 'center' }}>{screen.subtitle}</p>
            {screen.categories.map((cat, i) => (
              <div key={i} style={styles.featureRow}>
                <div style={styles.featureIcon}>{cat.icon}</div>
                <div style={styles.featureContent}>
                  <div style={styles.featureLabel}>{cat.label}</div>
                  <div style={styles.featureDesc}>{cat.count}</div>
                </div>
                <div style={{ fontSize: '20px', color: COLORS.textSecondary }}>+</div>
              </div>
            ))}
          </div>
        );

      case 'PHOTO_GALLERY':
        const photos = DEMO_PHOTOS[screen.category] || [];
        const secondaryPhotos = screen.secondaryCategory ? DEMO_PHOTOS[screen.secondaryCategory] : [];
        const allPhotos = [...photos, ...secondaryPhotos].slice(0, 4);
        
        return (
          <div style={styles.card}>
            <h1 style={styles.cardTitle}>{screen.title}</h1>
            <p style={styles.cardSubtitle}>{screen.subtitle}</p>
            <div style={styles.photoGrid}>
              {allPhotos.map((photo, i) => (
                <div key={i} style={styles.photoCard}>
                  <div style={styles.photoPlaceholder}>
                    <div style={{ fontSize: '32px', marginBottom: '8px' }}>📷</div>
                    <div style={{ fontWeight: '600' }}>{photo.category}</div>
                    <div style={{ fontSize: '12px' }}>{photo.caption}</div>
                  </div>
                  <div style={styles.photoCaption}>{photo.caption}</div>
                </div>
              ))}
            </div>
            <button style={{ ...styles.ssoButton, marginTop: '20px', borderColor: COLORS.stop, color: COLORS.stop }}>
              + Add More Photos
            </button>
          </div>
        );

      case 'SIGNATURE':
        return (
          <div style={styles.card}>
            <h1 style={styles.cardTitle}>{screen.title}</h1>
            <p style={styles.cardSubtitle}>{screen.subtitle}</p>
            
            <div style={{ background: '#FEF3C7', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>📝</span>
              <span style={{ fontSize: '13px', fontWeight: '600' }}>DOCUSIGN INTEGRATION</span>
            </div>
            
            <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '12px', marginBottom: '20px' }}>
              <div style={{ fontSize: '14px', fontWeight: '600', color: COLORS.textSecondary, marginBottom: '8px' }}>Document:</div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: COLORS.textPrimary }}>{screen.document}</div>
            </div>
            
            <div style={styles.signatureBox}>
              <div style={{ fontSize: '14px', color: COLORS.textSecondary, marginBottom: '10px' }}>Signed electronically</div>
              <div style={styles.signatureLine}>{screen.signedBy}</div>
              <div style={{ fontSize: '14px', color: COLORS.textSecondary }}>{screen.signedDate}</div>
              <div style={{ marginTop: '16px', fontSize: '24px' }}>✓</div>
            </div>
          </div>
        );

      case 'AI_MATCHING':
        return (
          <div style={styles.card}>
            <div style={{ ...styles.iconCircle, background: '#DBEAFE', borderColor: '#2563EB' }}>🤖</div>
            <h1 style={{ ...styles.cardTitle, textAlign: 'center' }}>{screen.title}</h1>
            <p style={{ ...styles.cardSubtitle, textAlign: 'center' }}>{screen.subtitle}</p>
            <p style={{ fontSize: '15px', color: COLORS.textSecondary, textAlign: 'center', marginBottom: '24px' }}>
              {screen.description}
            </p>
            <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: COLORS.textSecondary, marginBottom: '12px' }}>MATCHING FACTORS</div>
              {screen.matchFactors.map((factor, i) => (
                <div key={i} style={styles.matchFactor}>
                  <span style={{ color: COLORS.stop }}>✓</span>
                  <span>{factor}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'COMPLETE':
        return (
          <div style={styles.card}>
            <div style={{ ...styles.iconCircle, background: '#D1FAE5', borderColor: COLORS.stop }}>🎉</div>
            <h1 style={{ ...styles.cardTitle, textAlign: 'center', color: COLORS.stop }}>{screen.title}</h1>
            <p style={{ ...styles.cardSubtitle, textAlign: 'center' }}>{screen.subtitle}</p>
            
            {screen.steps.map((step, i) => (
              <div key={i} style={styles.stepRow}>
                <div style={{
                  ...styles.stepIcon,
                  ...(step.status === 'done' ? styles.stepIconDone : step.status === 'active' ? styles.stepIconActive : styles.stepIconPending)
                }}>
                  {step.icon}
                </div>
                <span style={{ fontSize: '15px', fontWeight: '500', color: step.status === 'pending' ? COLORS.textSecondary : COLORS.textPrimary }}>
                  {step.label}
                </span>
              </div>
            ))}
            
            <div style={styles.caseNumberBox}>
              <div style={styles.caseNumberLabel}>YOUR CASE NUMBER</div>
              <div style={styles.caseNumber}>{screen.caseNumber}</div>
            </div>
          </div>
        );

      default:
        return <div style={styles.card}><p>Screen type not found</p></div>;
    }
  };

  // ──────────────────────────────────────────────────────────
  // MAIN RENDER
  // ──────────────────────────────────────────────────────────
  return (
    <div style={styles.container} onDoubleClick={handleDoubleClick}>
      <div style={styles.presenterBadge}>🎤 PRESENTER MODE</div>
      
      <div style={styles.header}>
        <div style={styles.headerTop}>
          <span style={styles.headerTitle}>ASKGARY DEMO</span>
          <span style={styles.headerProgress}>{currentIndex + 1} / {SCREENS.length}</span>
        </div>
        <div style={styles.progressBarOuter}>
          <div style={{ ...styles.progressBarInner, width: `${progress}%` }} />
        </div>
      </div>
      
      <div style={styles.mainContent}>
        {renderScreen()}
      </div>
      
      <div style={styles.navContainer}>
        <button style={styles.prevButton} onClick={goPrev} disabled={currentIndex === 0}>
          ← BACK
        </button>
        <button style={styles.nextButton} onClick={goNext}>
          {currentIndex === SCREENS.length - 1 ? '✓ DONE' : 'NEXT →'}
        </button>
      </div>
      
      <button style={styles.skipButton} onClick={goNext}>
        ⏭ SKIP
      </button>
      
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default FeatureShowcaseDemo;
