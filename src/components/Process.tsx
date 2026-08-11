import { Workflow } from "lucide-react";
import { Reveal } from "./Reveal";
import { PROCESS_STEPS } from "@/lib/content";
import { DiscoverIllustration, CreateIllustration, DeliverIllustration } from "./ProcessIllustrations";

const ILLUSTRATIONS = [DiscoverIllustration, CreateIllustration, DeliverIllustration];

export function Process() {
  return (
    <section className="border-t border-white/10 bg-gradient-to-br from-[#0B0916] to-[#1D1832] px-6 py-12 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mx-auto mb-8 max-w-[640px] text-center md:mb-14">
          <div className="mb-2.5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rf-pink">
            <Workflow size={14} /> 3 Step Process
          </div>
          <h2 className="mb-2.5 text-[clamp(28px,3.5vw,40px)] font-extrabold tracking-tight text-white">
            How a project runs
          </h2>
          <p className="text-base text-white/55">A clear three-step process from brief to final delivery.</p>
        </Reveal>
        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {PROCESS_STEPS.map((step, i) => {
            const Illustration = ILLUSTRATIONS[i];
            return (
              <Reveal key={step.title} delay={i as 0 | 1 | 2} className="group relative">
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 opacity-0 blur-[70px] transition-opacity duration-slow ease-apple group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle, rgba(231,58,104,0.5), transparent 70%)" }}
                />
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-slow ease-apple group-hover:-translate-y-1 group-hover:border-white/[0.14] group-hover:bg-white/[0.06]">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <span className="text-sm font-bold text-rf-pink">0{i + 1}</span>
                  </div>
                  <p className="mb-5 text-sm leading-relaxed text-white/55">{step.desc}</p>
                  <div className="mt-auto aspect-[20/11] w-full overflow-hidden rounded-xl border border-white/[0.08]">
                    <Illustration />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
