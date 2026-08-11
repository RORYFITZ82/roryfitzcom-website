import Image from "next/image";
import { Briefcase, Camera, PlayCircle } from "lucide-react";
import { CONTACT } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-gradient-to-br from-[#0B0916] to-[#1D1832] px-6 py-8 md:py-14">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-4 text-center md:justify-between md:text-left">
        <a href="/#home" className="flex items-center opacity-90 transition-opacity duration-base ease-apple hover:opacity-100">
          <Image src="/images/rf-logo-white.png" alt="Rory Fitzgerald" width={110} height={22} className="h-[22px] w-auto" />
        </a>
        <p className="text-[13px] text-white/40">
          © {new Date().getFullYear()} Rory Fitzgerald. Motion Graphics &amp; Video Production, Dublin, Ireland.
        </p>
        <div className="flex gap-4">
          <a
            href={CONTACT.vimeo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vimeo"
            className="text-white/50 transition-colors duration-base ease-apple hover:text-rf-pink"
          >
            <PlayCircle size={20} />
          </a>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/50 transition-colors duration-base ease-apple hover:text-rf-pink"
          >
            <Camera size={20} />
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/50 transition-colors duration-base ease-apple hover:text-rf-pink"
          >
            <Briefcase size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
