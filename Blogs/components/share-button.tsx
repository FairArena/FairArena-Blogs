'use client';

import { Check, Share2 } from 'lucide-react';
import { useState } from 'react';

export function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
        return;
      } catch (err) {
        // Fallback to copy
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-fd-foreground bg-fd-secondary hover:bg-fd-accent rounded-full border border-fd-border transition-all"
      aria-label="Share this article"
    >
      {copied ? <Check size={16} /> : <Share2 size={16} />}
      {copied ? 'Copied Link' : 'Share'}
    </button>
  );
}
