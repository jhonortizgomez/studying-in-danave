import type { EnglishLevel } from "@/features/video-discovery/domain/video-item";

export function inferVideoLevel(title: string, description: string): EnglishLevel {
  const text = `${title} ${description}`.toLowerCase();
  const a2Hints = ["question", "grammar", "story", "conversation"];
  const isA2 = a2Hints.some((hint) => text.includes(hint));
  return isA2 ? "A2" : "A1";
}
