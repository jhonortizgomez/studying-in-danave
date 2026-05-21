import { GamesSection } from "@/app/_components/games-section";
import { HeroBanner } from "@/app/_components/hero-banner";
import { StorySection } from "@/app/_components/story-section";
import { VideoSearchSection } from "@/app/_components/video-search-section";
import { listGames } from "@/features/english-games/use-cases/list-games";
import { getStoryContent } from "@/features/project-story/use-cases/get-story-content";
import { searchVideos } from "@/features/video-discovery/use-cases/search-videos";

type HomeProps = {
  searchParams: Promise<{ q?: string | string[] }>;
};

function getQueryValue(value?: string | string[]): string {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const query = getQueryValue(params.q);
  const videos = await searchVideos(query);
  const games = listGames();
  const story = getStoryContent();

  return (
    <main className="danave-bg relative min-h-screen overflow-hidden px-4 py-10 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <HeroBanner />
        <VideoSearchSection query={query} videos={videos} />
        <StorySection story={story} />
        <GamesSection games={games} />
      </div>
    </main>
  );
}
