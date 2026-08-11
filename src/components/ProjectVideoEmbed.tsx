"use client";

import { useEffect, useRef } from "react";

// Browsers block autoplay-with-sound outright, so the embed always starts
// muted. The moment the visitor interacts with the page at all, we tell the
// Vimeo player (via its postMessage API) to unmute — the closest real
// substitute for "plays with sound the instant it opens".
export function ProjectVideoEmbed({ src, title }: { src: string; title: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const events: Array<keyof WindowEventMap> = ["pointerdown", "keydown", "touchstart"];
    const unmute = () => {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ method: "setMuted", value: false }),
        "https://player.vimeo.com"
      );
      events.forEach((e) => window.removeEventListener(e, unmute));
    };
    events.forEach((e) => window.addEventListener(e, unmute));
    return () => events.forEach((e) => window.removeEventListener(e, unmute));
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      className="absolute inset-0 h-full w-full border-0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      title={title}
    />
  );
}
