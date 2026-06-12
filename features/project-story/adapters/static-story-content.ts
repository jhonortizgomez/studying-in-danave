import type { StoryContent } from "@/features/project-story/domain/story-content";

const STORY_CONTENT: StoryContent = {
  title: "Why we made this project (English sounds to understanding)",
  motivation: [
    "DANAVE helps students develop basic English skills through listening, phonemic awareness, and interactive learning activities. By using engaging and learner-centered strategies, students build vocabulary, improve comprehension, and gain confidence in understanding and using English.",
  ],
  educationalPurposeNote:
    "This website is for educational purposes and supports guided learning.",
};

export function getStaticStoryContent(): StoryContent {
  return STORY_CONTENT;
}
