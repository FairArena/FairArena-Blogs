'use client';

import { cn } from '@/lib/utils';
import { ImageOff } from 'lucide-react';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface SmartImageProps extends Omit<ImageProps, 'src'> {
  src?: string | ImageProps['src'];
  fallbackSrc?: string;
  fallbackGradient?: string;
}

export function SmartImage({
  src,
  alt,
  className,
  fallbackSrc,
  fallbackGradient = 'bg-gradient-to-br from-zinc-800 to-zinc-900',
  ...props
}: SmartImageProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={cn(
          'flex items-center justify-center w-full h-full min-h-[200px] rounded-xl overflow-hidden',
          fallbackGradient,
          className,
        )}
      >
        <ImageOff className="w-8 h-8 text-white/20" />
      </div>
    );
  }

  // Default dimensions if not provided and not using fill layout
  // This satisfies Next.js Optimization requirements for remote images
  const defaultDimensions = !props.fill && !props.width ? { width: 1200, height: 630 } : {};

  return (
    <Image
      src={src as ImageProps['src']}
      alt={alt || 'Blog Image'}
      className={className}
      onError={() => setError(true)}
      {...defaultDimensions}
      {...props}
    />
  );
}
