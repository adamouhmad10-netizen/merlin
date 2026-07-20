import { EvidenceCitation } from '../ui/Editorial';

/**
 * Signature hero visual: a sealed-case "record intelligence" environment.
 * A stack of medical-record pages (fictional data) resolves into a dark glass
 * panel where a query is answered with a source citation. Pure CSS/SVG — the
 * bronze scan line is CSS-only and disabled under prefers-reduced-motion.
 * All record data shown here is obviously fictional; no real PHI is used.
 */
export function RecordStackVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] [perspective:1600px]" aria-hidden="true">
      {/* Ambient bronze glow */}
      <div className="pointer-events-none absolute -inset-10 -z-10 opacity-60 blur-3xl">
        <div className="absolute left-1/4 top-1/3 h-40 w-40 rounded-full bg-bronze/25" />
        <div className="absolute bottom-0 right-1/4 h-32 w-32 rounded-full bg-gold/10" />
      </div>

      <div className="relative [transform-style:preserve-3d] [transform:rotateX(6deg)_rotateY(-11deg)]">
        {/* Back page stack */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute rounded-[8px] border border-black/10 bg-paper shadow-lift"
            style={{
              inset: 0,
              transform: `translate(${28 + i * 16}px, ${-30 - i * 14}px) translateZ(${-40 - i * 30}px) rotate(${1.5 + i}deg)`,
              opacity: 0.55 - i * 0.14,
            }}
          >
            <PageLines />
          </div>
        ))}

        {/* Mid record page with scan line */}
        <div className="relative overflow-hidden rounded-[10px] border border-black/10 bg-paper shadow-panel">
          <div className="flex items-center justify-between border-b border-black/10 px-5 py-3">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-slate">
              Record Production
            </span>
            <span className="font-mono text-[0.6rem] text-steel">10,412 pp.</span>
          </div>
          <div className="relative px-5 py-4">
            <PageLines rows={5} />
            {/* Bronze scan line */}
            <div
              className="scanline pointer-events-none absolute inset-x-4 top-3 h-[2px] bg-gradient-to-r from-transparent via-bronze to-transparent"
              style={{ ['--scan-distance' as string]: '150px' }}
            />
          </div>

          {/* Floating evidence labels */}
          <FloatChip className="left-4 top-[30%]" label="Provider" value="Meridian Ortho" />
          <FloatChip className="right-4 top-[52%]" label="Diagnosis" value="Lumbar strain" tone="gold" />
          <FloatChip className="left-6 bottom-4" label="Medication" value="Cyclobenzaprine" />
        </div>

        {/* Front intelligence panel */}
        <div className="relative z-10 mt-5 translate-x-6 rounded-[10px] border border-white/10 bg-graphite p-5 text-ivory shadow-panel">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-steel">
              Matter 24-CV-8891
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-gold">
              <LockGlyph /> Sealed
            </span>
          </div>

          {/* Query */}
          <div className="mt-4 flex justify-end">
            <p className="max-w-[78%] rounded-[8px] rounded-br-sm bg-white/[0.06] px-3.5 py-2.5 text-[0.82rem] leading-snug text-ivory/90">
              When was the first documented complaint of lumbar pain?
            </p>
          </div>

          {/* Answer */}
          <div className="mt-3 flex justify-start">
            <div className="max-w-[88%] rounded-[8px] rounded-bl-sm border border-bronze/25 bg-bronze/[0.07] px-3.5 py-3">
              <p className="text-[0.82rem] leading-snug text-ivory/90">
                The earliest documented lumbar complaint appears at an urgent-care visit
                <span className="text-gold"> 14 months before the date of loss.</span>
              </p>
              <EvidenceCitation
                className="mt-3 border-white/15 bg-white/[0.03]"
                page="Page 3,412"
                fields={['Date of Service', 'Provider']}
                action="View source"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageLines({ rows = 4 }: { rows?: number }) {
  return (
    <div className="space-y-2 px-4 py-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="font-mono text-[0.5rem] text-steel/70">{String(3410 + i)}</span>
          <span
            className="h-[6px] rounded-full bg-slate/15"
            style={{ width: `${55 + ((i * 37) % 40)}%` }}
          />
        </div>
      ))}
    </div>
  );
}

function FloatChip({
  className = '',
  label,
  value,
  tone = 'bronze',
}: {
  className?: string;
  label: string;
  value: string;
  tone?: 'bronze' | 'gold';
}) {
  return (
    <div
      className={`animate-drift absolute rounded-[6px] border bg-obsidian/90 px-2.5 py-1.5 shadow-lift ${
        tone === 'gold' ? 'border-gold/40' : 'border-bronze/40'
      } ${className}`}
      style={{ animationDelay: `${label.length * 120}ms` }}
    >
      <span className="block font-mono text-[0.5rem] uppercase tracking-[0.14em] text-steel">{label}</span>
      <span className={`block text-[0.68rem] font-medium ${tone === 'gold' ? 'text-gold' : 'text-bronze'}`}>
        {value}
      </span>
    </div>
  );
}

function LockGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" aria-hidden="true">
      <rect x="3.5" y="7" width="9" height="6.5" rx="1.2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
