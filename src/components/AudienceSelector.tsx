'use client';

import { useEffect, useState } from 'react';

/**
 * Segmented anchor control for the two Solutions audiences. Both audience
 * sections are always rendered on the page (below), so this works fully without
 * JavaScript — it is simply in-page navigation. When JS is available it also
 * highlights the section currently in view. Sticks below the header on scroll.
 */
export function AudienceSelector({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  const [active, setActive] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  return (
    <div className="sticky top-[68px] z-30 -mx-[1px] border-y border-black/10 bg-paper/85 backdrop-blur-md">
      <nav className="shell flex items-center gap-1 overflow-x-auto py-3" aria-label="Jump to audience">
        <span className="meta mr-3 hidden shrink-0 text-[0.6rem] uppercase tracking-[0.18em] text-steel sm:inline">
          Choose your view
        </span>
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? 'true' : undefined}
              className={`shrink-0 rounded-[6px] px-4 py-2 text-[0.82rem] font-medium transition-colors ${
                isActive ? 'bg-obsidian text-ivory' : 'text-slate hover:bg-black/[0.04]'
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
