// Pure utility, no imports — safe to use from both content.ts and vimeo.ts
// without creating a circular dependency.

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "") // strip accents
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// A handful of real titles repeat (e.g. two separate "Tullamore D.E.W."
// uploads) — when two items would slugify to the same string, disambiguate
// every instance of that collision with a short suffix from its Vimeo id,
// so every URL is unique and stable.
export function buildSlugMap<T extends { id: number; title: string }>(items: T[]): Map<number, string> {
  const counts = new Map<string, number>();
  for (const item of items) {
    const base = slugify(item.title);
    counts.set(base, (counts.get(base) ?? 0) + 1);
  }
  const map = new Map<number, string>();
  for (const item of items) {
    const base = slugify(item.title);
    const slug = (counts.get(base) ?? 0) > 1 ? `${base}-${String(item.id).slice(-4)}` : base;
    map.set(item.id, slug);
  }
  return map;
}
