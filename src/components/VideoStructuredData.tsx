import { fetchVimeoLibrary } from "@/lib/vimeo";

// Server component: fetches the full Vimeo library at request time and
// embeds it as schema.org VideoObject JSON-LD, so search engines see each
// project's real Vimeo title, description, thumbnail, tags and duration in
// the page's initial HTML — not just what's rendered client-side.

function secondsToISO8601Duration(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.floor(totalSeconds % 60);
  return `PT${h ? `${h}H` : ""}${m ? `${m}M` : ""}${s}S`;
}

export async function VideoStructuredData() {
  let items;
  try {
    items = await fetchVimeoLibrary();
  } catch {
    return null; // SEO embed is best-effort — never break the page over it
  }
  if (items.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "VideoObject",
        name: item.title,
        description: item.desc || item.title,
        thumbnailUrl: [item.thumbUrl],
        embedUrl: item.embedUrl,
        ...(item.link ? { url: item.link } : {}),
        ...(item.uploadDate ? { uploadDate: item.uploadDate } : {}),
        ...(item.duration ? { duration: secondsToISO8601Duration(item.duration) } : {}),
        keywords: item.tags.join(", "),
        genre: item.categories.join(", "),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so a title/description containing "</script>" can't break out of the tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
