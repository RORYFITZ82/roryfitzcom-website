import { ExternalLink, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";
import { CONTACT } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-[#0B0916] to-[#1D1832] px-6 py-14 md:py-36">
      <div
        className="pointer-events-none absolute -bottom-[200px] -right-[160px] z-0 h-[480px] w-[480px] rounded-full blur-[90px]"
        style={{ background: "radial-gradient(circle, rgba(232,49,90,0.28), transparent 70%)" }}
      />
      <div className="relative z-[1] mx-auto grid max-w-[1280px] gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rf-pink">
            <Send size={14} /> Let&apos;s work together
          </Reveal>
          <h2 className="mb-5 text-[clamp(32px,4vw,48px)] font-black uppercase tracking-tight text-white">
            Tell us the good stuff
          </h2>
          <p className="mb-8 text-base leading-loose text-white/65">
            Rory Fitz. is dedicated to responding to all inquiries in a timely manner, thank you for your patience
            as we work to provide you with the best possible service!
          </p>
          <div className="pt-2">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-wide text-white">Contact Us</h3>
            <div className="grid grid-cols-2 gap-7">
              <div>
                <div className="mb-2 text-[11px] font-bold uppercase tracking-wide text-white/40">Address</div>
                <p className="text-sm leading-normal text-white">
                  {CONTACT.address.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
              <div>
                <div className="mb-2 text-[11px] font-bold uppercase tracking-wide text-white/40">Contact</div>
                <p className="mb-2.5">
                  <a href={CONTACT.phoneHref} className="text-sm text-white transition-colors duration-base ease-apple hover:text-rf-pink">
                    {CONTACT.phone}
                  </a>
                </p>
                <a href={`mailto:${CONTACT.email}`} className="text-sm text-white transition-colors duration-base ease-apple hover:text-rf-pink">
                  {CONTACT.email}
                </a>
              </div>
              <div>
                <div className="mb-2 text-[11px] font-bold uppercase tracking-wide text-white/40">Opening Hours</div>
                <p className="text-sm leading-normal text-white">
                  {CONTACT.hours.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
              <div>
                <div className="mb-2 text-[11px] font-bold uppercase tracking-wide text-white/40">Follow</div>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-white transition-colors duration-base ease-apple hover:text-rf-pink"
                >
                  <ExternalLink size={14} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
