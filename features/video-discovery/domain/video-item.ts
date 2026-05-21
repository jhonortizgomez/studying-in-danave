export type EnglishLevel = "A1" | "A2";

export type VideoItem = {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
  thumbnailUrl: string;
  level: EnglishLevel;
  tags: string[];
};
