import { ButtonLink } from './ui/Button';
import { CTA } from '@/content/site';
import { physicianCredibilityLine } from '@/content/brand';
import Reveal from './Reveal';

/**
 * Recurring closing call-to-action band. `credibility` shows the physician line
 * in its confirmation-safe form (see brand.ts).
 */
export function CtaBand({
  headline,
  body,
  credibility = false,
}: {
  headline: string;
  body: string;
  credibility?: boolean;
}) {
  return (
    <section className="on-dark border-t border-white/10">
      <div className="shell section text-center">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <h2 className="display-lg text-ivory">{headline}</h2>
            <p className="lede mx-auto mt-6 max-w-xl text-steel">{body}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href={CTA.primaryHref} variant="primary" withArrow>
                {CTA.primary}
              </ButtonLink>
              <ButtonLink href="/platform" variant="secondary" tone="onDark">
                Explore the Platform
              </ButtonLink>
            </div>
            {credibility && (
              <p className="mt-10 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-steel">
                {physicianCredibilityLine()}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
