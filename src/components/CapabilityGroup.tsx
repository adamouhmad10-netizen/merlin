import Reveal from './Reveal';

interface CapItem {
  title: string;
  desc: string;
}
interface Group {
  group: string;
  intro: string;
  items: CapItem[];
}

/**
 * Capability group rendered as an indexed casebook section: a strategic verb
 * as the section title, a short intro, and a numbered reference list.
 */
export function CapabilityGroup({ data, index }: { data: Group; index: number }) {
  return (
    <Reveal>
      <section className="grid gap-8 border-t border-black/10 py-12 md:grid-cols-12 md:gap-10 md:py-16">
        <div className="md:col-span-4">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-bronze">
            {`Group ${String(index + 1).padStart(2, '0')}`}
          </span>
          <h3 className="display-md mt-3">{data.group}</h3>
          <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-slate">{data.intro}</p>
        </div>
        <div className="md:col-span-8">
          <ol className="grid gap-px overflow-hidden rounded-[10px] border border-black/10 bg-black/10 sm:grid-cols-2">
            {data.items.map((item, i) => (
              <li key={item.title} className="flex gap-4 bg-paper p-6">
                <span className="font-mono text-[0.7rem] text-steel/70">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h4 className="mb-1.5 font-serif text-lg leading-snug">{item.title}</h4>
                  <p className="text-[0.86rem] leading-relaxed text-slate">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </Reveal>
  );
}
