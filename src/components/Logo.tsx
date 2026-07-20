import Image from 'next/image';
import Link from 'next/link';
import markLight from '../../public/assets/merlin-mark.png';
import wordmarkLight from '../../public/assets/merlin-wordmark-light.png';
import wordmarkDark from '../../public/assets/merlin-wordmark-dark.png';

/**
 * Merlin brand lockup: the bronze shield mark + the official MERLIN wordmark
 * (cropped from the supplied master logo — not re-drawn). The small brand
 * tagline is intentionally omitted at header scale where it would be illegible;
 * the full official lockup appears in the footer.
 */
export function Logo({
  tone = 'onDark',
  withWordmark = true,
}: {
  tone?: 'onLight' | 'onDark';
  withWordmark?: boolean;
}) {
  const wordmark = tone === 'onDark' ? wordmarkLight : wordmarkDark;
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="Merlin — home">
      <Image
        src={markLight}
        alt=""
        aria-hidden="true"
        priority
        className="h-8 w-auto transition-transform duration-500 ease-editorial group-hover:scale-[1.04] sm:h-9"
        sizes="40px"
      />
      {withWordmark && (
        <Image
          src={wordmark}
          alt="Merlin"
          priority
          className="h-[1.15rem] w-auto sm:h-[1.3rem]"
          sizes="150px"
        />
      )}
    </Link>
  );
}
