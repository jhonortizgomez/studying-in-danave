import { Heart } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { StoryContent } from "@/features/project-story/domain/story-content";

type Props = {
  story: StoryContent;
};

export function StorySection({ story }: Props) {
  return (
    <section aria-labelledby="story-title">
      <Card className="border border-yellow-400/30 bg-white/95">
        <CardHeader>
          <CardTitle id="story-title" className="flex items-center gap-2 text-xl">
            <Heart className="size-5 text-yellow-500" />
            {story.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          {story.motivation.map((line) => (
            <p key={line} className="text-sm text-muted-foreground md:text-base">
              {line}
            </p>
          ))}
          <Separator className="my-1 bg-primary/20" />
          <p className="text-sm font-semibold text-primary">{story.educationalPurposeNote}</p>
        </CardContent>
      </Card>
    </section>
  );
}
