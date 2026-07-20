/** Navigation, routes, and shared CTA language. */

export const SITE_URL = 'https://merlin.law';

export const nav = [
  { label: 'Platform', href: '/platform' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Trust & Security', href: '/trust' },
] as const;

export const CTA = {
  primary: 'Request a Private Demonstration',
  primaryHref: '/trust#demonstration',
  secondary: 'Watch How Merlin Works',
  consultant: 'Speak with a Case Consultant',
} as const;

export const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'The Merlin Platform', href: '/platform' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Trust & Security', href: '/trust' },
] as const;

/** Placeholder legal routes (pages to be supplied later by the client). */
export const utilityLinks = [
  { label: 'Privacy Policy', href: '#', placeholder: true },
  { label: 'Terms of Use', href: '#', placeholder: true },
] as const;
