"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import MaskLines from "./MaskLines";

export default function BulkAndTrack() {
  const [trackingId, setTrackingId] = useState("");
  const [statusMsg, setStatusMsg] = useState("");

  const handleTrack = (e) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    setStatusMsg(
      `Shipment ${trackingId.toUpperCase()} — Dispatched from Vedic Nature Apothecary. Estimated delivery in 2–3 business days.`
    );
  };

  return (
    <section id="bespoke" className="py-24 lg:py-40 bg-alabaster-champagne">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <div className="lg:col-span-7">
          <MaskLines
            lines={["Bulk Orders &", "Collaborations,", { text: "made beautifully simple", className: "italic" }]}
            className="font-serif font-medium text-5xl lg:text-[72px] leading-[1.04] text-emerald-deep mb-10"
          />
          <Reveal delay={200}>
          <p className="text-lg text-ink-espresso leading-[1.85] max-w-xl mb-10">
            Partner with Vedic Nature for corporate gifting, wedding favours,
            event distributions, or join our exclusive creator community. Share
            your requirements and our concierge will prepare a custom quote.
          </p>

          <ul className="mb-12 max-w-xl border-t border-emerald-deep/20">
            {[
              "Corporate gifting & executive event hampers",
              "Wedding favours & custom engraved gift chests",
              "Exclusive creator collaborations & PR discovery kits",
            ].map((point) => (
              <li key={point} className="py-5 border-b border-emerald-deep/20 text-lg text-emerald-deep">
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
            <a href="#contact" className="btn-solid">Request Bulk Quote</a>
            <a href="#contact" className="link-line text-emerald-deep">Creator Collaboration</a>
          </div>
          </Reveal>
        </div>

        <Reveal delay={300} id="track" className="lg:col-span-5 bg-alabaster-silk p-8 sm:p-12">
          <h3 className="font-serif font-medium text-[38px] leading-tight text-emerald-deep mb-4">
            Track Your Shipment
          </h3>
          <p className="text-lg text-ink-stone leading-[1.7] mb-10">
            Enter your Vedic Nature order ID or AWB number to check live
            delivery status.
          </p>

          <form onSubmit={handleTrack} className="space-y-8">
            <input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="e.g. VN-2026-4821"
              aria-label="Order ID or AWB number"
              className="w-full bg-transparent border-0 border-b border-emerald-deep/40 focus:border-emerald-deep outline-none px-0 py-3 text-lg text-emerald-deep placeholder:text-ink-stone/70 transition-colors duration-500"
            />
            <button type="submit" className="btn-solid w-full">Track Order</button>
          </form>

          {statusMsg && (
            <p className="mt-8 pl-5 border-l border-gold-champagne text-[16px] text-ink-espresso leading-[1.7]">
              {statusMsg}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
