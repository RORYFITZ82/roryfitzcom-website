import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const SITE_URL = "https://www.roryfitz.com";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rory Fitzgerald, a freelance Creative Director, Motion Graphics Designer and Video Producer based in Dublin, Ireland, for your next video, animation or motion graphics project.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <div className="relative overflow-x-hidden bg-rf-off-white text-rf-navy">
      <Nav />
      <Contact />
      <Footer />
    </div>
  );
}
