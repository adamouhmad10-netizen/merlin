/**
 * CENTRALIZED BRAND + LEGAL CONFIGURATION
 * ---------------------------------------------------------------------------
 * Every sensitive claim, the corporate-relationship wording, and all contact
 * placeholders live here so the client's legal team can review or revise them
 * in ONE place. Component code references these values — it never hard-codes
 * the wording. See `src/content/claims-review.ts` for the review checklist.
 */

export const brand = {
  name: 'Merlin',
  domain: 'merlin.law',
  category: 'the Medical Record Wizard',
  productDescriptor: 'Medical Record Intelligence',

  /** Corporate relationship — exact wording requested by the client. */
  parent: {
    subsidiaryLine: 'A subsidiary of The Guardian Group',
    divisionLine: 'A division of Guardian Group Civil Services',
    firmDescriptor: 'a med-legal management firm',
    parentName: 'The Guardian Group',
    parentUnit: 'Guardian Group Civil Services',
  },

  /**
   * CLAIMS REQUIRING CLIENT CONFIRMATION.
   * Toggle `confirmed` to true only once the client's legal/compliance team
   * has verified the statement. When false, the claim is either withheld from
   * the UI or rendered in a softened, non-absolute form.
   */
  claims: {
    developedByPhysicians: {
      confirmed: false,
      full: 'Developed by physicians. Built for attorneys.',
      // Softened fallback used until the factual claim is confirmed.
      soft: 'Built by a med-legal team. Made for attorneys.',
    },
  },

  /** Contact placeholders — no real address/phone/email is invented. */
  contact: {
    // Set these once the client provides verified details.
    email: '', // e.g. 'consult@merlin.law'
    phone: '', // e.g. '+1 (000) 000-0000'
    addressLines: [] as string[],
  },

  legalDisclaimer:
    'Merlin.law is a service of The Guardian Group, a med-legal management firm. ' +
    'Merlin provides record organization and analysis tools for legal professionals; ' +
    'it does not provide legal or medical advice, and its output is intended to ' +
    'support—not replace—the professional judgment of counsel and qualified medical experts.',

  copyrightHolder: 'The Guardian Group',
} as const;

/** Resolve the physician credibility line based on confirmation status. */
export function physicianCredibilityLine(): string {
  return brand.claims.developedByPhysicians.confirmed
    ? brand.claims.developedByPhysicians.full
    : brand.claims.developedByPhysicians.soft;
}
