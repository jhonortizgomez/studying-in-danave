import { Gamepad2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { GameItem } from "@/features/english-games/domain/game-item";

type Props = {
  games: GameItem[];
};

export function GamesSection({ games }: Props) {
  return (
    <section aria-labelledby="games-title">
      <Card className="border border-primary/20 bg-white/95">
        <CardHeader>
          <CardTitle id="games-title" className="flex items-center gap-2 text-xl">
            <Gamepad2 className="size-5 text-primary" />
            English games for kids
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          {games.map((game) => (
            <a
              key={game.id}
              href={game.url}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-3xl border border-border bg-background p-4 transition hover:border-primary/40"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold">{game.title}</h3>
                <Badge variant="secondary">{game.level}</Badge>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{game.description}</p>
            </a>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
