import Reveal from '../Reveal';
import { pillars } from '@/content/home';

/**
 * The three pillars rendered as editorial casebook chapters: oversized section
 * numbers, a fine bronze rule, and a restrained supporting diagram per chapter.
 */
export function ThreePillars() {
  return (
    <div className="flex flex-col">
      {pillars.map((p, i) => (
        <Reveal key={p.num} delay={i * 80}>
          <article className="grid grid-cols-1 gap-6 border-t border-black/10 py-10 md:grid-cols-12 md:gap-10 md:py-14">
            <div className="md:col-span-2">
              <span className="marker-num block">{p.num}</span>
            </div>
            <div className="md:col-span-6">
              <h3 className="display-md mb-4">{p.title}</h3>
              <p className="body-lg max-w-prose text-slate">{p.body}</p>
              <p className="mt-5 inline-flex items-center gap-3 font-serif text-lg italic text-bronze">
                <span className="rule-bronze" aria-hidden="true" />
                {p.kicker}
              </p>
            </div>
            <div className="md:col-span-4">
              <PillarDiagram index={i} />
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

function PillarDiagram({ index }: { index: number }) {
  if (index === 0) {
    // Verified foundation: scattered entries resolving into structured rows
    return (
      <div className="card h-full p-5">
        <span className="meta mb-4 block text-[0.6rem] uppercase tracking-[0.16em] text-steel">
          Curated entities
        </span>
        <ul className="space-y-2.5">
          {['Diagnosis', 'Provider', 'Medication', 'Procedure', 'Date of Service'].map((label, i) => (
            <li key={label} className="flex items-center gap-3">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-bronze/40 text-bronze">
                <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" aria-hidden="true">
                  <path d="M2 6.2 4.6 9 10 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-[0.86rem] text-slate">{label}</span>
              <span
                className="ml-auto h-[6px] rounded-full bg-slate/15"
                style={{ width: `${40 + i * 8}px` }}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  if (index === 1) {
    // Closed system: a sealed matter environment
    return (
      <div className="card relative h-full overflow-hidden bg-obsidian p-5 text-ivory">
        <div className="field-grid absolute inset-0 opacity-[0.12]" aria-hidden="true" />
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="meta text-[0.6rem] uppercase tracking-[0.16em] text-steel">Matter 24-CV-8891</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-gold/40 px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.12em] text-gold">
              Sealed
            </span>
          </div>
          <div className="my-6 flex items-center justify-center">
            <svg viewBox="0 0 48 48" className="h-16 w-16 text-bronze" fill="none" aria-hidden="true">
              <rect x="10" y="21" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M16 21v-4a8 8 0 0 1 16 0v4" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="24" cy="31" r="2.5" fill="currentColor" />
            </svg>
          </div>
          <p className="meta text-[0.62rem] leading-relaxed text-steel">
            No public models · No commingling · No training on your materials
          </p>
        </div>
      </div>
    );
  }
  // Speed: chronology built from the record
  return (
    <div className="card h-full p-5">
      <span className="meta mb-4 block text-[0.6rem] uppercase tracking-[0.16em] text-steel">
        Chronology · built in minutes
      </span>
      <ol className="relative space-y-4 border-l border-black/10 pl-5">
        {[
          ['Mar 2021', 'Urgent care · lumbar'],
          ['Apr 2022', 'MRI · degenerative'],
          ['Aug 2023', 'Date of loss'],
        ].map(([date, note]) => (
          <li key={date} className="relative">
            <span className="absolute -left-[1.42rem] top-1 h-2 w-2 rounded-full bg-bronze" aria-hidden="true" />
            <span className="block font-mono text-[0.62rem] uppercase tracking-[0.1em] text-bronze">{date}</span>
            <span className="text-[0.86rem] text-slate">{note}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
