import type { CATEGORIES } from "./content";

// Manual display order for videos within a category tab, keyed by the exact
// Vimeo video title. Rory sends back the order he wants per category; add
// an entry here for each category as it's confirmed. Categories with no
// entry keep whatever order the Vimeo API/static list returns. Titles not
// found in a video's category are simply ignored; videos in that category
// but missing from the list fall to the end, in their original order.
export const CATEGORY_ORDER: Partial<Record<(typeof CATEGORIES)[number], string[]>> = {
  Featured: [
    "Heineken - Unwasted Beer",
    "Guinness - Made Of More",
    "Aer Lingus - Our Sustainability Journey",
    "Clever Cards",
    "Nurse On Call App",
    "Cubic 3 - Ubiquitous Connectivity",
    "Fintua - Rise above the rest",
    "Dublin City Council",
    "Charleen and Ellie Go all in...",
    "Adherent",
    "Digital Playmaker",
  ],
};

export function sortByCategoryOrder<T extends { title: string }>(items: T[], category: string): T[] {
  const order = CATEGORY_ORDER[category as (typeof CATEGORIES)[number]];
  if (order) {
    const rank = new Map(order.map((title, i) => [title, i]));
    return [...items].sort((a, b) => {
      const ra = rank.has(a.title) ? rank.get(a.title)! : Number.MAX_SAFE_INTEGER;
      const rb = rank.has(b.title) ? rank.get(b.title)! : Number.MAX_SAFE_INTEGER;
      return ra - rb;
    });
  }
  // No explicit order set for this category — alphabetical by title (A–Z).
  return [...items].sort((a, b) => a.title.localeCompare(b.title));
}
