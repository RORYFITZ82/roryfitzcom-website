import { fetchVimeoLibrary } from "./vimeo";
import { PORTFOLIO_ITEMS, type PortfolioItem } from "./content";

// Server-only: the merged live-Vimeo + static (client/role) portfolio list,
// shared by the sitemap, the /work/[slug] project pages and anywhere else
// that needs the full list server-side. Work.tsx does its own equivalent
// merge client-side from the /api/vimeo-videos JSON — same shape, same
// fallback rule (static list wins only when the live fetch fails).

const STATIC_BY_ID = new Map(PORTFOLIO_ITEMS.map((item) => [item.id, item]));

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  try {
    const live = await fetchVimeoLibrary();
    if (live.length === 0) return PORTFOLIO_ITEMS;
    return live.map((v) => {
      const id = Number(v.id);
      const known = STATIC_BY_ID.get(id);
      return {
        id,
        slug: v.slug,
        title: v.title,
        client: known?.client ?? "",
        categories: v.categories,
        role: known?.role ?? "",
        desc: v.desc || known?.desc || "",
        thumbUrl: v.thumbUrl,
        embedUrl: v.embedUrl,
      };
    });
  } catch {
    return PORTFOLIO_ITEMS;
  }
}

export async function getPortfolioItemBySlug(slug: string): Promise<PortfolioItem | undefined> {
  const items = await getPortfolioItems();
  return items.find((item) => item.slug === slug);
}

export async function getRelatedPortfolioItems(item: PortfolioItem, limit = 3): Promise<PortfolioItem[]> {
  const items = await getPortfolioItems();
  const scored = items
    .filter((other) => other.slug !== item.slug)
    .map((other) => ({
      item: other,
      shared: other.categories.filter((c) => item.categories.includes(c)).length,
    }))
    .filter((entry) => entry.shared > 0)
    .sort((a, b) => b.shared - a.shared);
  return scored.slice(0, limit).map((entry) => entry.item);
}
