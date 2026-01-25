import { JsonLd } from '@/components/json-ld';
import { ShareButton } from '@/components/share-button';
import { SmartImage } from '@/components/smart-image';
import { blogSource } from '@/lib/source';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import defaultComponents from 'fumadocs-ui/mdx';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function BlogPostPage(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params;
  const page = blogSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <article className="min-h-screen bg-fd-background text-fd-foreground">
      <JsonLd
        title={page.data.title}
        description={page.data.description}
        date={page.data.date}
        image={page.data.image}
        author={page.data.author}
        slug={params.slug.join('/')}
      />
      {/* Header Image */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        {page.data.image ? (
          <SmartImage
            src={page.data.image}
            alt={page.data.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-fd-muted" />
        )}

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-fd-background via-fd-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-fd-background/50 to-transparent" />

        {/* Title Section */}
        <div className="absolute bottom-0 left-0 right-0 pb-24 pt-32 container mx-auto px-6 z-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 text-sm font-medium text-black dark:text-fd-muted-foreground">
              {page.data.date && (
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-fd-primary" />
                  <time dateTime={new Date(page.data.date).toISOString()}>
                    {new Date(page.data.date).toLocaleDateString(undefined, { dateStyle: 'long' })}
                  </time>
                </div>
              )}
              {page.data.author && (
                <div className="flex items-center gap-2">
                  <User size={16} className="text-fd-primary" />
                  <span>{page.data.author}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-fd-primary" />
                <span>5 min read</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-fd-foreground mb-8 leading-[1.1] tracking-tight">
              {page.data.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-3">
                {page.data.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-medium text-fd-primary bg-fd-primary/10 border border-fd-primary/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ShareButton title={page.data.title} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div
            className="prose prose-xl prose-zinc dark:prose-invert
                prose-headings:text-fd-foreground prose-headings:font-bold prose-headings:tracking-tight
                prose-p:text-fd-muted-foreground prose-p:leading-relaxed
                prose-a:text-fd-primary prose-a:no-underline hover:prose-a:text-fd-primary/80 prose-a:transition-colors
                prose-strong:text-fd-foreground
                prose-code:text-fd-primary prose-code:bg-fd-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-fd-card prose-pre:border prose-pre:border-fd-border
                prose-blockquote:border-l-fd-primary prose-blockquote:bg-fd-muted/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                prose-img:rounded-2xl prose-img:border prose-img:border-fd-border
                prose-li:marker:text-fd-primary
            "
          >
            <p className="lead text-2xl text-fd-foreground/80 mb-12 font-light">
              {page.data.description}
            </p>
            <InlineTOC items={page.data.toc} />
            <MDX components={defaultComponents} />
          </div>

          {/* Divider */}
          <hr className="my-20 border-fd-border" />

          {/* Footer Navigation */}
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="group flex items-center gap-4 text-fd-muted-foreground hover:text-fd-foreground transition-colors"
            >
              <div className="p-3 rounded-full bg-fd-muted group-hover:bg-fd-accent border border-fd-border transition-colors">
                <ArrowLeft size={20} />
              </div>
              <div className="text-left">
                <div className="text-xs text-fd-muted-foreground mb-0.5 uppercase tracking-wider">
                  Back
                </div>
                <div className="font-medium">All Articles</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return blogSource.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = blogSource.getPage(params.slug);
  if (!page) return {};
  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: page.data.image ? [page.data.image] : undefined,
    },
  };
}
