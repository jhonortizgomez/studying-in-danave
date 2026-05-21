import { getStaticStoryContent } from "@/features/project-story/adapters/static-story-content";
import type { StoryContent } from "@/features/project-story/domain/story-content";
import { toReadableList } from "@/features/project-story/helpers/to-readable-list";

export function getStoryContent(): StoryContent {
  const content = getStaticStoryContent();

  return {
    ...content,
    motivation: toReadableList(content.motivation),
  };
}
