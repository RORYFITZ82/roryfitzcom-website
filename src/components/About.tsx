import { Reveal } from "./Reveal";
import { ABOUT } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-rf-off-white px-6 py-14 md:py-40">
      <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-[0.85fr_1fr] md:gap-16">
        <div>
          <Reveal as="p" className="mb-5 text-xs font-bold uppercase tracking-widest text-rf-pink">
            {ABOUT.eyebrow}
          </Reveal>
          <Reveal
            as="h2"
            delay={1}
            className="text-[clamp(32px,4.5vw,56px)] font-black uppercase leading-[1.05] tracking-tight text-rf-navy md:sticky md:top-32"
          >
            {ABOUT.heading}
          </Reveal>
        </div>
        <div>
          {ABOUT.paragraphs.map((p, i) => (
            <Reveal key={p.slice(0, 24)} as="p" delay={(i + 2) as 2 | 3} className="mb-5 max-w-[560px] text-[17px] leading-loose text-[#54507a]">
              {p}
            </Reveal>
          ))}
          <Reveal
            delay={3}
            className="mb-9 max-w-[520px] border-l-[3px] border-rf-pink pl-6 text-[clamp(20px,2.4vw,28px)] font-extrabold leading-snug tracking-tight text-rf-navy"
          >
            {ABOUT.pullQuote}
          </Reveal>
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
    </section>
  );
}
