import Reveal from '../Reveal';

interface Stage {
  num: string;
  title: string;
  desc: string;
}

/**
 * Three-stage process shown as an editorial progression. The left visual
 * animates disorder → structure via staggered reveals (CSS only).
 */
export function ProcessTimeline({ stages, compact = false }: { stages: Stage[]; compact?: boolean }) {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      {!compact && (
        <div className="lg:col-span-5">
          <DisorderToStructure />
        </div>
      )}
      <ol className={compact ? 'contents' : 'lg:col-span-7'}>
        <div className={compact ? 'grid gap-6 md:grid-cols-3' : 'flex flex-col'}>
          {stages.map((s, i) => (
            <Reveal as="li" key={s.num} delay={i * 90}>
              <div
                className={`flex gap-5 ${
                  compact ? 'flex-col' : 'border-t border-black/10 py-7 first:border-t-0 first:pt-0'
                }`}
              >
                <span className="font-mono text-[0.7rem] font-medium text-bronze">{`— ${s.num}`}</span>
                <div>
                  <h3 className="mb-2 font-serif text-2xl">{s.title}</h3>
                  <p className="max-w-prose text-[0.95rem] leading-relaxed text-slate">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </ol>
    </div>
  );
}

/** Left-hand visual: loose, rotated pages settle into an aligned stack. */
function DisorderToStructure() {
  return (
    <div className="card relative aspect-[4/5] overflow-hidden bg-ivory p-6" aria-hidden="true">
      <span className="meta absolute left-5 top-5 z-10 text-[0.6rem] uppercase tracking-[0.16em] text-steel">
        From disorder
      </span>
      <span className="meta absolute bottom-5 right-5 z-10 text-[0.6rem] uppercase tracking-[0.16em] text-bronze">
        to structure
      </span>

      {/* Disordered layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[-14, -6, 4, 11].map((rot, i) => (
          <div
            key={i}
            className="absolute h-40 w-32 rounded-[6px] border border-black/10 bg-paper shadow-lift"
            style={{
              transform: `rotate(${rot}deg) translate(${(i - 1.5) * 14}px, ${(i - 1.5) * 8}px)`,
              opacity: 0.9 - i * 0.08,
            }}
          >
            <div className="space-y-2 p-3">
              {Array.from({ length: 5 }).map((_, r) => (
                <div key={r} className="h-[5px] rounded-full bg-slate/15" style={{ width: `${90 - r * 12}%` }} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Aligned overlay chip */}
      <div className="absolute bottom-6 left-6 rounded-[6px] border border-bronze/40 bg-obsidian/90 px-3 py-2">
        <span className="block font-mono text-[0.55rem] uppercase tracking-[0.14em] text-steel">Organized by</span>
        <span className="block text-[0.72rem] text-gold">Provider · Date of Service</span>
      </div>
    </div>
  );
}
