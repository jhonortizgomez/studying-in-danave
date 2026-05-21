import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section className="grid gap-4" aria-labelledby="video-search-title">
      <Card className="border border-primary/20 bg-white/95">
        <CardHeader>
          <CardTitle id="video-search-title">Search videos</CardTitle>
          <CardDescription>Type one word like colors, animals, or numbers.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <VideoSearchForm query={query} level={level} topic={topic} />
          <div className="grid gap-3 md:grid-cols-2">
            {videos.map((video) => (
              <a
                key={video.id}
                href={video.youtubeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group rounded-3xl border border-border bg-background p-3 transition hover:-translate-y-0.5 hover:border-primary/40"
              >
                <Image
                  src={video.thumbnailUrl}
                  alt={video.title}
                  width={480}
                  height={270}
                  className="mb-3 h-40 w-full rounded-2xl object-cover"
                />
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold">{video.title}</h3>
                  <Badge variant="outline">{video.level}</Badge>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{video.description}</p>
              </a>
            ))}
          </div>
          {videos.length === 0 ? (
            <p className="text-sm font-medium text-primary">No result. Try another easy word.</p>
          ) : null}
        </CardContent>
      </Card>
    </section>
  );
}
