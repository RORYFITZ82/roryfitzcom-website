import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/content";

export function Marquee() {
  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="border-y border-white/10 bg-gradient-to-br from-[#0B0916] to-[#1D1832] py-4 md:py-6">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-2 md:flex-row md:gap-8 md:px-6">
        <p className="flex-shrink-0 whitespace-nowrap text-center text-xs font-bold uppercase leading-snug tracking-wide text-white md:px-0 md:text-lg">
          Past Clients:
        </p>
        <div
          className="rf-marquee-wrap w-full flex-1 overflow-hidden"
          style={{ maskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)" }}
        >
          <div className="rf-marquee-track flex w-max items-center gap-4">
            {doubled.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="relative flex h-[64px] w-[100px] flex-shrink-0 items-center justify-center opacity-50 grayscale transition-all duration-slow ease-apple hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="100px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
