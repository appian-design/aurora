import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    // Extend Starlight's base schema with the extra front matter fields
    // carried over from the mkdocs source (docs/**/*.md). These aren't
    // rendered specially by Starlight, but we keep them so the content
    // stays identical to what .github/scripts/check-mcp-sync.js and any
    // other tooling reads directly off disk.
    schema: docsSchema({
      extend: z.object({
        status: z.string().optional(),
        last_updated: z.string().optional(),
        parent: z.string().optional(),
        related: z.array(z.string()).optional(),
        hide: z.array(z.string()).optional(),
      }),
    }),
  }),
};
