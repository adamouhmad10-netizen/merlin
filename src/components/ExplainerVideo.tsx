'use client';

import { useState } from 'react';

/**
 * Explainer video presentation frame. If `src` is provided (via env or props),
 * a real <video> is lazily mounted on play and never autoplays audio. Until a
 * real asset exists, a polished poster + play affordance is shown — it does NOT
 * pretend a video exists. Drop a file/URL into NEXT_PUBLIC_EXPLAINER_VIDEO_URL
 * (or pass `src`) to activate.
 */
export function ExplainerVideo({
  src,
  caption = 'Explainer walkthrough',
}: {
  src?: string;
  caption?: string;
}) {
  const videoSrc = src ?? process.env.NEXT_PUBLIC_EXPLAINER_VIDEO_URL ?? '';
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="relative">
      {/* Case-file frame */}
      <div className="rounded-[12px] border border-white/12 bg-graphite p-2 shadow-panel sm:p-3">
        <div className="mb-2 flex items-center justify-between px-2 pt-1">
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-steel">
            Merlin · Walkthrough
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-slate/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-bronze/70" />
          </span>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-[8px] bg-obsidian">
          {playing && videoSrc ? (
            <video
              className="h-full w-full"
              src={videoSrc}
              controls
              autoPlay
              playsInline
              preload="metadata"
            >
              <track kind="captions" />
            </video>
          ) : (
            <>
              {/* Poster */}
              <div className="field-grid absolute inset-0 opacity-40" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" aria-hidden="true" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center">
                <button
                  type="button"
                  onClick={() => videoSrc && setPlaying(true)}
                  disabled={!videoSrc}
                  aria-label={videoSrc ? 'Play explainer video' : 'Explainer video coming soon'}
                  className="group inline-flex h-16 w-16 items-center justify-center rounded-full border border-bronze/50 bg-bronze/10 text-gold backdrop-blur-sm transition-all duration-300 ease-editorial hover:scale-105 hover:bg-bronze/20 disabled:cursor-default disabled:opacity-70"
                >
                  <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor" aria-hidden="true">
                    <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                  </svg>
                </button>
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.18em] text-steel">
                  {videoSrc ? caption : 'Walkthrough available on request'}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <figcaption className="sr-only">{caption}</figcaption>
    </figure>
  );
}
