"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { PortfolioItem } from "@/lib/content";

export function ProjectModal({
  item,
  onClose,
}: {
  item: PortfolioItem;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button, a[href], iframe, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="rf-modal-backdrop fixed inset-0 z-[2000] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md md:p-8"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={panelRef}
        className="rf-modal-panel relative max-h-[90vh] w-full max-w-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
      >
        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute -right-4 -top-4 z-[2] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white shadow-lg backdrop-blur-md transition-all duration-base ease-apple hover:scale-105 hover:bg-white/20"
        >
          <X size={20} />
        </button>
        <div className="relative aspect-video w-full overflow-hidden rounded-t-3xl bg-black">
          <iframe
            src={item.embedUrl ?? `https://player.vimeo.com/video/${item.id}`}
            className="absolute inset-0 h-full w-full border-0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={item.title}
          />
        </div>
        <div className="rounded-b-3xl border border-t-0 border-white/[0.08] bg-[#1D1832]/95 p-8 backdrop-blur-xl">
          <h3 className="mb-2 text-2xl font-extrabold text-white">{item.title}</h3>
          {item.client && <p className="mb-4 text-sm font-bold text-rf-pink">{item.client}</p>}
          {item.desc && (
            <p className="mb-4 whitespace-pre-line text-[15px] leading-loose text-white/70">{item.desc}</p>
          )}
          {item.role && (
            <div className="flex flex-wrap gap-6 border-t border-white/10 pt-4">
              <div>
                <div className="mb-1 text-[11px] font-bold uppercase tracking-wide text-white/40">Role</div>
                <div className="text-sm text-white">{item.role}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
