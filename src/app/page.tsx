import Link from 'next/link';
import { ButtonLink, Arrow } from '@/components/ui/Button';
import { Eyebrow, SectionIntro, EditorialRule } from '@/components/ui/Editorial';
import { RecordStackVisual } from '@/components/visuals/RecordStackVisual';
import { GuardianEndorsement } from '@/components/GuardianEndorsement';
import { ExplainerVideo } from '@/components/ExplainerVideo';
import { ThreePillars } from '@/components/visuals/ThreePillars';
import { ProcessTimeline } from '@/components/visuals/ProcessTimeline';
import { ProvocationBand } from '@/components/visuals/ProvocationBand';
import { FeaturePreview } from '@/components/visuals/FeaturePreview';
import { CtaBand } from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import { CTA } from '@/content/site';
import { brand, physicianCredibilityLine } from '@/content/brand';
import {
  hero,
  openingStatement,
  explainer,
  processPreview,
  audiences,
  securityPreview,
  finalCta,
} from '@/content/home';

export default function HomePage() {
  return (
    <>
      {/* ============================================ 1 · HERO ============= */}
      <section className="on-dark relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-16 md:pt-24">
        <div className="field-grid pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-bronze/[0.08] blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gold/[0.05] blur-3xl" aria-hidden="true" />

        <div className="shell relative grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>{hero.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display-xl mt-7 text-ivory">
                <span className="block">{hero.headlineLead}</span>
                <span className="mt-2 block text-steel">{hero.headlineRest}</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="lede mt-8 max-w-xl text-ivory/70">{hero.sub}</p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <ButtonLink href={CTA.primaryHref} variant="primary" withArrow>
                  {CTA.primary}
                </ButtonLink>
                <a
                  href="#explainer"
                  className="group inline-flex items-center gap-3 text-[0.85rem] font-medium text-ivory/80 transition-colors hover:text-gold"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-colors group-hover:border-bronze">
                    <svg viewBox="0 0 16 16" className="ml-0.5 h-3 w-3" fill="currentColor" aria-hidden="true">
                      <path d="M5 3.5v9l7-4.5-7-4.5Z" />
                    </svg>
                  </span>
                  {CTA.secondary}
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-12 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-steel">
                {physicianCredibilityLine()}
              </p>
              <p className="mt-3 text-[0.78rem] text-steel/80">
                {brand.parent.divisionLine} · {brand.parent.subsidiaryLine}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={180}>
              <RecordStackVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================= 2 · PARENT TRUST STRIP ========= */}
      <section className="on-graphite border-y border-white/10">
        <div className="shell section-tight">
          <GuardianEndorsement tone="dark" variant="strip" />
        </div>
      </section>

      {/* ================================= OPENING STATEMENT ============== */}
      <section className="on-ivory">
        <div className="shell section">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>{openingStatement.eyebrow}</Eyebrow>
            </div>
            <div className="lg:col-span-8">
              <Reveal>
                <p className="font-serif text-[clamp(1.5rem,3vw,2.3rem)] leading-[1.3]">
                  {openingStatement.body[0]}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p className="body-lg mt-8 max-w-prose text-slate">{openingStatement.body[1]}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================================= 3 · EXPLAINER VIDEO ============ */}
      <section id="explainer" className="on-dark scroll-mt-20 border-t border-white/10">
        <div className="shell section">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionIntro
                eyebrow={explainer.eyebrow}
                title={<span className="text-ivory">{explainer.headline}</span>}
                lede={<span className="text-steel">{explainer.sub}</span>}
              />
              <ul className="mt-10 space-y-6">
                {explainer.points.map((p) => (
                  <li key={p.label} className="flex gap-4 border-t border-white/10 pt-6">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" aria-hidden="true" />
                    <div>
                      <h3 className="font-serif text-xl text-ivory">{p.label}</h3>
                      <p className="mt-1 text-[0.92rem] leading-relaxed text-steel">{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <ExplainerVideo caption="How Merlin turns a record production into a conversation" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================================= 4 · THREE PILLARS ============== */}
      <section className="on-ivory">
        <div className="shell section">
          <SectionIntro
            eyebrow="The Merlin Difference"
            title="Three principles behind every answer."
            lede="Merlin is not a general-purpose model pointed at a document dump. It is a disciplined system with a verified foundation, a sealed environment, and litigation-grade responsiveness."
          />
          <div className="mt-14">
            <ThreePillars />
          </div>
        </div>
      </section>

      {/* ================================= 5 · PROCESS PREVIEW =========== */}
      <section className="on-dark border-t border-white/10">
        <div className="shell section">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionIntro
              eyebrow="How It Works"
              title={<span className="text-ivory">Disorder in. Command out.</span>}
              lede={<span className="text-steel">Three stages take a raw record production and make it answer to you.</span>}
            />
            <Link
              href="/platform"
              className="group inline-flex items-center gap-2 text-[0.85rem] font-medium text-gold"
            >
              See the full platform
              <Arrow />
            </Link>
          </div>
          <div className="mt-14 rounded-[12px] border border-white/10 bg-white/[0.015] p-6 md:p-10">
            <ProcessTimeline stages={processPreview} />
          </div>
        </div>
      </section>

      {/* ================================= 6 · PROVOCATION =============== */}
      <ProvocationBand />

      {/* ================================= 7 · FEATURE PREVIEW ========== */}
      <section className="on-ivory">
        <div className="shell section">
          <SectionIntro
            eyebrow="Capabilities"
            title="Built for the way defense counsel actually works."
            lede="Six of the capabilities counsel and claims teams reach for most — each grounded in the source record."
          />
          <div className="mt-14">
            <FeaturePreview />
          </div>
          <div className="mt-10">
            <Link href="/platform" className="group inline-flex items-center gap-2 text-[0.9rem] font-medium text-bronze">
              Explore all capabilities on the Platform
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================= 8 · AUDIENCE SPLIT =========== */}
      <section className="on-graphite border-y border-white/10">
        <div className="shell section">
          <div className="grid gap-px overflow-hidden rounded-[12px] border border-white/10 bg-white/10 md:grid-cols-2">
            {audiences.map((a, i) => (
              <Reveal key={a.key} delay={i * 90}>
                <article className="flex h-full flex-col justify-between gap-10 bg-graphite p-8 md:p-12">
                  <div>
                    <span className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-bronze">{a.label}</span>
                    <p className="mt-6 font-serif text-[clamp(1.6rem,2.6vw,2.1rem)] leading-tight text-ivory">
                      {a.line}
                    </p>
                    <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-steel">{a.body}</p>
                  </div>
                  <Link href={a.href} className="group inline-flex items-center gap-2 text-[0.85rem] font-medium text-gold">
                    {a.key === 'defense' ? 'Solutions for defense counsel' : 'Solutions for claims teams'}
                    <Arrow />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================= 9 · SECURITY PREVIEW ========= */}
      <section className="on-dark">
        <div className="shell section">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionIntro
                eyebrow={securityPreview.eyebrow}
                title={<span className="text-ivory">{securityPreview.headline}</span>}
                lede={<span className="text-steel">Every matter lives in its own sealed environment, governed by a med-legal firm.</span>}
              />
              <div className="mt-8">
                <ButtonLink href="/trust" variant="secondary" tone="onDark" withArrow>
                  Trust &amp; Security
                </ButtonLink>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-px overflow-hidden rounded-[12px] border border-white/10 bg-white/10 sm:grid-cols-3">
                {securityPreview.points.map((p, i) => (
                  <Reveal as="li" key={p.title} delay={i * 80}>
                    <div className="flex h-full flex-col gap-4 bg-obsidian p-7">
                      <span className="font-mono text-[0.62rem] text-steel">{String(i + 1).padStart(2, '0')}</span>
                      <EditorialRule />
                      <h3 className="font-serif text-xl text-ivory">{p.title}</h3>
                      <p className="text-[0.88rem] leading-relaxed text-steel">{p.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================================= 10 · FINAL CTA =============== */}
      <CtaBand headline={finalCta.headline} body={finalCta.body} credibility />
    </>
  );
}
