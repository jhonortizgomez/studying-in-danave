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
  console.log('items in catalog', videos.length);
  const games = listGames();
  const story = getStoryContent();

  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-b from-primary/5 via-background to-secondary/5">
      <div className="danave-bg absolute inset-0 pointer-events-none opacity-60" aria-hidden />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 md:px-10 md:py-16 relative z-10">
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
      <footer className="relative z-10 mt-2 border-t border-primary/20 bg-white/75 px-4 py-8 backdrop-blur-sm md:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 rounded-2xl border border-primary/15 bg-linear-to-r from-primary/8 via-white to-secondary/12 px-5 py-5 text-center shadow-sm">
          <p className="text-base font-semibold text-foreground">Study in DANAVE</p>
          <p className="max-w-3xl text-sm leading-relaxed text-foreground/80 md:text-base">
            This project was made by Sara Segura.
          </p>
          <p className="rounded-full border border-primary/20 bg-white/85 px-4 py-1 text-xs font-semibold tracking-wide text-primary md:text-sm">
            Educational project. Non-profit purpose.
          </p>
        </div>
      </footer>
    </main>
  );
}
