import Reveal from './Reveal';
import { securityPrinciples, verifiedCertifications } from '@/content/trust';

const glyphs: Record<string, React.ReactNode> = {
  closed: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-8 w-8">
      <rect x="9" y="18" width="22" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 18v-3a6 6 0 0 1 12 0v3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  isolated: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-8 w-8">
      <rect x="7" y="10" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="23" y="10" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" />
    </svg>
  ),
  governed: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-8 w-8">
      <path d="M20 6l11 4v8c0 7-4.7 12.5-11 15-6.3-2.5-11-8-11-15v-8l11-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M15 20l3.5 3.5L26 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export function SecurityPrinciples() {
  return (
    <div>
      <div className="grid gap-px overflow-hidden rounded-[10px] border border-white/10 bg-white/10 md:grid-cols-3">
        {securityPrinciples.map((p, i) => (
          <Reveal key={p.key} delay={i * 80}>
            <article className="flex h-full flex-col gap-5 bg-graphite p-8">
              <span className="text-bronze">{glyphs[p.key]}</span>
              <h3 className="font-serif text-2xl text-ivory">{p.title}</h3>
              <p className="text-[0.92rem] leading-relaxed text-steel">{p.body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Verified safeguards area — populated only with client-confirmed items. */}
      <div className="mt-8 rounded-[10px] border border-dashed border-white/15 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-steel">
            Verified safeguards
          </h3>
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-steel/70">
            Published after compliance confirmation
          </span>
        </div>
        {verifiedCertifications.length > 0 ? (
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {verifiedCertifications.map((c) => (
              <li key={c.label} className="rounded-[8px] border border-white/10 bg-white/[0.02] p-4">
                <span className="block font-serif text-lg text-ivory">{c.label}</span>
                <span className="mt-1 block text-[0.85rem] text-steel">{c.detail}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 max-w-2xl text-[0.9rem] leading-relaxed text-steel">
            Specific certifications and standards (for example, HIPAA posture, SOC 2, or encryption
            details) are intentionally not asserted here. They will be published in this space once
            confirmed by Guardian Group’s technical and compliance teams.
          </p>
        )}
      </div>
    </div>
  );
}
