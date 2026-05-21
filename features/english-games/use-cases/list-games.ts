import { getStaticGamesCatalog } from "@/features/english-games/adapters/static-games-catalog";
import type { GameItem } from "@/features/english-games/domain/game-item";
import { filterGamesByLevel } from "@/features/english-games/helpers/filter-by-level";

export function listGames(level?: "A1" | "A2"): GameItem[] {
  return filterGamesByLevel(getStaticGamesCatalog(), level);
}
