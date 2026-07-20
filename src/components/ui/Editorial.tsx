import type { ReactNode } from 'react';

/** Monospace editorial eyebrow with a leading rule. */
export function Eyebrow({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return <span className={`eyebrow ${center ? 'eyebrow--center' : ''}`}>{children}</span>;
}

/** Thin editorial hairline. */
export function EditorialRule({ className = '' }: { className?: string }) {
  return <hr className={`hairline ${className}`} aria-hidden="true" />;
}

/** Section intro block: eyebrow + serif heading + optional lede. */
export function SectionIntro({
  eyebrow,
  title,
  lede,
  align = 'left',
  titleClass = 'display-lg',
  as = 'h2',
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: 'left' | 'center';
  titleClass?: string;
  as?: 'h1' | 'h2' | 'h3';
}) {
  const Tag = as;
  return (
    <div className={`flex flex-col gap-5 ${align === 'center' ? 'items-center text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {eyebrow && <Eyebrow center={align === 'center'}>{eyebrow}</Eyebrow>}
      <Tag className={titleClass}>{title}</Tag>
      {lede && <p className="lede">{lede}</p>}
    </div>
  );
}

/**
 * Source citation chip — the recurring "evidence" motif. Renders fictional,
 * clearly-not-real record metadata in monospace with a bronze tick.
 */
export function EvidenceCitation({
  page,
  fields,
  className = '',
  action = 'View source in record',
}: {
  page: string;
  fields: string[];
  className?: string;
  action?: string | null;
}) {
  return (
    <figure
      className={`inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-[6px] border border-bronze/35 bg-bronze/[0.06] px-3 py-2 ${className}`}
    >
      <span aria-hidden="true" className="h-3 w-[2px] shrink-0 bg-bronze" />
      <figcaption className="meta text-[0.68rem] text-bronze">
        {page}
        {fields.map((f) => (
          <span key={f} className="text-steel">
            {' · '}
            {f}
          </span>
        ))}
      </figcaption>
      {action && (
        <span className="meta text-[0.62rem] uppercase tracking-[0.14em] text-steel/80">— {action}</span>
      )}
    </figure>
  );
}
