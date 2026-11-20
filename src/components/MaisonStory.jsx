import Reveal from "./Reveal";
import MaskLines from "./MaskLines";
import Parallax from "./Parallax";

export default function MaisonStory() {
  return (
    <section className="bg-alabaster-champagne">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Parallax className="relative min-h-[460px] lg:min-h-[860px]" speed={0.1}>
          <img
            src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1600&q=85"
            alt="Botanical attar bottle resting among green leaves"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </Parallax>

        <div className="flex items-center px-6 sm:px-14 lg:px-24 py-24 lg:py-32">
          <div className="max-w-lg">
            <MaskLines
              lines={["Distilled slowly,", "the way it has", "always been done"]}
              className="font-serif font-medium text-4xl lg:text-[60px] leading-[1.08] text-emerald-deep mb-10"
            />
            <Reveal delay={250}>
              <p className="text-lg text-ink-espresso leading-[1.9] mb-10">
                Every oil begins with pure natural extracts, captured through
                time-honoured steam distillation. No synthetic fillers and no
                alcohol, only concentrated botanicals that settle softly on the
                skin and stay for hours.
              </p>
              <a href="#collections" className="link-line text-emerald-deep">
                Discover the Collection
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
