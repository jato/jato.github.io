import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const systems = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/systems' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['active', 'paused', 'archived']).default('active'),
    year: z.number().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const experiments = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experiments' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number().optional(),
    sourceUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

const essays = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const archiveProjects = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/archive-projects',
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    role: z.string(),
    stack: z.array(z.string()).default([]),
    sourceUrl: z.string().url().optional(),
    note: z.string().optional(),
    order: z.number().default(0),
  }),
});

const archivePosts = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/archive-posts',
  }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    publishedAt: z.coerce.date(),
    category: z.enum(['cultural', 'technical']),
    originalSlug: z.string().optional(),
  }),
});

export const collections = {
  systems,
  experiments,
  essays,
  archiveProjects,
  archivePosts,
};
