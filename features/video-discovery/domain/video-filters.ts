import type { EnglishLevel } from "@/features/video-discovery/domain/video-item";

export type VideoFilters = {
  level?: EnglishLevel;
  topic?: string;
};
