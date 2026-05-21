import { z } from "zod";

const thumbnailSchema = z.object({ url: z.string().url() });

const videoSnippetSchema = z.object({
  title: z.string(),
  description: z.string(),
  thumbnails: z
    .object({
      high: thumbnailSchema.optional(),
      medium: thumbnailSchema.optional(),
      default: thumbnailSchema.optional(),
    })
    .optional(),
  tags: z.array(z.string()).optional(),
});

const videoItemSchema = z.object({
  id: z.object({ videoId: z.string() }),
  snippet: videoSnippetSchema,
});

export const youtubeSearchResponseSchema = z.object({
  items: z.array(videoItemSchema),
});

export type YoutubeSearchResponse = z.infer<typeof youtubeSearchResponseSchema>;
