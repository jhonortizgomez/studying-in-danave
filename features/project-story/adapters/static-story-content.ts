import type { StoryContent } from "@/features/project-story/domain/story-content";

const STORY_CONTENT: StoryContent = {
  title: "Why we made this project (English sounds to understanding)",
  motivation: [
    "The purpose of this proposal is to strengthen basic English skills, especially listening comprehension and phonemic awareness, as these are essential for language development. One of the main barriers for students is the inability to recognize sounds, which prevents them from understanding basic instructions or reading simple words. A contributing factor to this problem is limited exposure to the language. Therefore, this project seeks to improve students' ability to identify sounds, recognize simple vocabulary, and understand basic spoken English through meaningful activities.The students at the DANAVE Foundation come from vulnerable social backgrounds, where they experience many deficiencies in their personal and school environments, in addition to limited exposure to the language. These children attend public schools, which generally use traditional methodologies and have few hours of instruction per week. Therefore, it is important that they learn about and benefit from more engaging methodologies where they do not feel pressured to meet a grade but rather that participation is voluntary, tailored to their level and pace.The primary objective is to enable students to recognize some basic words through auditory comprehension and phonemic awareness using interactive and didactic strategies. To achieve this, activities such as repetition exercises, sound-image association, guided listening, word formation games, and simple reading tasks will be implemented.",

  ],
  educationalPurposeNote:
    "This website is for educational purposes and supports guided learning.",
};

export function getStaticStoryContent(): StoryContent {
  return STORY_CONTENT;
}
