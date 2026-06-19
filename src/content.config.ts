import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const news = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    status: z.enum(["draft", "published"]),
    category: z.string(),
  }),
});

const outputs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/outputs" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    status: z.enum(["planned", "in-progress", "available"]),
    kind: z.enum(["deliverable", "publication", "dataset", "tool", "website"]),
    externalUrl: z.url().optional(),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/resources" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    status: z.enum(["existing", "project"]),
    kind: z.string(),
    externalUrl: z.url(),
  }),
});

export const collections = { news, outputs, resources };
