import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { SectionIntro } from '@/components/ui/Editorial';
import { AudienceSelector } from '@/components/AudienceSelector';
import { CtaBand } from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import { solutionsHero, defense, claims, caseTypes } from '@/content/solutions';

export const metadata: Metadata = {
  title: 'Solutions — Defense Counsel & Claims Professionals',
  description:
    'Merlin across the case lifecycle for defense counsel — early evaluation, causation, expert review, deposition and IME prep, mediation, and trial — and for claims professionals valuing reserves and resolving with clarity.',
  alternates: { canonical: '/solutions' },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow={solutionsHero.eyebrow}
        pageLabel="Solutions"
        title={<>{solutionsHero.headline}</>}
        sub={solutionsHero.sub}
      />

      <AudienceSelector
        items={[
          { id: defense.id, label: defense.label },
          { id: claims.id, label: claims.label },
        ]}
      />

      {/* ---------------------------------------------- DEFENSE COUNSEL --- */}
      <section id={defense.id} className="on-ivory scroll-mt-[132px]">
        <div className="shell section">
          <div className="max-w-3xl">
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-bronze">
              {defense.label}
            </span>
            <h2 className="display-lg mt-4">{defense.headline}</h2>
            <p className="lede mt-6 text-slate">{defense.intro}</p>
          </div>

          {/* Case lifecycle */}
          <ol className="mt-14 grid gap-px overflow-hidden rounded-[12px] border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {defense.lifecycle.map((s, i) => (
              <Reveal as="li" key={s.step} delay={(i % 4) * 60}>
                <div className="flex h-full flex-col gap-3 bg-paper p-6">
                  <span className="font-mono text-[0.66rem] text-steel/70">{s.step}</span>
                  <h3 className="font-serif text-[1.2rem] leading-snug">{s.title}</h3>
                  <p className="text-[0.86rem] leading-relaxed text-slate">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          {/* Emphasis */}
          <div className="mt-12 rounded-[12px] border border-black/10 bg-ivory p-8">
            <span className="meta mb-5 block text-[0.62rem] uppercase tracking-[0.18em] text-steel">
              Where Merlin makes the difference
            </span>
            <ul className="flex flex-wrap gap-3">
              {defense.emphasis.map((e) => (
                <li
                  key={e}
                  className="inline-flex items-center gap-2 rounded-[6px] border border-bronze/30 bg-bronze/[0.05] px-3.5 py-2 text-[0.82rem] text-slate"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-bronze" aria-hidden="true" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------ CLAIMS & INSURANCE --- */}
      <section id={claims.id} className="on-dark scroll-mt-[132px] border-t border-white/10">
        <div className="shell section">
          <div className="max-w-3xl">
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-bronze">
              {claims.label}
            </span>
            <h2 className="display-lg mt-4 text-ivory">{claims.headline}</h2>
            <p className="lede mt-6 text-steel">{claims.intro}</p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[12px] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {claims.benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 70}>
                <div className="flex h-full flex-col gap-3 bg-obsidian p-8">
                  <span className="font-mono text-[0.62rem] text-bronze">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-serif text-xl leading-snug text-ivory">{b.title}</h3>
                  <p className="text-[0.9rem] leading-relaxed text-steel">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------- CASE TYPES ------ */}
      <section className="on-ivory bg-paper">
        <div className="shell section">
          <SectionIntro
            eyebrow="Case Types"
            title="A reference index of the matters Merlin serves."
            lede="Any civil liability matter where the medical record is central."
          />
          <div className="mt-12 divide-y divide-black/10 border-y border-black/10">
            {caseTypes.map((c) => (
              <Reveal key={c.name}>
                <div className="group grid grid-cols-12 items-center gap-4 py-6">
                  <span className="col-span-2 font-mono text-[0.8rem] text-bronze md:col-span-1">{c.n}</span>
                  <h3 className="col-span-10 font-serif text-[clamp(1.3rem,2.4vw,1.9rem)] leading-tight md:col-span-6">
                    {c.name}
                  </h3>
                  <p className="col-span-12 text-[0.9rem] text-slate md:col-span-5 md:text-right">{c.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-[0.82rem] leading-relaxed text-steel">
            Merlin provides record organization and analysis tools; it does not provide legal or
            medical advice.
          </p>
        </div>
      </section>

      <CtaBand
        headline="One record foundation. Every advantage."
        body="See how Merlin equips both sides of the file with a complete, source-grounded command of the medical record."
      />
    </>
  );
}
