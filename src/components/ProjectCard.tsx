import { Play } from "lucide-react";
import type { PortfolioItem } from "@/lib/content";

export function ProjectCard({
  item,
  onOpen,
}: {
  item: PortfolioItem;
  onOpen: () => void;
}) {
  return (
    <div
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onOpen();
      }}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-slow ease-apple hover:-translate-y-1 hover:border-white/[0.16] hover:shadow-[0_20px_48px_rgba(0,0,0,0.4)]"
    >
      <div className="rf-card-img relative aspect-[16/10] overflow-hidden rounded-t-2xl [-webkit-mask-image:-webkit-radial-gradient(white,black)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.thumbUrl ?? `https://vumbnail.com/${item.id}.jpg`}
          alt={item.title}
          loading="lazy"
          className="block h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#1D1832]/10">
          <div className="flex h-14 w-14 scale-90 items-center justify-center rounded-full bg-rf-pink/40 opacity-0 backdrop-blur-sm transition-all duration-base ease-apple group-hover:scale-100 group-hover:opacity-100">
            <Play size={22} className="text-white/90" />
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-1.5 text-base font-bold text-white">{item.title}</h3>
        {item.client && <p className="mb-2.5 text-[13px] text-white/55">{item.client}</p>}
        <div className="flex flex-wrap gap-1.5">
          {item.categories.map((c) => (
            <span
              key={c}
              className="rounded-pill bg-rf-pink/10 px-2.5 py-1 text-[11px] font-bold tracking-wide text-rf-pink"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
