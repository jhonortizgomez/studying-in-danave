export function buildEducationalQuery(rawQuery: string): string {
  const cleaned = rawQuery.trim();
  const base = "english lesson for kids";
  if (!cleaned) return base;
  return `${cleaned} ${base}`;
}
