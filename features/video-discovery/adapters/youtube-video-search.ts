import type { VideoItem } from "@/features/video-discovery/domain/video-item";
import { buildEducationalQuery } from "@/features/video-discovery/helpers/build-educational-query";
import { inferVideoLevel } from "@/features/video-discovery/helpers/infer-video-level";

import {
  type YoutubeSearchResponse,
  youtubeSearchResponseSchema,
} from "./youtube-search-schema";

const YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

function mapYoutubeItem(item: YoutubeSearchResponse["items"][number]): VideoItem {
  const videoId = item.id.videoId;
  const thumbnailUrl =
    item.snippet.thumbnails?.high?.url ??
    item.snippet.thumbnails?.medium?.url ??
    item.snippet.thumbnails?.default?.url ??
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return {
    id: videoId,
    title: item.snippet.title,
    description: item.snippet.description || "Learn with this English video.",
    youtubeUrl: `https://www.youtube.com/watch?v=${videoId}`,
    thumbnailUrl,
    level: inferVideoLevel(item.snippet.title, item.snippet.description),
    tags: item.snippet.tags ?? ["english", "kids", "learning"],
  };
}

export async function searchYoutubeVideos(
  query: string,
  apiKey: string
): Promise<VideoItem[]> {
  const params = new URLSearchParams({
    part: "snippet",
    type: "video",
    maxResults: "8",
    safeSearch: "strict",
    q: buildEducationalQuery(query),
    key: apiKey,
  });

  const response = await fetch(`${YOUTUBE_SEARCH_URL}?${params.toString()}`, {
    next: { revalidate: 3600, tags: ["youtube-videos"] },
  });

  if (!response.ok) {
    throw new Error(`YouTube request failed with status ${response.status}`);
  }

  const payload = await response.json();
  const parsed = youtubeSearchResponseSchema.parse(payload);

  return parsed.items.map(mapYoutubeItem);
}
