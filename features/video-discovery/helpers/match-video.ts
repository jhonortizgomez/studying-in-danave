import type { VideoItem } from "@/features/video-discovery/domain/video-item";

function normalize(text: string): string {
  return text.trim().toLowerCase();
}

export function matchVideo(video: VideoItem, query: string): boolean {
  const keyword = normalize(query);
  if (!keyword) return true;

  const searchableText = [
    video.title,
    video.description,
    video.level,
    ...video.tags,
  ]
    .join(" ")
    .toLowerCase();

  return searchableText.includes(keyword);
}
