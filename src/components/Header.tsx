'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { MobileNav } from './MobileNav';
import { ButtonLink } from './ui/Button';
import { nav, CTA } from '@/content/site';

/**
 * Sticky global header. Transparent over the dark hero at page top; transitions
 * to a solid obsidian bar with a hairline once scrolled. Text is always light,
 * which stays legible over the dark heroes and the solid scrolled state alike.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-ivory transition-colors duration-500 ease-editorial ${
        scrolled ? 'bg-obsidian/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="shell flex h-[68px] items-center justify-between gap-6">
        <Logo tone="onDark" />

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`link-underline text-[0.82rem] font-medium tracking-[0.01em] transition-colors ${
                  active ? 'text-gold' : 'text-ivory/85 hover:text-ivory'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={CTA.primaryHref} variant="primary" withArrow className="whitespace-nowrap">
            {CTA.primary}
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-[6px] border border-white/20 px-3 py-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:border-bronze lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="flex flex-col gap-[3px]" aria-hidden="true">
            <span className="h-[1.5px] w-4 bg-current" />
            <span className="h-[1.5px] w-4 bg-current" />
          </span>
          Menu
        </button>
      </div>

      <MobileNav open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </header>
  );
}
