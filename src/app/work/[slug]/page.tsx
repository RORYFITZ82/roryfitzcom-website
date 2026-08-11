import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, X } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProjectVideoEmbed } from "@/components/ProjectVideoEmbed";
import { getPortfolioItemBySlug, getPortfolioItems, getRelatedPortfolioItems } from "@/lib/portfolio";
import { splitDescriptionAndKeywords } from "@/lib/description";

const SITE_URL = "https://www.roryfitz.com";

export async function generateStaticParams() {
  const items = await getPortfolioItems();
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = await getPortfolioItemBySlug(params.slug);
  if (!item) return {};

  const { visible, keywords } = splitDescriptionAndKeywords(item.desc || "");
  const title = item.client ? `${item.title} — ${item.client}` : item.title;
  const description = visible
    ? visible.slice(0, 155)
    : `${item.title} — a ${item.categories.join(", ").toLowerCase()} project by Rory Fitzgerald, freelance Motion Graphics Designer and Video Producer in Dublin, Ireland.`;

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: { canonical: `${SITE_URL}/work/${item.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/work/${item.slug}`,
      type: "video.other",
      images: item.thumbUrl ? [{ url: item.thumbUrl, width: 1280, height: 720, alt: item.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: item.thumbUrl ? [item.thumbUrl] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const item = await getPortfolioItemBySlug(params.slug);
  if (!item) notFound();

  const related = await getRelatedPortfolioItems(item, 3);
  const projectUrl = `${SITE_URL}/work/${item.slug}`;
  const { visible: visibleDesc, keywords } = splitDescriptionAndKeywords(item.desc || "");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoObject",
        name: item.title,
        description: visibleDesc || item.title,
        thumbnailUrl: item.thumbUrl ? [item.thumbUrl] : undefined,
        embedUrl: item.embedUrl,
        url: projectUrl,
        genre: item.categories.join(", "),
        keywords: keywords.length > 0 ? keywords.join(", ") : undefined,
        creator: { "@type": "Person", name: "Rory Fitzgerald" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Featured Work", item: `${SITE_URL}/#work` },
          { "@type": "ListItem", position: 3, name: item.title, item: projectUrl },
        ],
      },
    ],
  };

  return (
    <div className="relative overflow-x-hidden bg-rf-off-white text-rf-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Nav />

      <Link
        href="/#work"
        aria-label="Close and return to featured work"
        className="fixed right-6 top-4 z-[1000] flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.06] text-white backdrop-blur-md transition-all duration-base ease-apple hover:scale-105 hover:bg-white/[0.14] md:top-7"
      >
        <X size={20} />
      </Link>

      <main className="bg-gradient-to-br from-[#0B0916] to-[#2B2449] px-6 pb-24 pt-32 md:pt-40">
        <div className="mx-auto max-w-[900px]">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-white/40">
            <Link href="/" className="transition-colors duration-base ease-apple hover:text-rf-pink">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/#work" className="transition-colors duration-base ease-apple hover:text-rf-pink">
              Featured Work
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/60">{item.title}</span>
          </nav>

          <h1 className="mb-2 text-[clamp(28px,4.5vw,44px)] font-black leading-tight tracking-tight text-white">
            {item.title}
          </h1>
          {item.client && <p className="mb-8 text-base font-semibold text-rf-pink">{item.client}</p>}

          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-black">
            <ProjectVideoEmbed
              src={`${item.embedUrl}?autoplay=1&muted=1&playsinline=1`}
              title={item.title}
            />
          </div>

          {visibleDesc && (
            <p className="mb-8 whitespace-pre-line text-[15px] leading-loose text-white/70">{visibleDesc}</p>
          )}

          <div className="flex flex-wrap items-center gap-6 border-t border-white/10 pt-6">
            {item.role && (
              <div>
                <div className="mb-1 text-[11px] font-bold uppercase tracking-wide text-white/40">Role</div>
                <div className="text-sm text-white">{item.role}</div>
              </div>
            )}
            {item.categories.length > 0 && (
              <div>
                <div className="mb-1.5 text-[11px] font-bold uppercase tracking-wide text-white/40">Category</div>
                <div className="flex flex-wrap gap-1.5">
                  {item.categories.map((cat) => (
                    <Link
                      key={cat}
                      href={`/?category=${encodeURIComponent(cat)}#work`}
                      className="rounded-pill bg-rf-pink/10 px-2.5 py-1 text-[11px] font-bold tracking-wide text-rf-pink transition-colors duration-base ease-apple hover:bg-rf-pink/20"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block rounded-pill bg-rf-pink px-8 py-4 text-[15px] font-bold text-white shadow-glow-pink transition-all duration-slow ease-apple hover:scale-[1.03] hover:bg-rf-pink-deep active:scale-[0.98]"
            >
              Start a project like this
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mx-auto mt-24 max-w-[1280px]">
            <h2 className="mb-6 text-center text-xl font-extrabold uppercase tracking-tight text-white">
              Related work
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/work/${r.slug}`}
                  className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] transition-all duration-slow ease-apple hover:-translate-y-1 hover:border-white/[0.16]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={r.thumbUrl}
                      alt={r.title}
                      loading="lazy"
                      className="block h-full w-full object-cover transition-transform duration-slow ease-apple group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-white">{r.title}</h3>
                    {r.client && <p className="text-xs text-white/55">{r.client}</p>}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
