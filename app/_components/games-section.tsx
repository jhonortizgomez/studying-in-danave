import { Gamepad2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { GameItem } from "@/features/english-games/domain/game-item";

type Props = {
  games: GameItem[];
};

export function GamesSection({ games }: Props) {
  return (
    <section aria-labelledby="games-title" className="space-y-4">
        <Card className="border-0 bg-linear-to-br from-white/80 to-accent/5 backdrop-blur-sm">
        <CardHeader>
          <CardTitle id="games-title" className="flex items-center gap-3 text-2xl bg-linear-to-r from-accent via-primary to-purple bg-clip-text text-transparent">
            <Gamepad2 className="size-7 text-accent animate-bounce-light shrink-0" />
            English Games for Kids
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 auto-rows-max">
          {games.map((game) => (
            <a
              key={game.id}
              href={game.url}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-2xl border border-primary/15 bg-white/90 dark:bg-slate-900/70 p-5 transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:scale-105 hover:-translate-y-2 group"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-bold text-foreground text-sm flex-1 group-hover:text-accent transition-colors">{game.title}</h3>
                <Badge variant={game.level === "A1" ? "level_a1" : "level_a2"} className="shrink-0">{game.level}</Badge>
              </div>
              <p className="text-xs text-muted-foreground">{game.description}</p>
            </a>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
