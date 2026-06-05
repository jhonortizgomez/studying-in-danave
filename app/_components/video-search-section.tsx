import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { VideoItem } from "@/features/video-discovery/domain/video-item";

import { VideoSearchForm } from "./video-search-form";

type Props = {
  query: string;
  level: string;
  topic: string;
  videos: VideoItem[];
};

export function VideoSearchSection({ query, level, topic, videos }: Props) {
  return (
    <section className="grid gap-6" aria-labelledby="video-search-title">
      <Card className="border-0 bg-linear-to-br from-white/80 to-primary/5 backdrop-blur-sm">
        <CardHeader>
          <CardTitle
            id="video-search-title"
            className="text-2xl bg-linear-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            🎬 Search Videos
          </CardTitle>
          <CardDescription className="text-foreground/70 font-medium">
            Type one word like colors, animals, or numbers.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <VideoSearchForm query={query} level={level} topic={topic} />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 auto-rows-max">
            {videos.map((video) => (
              <a
                key={video.id}
                href={video.youtubeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group rounded-2xl border border-primary/15 bg-white/90 dark:bg-slate-900/70 p-0 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-105 hover:-translate-y-2"
              >
                <Image
                  src={video.thumbnailUrl}
                  alt={video.title}
                  width={480}
                  height={270}
                  className="h-40 w-full object-cover"
                />
                <div className="p-3 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground line-clamp-2 flex-1">
                      {video.title}
                    </h3>
                    <Badge
                      variant={video.level === "A1" ? "level_a1" : "level_a2"}
                      className="shrink-0"
                    >
                      {video.level}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {video.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-2">
                    {video.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-semibold mt-4">Reference:</p>
                    <p className="text-xs text-muted-foreground italic">
                      {video.reference}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          {videos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg font-semibold text-primary">
                🔍 No videos found
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Try searching with another easy word
              </p>
            </div>
          ) : null}
        </CardContent>
      </Card>
    </section>
  );
}
