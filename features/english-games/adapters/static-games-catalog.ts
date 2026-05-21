import type { GameItem } from "@/features/english-games/domain/game-item";

const GAMES: GameItem[] = [
  {
    id: "wordwall",
    title: "Wordwall Kids Games",
    description: "Match words and pictures in English.",
    url: "https://wordwall.net/en-us/community/kids-english",
    level: "A1",
  },
  {
    id: "pbskids",
    title: "PBS Kids Word Games",
    description: "Play simple word games and listen.",
    url: "https://pbskids.org/games/reading/",
    level: "A1",
  },
  {
    id: "eslgamesplus",
    title: "ESL Games Plus",
    description: "Easy grammar and vocabulary games.",
    url: "https://www.eslgamesplus.com/",
    level: "A2",
  },
  {
    id: "funbrain",
    title: "Funbrain Reading Games",
    description: "Read short stories and learn words.",
    url: "https://www.funbrain.com/games",
    level: "A2",
  },
];

export function getStaticGamesCatalog(): GameItem[] {
  return GAMES;
}
