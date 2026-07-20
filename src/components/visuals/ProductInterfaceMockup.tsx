import { EvidenceCitation } from '../ui/Editorial';

/**
 * Premium product-interface concept for "You Take Command". A three-pane case
 * workspace: matter navigation, record conversation, and a source-document
 * viewer. All record data is fictional; no real PHI. Decorative for screen
 * readers except the labelled controls.
 */
export function ProductInterfaceMockup() {
  const nav = [
    'Case Overview',
    'Record Conversation',
    'Medical Chronology',
    'Provider Map',
    'Prior Conditions',
    'Treatment Gaps',
    'Billing Review',
  ];

  return (
    <div className="overflow-hidden rounded-[12px] border border-white/12 bg-graphite shadow-panel">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-steel">
          Merlin · Matter 24-CV-8891
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Sealed environment
        </span>
      </div>

      <div className="grid md:grid-cols-[180px_1fr] lg:grid-cols-[200px_1fr_220px]">
        {/* Left nav */}
        <nav className="hidden border-r border-white/10 p-3 md:block" aria-label="Case workspace (illustrative)">
          <ul className="space-y-0.5">
            {nav.map((item, i) => (
              <li key={item}>
                <span
                  className={`block rounded-[6px] px-3 py-2 text-[0.78rem] ${
                    i === 1 ? 'bg-bronze/15 text-gold' : 'text-ivory/70'
                  }`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Conversation */}
        <div className="min-w-0 p-5">
          <div className="flex justify-end">
            <p className="max-w-[80%] rounded-[8px] rounded-br-sm bg-white/[0.06] px-3.5 py-2.5 text-[0.82rem] leading-snug text-ivory/90">
              Build a chronology of lumbar treatment and flag any pre-existing findings.
            </p>
          </div>

          <div className="mt-4 max-w-[92%] rounded-[8px] rounded-bl-sm border border-white/10 bg-white/[0.03] p-4">
            <p className="mb-3 text-[0.82rem] leading-relaxed text-ivory/85">
              Three lumbar encounters predate the date of loss. The earliest is a degenerative
              finding on imaging <span className="text-gold">14 months prior</span>.
            </p>
            <ol className="space-y-2.5 border-l border-white/10 pl-4">
              {[
                ['Mar 2021', 'Urgent care — lumbar strain', 'p. 3,412'],
                ['Apr 2022', 'MRI — degenerative disc disease', 'p. 5,067'],
                ['Aug 2023', 'Date of loss', 'p. 8,190'],
              ].map(([date, note, pg]) => (
                <li key={date} className="relative">
                  <span className="absolute -left-[1.15rem] top-1.5 h-1.5 w-1.5 rounded-full bg-bronze" />
                  <span className="block font-mono text-[0.58rem] uppercase tracking-[0.1em] text-bronze">
                    {date} · {pg}
                  </span>
                  <span className="text-[0.8rem] text-ivory/80">{note}</span>
                </li>
              ))}
            </ol>
            <EvidenceCitation
              className="mt-4 border-white/15 bg-white/[0.03]"
              page="Page 5,067"
              fields={['MRI Report', 'Meridian Ortho']}
              action="View source in record"
            />
          </div>

          {/* Composer */}
          <div className="mt-4 flex items-center gap-2 rounded-[8px] border border-white/10 bg-obsidian/60 px-3.5 py-2.5">
            <span className="font-mono text-[0.75rem] text-steel">Ask the record…</span>
            <span className="ml-auto inline-flex h-6 w-6 items-center justify-center rounded-[5px] bg-bronze/80 text-obsidian">
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                <path d="M2 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>

        {/* Source viewer */}
        <aside className="hidden border-l border-white/10 p-4 lg:block" aria-label="Source document (illustrative)">
          <span className="mb-3 block font-mono text-[0.58rem] uppercase tracking-[0.14em] text-steel">
            Source · p. 5,067
          </span>
          <div className="rounded-[6px] bg-paper/95 p-3">
            <div className="space-y-1.5">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-[5px] rounded-full ${i === 3 ? 'bg-bronze/60' : 'bg-slate/20'}`}
                  style={{ width: `${i === 3 ? 82 : 60 + ((i * 29) % 35)}%` }}
                />
              ))}
            </div>
          </div>
          <p className="mt-3 font-mono text-[0.55rem] leading-relaxed text-steel">
            Highlighted line: “…mild multilevel degenerative disc disease…”
          </p>
        </aside>
      </div>
    </div>
  );
}
