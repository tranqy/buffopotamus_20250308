import { defineCollection, z } from 'astro:content';

// Story collection for narrative content
export const collections = {
  story: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      order: z.number(),
      act: z.enum(['act1', 'act2', 'act3', 'act4']),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
    }),
  }),
  
  // Facts collection for fun facts and comparisons
  facts: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      category: z.enum(['habitat', 'physical', 'behavior', 'comparison']),
      icon: z.string().optional(),
      importance: z.number().optional(),
    }),
  }),
  
  // Gallery collection for image information
  gallery: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string(),
      imageAlt: z.string(),
      categories: z.array(z.enum(['character', 'environment', 'story', 'concept'])),
      featured: z.boolean().optional().default(false),
    }),
  }),
};
