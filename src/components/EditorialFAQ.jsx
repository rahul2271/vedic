"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import MaskLines from "./MaskLines";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Are your oils 100% natural?",
    a: "Our oils are crafted with 100% botanical extracts and are completely free from alcohol, synthetic fragrances, and harsh chemicals.",
  },
  {
    q: "How do I track my order?",
    a: "Once your order is dispatched, you will receive your AWB tracking ID via email and WhatsApp. You can enter it directly in the Track Your Shipment panel above.",
  },
  {
    q: "Do you offer bulk orders for weddings and events?",
    a: "Yes. We specialize in luxury wedding favours, corporate gifting, and event hampers with custom packaging and tailored volume pricing.",
  },
  {
    q: "Can I choose a custom gift set?",
    a: "Absolutely. You can curate your own Royal Vedic Gift Chest by selecting your preferred botanical oils and adding a personalized greeting card.",
  },
];

export default function EditorialFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 lg:py-40 bg-alabaster-silk">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-24">
        <div className="lg:col-span-4">
          <MaskLines
            lines={["Frequently", "Asked Questions"]}
            className="font-serif font-medium text-5xl lg:text-[60px] text-emerald-deep leading-[1.05] mb-8"
          />
          <Reveal delay={200}>
            <p className="text-lg text-ink-stone leading-[1.75] mb-10 max-w-sm">
              Can&apos;t find what you&apos;re looking for? Our concierge team is
              happy to help.
            </p>
            <a href="#contact" className="btn-outline">Contact Us</a>
          </Reveal>
        </div>

        <div className="lg:col-span-8 border-t border-emerald-deep/25">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.q} className="border-b border-emerald-deep/25">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  className="w-full py-7 flex items-center justify-between text-left gap-6"
                >
                  <span className="font-serif font-medium text-[26px] lg:text-[30px] leading-tight text-emerald-deep">
                    {item.q}
                  </span>
                  <Plus
                    className={`w-6 h-6 stroke-[1.3] shrink-0 text-emerald-deep transition-transform duration-700 ease-luxe ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-700 ease-luxe ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-8 pr-12 text-lg text-ink-espresso leading-[1.8] max-w-2xl">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
