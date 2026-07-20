import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { SectionIntro } from '@/components/ui/Editorial';
import { SecurityPrinciples } from '@/components/SecurityPrinciples';
import { GuardianEndorsement } from '@/components/GuardianEndorsement';
import { FAQAccordion } from '@/components/FAQAccordion';
import { DemoRequestForm } from '@/components/DemoRequestForm';
import Reveal from '@/components/Reveal';
import { trustHero, about, faqs, demoForm } from '@/content/trust';

export const metadata: Metadata = {
  title: 'Trust & Security — A sealed room for your case',
  description:
    'Merlin operates as a closed system: not used to train public AI models, isolated by matter, and governed by a med-legal firm. Read the security principles, the FAQ, and request a private demonstration.',
  alternates: { canonical: '/trust' },
};

export default function TrustPage() {
  return (
    <>
      <PageHero
        eyebrow={trustHero.eyebrow}
        pageLabel="Trust & Security"
        title={<>{trustHero.headline}</>}
        sub={trustHero.sub}
      />

      {/* Security principles */}
      <section className="on-dark border-t border-white/10">
        <div className="shell section">
          <SectionIntro
            eyebrow="Security Principles"
            title={<span className="text-ivory">Confidentiality, engineered in.</span>}
            lede={<span className="text-steel">Legal practice imposes obligations most AI tools were never built to meet. Merlin was built to meet them.</span>}
          />
          <div className="mt-14">
            <SecurityPrinciples />
          </div>
        </div>
      </section>

      {/* About Merlin & Guardian */}
      <section className="on-ivory">
        <div className="shell section">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <SectionIntro eyebrow={about.eyebrow} title={about.headline} />
              <div className="mt-8 flex flex-col gap-5">
                {about.body.map((p, i) => (
                  <Reveal key={i} delay={i * 60}>
                    <p className="body-lg max-w-prose text-slate">{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="card h-full bg-paper p-8 md:p-10">
                <span className="meta mb-6 block text-[0.62rem] uppercase tracking-[0.18em] text-steel">
                  Parent company
                </span>
                <GuardianEndorsement tone="light" variant="block" />
                <hr className="hairline my-8" />
                <p className="text-[0.92rem] leading-relaxed text-slate">
                  Merlin is operated by The Guardian Group, a med-legal management organization
                  accustomed to handling sensitive medical information under the strictest professional
                  standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="on-ivory bg-paper border-t border-black/10">
        <div className="shell section">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionIntro eyebrow="Questions" title="Answers, on the record." />
              <p className="mt-6 text-[0.92rem] leading-relaxed text-slate">
                The questions counsel and claims professionals ask most, before their first matter.
              </p>
            </div>
            <div className="lg:col-span-8">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Private demonstration form */}
      <section id="demonstration" className="on-dark scroll-mt-20 border-t border-white/10">
        <div className="shell section">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionIntro
                eyebrow={demoForm.eyebrow}
                title={<span className="text-ivory">{demoForm.headline}</span>}
                lede={<span className="text-steel">{demoForm.sub}</span>}
              />
              <ul className="mt-10 space-y-4">
                {['Confidential consultation', 'Walk through a record like yours', 'No obligation'].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-[0.92rem] text-ivory/80">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-bronze/40 text-bronze">
                      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" aria-hidden="true">
                        <path d="M2 6.2 4.6 9 10 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-[12px] border border-white/10 bg-white/[0.02] p-6 md:p-9">
                <DemoRequestForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
