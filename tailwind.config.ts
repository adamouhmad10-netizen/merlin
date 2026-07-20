import type { Config } from 'tailwindcss';

/**
 * Merlin design tokens. Palette and type scale are defined once here and
 * consumed across the site. Colours are also mirrored as CSS variables in
 * globals.css for use outside utility classes.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0B0C0E',
        graphite: '#17181B',
        ivory: '#F3F0E9',
        paper: '#FCFBF8',
        bronze: '#C9823F',
        gold: '#D6A15A',
        steel: '#85868D',
        slate: '#4B4D53',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Garamond', 'Georgia', 'serif'],
        sans: [
          'var(--font-sans)',
          '-apple-system',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        shell: '1320px',
        prose: '68ch',
      },
      letterSpacing: {
        label: '0.22em',
      },
      borderRadius: {
        card: '8px',
      },
      boxShadow: {
        panel: '0 24px 60px -24px rgba(0,0,0,0.55)',
        lift: '0 12px 30px -14px rgba(11,12,14,0.35)',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
