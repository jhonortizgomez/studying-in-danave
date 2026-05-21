export function toReadableList(items: string[]): string[] {
  return items.map((text) => text.trim()).filter(Boolean);
}
