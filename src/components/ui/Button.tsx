import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Tone = 'onLight' | 'onDark';

const base =
  'group inline-flex items-center justify-center gap-2.5 rounded-[6px] text-[0.82rem] font-medium ' +
  'tracking-[0.02em] leading-tight text-center transition-all duration-300 ease-editorial ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze ' +
  'px-6 py-[0.9rem]';

function classesFor(variant: Variant, tone: Tone): string {
  if (variant === 'primary') {
    // Bronze on both tones
    return `${base} bg-bronze text-obsidian hover:bg-gold shadow-[0_10px_24px_-12px_rgba(201,130,63,0.7)] hover:-translate-y-[1px]`;
  }
  if (variant === 'secondary') {
    return tone === 'onDark'
      ? `${base} border border-white/25 text-ivory hover:border-bronze hover:text-gold`
      : `${base} border border-obsidian/25 text-obsidian hover:border-bronze hover:text-bronze`;
  }
  // ghost
  return tone === 'onDark'
    ? `${base} text-ivory/80 hover:text-gold px-0`
    : `${base} text-slate hover:text-bronze px-0`;
}

interface ButtonLinkProps extends Omit<ComponentProps<typeof Link>, 'className'> {
  variant?: Variant;
  tone?: Tone;
  children: ReactNode;
  className?: string;
  withArrow?: boolean;
}

export function ButtonLink({
  variant = 'primary',
  tone = 'onLight',
  children,
  className = '',
  withArrow = false,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link className={`${classesFor(variant, tone)} ${className}`} {...rest}>
      {children}
      {withArrow && <Arrow />}
    </Link>
  );
}

export function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-[0.9em] w-[0.9em] transition-transform duration-300 ease-editorial group-hover:translate-x-1"
      fill="none"
    >
      <path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
