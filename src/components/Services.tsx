"use client";

import { useState } from "react";
import { Box, ChevronDown, Compass, PenTool, Scissors, Share2, Video, Layers, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { SERVICES } from "@/lib/content";

const ICONS: Record<string, LucideIcon> = {
  compass: Compass,
  "pen-tool": PenTool,
  "share-2": Share2,
  video: Video,
  box: Box,
  scissors: Scissors,
};

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="services" className="bg-gradient-to-br from-[#0B0916] to-[#1D1832] px-6 py-14 md:py-36">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mx-auto mb-8 max-w-[640px] text-center md:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rf-pink">
            <Layers size={14} /> What I do
          </div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-black tracking-tight text-white">Services</h2>
        </Reveal>

        {/* Mobile: expandable list */}
        <div className="flex flex-col gap-3 md:hidden">
          {SERVICES.map((svc, i) => {
            const Icon = ICONS[svc.icon];
            const isOpen = openIndex === i;
            return (
              <div
                key={svc.title}
                className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] transition-colors duration-base ease-apple"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-rf-pink/15 text-rf-pink">
                    <Icon size={20} />
                  </div>
                  <span className="flex-1 text-[15px] font-bold text-white">{svc.title}</span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-white/50 transition-transform duration-base ease-apple ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div className="grid transition-all duration-slow ease-apple" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 pl-[68px] text-sm leading-relaxed text-white/55">{svc.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: card grid */}
        <div className="hidden gap-5 md:grid md:grid-cols-3">
          {SERVICES.map((svc, i) => {
            const Icon = ICONS[svc.icon];
            return (
              <Reveal
                key={svc.title}
                delay={(i % 3) as 0 | 1 | 2}
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-slow ease-apple hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.06]"
              >
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 opacity-0 blur-[70px] transition-opacity duration-slow ease-apple group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle, rgba(231,58,104,0.5), transparent 70%)" }}
                />
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-rf-pink/15 text-rf-pink transition-transform duration-slow ease-apple group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">{svc.title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{svc.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
