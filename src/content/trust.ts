/** Trust & Demonstration page content. */

export const trustHero = {
  eyebrow: 'Trust & Security',
  headline: 'A sealed room for your case.',
  sub:
    'Legal practice imposes confidentiality obligations that most AI tools were never designed to meet. Merlin was designed to meet them from the first line of code.',
};

export const securityPrinciples = [
  {
    key: 'closed',
    title: 'Closed by design',
    body:
      'Your case materials are processed within a sealed environment. They are not used to train public AI models, not shared across matters, and not accessible outside your engagement.',
  },
  {
    key: 'isolated',
    title: 'Isolated by matter',
    body:
      'Each case operates as its own environment. There is no commingling of records, queries, or work product between matters — even your own.',
  },
  {
    key: 'governed',
    title: 'Governed by professionals',
    body:
      'Merlin is operated by The Guardian Group, a med-legal management organization accustomed to handling sensitive medical information under the strictest professional standards.',
  },
];

/**
 * VERIFIED CERTIFICATIONS — intentionally empty.
 * Do NOT publish HIPAA / SOC 2 / encryption / data-residency claims until the
 * client's compliance team confirms them. Add confirmed items here and they
 * will render in the "Verified safeguards" area on /trust.
 */
export const verifiedCertifications: { label: string; detail: string }[] = [
  // Example (add only when confirmed):
  // { label: 'SOC 2 Type II', detail: 'Independently audited controls.' },
];

export const about = {
  eyebrow: 'About Merlin & Guardian',
  headline: 'Born in med-legal practice. Built for the defense bar.',
  body: [
    'Merlin is a service of The Guardian Group, a medical-legal management firm that has spent years inside the machinery of civil litigation — the records, the reviews, the experts, the economics.',
    'We watched talented attorneys make consequential decisions on incomplete pictures of the medical record, because complete pictures were too expensive or too slow. We built Merlin to end that compromise.',
    'Merlin combines disciplined medical-legal professionalism with a secure, intelligent analysis platform. It is not artificial intelligence bolted onto legal work. It is medical-legal expertise, amplified.',
  ],
};

export const faqs = [
  {
    q: 'Is Merlin just another AI chatbot pointed at documents?',
    a: 'No. General-purpose AI tools analyze raw, disorganized records and inherit every flaw in them. Merlin’s analysis is built on a professionally curated medical foundation, so pertinent information is properly recognized before a single question is asked. The difference shows in the answers.',
  },
  {
    q: 'How do I know the answers are reliable?',
    a: 'Merlin’s responses are grounded in the curated record itself, and the underlying source material remains available for verification. Merlin is a powerful analytical instrument for counsel — it informs professional judgment; it does not replace it.',
  },
  {
    q: 'Is my case data secure?',
    a: 'Yes. Merlin operates as a closed system. Your materials are never used to train public AI models and are never commingled with other matters.',
  },
  {
    q: 'How does the cost compare to a physician record review?',
    a: 'Merlin delivers comprehensive record analysis at a significant fraction of typical physician review rates — and helps you identify precisely where a physician expert’s time is best invested.',
  },
  {
    q: 'How large a record set can Merlin handle?',
    a: 'Merlin is built for litigation-scale record sets — from a few hundred pages to the multi-thousand-page productions common in serious injury matters.',
  },
  {
    q: 'What types of cases is Merlin suited for?',
    a: 'Any civil liability matter where the medical record is central: personal injury, premises liability, trucking and transportation, product liability, medical malpractice defense, and workers’ compensation, among others.',
  },
  {
    q: 'How quickly can we begin?',
    a: 'Contact us for a confidential consultation. Onboarding a new matter is straightforward, and our team guides yours through every step.',
  },
];

export const demoForm = {
  eyebrow: 'Request a Private Demonstration',
  headline: 'See Merlin work through a record like yours.',
  sub:
    'Schedule a confidential demonstration with a case consultant. We will walk through a record set like the ones on your desk right now.',
  privacyWarning:
    'Do not submit medical records, protected health information, or confidential case details through this form.',
  roleOptions: [
    'Defense Attorney',
    'Insurance Adjuster',
    'Claims Professional',
    'Paralegal',
    'Third-Party Administrator',
    'In-House / General Counsel',
    'Other',
  ],
  recordSizeOptions: [
    'Under 1,000 pages',
    '1,000 – 5,000 pages',
    '5,000 – 10,000 pages',
    'Over 10,000 pages',
    'Varies by matter',
  ],
  consultationTimes: ['Morning (ET)', 'Midday (ET)', 'Afternoon (ET)', 'No preference'],
};
