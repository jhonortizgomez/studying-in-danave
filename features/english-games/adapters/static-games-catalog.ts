import type { GameItem } from "@/features/english-games/domain/game-item";

const GAMES: GameItem[] = [
  {
    id: "wordwall",
    title: "Wordwall Kids Games",
    description: "Match words and pictures in English.",
    url: "https://wordwall.net/en-us/community/kids-english",
    level: "A1",
    reference:
      "Zalkas. (s. f.). Community resources. https://wordwall.net/community",
  },
  {
    id: "pbskids",
    title: "PBS Kids Word Games",
    description: "Play simple word games and listen.",
    url: "https://pbskids.org/games/reading/",
    level: "A1",
    reference:
      "Videos | PBS KIDS. (s. f.). PBS KIDS. https://pbskids.org/videos",
  },
  {
    id: "eslgamesplus",
    title: "ESL Games Plus",
    description: "Easy grammar and vocabulary games.",
    url: "https://www.eslgamesplus.com/",
    level: "A2",
    reference:
      "Plus, E. G. (2026, 31 enero). Free ESL Games Online for Kids & Teachers | ESL Games Plus. ESL Games | ESL Games Plus. https://www.eslgamesplus.com/",
  },
];

export function getStaticGamesCatalog(): GameItem[] {
  return GAMES;
}
