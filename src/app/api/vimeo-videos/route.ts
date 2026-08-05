import { NextResponse } from "next/server";

// Fetches Rory's Vimeo library server-side using a private access token
// (VIMEO_ACCESS_TOKEN in .env.local / hosting provider env vars — never in front-end code)
// and returns normalised, tag-categorised video data as JSON.

const CATEGORY_RULES: Record<string, string[]> = {
  Featured: ["featured"],
  Showreels: ["showreel", "showreels", "show reel", "reel"],
  Corporate: ["corporate", "corporate video"],
  Commercials: ["commercial", "commercials", "advert", "advertising"],
  "Social Content": ["social", "social media", "social content"],
  Explainers: ["explainer", "explainers", "explainer video"],
  Medical: ["medical", "healthcare", "health", "pharma"],
  Technology: ["technology", "tech", "software", "saas"],
  Broadcast: ["broadcast", "television", "tv"],
  Animation: ["animation", "2d animation", "3d animation"],
  "Motion Graphics": ["motion graphics", "motion design", "mograph"],
  "Real Estate": ["real estate", "property", "architecture"],
  Events: ["event", "events", "conference", "activation"],
};

function mapTagsToCategories(tags: string[]): string[] {
  const normalized = tags.map((t) => t.trim().toLowerCase());
  const matched: string[] = [];
  for (const [category, aliases] of Object.entries(CATEGORY_RULES)) {
    // The category's own name always counts, so a Vimeo tag that exactly
    // matches a category (e.g. "Explainers") is never dropped for lack of
    // an alias covering that exact singular/plural form.
    const allAliases = [category.toLowerCase(), ...aliases];
    if (allAliases.some((alias) => normalized.includes(alias))) matched.push(category);
  }
  return matched;
}

type VimeoVideo = {
  uri: string;
  name?: string;
  description?: string;
  duration?: number;
  tags?: { name: string }[];
  pictures?: { sizes?: { link: string }[] };
  link?: string;
};

export async function GET() {
  const token = process.env.VIMEO_ACCESS_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "VIMEO_ACCESS_TOKEN is not configured on the server." },
      { status: 500 }
    );
  }

  try {
    const videos: VimeoVideo[] = [];
    let nextUrl: string | null =
      "https://api.vimeo.com/me/videos?per_page=100&fields=uri,name,description,duration,tags.name,pictures.sizes,link,release_time";

    while (nextUrl) {
      const resp: Response = await fetch(nextUrl, {
        headers: {
          Authorization: `bearer ${token}`,
          Accept: "application/vnd.vimeo.*+json;version=3.4",
        },
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
    const items = [];
    for (const v of videos) {
      const id = v.uri.split("/").pop() as string;
      if (seen.has(id)) continue;
      seen.add(id);
      const tags = (v.tags || []).map((t) => t.name);
      const categories = mapTagsToCategories(tags);
      if (categories.length === 0) continue; // skip untagged/unmapped videos
      const pictures = v.pictures?.sizes || [];
      const bestThumb = pictures.length ? pictures[pictures.length - 1].link : null;
      items.push({
        id,
        title: v.name || "Untitled",
        desc: v.description || "",
        thumbUrl: bestThumb || `https://vumbnail.com/${id}.jpg`,
        embedUrl: `https://player.vimeo.com/video/${id}`,
        link: v.link,
        duration: v.duration ?? null,
        tags,
        categories,
      });
    }

    return NextResponse.json(
      { items, updatedAt: new Date().toISOString() },
      { headers: { "Cache-Control": "s-maxage=900, stale-while-revalidate=3600" } }
    );
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to fetch Vimeo library." },
      { status: 502 }
    );
  }
}
