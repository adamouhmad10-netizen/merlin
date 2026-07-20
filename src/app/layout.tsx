import type { Metadata } from 'next';
import { EB_Garamond, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { SITE_URL } from '@/content/site';
import { brand } from '@/content/brand';

const serif = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Merlin — Medical Record Intelligence for Civil Defense',
    template: '%s · Merlin',
  },
  description:
    'Merlin gives defense counsel and claims professionals physician-level command of the complete medical record — securely, with answers grounded in the actual documents. Medical chronologies, prior-condition and treatment-gap analysis, expert-opinion auditing, and billing review.',
  applicationName: 'Merlin',
  keywords: [
    'medical record review for defense attorneys',
    'AI medical record analysis',
    'medical chronology',
    'insurance claims medical record review',
    'expert opinion auditing',
    'deposition preparation',
    'billing review',
  ],
  authors: [{ name: brand.parent.parentName }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Merlin',
    url: SITE_URL,
    title: 'Merlin — Medical Record Intelligence for Civil Defense',
    description:
      'A closed-system medical-record intelligence service built for litigation and claims work. The record, mastered.',
    images: [{ url: '/assets/icon-512.png', width: 512, height: 512, alt: 'Merlin' }],
  },
  twitter: {
    card: 'summary',
    title: 'Merlin — Medical Record Intelligence for Civil Defense',
    description: 'A closed-system medical-record intelligence service built for litigation and claims work.',
  },
  icons: {
    icon: [{ url: '/assets/favicon-32.png', sizes: '32x32', type: 'image/png' }],
    apple: [{ url: '/assets/apple-touch-icon.png', sizes: '180x180' }],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#0B0C0E',
  colorScheme: 'light' as const,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        {/* Enables JS-gated reveal styles before paint; with JS off, content
            stays fully visible (the `.js` class is never added). */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js');" }}
        />
        <StructuredData />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
