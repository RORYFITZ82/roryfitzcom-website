import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { VideoStructuredData } from "@/components/VideoStructuredData";
import { BusinessStructuredData } from "@/components/BusinessStructuredData";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-rf-off-white text-rf-navy">
      <BusinessStructuredData />
      <VideoStructuredData />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Process />
      <Services />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
