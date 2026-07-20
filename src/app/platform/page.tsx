import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { SectionIntro } from '@/components/ui/Editorial';
import { ProductInterfaceMockup } from '@/components/visuals/ProductInterfaceMockup';
import { CapabilityGroup } from '@/components/CapabilityGroup';
import { CtaBand } from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import { platformHero, stages, stageClosing, capabilityGroups, economics } from '@/content/platform';

export const metadata: Metadata = {
  title: 'The Merlin Platform — Precision first. Intelligence second.',
  description:
    'How Merlin works: a three-stage narrative from professional medical-legal curation, to a secure searchable knowledge base, to source-grounded answers you command. Investigate, prepare, and challenge — with every answer traceable to the record.',
  alternates: { canonical: '/platform' },
};

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow={platformHero.eyebrow}
        pageLabel="Platform"
        title={<>Precision first. Intelligence second. Answers always.</>}
        sub={platformHero.sub}
      />

      {/* Three-stage narrative */}
      <section className="on-ivory">
        <div className="shell section">
          <SectionIntro
            eyebrow="The Method"
            title="From raw production to command — in three stages."
            lede="Most general AI tools skip straight to answers. Merlin earns them, beginning with professional medical-legal curation."
          />

          <div className="mt-16 flex flex-col gap-20 md:gap-28">
            {stages.map((stage, i) => (
              <Reveal key={stage.num}>
                <article className="grid gap-10 md:grid-cols-12 md:gap-12">
                  <div className="md:col-span-5">
                    <div className="md:sticky md:top-28">
                      <span className="marker-num block">{stage.num}</span>
                      <h2 className="display-md mt-4">{stage.title}</h2>
                      <p className="body-lg mt-5 max-w-prose text-slate">{stage.body}</p>

                      {stage.facets.length > 0 && (
                        <ul className="mt-7 flex flex-wrap gap-2">
                          {stage.facets.map((f) => (
                            <li
                              key={f}
                              className="rounded-[6px] border border-black/10 bg-ivory px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.08em] text-slate"
                            >
                              {f}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="md:col-span-7">
                    <StageVisual index={i} entities={stage.entities} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mx-auto mt-20 max-w-3xl border-t border-black/10 pt-10 text-center font-serif text-[clamp(1.4rem,2.6vw,2rem)] leading-snug">
              {stageClosing}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Capability groups */}
      <section className="on-ivory border-t border-black/10 bg-paper">
        <div className="shell pb-8 pt-20 md:pt-28">
          <SectionIntro
            eyebrow="Capabilities"
            title="Investigate. Prepare. Challenge."
            lede="Every capability is grounded in the source record and organized around the three strategic jobs of a defense evaluation."
          />
        </div>
        <div className="shell pb-16">
          {capabilityGroups.map((group, i) => (
            <CapabilityGroup key={group.group} data={group} index={i} />
          ))}
        </div>
      </section>

      {/* Economics of thoroughness */}
      <section className="on-dark border-t border-white/10">
        <div className="shell section">
          <SectionIntro
            eyebrow={economics.eyebrow}
            title={<span className="text-ivory">{economics.headline}</span>}
            lede={<span className="text-steel">{economics.intro}</span>}
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[12px] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {economics.benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 70}>
                <div className="flex h-full flex-col gap-4 bg-obsidian p-8">
                  <span className="font-mono text-[0.62rem] text-bronze">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-serif text-xl leading-snug text-ivory">{b.title}</h3>
                  <p className="text-[0.9rem] leading-relaxed text-steel">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-2xl font-mono text-[0.7rem] leading-relaxed text-steel">
            Comparative statements are qualitative. No specific cost, speed, or accuracy figures are
            claimed; Merlin supports — and does not replace — professional judgment.
          </p>
        </div>
      </section>

      <CtaBand
        headline="See the method on a record like yours."
        body="Schedule a confidential demonstration and watch Merlin move from raw production to source-grounded command."
      />
    </>
  );
}

/** Stage-specific visuals: curation entities, sealed knowledge base, product UI. */
function StageVisual({ index, entities }: { index: number; entities: string[] }) {
  if (index === 0) {
    return (
      <div className="card bg-paper p-6 md:p-8">
        <span className="meta mb-5 block text-[0.62rem] uppercase tracking-[0.16em] text-steel">
          Recognized &amp; structured
        </span>
        <div className="grid gap-3 sm:grid-cols-2">
          {entities.map((e, i) => (
            <div key={e} className="flex items-center gap-3 rounded-[8px] border border-black/10 bg-ivory px-4 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-bronze/40 text-bronze">
                <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden="true">
                  <path d="M2 6.2 4.6 9 10 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-[0.9rem] text-slate">{e}</span>
              <span className="ml-auto font-mono text-[0.58rem] text-steel/60">{String(i + 1).padStart(2, '0')}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between rounded-[8px] bg-obsidian px-4 py-3">
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-steel">Duplicates resolved</span>
          <span className="font-mono text-[0.66rem] text-gold">1,204 → 0</span>
        </div>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="card relative overflow-hidden bg-obsidian p-6 text-ivory md:p-8">
        <div className="field-grid absolute inset-0 opacity-[0.1]" aria-hidden="true" />
        <div className="relative">
          <div className="flex items-center justify-between">
            <span className="meta text-[0.62rem] uppercase tracking-[0.16em] text-steel">Case knowledge base</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 px-2.5 py-1 font-mono text-[0.56rem] uppercase tracking-[0.12em] text-gold">
              Isolated · Sealed
            </span>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {['Searchable', 'Source-linked', 'Matter-specific', 'Secure', 'Verified', 'Private'].map((t) => (
              <span key={t} className="rounded-[6px] border border-white/10 bg-white/[0.03] px-2 py-3 text-center text-[0.72rem] text-ivory/80">
                {t}
              </span>
            ))}
          </div>
          <p className="mt-8 font-serif text-lg italic text-ivory/80">
            “It knows your record — and only your record.”
          </p>
        </div>
      </div>
    );
  }
  return <ProductInterfaceMockup />;
}
