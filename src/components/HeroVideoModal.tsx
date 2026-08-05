"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";

export function HeroVideoModal({
  vimeoId,
  vimeoHash,
  onClose,
}: {
  vimeoId: string;
  vimeoHash?: string;
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
      ref={panelRef}
      className="rf-modal-backdrop fixed inset-0 z-[2000] bg-black/95 backdrop-blur-md"
      onClick={onClose}
      role="presentation"
    >
      <button
        ref={closeBtnRef}
        onClick={onClose}
        aria-label="Close full-screen video"
        className="fixed right-5 top-5 z-[2010] flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-all duration-base ease-apple hover:scale-105 hover:bg-white/20 md:right-8 md:top-8"
      >
        <X size={22} />
      </button>

      <div className="flex h-full w-full items-center justify-center p-4 md:p-14">
        <div
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Showreel, full screen"
          className="rf-modal-panel relative aspect-video w-full max-w-6xl overflow-hidden rounded-2xl bg-black shadow-[0_30px_100px_rgba(0,0,0,0.6)]"
        >
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?${vimeoHash ? `h=${vimeoHash}&` : ""}autoplay=1&muted=0&loop=1&controls=1&dnt=1`}
            className="absolute inset-0 h-full w-full border-0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Showreel, full screen"
          />
        </div>
      </div>
    </div>
  );
}
