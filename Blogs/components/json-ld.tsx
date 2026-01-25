import { BlogPosting, WithContext } from 'schema-dts';

export function JsonLd({
  title,
  description,
  date,
  image,
  author,
  slug,
}: {
  title: string;
  description?: string;
  date?: string | Date;
  image?: string;
  author?: string;
  slug: string;
}) {
  const jsonLd: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    datePublished: date ? new Date(date).toISOString() : undefined,
    image: image,
    author: author
      ? {
          '@type': 'Person',
          name: author,
        }
      : undefined,
    publisher: {
      '@type': 'Organization',
      name: 'FairArena',
      logo: {
        '@type': 'ImageObject',
        url: 'https://fairarena.blob.core.windows.net/fairarena/fairArenaLogo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://blog.fair.sakshamg.me/blog/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
