import { Heart } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { StoryContent } from "@/features/project-story/domain/story-content";

type Props = {
  story: StoryContent;
};

export function StorySection({ story }: Props) {
  return (
    <section aria-labelledby="story-title" className="mx-auto w-full max-w-4xl space-y-4">
      <Card className="relative overflow-hidden border-0 bg-linear-to-br from-white/80 to-secondary/10 backdrop-blur-sm dark:to-slate-900/50">
        <div className="absolute inset-0 opacity-5 pattern-dots pointer-events-none" aria-hidden />
        <CardHeader className="items-center">
          <CardTitle id="story-title" className="relative z-10 flex items-center gap-3 text-center text-2xl">
            <Heart className="size-7 text-accent animate-pulse-glow shrink-0" />
            <span className="bg-linear-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">{story.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10 grid justify-items-center gap-4 text-center">
          {story.motivation.map((line) => (
            <p key={line} className="max-w-3xl text-sm font-medium leading-relaxed text-foreground/80 md:text-base">
              {line}
            </p>
          ))}
          <Separator className="my-4 w-full bg-linear-to-r from-primary via-accent to-secondary opacity-40" />
          <div className="bg-linear-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
            <p className="text-sm font-bold text-primary/90">{story.educationalPurposeNote}</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
