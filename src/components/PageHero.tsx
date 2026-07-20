import { Eyebrow } from './ui/Editorial';
import type { ReactNode } from 'react';

/**
 * Consistent dark interior-page hero. Keeps the always-light header legible and
 * gives each page an editorial masthead with a page marker.
 */
export function PageHero({
  eyebrow,
  title,
  sub,
  pageLabel,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  pageLabel: string;
  children?: ReactNode;
}) {
  return (
    <section className="on-dark relative overflow-hidden">
      <div className="field-grid pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-bronze/10 blur-3xl" aria-hidden="true" />
      <div className="shell relative pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mb-8 flex items-center justify-between">
          <Eyebrow>{eyebrow}</Eyebrow>
          <span className="meta text-[0.62rem] uppercase tracking-[0.2em] text-steel">{pageLabel}</span>
        </div>
        <h1 className="display-xl max-w-4xl text-ivory">{title}</h1>
        {sub && <p className="lede mt-8 max-w-2xl text-steel">{sub}</p>}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
