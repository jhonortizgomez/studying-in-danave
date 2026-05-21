import type { StoryContent } from "@/features/project-story/domain/story-content";

const STORY_CONTENT: StoryContent = {
  title: "Why we made this project",
  motivation: [
    "DANAVE helps children learn with care and love.",
    "Many kids need easy English resources in one safe place.",
    "This website helps children find useful videos and games faster.",
  ],
  educationalPurposeNote:
    "This website is for educational purposes and supports guided learning.",
};

export function getStaticStoryContent(): StoryContent {
  return STORY_CONTENT;
}
