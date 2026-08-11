import { Reveal } from "./Reveal";
import { ScrollHighlightParagraphs } from "./ScrollHighlightText";
import { ABOUT } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-rf-off-white px-6 py-14 md:py-40">
      <div className="mx-auto max-w-[1280px]">
        <Reveal as="p" className="mb-10 text-center text-[15.6px] font-bold uppercase tracking-widest text-rf-pink md:mb-16">
          {ABOUT.eyebrow}
        </Reveal>
        <div className="grid gap-8 md:grid-cols-[0.85fr_1fr] md:gap-16">
          <div>
            <Reveal
              as="h2"
              delay={1}
              className="text-[clamp(32px,4.5vw,56px)] font-black uppercase leading-[1.05] tracking-tight text-rf-navy md:sticky md:top-32"
            >
              {ABOUT.headingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </Reveal>
          </div>
          <div>
            <ScrollHighlightParagraphs
              paragraphs={ABOUT.paragraphs}
              paragraphClassName="mb-5 max-w-[560px] text-[17px] leading-loose"
            />
            <Reveal delay={4}>
              <a
                href="#contact"
                className="inline-block rounded-pill bg-rf-pink px-8 py-4 text-[15px] font-bold text-white shadow-glow-pink transition-all duration-slow ease-apple hover:scale-[1.03] hover:bg-rf-pink-deep active:scale-[0.98]"
              >
                Get In Touch
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
