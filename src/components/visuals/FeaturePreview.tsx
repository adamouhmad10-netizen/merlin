import Reveal from '../Reveal';
import { EvidenceCitation } from '../ui/Editorial';
import { features } from '@/content/home';

/**
 * Six capabilities, each paired with a distinct, restrained product-like
 * fragment (timeline / tag / citation / analytical result) rather than six
 * identical icon cards.
 */
export function FeaturePreview() {
  return (
    <div className="grid gap-px overflow-hidden rounded-[10px] border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-3">
      {features.map((f, i) => (
        <Reveal key={f.title} delay={(i % 3) * 70}>
          <article className="flex h-full flex-col justify-between gap-6 bg-paper p-7">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-bronze">{f.tag}</span>
                <span className="font-mono text-[0.6rem] text-steel/60">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mb-3 font-serif text-[1.45rem] leading-tight">{f.title}</h3>
              <p className="text-[0.92rem] leading-relaxed text-slate">{f.desc}</p>
            </div>
            <FeatureFragment index={i} />
          </article>
        </Reveal>
      ))}
    </div>
  );
}

function FeatureFragment({ index }: { index: number }) {
  switch (index) {
    case 0: // Chronologies — mini timeline
      return (
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {['2019', '2021', '2022', 'DOL', '2024'].map((y, i) => (
            <div key={y} className="flex flex-1 flex-col items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${y === 'DOL' ? 'bg-bronze' : 'bg-slate/30'}`} />
              <span className={`font-mono text-[0.5rem] ${y === 'DOL' ? 'text-bronze' : 'text-steel/70'}`}>{y}</span>
              {i < 4 && <span className="sr-only">to</span>}
            </div>
          ))}
        </div>
      );
    case 1: // Prior conditions — flag chip
      return (
        <div className="flex flex-wrap gap-1.5" aria-hidden="true">
          {['Prior lumbar strain', 'Degenerative disc', 'Same body part'].map((t) => (
            <span key={t} className="rounded-[4px] border border-gold/40 bg-gold/[0.07] px-2 py-1 font-mono text-[0.58rem] text-slate">
              {t}
            </span>
          ))}
        </div>
      );
    case 2: // Treatment gaps — gap bar
      return (
        <div aria-hidden="true">
          <div className="mb-1.5 flex h-2 overflow-hidden rounded-full bg-slate/15">
            <span className="w-[30%] bg-bronze/60" />
            <span className="w-[24%] bg-transparent" />
            <span className="w-[46%] bg-bronze/60" />
          </div>
          <span className="font-mono text-[0.58rem] text-steel">Gap · 7 months · no documented treatment</span>
        </div>
      );
    case 3: // Expert auditing — checklist
      return (
        <div className="space-y-1.5" aria-hidden="true">
          {[['Reviewed all imaging', true], ['Received full record', false]].map(([label, ok]) => (
            <div key={label as string} className="flex items-center gap-2 font-mono text-[0.6rem]">
              <span className={ok ? 'text-bronze' : 'text-steel'}>{ok ? '✓' : '—'}</span>
              <span className="text-slate">{label as string}</span>
            </div>
          ))}
        </div>
      );
    case 4: // Deposition prep — citation
      return (
        <EvidenceCitation page="Page 1,208" fields={['Encounter', 'Provider']} action="Verify testimony" />
      );
    default: // Billing — flagged charge
      return (
        <div className="flex items-center justify-between rounded-[6px] border border-black/10 bg-ivory px-3 py-2" aria-hidden="true">
          <span className="font-mono text-[0.6rem] text-slate">CPT 99205 · duplicate</span>
          <span className="rounded-[4px] bg-bronze/15 px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.1em] text-bronze">
            Flag
          </span>
        </div>
      );
  }
}
