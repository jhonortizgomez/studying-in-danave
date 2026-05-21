export function buildEducationalQuery(rawQuery: string, topic?: string): string {
  const cleaned = rawQuery.trim();
  const cleanTopic = topic?.trim();
  const base = "english lesson for kids";

  if (!cleaned && !cleanTopic) return base;
  if (!cleaned) return `${cleanTopic} ${base}`;
  if (!cleanTopic) return `${cleaned} ${base}`;

  return `${cleaned} ${cleanTopic} ${base}`;
}
