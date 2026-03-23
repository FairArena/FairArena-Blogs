import { blog } from 'fumadocs-mdx:collections/server';

export async function GET() {
  const baseUrl = 'https://blog.fairarena.app';
  
  // Get all blog posts from the raw collection
  const allPosts = blog.docs || [];

  // Sort by date, newest first
  const posts = allPosts.sort((a, b) => {
    const dateA = new Date(a.frontmatter?.date || 0).getTime();
    const dateB = new Date(b.frontmatter?.date || 0).getTime();
    return dateB - dateA;
  });

  const rssItems = posts
    .map(
      (post) => `
  <item>
    <title>${escapeXml(post.frontmatter?.title || '')}</title>
    <description>${escapeXml(post.frontmatter?.description || '')}</description>
    <link>${baseUrl}/blog/${post.slug}</link>
    <guid>${baseUrl}/blog/${post.slug}</guid>
    <pubDate>${new Date(post.frontmatter?.date || Date.now()).toUTCString()}</pubDate>
    <author>FairArena</author>
    <category>${post.frontmatter?.tags?.[0] || 'Blog'}</category>
    ${post.frontmatter?.image ? `<image>
      <url>${post.frontmatter.image}</url>
      <title>${escapeXml(post.frontmatter.title || '')}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
    </image>` : ''}
  </item>
`
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
