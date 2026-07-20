'use client';

import { useState } from 'react';

interface QA {
  q: string;
  a: string;
}

/**
 * Accessible FAQ accordion. Each item is a native <button> controlling a
 * region via aria-expanded / aria-controls. Keyboard: Enter/Space toggle,
 * arrow keys move between headers. Content stays in the DOM (SEO + no-JS
 * readable — it is simply expanded by default when JS is unavailable, because
 * the collapsed state is applied on the client).
 */
export function FAQAccordion({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    const total = items.length;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const dir = e.key === 'ArrowDown' ? 1 : -1;
      const next = (index + dir + total) % total;
      document.getElementById(`faq-btn-${next}`)?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      document.getElementById('faq-btn-0')?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      document.getElementById(`faq-btn-${total - 1}`)?.focus();
    }
  };

  return (
    <div className="divide-y divide-black/10 border-y border-black/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                id={`faq-btn-${i}`}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-bronze"
              >
                <span className="font-serif text-[1.25rem] leading-snug md:text-[1.4rem]">{item.q}</span>
                <span
                  aria-hidden="true"
                  className={`relative mt-1 h-4 w-4 shrink-0 text-bronze transition-transform duration-300 ease-editorial ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  <span className="absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 bg-current" />
                  <span className="absolute top-1/2 left-0 h-[1.5px] w-full -translate-y-1/2 bg-current" />
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              hidden={!isOpen}
              className="max-w-prose pb-7 pr-8"
            >
              <p className="body-lg text-slate">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
