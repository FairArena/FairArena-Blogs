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
        url: 'https://fra.cloud.appwrite.io/v1/storage/buckets/697b974d001a7a80496e/files/697b9764002453409e98/view?project=69735edc00127d2033d8&mode=admin',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://blog.fairarena.app/blog/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
