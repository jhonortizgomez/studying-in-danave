import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function HeroBanner() {
  return (
    <Card className="relative overflow-hidden border border-primary/20 bg-white/90">
      <div className="danave-orb danave-orb-left" aria-hidden />
      <div className="danave-orb danave-orb-right" aria-hidden />
      <CardContent className="relative flex flex-col gap-4 py-2">
        <Badge className="w-fit bg-primary px-3 py-1 text-sm">Welcome friends</Badge>
        <h1 className="text-3xl font-bold text-foreground md:text-5xl">
          studying in DANAVE
        </h1>
        <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
          Find easy English videos and games. Learn new words every day with joy.
        </p>
        <p className="text-sm font-medium text-primary">
          This website is for educational purposes.
        </p>
      </CardContent>
    </Card>
  );
}
