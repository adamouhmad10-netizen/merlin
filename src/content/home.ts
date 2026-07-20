/** Homepage content — sourced from Merlin-Law-Website-Copy.docx. */

export const hero = {
  eyebrow: 'Medical Record Intelligence for Civil Defense',
  headlineLead: 'Command the medical record.',
  headlineRest: 'Every page. Every entry. Every time.',
  sub:
    'Merlin gives defense counsel physician-level command of the complete medical record — ' +
    'securely, and with answers grounded in the actual documents.',
};

export const openingStatement = {
  eyebrow: 'Opening Statement',
  body: [
    'In civil liability defense, the medical record is where cases are won and lost. The pre-existing condition on page 3,412. The treatment gap no one mentioned at deposition. The inconsistency between the intake note and the demand letter.',
    'Merlin is the Medical Record Wizard — a closed-system record intelligence service built for the demands of litigation. Ask the record anything. Receive answers grounded in the actual documents — organized, medically pertinent, and ready for the work of defense.',
  ],
};

export const explainer = {
  eyebrow: 'How Merlin Works',
  headline: 'Ten thousand pages. One conversation.',
  sub:
    'Merlin turns a litigation-scale record production into a secure environment you can ask questions of — and every answer points back to the page it came from.',
  points: [
    { label: 'Professionally curated records', desc: 'A medical-legal foundation is prepared before any analysis begins.' },
    { label: 'Source-grounded answers', desc: 'Every response points to the underlying document for verification.' },
    { label: 'Matter-level confidentiality', desc: 'Each case is sealed in its own environment. Nothing is commingled.' },
  ],
};

export const pillars = [
  {
    num: '01',
    title: 'A Verified Foundation',
    body:
      'Merlin does not simply ingest raw records and hope for the best. Before any analysis begins, the complete record set is professionally curated so that every medically pertinent detail — every diagnosis, provider, medication, procedure, and date of service — is properly recognized and structured.',
    kicker: 'Clean data in. Reliable answers out.',
  },
  {
    num: '02',
    title: 'A Closed System',
    body:
      'Your case materials never leave the system. Nothing is used to train public AI models. Nothing is commingled with other matters. Merlin operates as a sealed environment built for the confidentiality obligations of legal practice.',
    kicker: 'A sealed environment, by design.',
  },
  {
    num: '03',
    title: 'Answers at the Speed of Litigation',
    body:
      'Chat directly with the record. Build chronologies in minutes. Surface prior conditions, treatment gaps, and inconsistencies before mediation — not after. What once took a physician reviewer weeks is now available on demand.',
    kicker: 'Thorough review, on every file.',
  },
];

export const processPreview = [
  { num: '1', title: 'The Record Is Curated', desc: 'Pertinent medical information is identified, verified, and structured before analysis begins.' },
  { num: '2', title: 'The Record Becomes Intelligent', desc: 'The curated record becomes a secure, searchable, case-specific knowledge base.' },
  { num: '3', title: 'You Take Command', desc: 'Ask in plain language. Request chronologies, gap analyses, and provider summaries — grounded in the record.' },
];

export const provocation = {
  lines: ['Your expert reviewed the records.', 'Their expert reviewed the records.'],
  question: 'Who reviewed the reviewers?',
  answer: 'Merlin did.',
  support:
    'Expert opinions are only as strong as their command of the record. Merlin lets you verify — line by line, page by page — that your expert’s opinion rests on the complete medical picture, and that the other side’s does not survive contact with it.',
};

export const features = [
  {
    title: 'Comprehensive Medical Chronologies',
    desc: 'Complete, organized timelines of treatment across all providers and facilities — the backbone of any defense evaluation.',
    tag: 'CHRONOLOGY',
  },
  {
    title: 'Prior & Pre-Existing Condition Identification',
    desc: 'Surface the claimant’s medical history before the date of loss: prior injuries to the same body parts, degenerative findings, earlier complaints.',
    tag: 'CAUSATION',
  },
  {
    title: 'Treatment Gap & Compliance Analysis',
    desc: 'Identify gaps in treatment, missed appointments, and inconsistencies between subjective complaints and objective findings.',
    tag: 'COMPLIANCE',
  },
  {
    title: 'Expert Opinion Auditing',
    desc: 'Test any expert opinion — yours or theirs — against the complete record. Confirm your expert saw everything that matters.',
    tag: 'AUDIT',
  },
  {
    title: 'Deposition & IME Preparation',
    desc: 'Walk in with complete command of the record. Verify testimony against the documents and build examination outlines grounded in the history.',
    tag: 'PREPARATION',
  },
  {
    title: 'Billing Review & Overbilling Detection',
    desc: 'Surface the billing picture across the record — duplicate charges, treatment billed but never documented, and services unrelated to the claimed injury.',
    tag: 'DAMAGES',
  },
];

export const audiences = [
  {
    key: 'defense',
    label: 'For Defense Counsel',
    line: 'Know the record before the deposition, mediation, or expert examination.',
    body:
      'Prior conditions, treatment gaps, expert-opinion auditing, and source-grounded preparation — so you walk in knowing the record better than opposing counsel and better than their expert.',
    href: '/solutions#defense',
  },
  {
    key: 'claims',
    label: 'For Claims Professionals',
    line: 'Reserve with confidence. Resolve with clarity.',
    body:
      'A complete, organized view of the medical record from the earliest stages of a claim — so reserves reflect reality and settlement postures rest on facts.',
    href: '/solutions#claims',
  },
];

export const securityPreview = {
  eyebrow: 'Trust & Security',
  headline: 'A sealed room for your case.',
  points: [
    { title: 'Closed by design', desc: 'Not used to train public AI models. Not commingled with other matters.' },
    { title: 'Isolated by matter', desc: 'Each case operates as its own sealed environment.' },
    { title: 'Governed by professionals', desc: 'Operated by a med-legal firm accustomed to sensitive medical information.' },
  ],
};

export const finalCta = {
  headline: 'The record has answers. Ask.',
  body:
    'Schedule a confidential demonstration and see Merlin work through a record set like the ones on your desk right now.',
};
