import Reveal from "./Reveal";
import ScrollText from "./ScrollText";

const pillars = [
  {
    title: "100% Botanical Purity",
    desc: "Crafted with pure natural extracts using time-honored steam distillation—zero synthetic fillers.",
  },
  {
    title: "Alcohol-Free Luxury",
    desc: "Concentrated oil formulations gentle on skin, engineered for long-lasting natural sillage.",
  },
  {
    title: "Bespoke Gifting & Bulk",
    desc: "Custom-packaged gift chests and tailored scent curation for weddings and corporate events.",
  },
];

export default function VedicPromise() {
  return (
    <section id="promise" className="py-32 lg:py-52 bg-emerald-deep text-alabaster-silk">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-14">
        <ScrollText
          className="font-serif font-medium text-[38px] sm:text-6xl lg:text-[88px] leading-[1.08] max-w-6xl mb-28 lg:mb-44"
          text="Rooted in purity, crafted for luxury. Pure natural extracts, steam distilled, never alcohol. Concentrated botanical oils made to linger on the skin."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 lg:gap-16">
          {pillars.map(({ title, desc }, i) => (
            <div key={title}>
              <Reveal variant="line" delay={i * 200} className="h-px mb-8" />
              <Reveal delay={i * 200 + 250}>
                <h3 className="font-serif font-medium text-[32px] leading-tight mb-4">{title}</h3>
                <p className="text-lg text-alabaster-silk/85 leading-[1.8] max-w-sm">{desc}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
