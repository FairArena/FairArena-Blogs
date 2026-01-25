import { blogSource } from '@/lib/source';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPages = blogSource.getPages().map((page) => ({
    url: `https://blog.fair.sakshamg.me/blog/${page.slugs.join('/')}`,
    lastModified: page.data.date ? new Date(page.data.date) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://blog.fair.sakshamg.me',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...blogPages,
  ];
}
