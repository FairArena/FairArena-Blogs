import { SmartImage } from '@/components/smart-image';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    img: (props) => <SmartImage {...(props as any)} />,
    ...components,
  };
}
