// Rory's Vimeo descriptions often end with a labelled "SEO:" (or "SEO TAGS:")
// block — a plain list of keyword phrases meant for Vimeo's own search, not
// for visitors. Showing that list as page copy (even visually hidden) reads
// as keyword stuffing to Google. This splits it out so the real keywords
// still get used properly — in <meta keywords> and structured data — while
// the visible page only ever shows the human-written part of the description.

export function splitDescriptionAndKeywords(desc: string): { visible: string; keywords: string[] } {
  const marker = /\n[ \t]*SEO(?:[ \t]*TAGS)?[ \t]*:[ \t]*\n?/i;
  const match = desc.match(marker);
  if (!match || match.index === undefined) {
    return { visible: desc.trim(), keywords: [] };
  }
  const visible = desc.slice(0, match.index).trim();
  const tail = desc.slice(match.index + match[0].length);
  const keywords = tail
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
  return { visible, keywords };
}
