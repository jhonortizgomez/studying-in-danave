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
  console.log("items in catalog", videos.length);
  const games = listGames();
  const story = getStoryContent();

  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-b from-primary/5 via-background to-secondary/5">
      <div
        className="danave-bg absolute inset-0 pointer-events-none opacity-60"
        aria-hidden
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 md:px-10 md:py-16 relative z-10">
        <AnimatedSection>
          <HeroBanner />
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <section className="overflow-hidden rounded-3xl border border-primary/20 bg-white/80 backdrop-blur-sm shadow-sm">
            <div className="grid gap-8 p-6 md:grid-cols-[2fr_1fr] md:p-10">
              {/* Contenido principal */}
              <div className="space-y-5">
                <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  About DANAVE
                </span>

                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    Learn English through videos, stories and games
                  </h2>

                  <div className="h-1 w-20 rounded-full bg-primary" />
                </div>

                <div className="max-w-3xl space-y-4 text-base leading-relaxed text-foreground/80">
                  <p>
                    Welcome to DANAVE, a platform designed to make learning
                    English easy, fun, and engaging. Here, you can explore
                    simple English videos and interactive games that help you
                    develop language skills in an enjoyable way. By learning new
                    words every day through meaningful activities, you will
                    build your vocabulary, improve comprehension, and gain
                    confidence in using English. DANAVE provides a motivating
                    environment where learning becomes a joyful and rewarding
                    experience.
                  </p>
                </div>
              </div>

              {/* Panel lateral */}
              <div className="flex flex-col justify-center rounded-2xl border border-primary/15 bg-linear-to-br from-primary/5 via-white to-secondary/10 p-6">
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  Why DANAVE?
                </h3>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                    <span className="text-sm text-foreground/80">
                      Beginner-friendly content
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                    <span className="text-sm text-foreground/80">
                      Interactive learning experiences
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                    <span className="text-sm text-foreground/80">
                      Daily vocabulary practice
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                    <span className="text-sm text-foreground/80">
                      Improve confidence in English
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </AnimatedSection>
        <AnimatedSection delay={0.08}>
          <section className="overflow-hidden rounded-3xl border border-primary/20 bg-white/80 backdrop-blur-sm shadow-sm">
            <div className="p-6 md:p-10">
              <div className="mb-10 text-center">
                <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  What you'll find
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Resources designed to support your English learning journey
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-foreground/80">
                  DANAVE provides engaging tools and activities that help
                  learners practice English through videos, games, exercises,
                  and independent learning resources.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {/* Videos */}
                <article className="rounded-2xl border border-primary/15 bg-linear-to-br from-primary/5 via-white to-primary/10 p-6 transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                    🎥
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    Video Search
                  </h3>

                  <p className="text-sm leading-relaxed text-foreground/80">
                    Explore a video search section with content organized by
                    proficiency levels
                    <strong>(A1–A2)</strong>, helping you learn at your own
                    pace.
                  </p>
                </article>

                {/* Games */}
                <article className="rounded-2xl border border-primary/15 bg-linear-to-br from-secondary/5 via-white to-secondary/10 p-6 transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-2xl">
                    🎮
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    Interactive Games
                  </h3>

                  <p className="text-sm leading-relaxed text-foreground/80">
                    Practice essential topics such as vocabulary, colors,
                    clothes, animals, vegetables, professions, parts of the body
                    and transportation.
                  </p>
                </article>

                {/* Exercises */}
                <article className="rounded-2xl border border-primary/15 bg-linear-to-br from-primary/5 via-white to-secondary/10 p-6 transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                    📝
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    Exercises & Worksheets
                  </h3>

                  <p className="text-sm leading-relaxed text-foreground/80">
                    Reinforce your learning with online exercises and
                    downloadable worksheets that can be completed at home for
                    additional practice and independent study.
                  </p>
                </article>
              </div>
            </div>
          </section>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <VideoSearchSection
            query={query}
            level={level}
            topic={topic}
            videos={videos}
          />
        </AnimatedSection>
        <AnimatedSection delay={0.18}>
          <section className="rounded-3xl border border-primary/20 bg-white/80 p-6 shadow-sm backdrop-blur-sm md:p-8">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Learning Through Play
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Practice English with Interactive Games
              </h2>

              <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
                Learn and practice English through fun and interactive
                activities. Explore games focused on everyday topics such as{" "}
                <span className="font-medium text-foreground">
                  colors, numbers, animals, family, school objects, food, and
                  daily routines
                </span>
                . These activities help develop vocabulary, listening, reading,
                and speaking skills while making the learning experience
                enjoyable and engaging.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {[
                  "Vocabulary",
                  "Reading",
                  "Colors",
                  "Vegetables",
                  "Clothes",
                  "Professions",
                  "Body Parts",
                  "Transportation",
                  "Animals",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-sm font-medium text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <GamesSection games={games} />
        </AnimatedSection>
        <AnimatedSection delay={0.25}>
          <section className="rounded-3xl border border-primary/20 bg-white/80 p-6 shadow-sm backdrop-blur-sm md:p-10">
            <div className="mb-8 text-center">
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Worksheets
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Download and Practice at Home
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-foreground/80">
                Reinforce your English learning with printable worksheets
                designed for independent practice. Complete the activities at
                your own pace and strengthen vocabulary, reading, writing, and
                comprehension skills.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Body Parts Worksheet",
                  href: "https://docs.google.com/document/d/1oCc1YWO4gs5159vi_pG5-Fki8CYrQK8WYXX3Cxvl7pA/edit?usp=sharing",
                },
                {
                  title: "Colors Worksheet",
                  href: "https://docs.google.com/document/d/1jB0I11ogWf34dXFOiO6tgzGi86fBwEJWzfUU3PFr4E8/edit?usp=sharing",
                },
                {
                  title: "Vegetables Worksheet",
                  href: "https://docs.google.com/document/d/1zUD-rUuEzvrnp9hztpbcGC-gqNtB8xmTT_MMqZYIm-k/edit?usp=sharing",
                },
                {
                  title: "Professions Worksheet",
                  href: "https://docs.google.com/document/d/1aa3V_1hP49h515G00yS70MaYJ5Vg3gQs15EdO2Y7F2U/edit?usp=sharing",
                },
                {
                  title: "Animals Worksheet",
                  href: "https://docs.google.com/document/d/1kQCydi0NjsyacQY8SD28HyQdao6TO0v3FmI3WnBk958/edit?usp=sharing",
                },
              ].map((worksheet) => (
                <a
                  key={worksheet.title}
                  href={worksheet.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-primary/15 bg-linear-to-br from-primary/5 via-white to-secondary/10 p-5 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                    📄
                  </div>

                  <h3 className="text-lg font-semibold text-foreground">
                    {worksheet.title}
                  </h3>

                  <p className="mt-2 text-sm text-foreground/70">
                    Download and complete this worksheet to practice English
                    skills.
                  </p>

                  <div className="mt-4 flex items-center text-sm font-medium text-primary">
                    Open worksheet →
                  </div>
                </a>
              ))}
            </div>
          </section>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <StorySection story={story} />
        </AnimatedSection>
      </div>
      <footer className="relative z-10 mt-2 border-t border-primary/20 bg-white/75 px-4 py-8 backdrop-blur-sm md:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 rounded-2xl border border-primary/15 bg-linear-to-r from-primary/8 via-white to-secondary/12 px-5 py-5 text-center shadow-sm">
          <p className="text-base font-semibold text-foreground">
            Study in DANAVE
          </p>
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
