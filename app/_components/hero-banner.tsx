import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function HeroBanner() {
  return (
    <Card className="relative overflow-hidden border-0 backdrop-blur-xl">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-learning-bg.svg')" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-linear-to-br from-primary/55 via-background/65 to-secondary/45" aria-hidden />
      <div className="danave-orb danave-orb-left" aria-hidden />
      <div className="danave-orb danave-orb-right" aria-hidden />
      <CardContent className="relative flex flex-col items-center gap-6 py-8 text-center md:py-12">
        <Badge variant="gradient_primary" className="w-fit">Welcome friends! 👋</Badge>
        <h1 className="bg-linear-to-r from-primary via-purple to-accent bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
          Studying in DANAVE
        </h1>
        <p className="max-w-3xl text-base font-medium leading-relaxed text-foreground/90 md:text-lg">
          Find easy English videos and games. Learn new words every day with joy.
        </p>
        <p className="w-fit rounded-full bg-primary/15 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-sm">
          This website is for educational purposes.
        </p>
      </CardContent>
    </Card>
  );
}
