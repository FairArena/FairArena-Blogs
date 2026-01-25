'use client';

import { ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground text-center px-4">
      <div className="space-y-6 max-w-md">
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse">
          404
        </h1>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Page not found</h2>
        <p className="text-muted-foreground text-lg">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
          >
            <Home size={20} />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium transition-transform hover:scale-105 active:scale-95"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_50%_50%,var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
    </div>
  );
}
