import { CATEGORIES } from "./content";

// Server-only: fetches Rory's full Vimeo library and categorises each video
// using its real Vimeo tags, filtered down to the site's fixed set of
// category tabs (CATEGORIES in content.ts). A video keeps every category
// tab whose name matches one of its own tags; tags outside that list (e.g.
// a client name) are preserved in `tags` but never become a filter tab.
// Shared by the client-facing /api/vimeo-videos route and the server-side
// SEO structured-data embed, so both read the exact same categorisation.

const ALLOWED_CATEGORIES = new Set(CATEGORIES.map((c) => c.toLowerCase()));
const CATEGORY_DISPLAY = new Map(CATEGORIES.map((c) => [c.toLowerCase(), c] as const));

export type VimeoLibraryItem = {
  id: string;
  title: string;
  desc: string;
  thumbUrl: string;
  embedUrl: string;
  link: string | null;
  duration: number | null;
  uploadDate: string | null;
  tags: string[];
  categories: string[];
};

type VimeoVideo = {
  uri: string;
  name?: string;
  description?: string;
  duration?: number;
  tags?: { name: string }[];
  pictures?: { sizes?: { link: string }[] };
  link?: string;
  release_time?: string;
  created_time?: string;
};

function categorize(tags: string[]): string[] {
  const matched = new Set<string>();
  for (const raw of tags) {
    const key = raw.trim().toLowerCase();
    if (ALLOWED_CATEGORIES.has(key)) matched.add(CATEGORY_DISPLAY.get(key)!);
  }
  // Render in the site's fixed tab order, not the order tags happen to be in on Vimeo.
  return CATEGORIES.filter((c) => matched.has(c));
}

export async function fetchVimeoLibrary(): Promise<VimeoLibraryItem[]> {
  const token = process.env.VIMEO_ACCESS_TOKEN;
  if (!token) throw new Error("VIMEO_ACCESS_TOKEN is not configured on the server.");

  const videos: VimeoVideo[] = [];
  let nextUrl: string | null =
    "https://api.vimeo.com/me/videos?per_page=100&fields=uri,name,description,duration,tags.name,pictures.sizes,link,release_time,created_time";

  while (nextUrl) {
    const resp: Response = await fetch(nextUrl, {
      headers: {
        Authorization: `bearer ${token}`,
        Accept: "application/vnd.vimeo.*+json;version=3.4",
      },
      next: { revalidate: 900 },
    });
    if (!resp.ok) {
      const text = await resp.text();
      throw new Error(`Vimeo API error ${resp.status}: ${text}`);
    }
    const data = await resp.json();
    videos.push(...((data.data as VimeoVideo[]) || []));
    nextUrl = data.paging?.next ? `https://api.vimeo.com${data.paging.next}` : null;
  }

  const seen = new Set<string>();
  const items: VimeoLibraryItem[] = [];
  for (const v of videos) {
    const id = v.uri.split("/").pop() as string;
    if (seen.has(id)) continue;
    seen.add(id);

    const rawTags = (v.tags || []).map((t) => t.name.trim()).filter(Boolean);
    const categories = categorize(rawTags);
    if (categories.length === 0) continue; // not filed under any of the site's category tabs

    const pictures = v.pictures?.sizes || [];
    const bestThumb = pictures.length ? pictures[pictures.length - 1].link : null;

    items.push({
      id,
      title: v.name || "Untitled",
      desc: v.description || "",
      thumbUrl: bestThumb || `https://vumbnail.com/${id}.jpg`,
      embedUrl: `https://player.vimeo.com/video/${id}`,
      link: v.link || null,
      duration: v.duration ?? null,
      uploadDate: v.release_time || v.created_time || null,
      tags: rawTags,
      categories,
    });
  }

  return items;
}
