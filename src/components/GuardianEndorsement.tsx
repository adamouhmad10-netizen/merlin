import Image from 'next/image';
import guardianWhite from '../../public/assets/guardian-civil-white.png';
import guardianBlack from '../../public/assets/guardian-civil-black.png';
import { brand } from '@/content/brand';

/**
 * Parent-company credibility band. Selects the Guardian logo variant that suits
 * the background so a single, appropriate mark appears per surface (never all
 * variants on one page). Kept visually smaller than the Merlin brand.
 */
export function GuardianEndorsement({
  tone = 'dark',
  variant = 'strip',
}: {
  tone?: 'dark' | 'light';
  variant?: 'strip' | 'block';
}) {
  const logo = tone === 'dark' ? guardianWhite : guardianBlack;
  const subtle = tone === 'dark' ? 'text-steel' : 'text-slate';

  if (variant === 'block') {
    return (
      <div className="flex flex-col items-start gap-4">
        <Image
          src={logo}
          alt={`${brand.parent.parentUnit} — Seamless Medical Expert Integration`}
          className="h-auto w-[260px] max-w-full"
          sizes="260px"
        />
        <p className={`meta text-[0.66rem] uppercase tracking-[0.18em] ${subtle}`}>
          {brand.parent.divisionLine} · {brand.parent.subsidiaryLine}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <p className={`meta text-[0.64rem] uppercase tracking-[0.22em] ${subtle}`}>Governed & operated by</p>
      <Image
        src={logo}
        alt={`${brand.parent.parentUnit} — Seamless Medical Expert Integration`}
        className="h-auto w-[300px] max-w-[80vw] opacity-90"
        sizes="300px"
      />
      <div className={`flex flex-col items-center gap-1 text-[0.8rem] ${subtle}`}>
        <span>{brand.parent.divisionLine}</span>
        <span>{brand.parent.subsidiaryLine}</span>
      </div>
    </div>
  );
}
