import Reveal from "./Reveal";
import MaskLines from "./MaskLines";

const products = [
  {
    id: 1,
    badge: "Bestseller",
    name: "Jubilant",
    notes: "Warm Amber • Mysore Sandalwood • Saffron",
    volume: "Luxury Attar Oil • 12 ml",
    price: "₹1,499",
    image:
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    badge: "New",
    name: "Pure Tulsi",
    notes: "Sacred Basil • Fresh Vetiver • Dewy Moss",
    volume: "Pure Botanical Oil • 12 ml",
    price: "₹1,299",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    badge: "Gift Set",
    name: "Royal Vedic Gift Chest",
    notes: "Curated Trio of Signature Botanical Oils",
    volume: "Assorted 3 × 10 ml Coffret",
    price: "₹3,499",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function SignatureCollection() {
  return (
    <section id="collections" className="py-28 lg:py-44 bg-alabaster-silk">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16 lg:mb-24">
          <MaskLines
            lines={["Signature", "Botanical Oils"]}
            className="font-serif font-medium text-5xl lg:text-[84px] leading-[1] text-emerald-deep"
          />
          <Reveal delay={300} className="self-start sm:self-auto">
            <a href="#collections" className="link-line text-emerald-deep">View All Oils</a>
          </Reveal>
        </div>

        {/* Staggered editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 lg:gap-x-12 gap-y-20 items-start">
          {products.map((item, i) => (
            <article
              key={item.id}
              data-cursor="Explore"
              className={`group ${i === 1 ? "md:mt-28" : ""}`}
            >
              <Reveal variant="image" delay={i * 150} className="relative aspect-[4/5] bg-alabaster-champagne">
                <div className="rv-inner absolute inset-0 overflow-hidden">
                  <div className="rv-scale">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[2000ms] ease-luxe group-hover:scale-[1.06]"
                    />
                  </div>
                </div>
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-emerald-obsidian/45 to-transparent z-[5] pointer-events-none" />
                <span className="absolute top-5 left-5 z-10 text-[12px] font-medium uppercase tracking-[0.18em] text-alabaster-silk">
                  {item.badge}
                </span>
              </Reveal>

              <Reveal delay={i * 150 + 350} className="pt-7 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-serif font-medium text-[32px] leading-tight text-emerald-deep">
                    {item.name}
                  </h3>
                  <p className="text-[16px] text-ink-stone mt-2">{item.notes}</p>
                  <p className="text-[15px] text-ink-stone/80 mt-1">{item.volume}</p>
                  <button className="link-line text-emerald-deep mt-5">Explore</button>
                </div>
                <p className="font-serif font-medium text-[28px] text-emerald-deep shrink-0">
                  {item.price}
                </p>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
