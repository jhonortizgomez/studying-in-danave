import { AnimatedSection } from "@/app/_components/animated-section";
import { GamesSection } from "@/app/_components/games-section";
import { HeroBanner } from "@/app/_components/hero-banner";
import { StorySection } from "@/app/_components/story-section";
import { VideoSearchSection } from "@/app/_components/video-search-section";
import { listGames } from "@/features/english-games/use-cases/list-games";
import { getStoryContent } from "@/features/project-story/use-cases/get-story-content";
import type { VideoFilters } from "@/features/video-discovery/domain/video-filters";
import { searchVideos } from "@/features/video-discovery/use-cases/search-videos";

type HomeProps = {
  searchParams: Promise<{
    q?: string | string[];
    level?: string | string[];
    topic?: string | string[];
  }>;
};

function getQueryValue(value?: string | string[]): string {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const query = getQueryValue(params.q);
  const level = getQueryValue(params.level);
  const topic = getQueryValue(params.topic);
  const filters: VideoFilters = {
    level: level === "A1" || level === "A2" ? level : undefined,
    topic: topic && topic !== "all" ? topic : undefined,
  };
  const videos = await searchVideos(query, filters);
  const games = listGames();
  const story = getStoryContent();

  return (
    <main className="danave-bg relative min-h-screen overflow-hidden px-4 py-10 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <AnimatedSection>
          <HeroBanner />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <VideoSearchSection query={query} level={level} topic={topic} videos={videos} />
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <StorySection story={story} />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <GamesSection games={games} />
        </AnimatedSection>
      </div>
    </main>
  );
}
