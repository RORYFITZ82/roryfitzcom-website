"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { TESTIMONIALS } from "@/lib/content";

function chunk<T>(items: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, i) => items.slice(i * size, i * size + size));
}

export function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
      setIndex(0);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const pages = chunk(TESTIMONIALS, isMobile ? 1 : 3);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % pages.length);
    }, isMobile ? 4500 : 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, pages.length, isMobile]);

  return (
    <section id="testimonials" className="overflow-hidden bg-gradient-to-br from-[#0B0916] to-[#2B2449] py-14 md:py-36">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal className="mx-auto mb-8 max-w-[640px] text-center md:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rf-pink">
            <Quote size={14} /> Testimonials
          </div>
          <h2 className="mb-3 text-[clamp(32px,4vw,48px)] font-black tracking-tight text-white">Voices about the work</h2>
          <p className="text-base text-white/55">Trusted by brands, agencies and production teams across Ireland and beyond.</p>
        </Reveal>
      </div>

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative"
      >
        <div className="mx-auto max-w-[900px] px-6">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-apple"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {pages.map((page, pageIdx) => (
                <div
                  key={pageIdx}
                  className={`grid min-w-full grid-cols-1 items-start gap-5 ${isMobile ? "" : "sm:grid-cols-3"}`}
                >
                  {page.map((t) => (
                    <div
                      key={t.name}
                      className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-slow ease-apple hover:-translate-y-1 hover:bg-white/[0.07]"
                    >
                      <div
                        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 opacity-0 blur-[70px] transition-opacity duration-slow ease-apple group-hover:opacity-100"
                        style={{ background: "radial-gradient(circle, rgba(231,58,104,0.5), transparent 70%)" }}
                      />
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={14} className="fill-rf-pink text-rf-pink" />
                          ))}
                        </div>
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          width={36}
                          height={36}
                          className="h-9 w-9 flex-shrink-0 rounded-full object-cover"
                        />
                      </div>
                      <div className="mb-2.5 text-[15px] font-bold text-white">{t.name}</div>
                      <div className="relative mb-5 max-h-[92px] overflow-hidden transition-[max-height] duration-700 ease-apple group-hover:max-h-[600px]">
                        <p className="rf-fade-mask text-[13px] leading-relaxed text-white/60">“{t.quote}”</p>
                      </div>
                      <span className="self-start rounded-pill bg-white/[0.08] px-3.5 py-1.5 text-xs font-semibold text-white/70">
                        {t.company}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial page ${i + 1}`}
                className={`h-2 rounded-pill transition-all duration-base ease-apple ${
                  i === index ? "w-6 bg-rf-pink" : "w-2 bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={() => setIndex((i) => (i - 1 + pages.length) % pages.length)}
          aria-label="Previous testimonial"
          className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-pill border border-white/[0.10] bg-white/[0.06] text-white backdrop-blur-sm transition-all duration-base ease-apple hover:scale-105 hover:bg-white/[0.14] md:left-8 lg:left-14"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => setIndex((i) => (i + 1) % pages.length)}
          aria-label="Next testimonial"
          className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-pill border border-white/[0.10] bg-white/[0.06] text-white backdrop-blur-sm transition-all duration-base ease-apple hover:scale-105 hover:bg-white/[0.14] md:right-8 lg:right-14"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
