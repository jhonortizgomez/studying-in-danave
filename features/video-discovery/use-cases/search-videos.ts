import { getStaticVideoCatalog } from "@/features/video-discovery/adapters/static-video-catalog";
import { searchYoutubeVideos } from "@/features/video-discovery/adapters/youtube-video-search";
import type { VideoItem } from "@/features/video-discovery/domain/video-item";
import { matchVideo } from "@/features/video-discovery/helpers/match-video";

function searchStaticCatalog(query: string): VideoItem[] {
  return getStaticVideoCatalog().filter((video) => matchVideo(video, query));
}

export async function searchVideos(query: string): Promise<VideoItem[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) return searchStaticCatalog(query);

  try {
    const videos = await searchYoutubeVideos(query, apiKey);
    if (videos.length > 0) return videos;
  } catch {
    return searchStaticCatalog(query);
  }

  return searchStaticCatalog(query);
}
