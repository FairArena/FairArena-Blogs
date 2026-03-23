import { blogSource } from '@/lib/source';

export async function GET() {
  const baseUrl = 'https://blogs.fairarena.app';

  // Get all pages from blogSource
  const allPages = blogSource.getPages();

  const blogItems = allPages
    .sort((a, b) => {
      const dateA = new Date(a.data.date || 0).getTime();
      const dateB = new Date(b.data.date || 0).getTime();
      return dateB - dateA;
    })
    .map((page) => {
      const title = page.data.title || 'Untitled';
      const description = page.data.description || '';
      const slug = page.slugs.join('/');
      const date = new Date(page.data.date || Date.now()).toUTCString();
      const author = page.data.author || 'FairArena';
      const image = page.data.image || '';
      const tags = (page.data.tags as string[]) || [];

      return `
    <item>
      <title>${escapeXml(title)}</title>
      <link>${baseUrl}/blog/${slug}</link>
      <guid>${baseUrl}/blog/${slug}</guid>
      <description>${escapeXml(description)}</description>
      <pubDate>${date}</pubDate>
      <author>${author}</author>
      ${image ? `<image><url>${escapeXml(image)}</url><title>${escapeXml(title)}</title><link>${baseUrl}/blog/${slug}</link></image>` : ''}
      ${tags.map((tag: string) => `<category>${escapeXml(tag)}</category>`).join('\n      ')}
    </item>`;
    })
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>FairArena Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Learn about hackathon management, fair judging, and competition platforms</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <image>
      <title>FairArena Blog</title>
      <url>${baseUrl}/logo.png</url>
      <link>${baseUrl}</link>
    </image>
    ${blogItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
