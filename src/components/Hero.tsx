"use client";

import { ChevronDown, Maximize2 } from "lucide-react";
import { useState } from "react";
import { HERO } from "@/lib/content";
import { HeroVideoModal } from "./HeroVideoModal";

export function Hero() {
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[54vh] overflow-hidden bg-gradient-to-br from-[#0B0916] to-[#1D1832] md:min-h-[92vh]"
    >
      <div
        className="pointer-events-none absolute -bottom-[220px] -left-[160px] z-0 h-[520px] w-[520px] rounded-full blur-[90px]"
        style={{ background: "radial-gradient(circle, rgba(232,49,90,0.35), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -right-[120px] -top-[160px] z-0 h-[420px] w-[420px] rounded-full blur-[90px]"
        style={{ background: "radial-gradient(circle, rgba(43,36,73,0.55), transparent 70%)" }}
      />

      <div className="absolute inset-0 z-[1]">
        <iframe
          src={`https://player.vimeo.com/video/${HERO.vimeoId}?h=${HERO.vimeoHash}&autoplay=1&loop=1&muted=1&autopause=0&controls=0&dnt=1&title=0&byline=0&portrait=0`}
          className="pointer-events-none absolute inset-0 h-full w-full"
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="Showreel"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[160px] md:h-[280px]"
          style={{ background: "linear-gradient(0deg, #1D1832 0%, rgba(29,24,50,0) 100%)" }}
        />
      </div>

      <div className="absolute bottom-8 left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-4 md:bottom-16 md:gap-5">
        <a
          href="#contact"
          className="rounded-pill bg-rf-pink px-8 py-4 text-[15px] font-bold text-white shadow-[0_0_36px_rgba(231,58,104,0.45)] transition-all duration-slow ease-apple hover:scale-[1.04] hover:bg-rf-pink-deep hover:shadow-[0_0_44px_rgba(231,58,104,0.6)] active:scale-[0.98]"
        >
          Get In Touch
        </a>
        <div className="rf-hero-bounce text-white/50">
          <ChevronDown size={22} />
        </div>
      </div>

      <button
        aria-label="Watch full screen with sound"
        onClick={() => setFullscreen(true)}
        className="absolute bottom-[60px] right-4 z-[2] flex h-[44px] w-[44px] items-center justify-center rounded-full border border-white/[0.16] bg-white/[0.08] text-white backdrop-blur-md transition-all duration-base ease-apple hover:scale-105 hover:bg-white/[0.16] md:bottom-[88px] md:right-6 md:h-[52px] md:w-[52px]"
      >
        <Maximize2 size={20} />
      </button>

      {fullscreen && (
        <HeroVideoModal
          vimeoId={HERO.fullscreenVimeoId}
          onClose={() => setFullscreen(false)}
        />
      )}
    </section>
  );
}
