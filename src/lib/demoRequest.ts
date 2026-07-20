/**
 * Demo-request domain types + shared validation, used by BOTH the client form
 * and the server route so rules never drift. No delivery happens here.
 */

export interface DemoRequestPayload {
  fullName: string;
  workEmail: string;
  organization: string;
  role: string;
  recordSize: string;
  phone?: string;
  preferredTime?: string;
  message?: string;
  /** Anti-spam honeypot — must be empty. */
  company_hp?: string;
}

export type FieldErrors = Partial<Record<keyof DemoRequestPayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Emails from generic consumer domains are flagged (work email requested). */
const CONSUMER_DOMAINS = [
  'gmail.com',
  'yahoo.com',
  'outlook.com',
  'hotmail.com',
  'aol.com',
  'icloud.com',
  'proton.me',
];

export function validateDemoRequest(data: Partial<DemoRequestPayload>): FieldErrors {
  const errors: FieldErrors = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.';
  }

  const email = (data.workEmail ?? '').trim().toLowerCase();
  if (!email) {
    errors.workEmail = 'A work email is required.';
  } else if (!EMAIL_RE.test(email)) {
    errors.workEmail = 'Please enter a valid email address.';
  } else if (CONSUMER_DOMAINS.includes(email.split('@')[1] ?? '')) {
    errors.workEmail = 'Please use your work email address.';
  }

  if (!data.organization || data.organization.trim().length < 2) {
    errors.organization = 'Please enter your law firm or company.';
  }

  if (!data.role) {
    errors.role = 'Please select your role.';
  }

  if (!data.recordSize) {
    errors.recordSize = 'Please select a typical record size.';
  }

  if (data.message && data.message.length > 1000) {
    errors.message = 'Please keep your message under 1,000 characters.';
  }

  return errors;
}

export function hasErrors(errors: FieldErrors): boolean {
  return Object.keys(errors).length > 0;
}
