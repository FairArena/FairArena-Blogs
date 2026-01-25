import { BlogCard } from '@/components/blog-card';
import { blogSource } from '@/lib/source';

export const metadata = {
  title: 'FairArena Blogs',
  description: 'Latest updates and stories from FairArena',
};

export default function BlogListPage() {
  const posts = [...blogSource.getPages()].sort((a, b) => {
    return (
      new Date((b.data as any).date ?? 0).getTime() - new Date((a.data as any).date ?? 0).getTime()
    );
  });

  return (
    <main className="min-h-screen bg-fd-background text-fd-foreground relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 sm:pt-48 sm:pb-32 border-b border-fd-border bg-fd-card/50">
        {/* Banner Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://fairarena.blob.core.windows.net/fairarena/FairArena-Blogs-Header-Bg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container px-6 mx-auto relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-8xl font-bold tracking-tight mb-8 text-white">
              FairArena Blog
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-300 max-w-2xl leading-relaxed">
              Latest announcements, engineering deep dives, and stories from the team building the
              future of fair AI interactions.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container px-6 mx-auto py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, idx) => (
            <BlogCard
              key={post.url}
              post={{
                url: post.url,
                data: {
                  title: post.data.title,
                  description: post.data.description,
                  date: (post.data as any).date,
                  author: (post.data as any).author,
                  image: (post.data as any).image,
                  tags: (post.data as any).tags,
                },
              }}
              index={idx}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
