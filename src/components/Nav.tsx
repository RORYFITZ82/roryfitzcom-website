"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/content";

const SECTION_IDS = ["home", "about", "services", "work", "contact"];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [pillRect, setPillRect] = useState<{ left: number; width: number } | null>(null);
  const linksWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const wrap = linksWrapRef.current;
    const link = document.getElementById(`nav-link-${active}`);
    if (!wrap || !link) return;
    const wrapRect = wrap.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    setPillRect({ left: linkRect.left - wrapRect.left, width: linkRect.width });
  }, [active]);

  return (
    <nav className="fixed inset-x-0 top-0 z-[1000] px-6 pt-4 md:pt-7">
      <div className="relative mx-auto flex h-[44px] max-w-[1280px] items-center justify-between md:h-[52px]">
        <div className="w-px" />
        <div
          ref={linksWrapRef}
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-pill border border-white/[0.08] bg-[#1D1832]/60 p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl md:flex"
        >
          {pillRect && (
            <motion.div
              className="absolute h-[calc(100%-12px)] rounded-pill bg-rf-pink"
              animate={{ left: pillRect.left, width: pillRect.width }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          )}
          <a href="#home" className="relative z-[1] flex flex-shrink-0 items-center px-2.5 py-0 pl-1.5">
            <Image src="/images/rf-logo-mark.png" alt="Rory Fitzgerald" width={38} height={38} className="h-[38px] w-auto" />
          </a>
          {NAV_LINKS.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={link.href}
                id={`nav-link-${id}`}
                href={link.href}
                className={`relative z-[1] whitespace-nowrap rounded-pill px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10 ${
                  isActive ? "text-white" : "text-white/70"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="flex items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.06] p-2.5 text-white backdrop-blur-md transition-all duration-base ease-apple hover:scale-105 hover:bg-white/[0.14] md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 flex max-w-[1280px] flex-col gap-1 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#1D1832]/90 px-6 pb-7 pt-3 backdrop-blur-xl md:hidden"
          >
            {["home", "about", "services", "work", "contact"].map((id, i, arr) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`py-3 text-base font-semibold capitalize text-white ${
                  i < arr.length - 1 ? "border-b border-white/10" : ""
                } ${id === "contact" ? "!text-rf-pink" : ""}`}
              >
                {id}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
