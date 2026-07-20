/**
 * CONTENT & LEGAL REVIEW CHECKLIST
 * ---------------------------------------------------------------------------
 * Statements below require explicit client confirmation before they are
 * published as definitive claims. This file is documentation for the client's
 * legal/compliance team; it is also surfaced in the README. Where a claim is
 * unconfirmed, the site withholds or softens it (see `src/content/brand.ts`).
 */

export type ReviewStatus = 'withheld' | 'softened' | 'published-safe';

export interface ClaimReviewItem {
  id: string;
  claim: string;
  status: ReviewStatus;
  note: string;
}

export const claimsReview: ClaimReviewItem[] = [
  {
    id: 'developed-by-physicians',
    claim: '“Developed by physicians. Built for attorneys.”',
    status: 'softened',
    note: 'Rendered in softened form until brand.claims.developedByPhysicians.confirmed = true. Confirm physicians were materially involved in development before publishing the absolute claim.',
  },
  {
    id: 'hipaa',
    claim: 'HIPAA compliance posture',
    status: 'withheld',
    note: 'Not published. Add to trust.verifiedCertifications only after compliance confirms.',
  },
  {
    id: 'soc2',
    claim: 'SOC 2 certification',
    status: 'withheld',
    note: 'Not published. Add to trust.verifiedCertifications only after audit is confirmed.',
  },
  {
    id: 'encryption',
    claim: 'Specific encryption standards / data-residency',
    status: 'withheld',
    note: 'Not published. Security page describes posture qualitatively only.',
  },
  {
    id: 'cost-comparison',
    claim: 'Cost vs. physician review',
    status: 'published-safe',
    note: 'Described qualitatively (“a fraction of”, “significant fraction of typical rates”). No specific percentages or dollar figures are stated.',
  },
  {
    id: 'speed-comparison',
    claim: 'Speed of evaluation',
    status: 'published-safe',
    note: 'Described qualitatively (“in days, not months”). No specific time metrics claimed.',
  },
  {
    id: 'accuracy',
    claim: 'Accuracy of analysis',
    status: 'published-safe',
    note: 'No “100% accurate” or numeric accuracy claim. Framed as grounded in and verifiable against the source record; supports—does not replace—professional judgment.',
  },
  {
    id: 'guardian-relationship',
    claim: 'Merlin / Guardian corporate relationship',
    status: 'published-safe',
    note: 'Uses exact client wording: “A subsidiary of The Guardian Group” / “A division of Guardian Group Civil Services”. Centralized in brand.ts for legal revision.',
  },
  {
    id: 'overbilling-language',
    claim: 'Billing / overbilling language',
    status: 'published-safe',
    note: 'Framed as detection/testing (“surfaces”, “warrants a closer look”, “tested against the record”). No accusation of fraud against claimants or providers.',
  },
];
