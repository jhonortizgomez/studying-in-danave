import type { VideoFilters } from "@/features/video-discovery/domain/video-filters";
import type { VideoItem } from "@/features/video-discovery/domain/video-item";

function hasTopic(video: VideoItem, topic: string): boolean {
  const keyword = topic.trim().toLowerCase();
  if (!keyword) return true;
  return video.tags.some((tag) => tag.toLowerCase().includes(keyword));
}

export function filterVideos(videos: VideoItem[], filters: VideoFilters): VideoItem[] {
  return videos.filter((video) => {
    const levelOk = !filters.level || video.level === filters.level;
    const topicOk = !filters.topic || hasTopic(video, filters.topic);
    return levelOk && topicOk;
  });
}
