import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Only the weights actually used anywhere in the site (checked via grep for
// font-bold/font-black/font-semibold/font-extrabold and default body text —
// no italics are used at all). Trimmed from 20 files to 5: fewer preloaded
// font requests, faster LCP, no visual change since unused weights were
// never rendered anyway.
const gilroy = localFont({
  src: [
    { path: "../../public/fonts/Gilroy-400-normal.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Gilroy-600-normal.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/Gilroy-700-normal.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/Gilroy-800-normal.ttf", weight: "800", style: "normal" },
    { path: "../../public/fonts/Gilroy-900-normal.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

const SITE_URL = "https://www.roryfitz.com";
const TITLE = "Rory Fitzgerald | Freelance Motion Graphics Designer & Video Producer, Dublin";
const DESCRIPTION =
  "Freelance Creative Director, Motion Graphics Designer and Video Producer based in Dublin, Ireland. Corporate video, animation, broadcast graphics and explainer videos for brands, agencies and broadcasters across Ireland.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Rory Fitzgerald",
  },
  description: DESCRIPTION,
  keywords: [
    "motion graphics Dublin",
    "motion graphics designer Dublin",
    "motion designer Dublin",
    "freelance motion designer Dublin",
    "animation Dublin",
    "animator Dublin",
    "video production Dublin",
    "video producer Dublin",
    "creative director Dublin",
    "corporate video production Ireland",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: "Rory Fitzgerald",
    locale: "en_IE",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rory Fitzgerald — Dublin" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/images/rf-logo-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gilroy.variable} font-gilroy antialiased`}>{children}</body>
    </html>
  );
}
