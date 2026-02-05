'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Defined based on source.config.ts schema
interface BlogPost {
  url: string;
  data: {
    title: string;
    description?: string;
    date?: string | Date;
    author?: string;
    image?: string;
    tags?: string[];
  };
}

export function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group h-full"
    >
      <Link
        href={post.url}
        className="flex flex-col h-full bg-fd-card border border-fd-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-fd-primary/50 hover:shadow-lg hover:-translate-y-1"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          {post.data.image ? (
            <Image
              width={1920}
              height={1080}
              src={post.data.image}
              alt={post.data.title}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-linear-to-br from-fd-muted to-fd-background" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-fd-card/90 via-transparent to-transparent opacity-60" />

          {/* Tags Overylay */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {post.data.tags?.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium text-fd-foreground bg-fd-background/80 backdrop-blur-md rounded-full border border-fd-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col flex-1 p-6 sm:p-8">
          <div className="flex items-center gap-3 text-xs font-medium text-fd-muted-foreground mb-4 uppercase tracking-wider">
            {post.data.date && (
              <time dateTime={new Date(post.data.date).toISOString()}>
                {new Date(post.data.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            )}
            {post.data.author && (
              <>
                <span className="w-1 h-1 rounded-full bg-fd-foreground/20" />
                <span>{post.data.author}</span>
              </>
            )}
          </div>

          <h3 className="text-2xl font-bold mb-3 text-fd-foreground group-hover:text-fd-primary transition-colors leading-tight">
            {post.data.title}
          </h3>

          <p className="text-fd-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6">
            {post.data.description}
          </p>

          <div className="mt-auto pt-6 border-t border-fd-border flex items-center justify-between">
            <span className="text-sm font-medium text-fd-foreground/70 group-hover:text-fd-foreground transition-colors">
              Read Article
            </span>
            <svg
              className="w-5 h-5 text-fd-muted-foreground group-hover:text-fd-foreground group-hover:translate-x-1 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
