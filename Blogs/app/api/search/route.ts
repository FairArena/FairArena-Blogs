import { blogSource, source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

const combinedSource = {
  ...source,
  getPages: () => [...source.getPages(), ...blogSource.getPages()],
};

export const { GET } = createFromSource(combinedSource as any, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: 'english',
});
