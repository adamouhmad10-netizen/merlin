/** The Merlin Platform page content — sourced from the client Word document. */

export const platformHero = {
  eyebrow: 'The Merlin Platform',
  headline: 'Precision first. Intelligence second. Answers always.',
  sub:
    'Most general AI tools take a shortcut: they pour raw, disorganized records into a model and pass the output to you — errors and all. Merlin takes a different path, because in litigation, “mostly accurate” is not accurate at all.',
};

export const stages = [
  {
    num: '01',
    title: 'The Record Is Curated',
    body:
      'Every record set entering Merlin undergoes professional medical-legal curation. Pertinent medical information is identified, verified, and structured before analysis ever begins. Illegible entries, duplicates, and disorganized productions are resolved — not ignored.',
    facets: ['Identified', 'Verified', 'Structured', 'De-duplicated', 'Organized by provider & date'],
    entities: ['Diagnoses', 'Providers', 'Medications', 'Procedures', 'Dates of service'],
  },
  {
    num: '02',
    title: 'The Record Becomes Intelligent',
    body:
      'The curated record is transformed into a secure, searchable, case-specific knowledge base within Merlin’s closed system. It knows your record — and only your record.',
    facets: ['Secure', 'Searchable', 'Matter-specific', 'Source-linked', 'Isolated from other matters'],
    entities: [],
  },
  {
    num: '03',
    title: 'You Take Command',
    body:
      'Ask questions in plain language. Request chronologies, provider summaries, medication histories, or gap analyses. Test theories. Prepare for depositions. Merlin responds with answers drawn from the record itself — each one traceable to its source.',
    facets: ['Case overview', 'Record conversation', 'Chronology', 'Provider map', 'Source-document viewer'],
    entities: [],
  },
];

export const stageClosing =
  'The result: the comprehensiveness of a physician review, the responsiveness of a conversation, and a cost structure that makes thorough review the rule rather than the exception.';

export const capabilityGroups = [
  {
    group: 'Investigate',
    intro: 'Establish the true medical posture of the claim, from first review through discovery.',
    items: [
      { title: 'Comprehensive Medical Chronologies', desc: 'Complete, organized timelines of treatment across every provider and facility.' },
      { title: 'Prior & Pre-Existing Conditions', desc: 'Prior injuries to the same body parts, degenerative findings, and earlier complaints — the foundation of causation defense.' },
      { title: 'Treatment Gaps', desc: 'Gaps in treatment, missed appointments, and non-compliance with medical advice.' },
      { title: 'Medication & Procedure Histories', desc: 'Complete medication timelines and procedure summaries by date, prescriber, and indication.' },
      { title: 'Provider & Facility Mapping', desc: 'Every treating provider, referral pattern, and facility relationship — including patterns worth a closer look.' },
    ],
  },
  {
    group: 'Prepare',
    intro: 'Walk into every proceeding with complete command of the record.',
    items: [
      { title: 'Expert Opinion Auditing', desc: 'Test any expert opinion — yours or theirs — against the complete record.' },
      { title: 'Deposition Preparation', desc: 'Query specific encounters and build examination outlines grounded in the actual history.' },
      { title: 'IME Preparation', desc: 'Verify testimony against the documents before the independent medical examination.' },
      { title: 'Case Theory Testing', desc: 'Test theories against the record and confirm they survive contact with the documents.' },
    ],
  },
  {
    group: 'Challenge',
    intro: 'Give damages the same scrutiny as liability.',
    items: [
      { title: 'Billing Review', desc: 'Surface the billing picture across the entire record, so claimed specials can be tested against what the record supports.' },
      { title: 'Duplicate Charges', desc: 'Identify duplicate billing and charges without corresponding clinical notes.' },
      { title: 'Unsupported Treatment', desc: 'Treatment billed but never documented in the clinical record.' },
      { title: 'Causation Inconsistencies', desc: 'Inconsistencies between subjective complaints, objective findings, and the claimed mechanism of injury.' },
      { title: 'Treatment Unrelated to the Claim', desc: 'Services untethered to the injury at issue that warrant a closer look.' },
    ],
  },
];

export const economics = {
  eyebrow: 'The Economics of Thoroughness',
  headline: 'The economics of thoroughness, finally corrected.',
  intro:
    'For decades, defense counsel has faced an unwelcome choice: pay physician rates for a truly comprehensive record review, or assign the record to junior staff and accept what a non-medical reading can find. Merlin retires that choice.',
  benefits: [
    { title: 'More comprehensive than simple delegation', desc: 'Analysis begins from a professionally curated medical foundation, so pertinent details are recognized, not overlooked.' },
    { title: 'A fraction of traditional physician-review cost', desc: 'Rigorous review becomes economical on every file — and helps you decide precisely where physician expert time is truly warranted.' },
    { title: 'Faster case evaluation, earlier leverage', desc: 'Understand the true medical posture of a claim in days, not months. Enter mediation informed.' },
    { title: 'Consistency across every file', desc: 'The same rigorous standard on every matter, regardless of size. No variance between reviewers.' },
    { title: 'Defensible billing for your clients', desc: 'Deliver deeper record analysis at lower cost — a story every client relationship benefits from.' },
    { title: 'Every dollar of specials, accounted for', desc: 'Cross-reference billed charges against the documented treatment record before the number becomes the baseline.' },
  ],
};
