'use client';

import { useEffect, useRef, useState } from 'react';
import { provocation } from '@/content/home';

/**
 * Full-width editorial provocation. The three setup lines are always visible;
 * the answer ("Merlin did.") reveals as the band scrolls into view. Under
 * prefers-reduced-motion the answer is shown immediately (CSS handles this).
 */
export function ProvocationBand() {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.55 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="on-dark relative overflow-hidden" aria-labelledby="provocation-title">
      <div className="field-grid pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-bronze/10 blur-3xl" />

      <div className="shell relative section">
        <p className="eyebrow eyebrow--center mx-auto w-fit text-bronze">The Verification Layer</p>

        <div className="mx-auto mt-10 max-w-4xl text-center">
          <h2 id="provocation-title" className="display-lg text-ivory">
            {provocation.lines.map((line) => (
              <span key={line} className="block text-ivory/70">
                {line}
              </span>
            ))}
          </h2>

          <p className="mt-10 font-serif text-[clamp(2rem,4.4vw,3.4rem)] italic leading-tight text-ivory">
            {provocation.question}
          </p>

          <p
            className={`provocation-answer mt-4 font-serif text-[clamp(2.4rem,5.6vw,4.4rem)] font-semibold leading-none text-metal ${
              revealed ? 'is-revealed' : ''
            }`}
          >
            {provocation.answer}
          </p>

          <p className="mx-auto mt-12 max-w-2xl text-[0.98rem] leading-relaxed text-steel">
            {provocation.support}
          </p>
        </div>
      </div>
    </section>
  );
}
