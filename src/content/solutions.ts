/** Solutions page content — defense counsel + claims/insurance. */

export const solutionsHero = {
  eyebrow: 'Solutions',
  headline: 'One record foundation. Two sides of the same file.',
  sub:
    'Defense counsel and claims professionals work from the same medical record. Merlin gives each a complete, source-grounded command of it — mapped to the way each actually works.',
};

export const defense = {
  id: 'defense',
  label: 'Defense Counsel',
  headline: 'Know the record better than opposing counsel. Better than their expert.',
  intro:
    'Map Merlin across the full case lifecycle — from the first review of a new matter through trial strategy — with source-grounded answers at every stage.',
  lifecycle: [
    { step: '01', title: 'Early Case Evaluation', desc: 'Understand the true medical posture of a claim in days, not months, and set reserves and strategy with confidence.' },
    { step: '02', title: 'Demand Review', desc: 'Respond to demands with specifics, not generalities — the record in hand, line by line.' },
    { step: '03', title: 'Causation Analysis', desc: 'Prior conditions, degenerative findings, and alternative causation, surfaced from the complete history.' },
    { step: '04', title: 'Expert Review', desc: 'Confirm your expert saw everything that matters — and identify what opposing counsel’s expert overlooked or never received.' },
    { step: '05', title: 'Deposition Preparation', desc: 'Query specific encounters and verify testimony against the documents before you walk in.' },
    { step: '06', title: 'IME Preparation', desc: 'Prepare examination outlines grounded in the actual medical history.' },
    { step: '07', title: 'Mediation', desc: 'Enter informed, with treatment gaps and billing scrutiny ready to deploy.' },
    { step: '08', title: 'Trial Strategy', desc: 'Build a case theory that survives contact with the complete record.' },
  ],
  emphasis: [
    'Knowing the record better than opposing counsel',
    'Prior conditions',
    'Treatment gaps',
    'Expert-opinion auditing',
    'Source-grounded preparation',
    'Billing scrutiny',
  ],
};

export const claims = {
  id: 'claims',
  label: 'Claims & Insurance',
  headline: 'Reserve with confidence. Resolve with clarity.',
  intro:
    'Claim valuation is only as good as the medical picture behind it. Merlin gives adjusters and claims professionals a complete, organized view of the medical record from the earliest stages of a claim — so reserves reflect reality and settlement postures rest on facts.',
  benefits: [
    { title: 'Early, accurate claim evaluation', desc: 'Grounded in the full record, from the earliest stages of a claim.' },
    { title: 'Pre-existing conditions & alternative causation', desc: 'Identified before demands arrive — not after they set the baseline.' },
    { title: 'Overbilling & duplicate-charge detection', desc: 'Charges without corresponding clinical notes and treatment unsupported by the record, surfaced before those numbers become the settlement baseline.' },
    { title: 'Consistent portfolio-wide methodology', desc: 'The same evaluation standard across the entire claims portfolio.' },
    { title: 'A shared factual foundation', desc: 'One record foundation between claims professionals and defense counsel.' },
  ],
};

export const caseTypes = [
  { n: 'I', name: 'Personal Injury', note: 'Soft-tissue through catastrophic exposure.' },
  { n: 'II', name: 'Premises Liability', note: 'Causation and prior-condition analysis.' },
  { n: 'III', name: 'Trucking & Transportation', note: 'Multi-provider, high-volume productions.' },
  { n: 'IV', name: 'Product Liability', note: 'Complex medical causation chains.' },
  { n: 'V', name: 'Medical Malpractice Defense', note: 'Standard-of-care record review.' },
  { n: 'VI', name: 'Workers’ Compensation', note: 'Compensability and apportionment.' },
];
