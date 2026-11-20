import Image from "next/image";
import Parallax from "./Parallax";
import MaskLines from "./MaskLines";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] overflow-hidden bg-emerald-obsidian text-alabaster-silk">
      {/* Photography — parallax drift + slow settle after the intro */}
      <Parallax className="absolute inset-0" speed={0.18}>
        <div className="hero-bg absolute inset-0">
          <Image
            src="/images/vedic.webp"
            alt="Vedic Nature Night-Blooming Florals Botanical Attar"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </Parallax>

      <div className="absolute inset-0 bg-emerald-obsidian/25" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-emerald-obsidian/90 via-emerald-obsidian/40 to-transparent" />
      <div className="grain" />

      <div className="relative h-full max-w-[1500px] mx-auto px-6 lg:px-14 flex items-end pb-16 lg:pb-24">
        <div className="max-w-6xl">
          <MaskLines
            as="h1"
            wait
            step={160}
            className="font-serif font-medium text-[60px] sm:text-[96px] lg:text-[148px] leading-[0.95] tracking-[-0.01em] mb-9 sm:whitespace-nowrap"
            lines={["Night-Blooming", { text: "Florals", className: "italic" }]}
          />

          <p
            className="after-intro text-lg sm:text-xl text-alabaster-silk/90 max-w-md mb-10 leading-[1.65]"
            style={{ transitionDelay: "700ms" }}
          >
            Late mogra &amp; jasmine, crafted for quiet evenings. 100%
            botanical, alcohol-free attars rooted in timeless Vedic purity.
          </p>

          <div
            className="after-intro flex flex-wrap items-center gap-x-10 gap-y-5"
            style={{ transitionDelay: "900ms" }}
          >
            <a
              href="#collections"
              className="link-line hover:opacity-70 transition-opacity duration-500"
            >
              Shop New Arrivals
            </a>
            <a
              href="#bespoke"
              className="link-line hover:opacity-70 transition-opacity duration-500"
            >
              Bespoke Gifting
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="after-intro hidden lg:flex absolute right-14 bottom-36 flex-col items-center gap-5 text-[12px] font-medium uppercase tracking-[0.3em]"
        style={{ transitionDelay: "1200ms" }}
      >
        <span style={{ writingMode: "vertical-rl" }}>Scroll</span>
        <span className="relative block w-px h-16 bg-alabaster-silk/25 overflow-hidden">
          <span className="absolute inset-0 bg-gold-light animate-cue" />
        </span>
      </div>
    </section>
  );
}