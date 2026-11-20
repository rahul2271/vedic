import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Intro from "@/components/Intro";
import Cursor from "@/components/Cursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata = {
  title: "Vedic Nature | Luxury Botanical Oils & Alcohol-Free Attars",
  description:
    "Rooted in purity, crafted for luxury. Explore Vedic Nature's curated apothecary of 100% botanical, alcohol-free fragrances and bespoke gift chests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-sans text-[17px] leading-[1.7] bg-alabaster-silk text-ink-espresso antialiased overflow-x-hidden">
        <SmoothScroll />
        <Intro />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
