import { getStaticVideoCatalog } from "@/features/video-discovery/adapters/static-video-catalog";
import { searchYoutubeVideos } from "@/features/video-discovery/adapters/youtube-video-search";
import type { VideoFilters } from "@/features/video-discovery/domain/video-filters";
import type { VideoItem } from "@/features/video-discovery/domain/video-item";
import { filterVideos } from "@/features/video-discovery/helpers/filter-videos";
import { matchVideo } from "@/features/video-discovery/helpers/match-video";

function searchStaticCatalog(query: string, filters: VideoFilters): VideoItem[] {
  const filteredByQuery = getStaticVideoCatalog().filter((video) =>
    matchVideo(video, query)
  );
  return filterVideos(filteredByQuery, filters);
}

export async function searchVideos(
  query: string,
  filters: VideoFilters = {}
): Promise<VideoItem[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) return searchStaticCatalog(query, filters);

  try {
    const videos = await searchYoutubeVideos(query, apiKey, filters.topic);
    const filteredVideos = filterVideos(videos, filters);
    if (filteredVideos.length > 0) return filteredVideos;
  } catch {
    return searchStaticCatalog(query, filters);
  }

  return searchStaticCatalog(query, filters);
}
