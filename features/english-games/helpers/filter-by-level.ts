import type { GameItem } from "@/features/english-games/domain/game-item";

export function filterGamesByLevel(
  games: GameItem[],
  level?: "A1" | "A2"
): GameItem[] {
  if (!level) return games;
  return games.filter((game) => game.level === level);
}
