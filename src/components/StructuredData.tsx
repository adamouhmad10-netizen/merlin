import { SITE_URL } from '@/content/site';
import { brand } from '@/content/brand';

/**
 * Organization + WebSite structured data. Intentionally contains NO aggregate
 * ratings, reviews, or unverifiable claims.
 */
export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Merlin',
        alternateName: 'Merlin.law',
        url: SITE_URL,
        description:
          'A closed-system medical-record intelligence service for civil defense and insurance claims work.',
        logo: `${SITE_URL}/assets/icon-512.png`,
        parentOrganization: {
          '@type': 'Organization',
          name: brand.parent.parentName,
        },
        slogan: 'The medical record, mastered.',
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Merlin',
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-US',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
