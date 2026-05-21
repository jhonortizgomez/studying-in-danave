import type { VideoItem } from "@/features/video-discovery/domain/video-item";

const VIDEO_CATALOG: VideoItem[] = [
  {
    id: "alphabet-song",
    title: "Alphabet Song for Kids",
    description: "Learn ABC letters with a happy song.",
    youtubeUrl: "https://www.youtube.com/watch?v=75p-N9YKqNo",
    thumbnailUrl: "https://img.youtube.com/vi/75p-N9YKqNo/hqdefault.jpg",
    level: "A1",
    tags: ["letters", "song", "alphabet"],
  },
  {
    id: "numbers-1-20",
    title: "Numbers 1 to 20",
    description: "Count in English with easy examples.",
    youtubeUrl: "https://www.youtube.com/watch?v=D0Ajq682yrA",
    thumbnailUrl: "https://img.youtube.com/vi/D0Ajq682yrA/hqdefault.jpg",
    level: "A1",
    tags: ["numbers", "counting"],
  },
  {
    id: "colors-for-kids",
    title: "Colors in English",
    description: "Learn color words with fun objects.",
    youtubeUrl: "https://www.youtube.com/watch?v=SLZcWGQQsmg",
    thumbnailUrl: "https://img.youtube.com/vi/SLZcWGQQsmg/hqdefault.jpg",
    level: "A1",
    tags: ["colors", "vocabulary"],
  },
  {
    id: "days-of-week",
    title: "Days of the Week Song",
    description: "Practice Monday to Sunday with rhythm.",
    youtubeUrl: "https://www.youtube.com/watch?v=36n93jvjkDs",
    thumbnailUrl: "https://img.youtube.com/vi/36n93jvjkDs/hqdefault.jpg",
    level: "A2",
    tags: ["days", "time", "song"],
  },
  {
    id: "simple-questions",
    title: "Easy Questions in English",
    description: "Ask and answer simple questions.",
    youtubeUrl: "https://www.youtube.com/watch?v=tA0JfA5e7vQ",
    thumbnailUrl: "https://img.youtube.com/vi/tA0JfA5e7vQ/hqdefault.jpg",
    level: "A2",
    tags: ["questions", "speaking"],
  },
  {
    id: "animals-for-kids",
    title: "Animals and Sounds",
    description: "Say animal names and sounds in English.",
    youtubeUrl: "https://www.youtube.com/watch?v=rPe4yziWiOg",
    thumbnailUrl: "https://img.youtube.com/vi/rPe4yziWiOg/hqdefault.jpg",
    level: "A1",
    tags: ["animals", "vocabulary"],
  },
];

export function getStaticVideoCatalog(): VideoItem[] {
  return VIDEO_CATALOG;
}
