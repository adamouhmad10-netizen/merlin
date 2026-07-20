'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { ButtonLink } from './ui/Button';
import { nav, CTA } from '@/content/site';
import { brand } from '@/content/brand';

const ANIM_MS = 450;

export function MobileNav({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Mount/unmount so the off-canvas panel never contributes an off-screen box
  // (prevents horizontal overflow), while still animating in and out.
  const [present, setPresent] = useState(false);
  const [slid, setSlid] = useState(false);

  useEffect(() => {
    let raf = 0;
    let timer: ReturnType<typeof setTimeout>;
    if (open) {
      setPresent(true);
      raf = requestAnimationFrame(() => requestAnimationFrame(() => setSlid(true)));
    } else {
      setSlid(false);
      timer = setTimeout(() => setPresent(false), ANIM_MS);
    }
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [open]);

  useEffect(() => {
    if (!present) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (open) closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        const focusables = panelRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [present, open, onClose]);

  if (!present) return null;

  return (
    <div id="mobile-nav" className="fixed inset-0 z-[60] overflow-hidden lg:hidden">
      {/* Scrim */}
      <div
        className={`absolute inset-0 bg-obsidian/70 transition-opacity duration-300 ${slid ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-graphite text-ivory shadow-panel transition-transform duration-500 ease-editorial ${
          slid ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <Logo tone="onDark" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-[6px] border border-white/20 px-3 py-2 text-[0.7rem] uppercase tracking-[0.16em] hover:border-bronze"
          >
            Close
          </button>
        </div>

        <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1 px-6 py-8">
          <MobileLink href="/" label="Home" pathname={pathname} onClose={onClose} />
          {nav.map((item) => (
            <MobileLink key={item.href} href={item.href} label={item.label} pathname={pathname} onClose={onClose} />
          ))}
        </nav>

        <div className="border-t border-white/10 px-6 py-7">
          <ButtonLink href={CTA.primaryHref} variant="primary" className="w-full" withArrow onClick={onClose}>
            {CTA.primary}
          </ButtonLink>
          <p className="meta mt-5 text-[0.62rem] leading-relaxed text-steel">
            {brand.parent.divisionLine}
            <br />
            {brand.parent.subsidiaryLine}
          </p>
        </div>
      </div>
    </div>
  );
}

function MobileLink({
  href,
  label,
  pathname,
  onClose,
}: {
  href: string;
  label: string;
  pathname: string;
  onClose: () => void;
}) {
  const active = pathname === href;
  return (
    <Link
      href={href}
      onClick={onClose}
      aria-current={active ? 'page' : undefined}
      className={`flex items-center justify-between border-b border-white/5 py-4 font-serif text-2xl transition-colors ${
        active ? 'text-gold' : 'text-ivory hover:text-gold'
      }`}
    >
      {label}
      <span aria-hidden="true" className="text-steel">
        →
      </span>
    </Link>
  );
}
