/// <reference types="astro/client" />

// Declare the Astro content module to fix type errors
declare module 'astro:content' {
  interface ContentCollectionEntry {
    data: Record<string, any>;
    body: string;
    slug: string;
    collection: string;
    render: () => Promise<{
      Content: import('astro').AstroComponent;
      headings: { depth: number; slug: string; text: string }[];
    }>;
  }

  interface ContentCollections {
    story: ContentCollectionEntry[];
    facts: ContentCollectionEntry[];
    gallery: ContentCollectionEntry[];
  }

  export function getCollection<T extends keyof ContentCollections>(
    collection: T,
    filter?: (entry: ContentCollectionEntry) => boolean
  ): Promise<ContentCollections[T]>;

  export function getEntry<T extends keyof ContentCollections>(
    collection: T,
    slug: string
  ): Promise<ContentCollections[T][number] | undefined>;

  export function defineCollection<T extends Record<string, any>>(options: {
    type?: 'content' | 'data';
    schema?: any;
  }): { type?: 'content' | 'data'; schema?: any };

  export const z: any;
}

declare module 'astro/loaders' {
  export function glob(options: { pattern: string; base?: string }): any;
}
