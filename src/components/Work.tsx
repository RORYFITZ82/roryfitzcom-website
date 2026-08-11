"use client";

import { Clapperboard, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { CATEGORIES, PORTFOLIO_ITEMS, type PortfolioItem } from "@/lib/content";
import { sortByCategoryOrder } from "@/lib/categoryOrder";

const PAGE_SIZE = 9;
const ROW_SPLIT = Math.ceil(CATEGORIES.length / 2);
const ROW_1 = CATEGORIES.slice(0, ROW_SPLIT);
const ROW_2 = CATEGORIES.slice(ROW_SPLIT);

type VimeoApiItem = {
  id: string;
  title: string;
  desc: string;
  thumbUrl: string;
  embedUrl: string;
  categories: string[];
};

const STATIC_BY_ID = new Map(PORTFOLIO_ITEMS.map((item) => [item.id, item]));

export function Work() {
  const [activeCategory, setActiveCategory] = useState<string>("Featured");
  const [page, setPage] = useState(0);
  const [activeProject, setActiveProject] = useState<PortfolioItem | null>(null);
  const [liveItems, setLiveItems] = useState<PortfolioItem[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/vimeo-videos")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("bad response"))))
      .then((data: { items?: VimeoApiItem[] }) => {
        if (cancelled || !Array.isArray(data.items) || data.items.length === 0) return;
        const mapped: PortfolioItem[] = data.items.map((v) => {
          const id = Number(v.id);
          const known = STATIC_BY_ID.get(id);
          return {
            id,
            title: v.title,
            client: known?.client ?? "",
            categories: v.categories,
            role: known?.role ?? "",
            desc: v.desc || known?.desc || "",
            thumbUrl: v.thumbUrl,
            embedUrl: v.embedUrl,
          };
        });
        setLiveItems(mapped);
      })
      .catch(() => {
        // Vimeo API unreachable — silently keep the static fallback list.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const sourceItems = liveItems ?? PORTFOLIO_ITEMS;

  const filtered = useMemo(() => {
    const matches = sourceItems.filter((item) => item.categories.includes(activeCategory));
    return sortByCategoryOrder(matches, activeCategory);
  }, [sourceItems, activeCategory]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const selectCategory = (cat: string) => {
    setActiveCategory(cat);
    setPage(0);
  };

  return (
    <section id="work" className="hidden bg-gradient-to-br from-[#0B0916] to-[#2B2449] px-6 py-24 md:block md:py-36">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mx-auto mb-10 max-w-[640px] text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rf-pink">
            <Clapperboard size={14} /> Selected work
          </div>
          <h2 className="mb-3 text-[clamp(32px,4vw,48px)] font-black tracking-tight text-white">Featured work</h2>
          <p className="text-base text-white/60">Browse by sector, format or creative discipline to see relevant experience.</p>
        </Reveal>

        <div className="rf-cat-rows mb-12 flex flex-col gap-3">
          {[ROW_1, ROW_2].map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex flex-nowrap justify-start gap-2 overflow-x-auto md:flex-wrap md:justify-center md:overflow-visible"
            >
              {row.map((cat) => (
                <button
                  key={cat}
                  onClick={() => selectCategory(cat)}
                  className={`flex-shrink-0 whitespace-nowrap rounded-pill px-4 py-2 text-[12.5px] font-bold transition-all duration-base ease-apple ${
                    activeCategory === cat
                      ? "border border-rf-pink/60 bg-rf-pink text-white shadow-[0_4px_16px_rgba(231,58,104,0.35)]"
                      : "border border-white/[0.10] bg-white/[0.04] text-white/70 hover:border-white/25 hover:bg-white/[0.10] hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {pageCount > 1 && (
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              aria-label="Previous page"
              disabled={page === 0}
              className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.04] text-white backdrop-blur-sm transition-all duration-base ease-apple hover:scale-105 hover:bg-white/[0.12] disabled:opacity-30 disabled:hover:scale-100 ${
                page === 0 ? "" : "rf-arrow-pulse"
              }`}
            >
              <ChevronLeft size={20} />
            </button>
          )}
          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paged.map((item) => (
              <ProjectCard key={item.id} item={item} onOpen={() => setActiveProject(item)} />
            ))}
          </div>
          {pageCount > 1 && (
            <button
              onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
              aria-label="Next page"
              disabled={page >= pageCount - 1}
              className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.04] text-white backdrop-blur-sm transition-all duration-base ease-apple hover:scale-105 hover:bg-white/[0.12] disabled:opacity-30 disabled:hover:scale-100 ${
                page >= pageCount - 1 ? "" : "rf-arrow-pulse"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>

      {activeProject && <ProjectModal item={activeProject} onClose={() => setActiveProject(null)} />}
    </section>
  );
}
