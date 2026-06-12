import type { GameItem } from "@/features/english-games/domain/game-item";

const GAMES: GameItem[] = [
  {
    id: "wordwall",
    title: "Colors",
    description: "Play a fun game to learn colors in English.",
    url: "https://kahoot.it/solo?quizId=fb18a54c-e809-4eba-aa49-297968516a0e",
    level: "A1",
  },
  {
    id: "pbskids",
    title: "Clothes",
    description: "Learn about different types of clothing with interactive game.",
    url: "https://kahoot.it/solo?quizId=c901a0ef-4f3d-4511-9782-ae35f07ab55c",
    level: "A1",
  },
  {
    id: "eslgamesplus",
    title: "Animals",
    description: "Discover various animals in English through an engaging game.",
    url: "https://kahoot.it/solo?quizId=5a9ae35a-e616-4e76-b88a-a156b7d2a441",
    level: "A2",
  },
  {
    id: "english-games",
    title: "Vegetables",
    description: "Learn the names of vegetables in English with a fun game.",
    url: "https://kahoot.it/solo?quizId=4e8e3f50-2a9a-43c7-8cfb-a4ba8d041ba8",
    level: "A2",
  },
  {
    id: "english-games-2",
    title: "Professions",
    description: "Explore different professions in English through an interactive game.",
    url: "https://kahoot.it/solo?quizId=a1d77674-d54e-4a9f-99ff-b0b682c16191",
    level: "A2",
  },
  {
    id: "english-games-3",
    title: "Parts of the Body",
    description: "Learn the names of body parts in English with a fun and interactive game.",
    url: "https://kahoot.it/solo?quizId=0c89c242-71af-4138-b649-de7e377d5a87",
    level: "A2",
  },
  {
    id: "english-games-4",
    title: "Transportation",
    description: "Discover different modes of transportation in English through an engaging game.",
    url: "https://kahoot.it/solo?quizId=89c39fcc-ba28-4e4f-aa68-5ae8de18165b",
    level: "A2",
  },
];

export function getStaticGamesCatalog(): GameItem[] {
  return GAMES;
}
