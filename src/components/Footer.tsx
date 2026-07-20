import Image from 'next/image';
import Link from 'next/link';
import lockup from '../../public/assets/merlin-lockup-light.png';
import guardianWhite from '../../public/assets/guardian-civil-white.png';
import { footerLinks, utilityLinks, CTA } from '@/content/site';
import { brand } from '@/content/brand';
import { ButtonLink } from './ui/Button';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark border-t border-white/10">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand + endorsement */}
          <div className="md:col-span-5">
            <Image
              src={lockup}
              alt="Merlin — Medical Record Wizard"
              className="h-auto w-[220px] max-w-full"
              sizes="220px"
            />
            <p className="mt-6 max-w-sm text-[0.9rem] leading-relaxed text-steel">
              A closed-system medical-record intelligence service for civil defense and claims work.
            </p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="meta mb-3 text-[0.62rem] uppercase tracking-[0.18em] text-steel">
                {brand.parent.divisionLine}
              </p>
              <Image
                src={guardianWhite}
                alt={`${brand.parent.parentUnit} — Seamless Medical Expert Integration`}
                className="h-auto w-[230px] max-w-full opacity-90"
                sizes="230px"
              />
              <p className="meta mt-3 text-[0.62rem] uppercase tracking-[0.18em] text-steel">
                {brand.parent.subsidiaryLine}
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="meta mb-5 text-[0.62rem] uppercase tracking-[0.2em] text-steel">Navigate</h2>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-underline text-[0.95rem] text-ivory/85 hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA + utility */}
          <div className="md:col-span-4">
            <h2 className="meta mb-5 text-[0.62rem] uppercase tracking-[0.2em] text-steel">Get started</h2>
            <ButtonLink href={CTA.primaryHref} variant="primary" withArrow>
              {CTA.primary}
            </ButtonLink>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {utilityLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[0.82rem] text-steel hover:text-ivory"
                    title={l.placeholder ? 'Placeholder — to be supplied by the client' : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact placeholders — only render if real details are provided. */}
            {(brand.contact.email || brand.contact.phone) && (
              <address className="mt-6 not-italic text-[0.82rem] leading-relaxed text-steel">
                {brand.contact.email && (
                  <a href={`mailto:${brand.contact.email}`} className="block hover:text-ivory">
                    {brand.contact.email}
                  </a>
                )}
                {brand.contact.phone && (
                  <a href={`tel:${brand.contact.phone}`} className="block hover:text-ivory">
                    {brand.contact.phone}
                  </a>
                )}
              </address>
            )}
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="max-w-4xl text-[0.78rem] leading-relaxed text-steel">{brand.legalDisclaimer}</p>
          <div className="mt-6 flex flex-col gap-2 text-[0.72rem] text-steel/80 md:flex-row md:items-center md:justify-between">
            <p>
              © {year} {brand.copyrightHolder}. All rights reserved.
            </p>
            <p className="meta uppercase tracking-[0.18em]">Merlin.law · {brand.category}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
