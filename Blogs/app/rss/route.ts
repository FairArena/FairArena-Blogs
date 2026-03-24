import { blog } from 'fumadocs-mdx:collections/server';

export async function GET() {
  const baseUrl = 'https://blog.fairarena.app';
  
  // Get all blog posts from the raw collection
  const allPosts = blog.docs || [];

  // Sort by date, newest first
  const posts = allPosts.sort((a, b) => {
    const dateA = new Date((a.date as string) || 0).getTime();
    const dateB = new Date((b.date as string) || 0).getTime();
    return dateB - dateA;
  });

  const rssItems = posts
    .map(
      (post) => {
        const p: any = post as any;
        const slug = p.slug || (p.slugs ? p.slugs.join('/') : '');
        return `
    <item>
      <title>${escapeXml((p.title as string) || '')}</title>
      <description>${escapeXml((p.description as string) || '')}</description>
      <link>${baseUrl}/blog/${slug}</link>
      <guid>${baseUrl}/blog/${slug}</guid>
      <pubDate>${new Date((p.date as string) || Date.now()).toUTCString()}</pubDate>
      <author>FairArena</author>
      <category>${(p.tags as string[])?.[0] || 'Blog'}</category>
      ${(p.image as string) ? `<image>
        <url>${p.image}</url>
        <title>${escapeXml((p.title as string) || '')}</title>
        <link>${baseUrl}/blog/${slug}</link>
      </image>` : ''}
    </item>
    `;
      }
    )
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>FairArena Blog</title>
    <link>${baseUrl}</link>
    <description>Latest blogs on hackathon management, judging software, and competition platforms</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <image>
      <url>${baseUrl}/favicon.ico</url>
      <title>FairArena Blog</title>
      <link>${baseUrl}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

function escapeXml(str: string | undefined): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
