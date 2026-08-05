import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gilroy = localFont({
  src: [
    { path: "../../public/fonts/Gilroy-100-normal.ttf", weight: "100", style: "normal" },
    { path: "../../public/fonts/Gilroy-100-italic.ttf", weight: "100", style: "italic" },
    { path: "../../public/fonts/Gilroy-200-normal.ttf", weight: "200", style: "normal" },
    { path: "../../public/fonts/Gilroy-200-italic.ttf", weight: "200", style: "italic" },
    { path: "../../public/fonts/Gilroy-300-normal.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/Gilroy-300-italic.ttf", weight: "300", style: "italic" },
    { path: "../../public/fonts/Gilroy-400-normal.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Gilroy-400-italic.ttf", weight: "400", style: "italic" },
    { path: "../../public/fonts/Gilroy-500-normal.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/Gilroy-500-italic.ttf", weight: "500", style: "italic" },
    { path: "../../public/fonts/Gilroy-600-normal.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/Gilroy-600-italic.ttf", weight: "600", style: "italic" },
    { path: "../../public/fonts/Gilroy-700-normal.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/Gilroy-700-italic.ttf", weight: "700", style: "italic" },
    { path: "../../public/fonts/Gilroy-800-normal.ttf", weight: "800", style: "normal" },
    { path: "../../public/fonts/Gilroy-800-italic.ttf", weight: "800", style: "italic" },
    { path: "../../public/fonts/Gilroy-900-normal.ttf", weight: "900", style: "normal" },
    { path: "../../public/fonts/Gilroy-900-italic.ttf", weight: "900", style: "italic" },
    { path: "../../public/fonts/Gilroy-950-normal.ttf", weight: "950", style: "normal" },
    { path: "../../public/fonts/Gilroy-950-italic.ttf", weight: "950", style: "italic" },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rory Fitzgerald — Creative Director & Motion Graphics Designer",
  description:
    "Rory Fitzgerald is a Creative Director and Motion Graphics Designer specialising in video production, animation, editing, VFX and brand storytelling. Based in Dublin, Ireland.",
  openGraph: {
    title: "Rory Fitzgerald — Creative Director & Motion Graphics Designer",
    description: "Video production, motion graphics, animation and brand storytelling.",
    type: "website",
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
