"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleJoin = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setJoined(true);
  };

  const linkCls = "hover:text-gold-champagne transition-colors duration-500";

  return (
    <footer id="contact" className="bg-emerald-obsidian text-alabaster-silk">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-14 pt-20 lg:pt-28 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 pb-16 border-b border-alabaster-silk/15">
          <div className="lg:col-span-5">
            <span className="font-serif font-semibold uppercase tracking-[0.3em] text-3xl block mb-5">
              Vedic Nature
            </span>
            <p className="text-[17px] text-alabaster-silk/80 leading-[1.75] max-w-sm mb-10">
              Pure botanical fragrances crafted with timeless Indian heritage
              and modern plant luxury.
            </p>

            {joined ? (
              <p className="text-[17px] text-gold-champagne">Thank you. Welcome to Vedic Nature.</p>
            ) : (
              <form onSubmit={handleJoin} className="flex items-end gap-6 max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  aria-label="Email address"
                  className="flex-1 bg-transparent border-0 border-b border-alabaster-silk/40 focus:border-alabaster-silk outline-none px-0 py-3 text-[17px] text-alabaster-silk placeholder:text-alabaster-silk/55 transition-colors duration-500"
                />
                <button type="submit" className="link-line mb-3 hover:text-gold-champagne transition-colors duration-500">
                  Subscribe
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <h4 className="text-[13px] font-medium uppercase tracking-[0.18em] text-gold-champagne mb-6">Quick Links</h4>
              <ul className="space-y-4 text-[17px] text-alabaster-silk/85">
                <li><a href="#collections" className={linkCls}>Collections / Shop</a></li>
                <li><a href="#collections" className={linkCls}>New Arrivals</a></li>
                <li><a href="#bespoke" className={linkCls}>Luxury Gifting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[13px] font-medium uppercase tracking-[0.18em] text-gold-champagne mb-6">B2B &amp; Services</h4>
              <ul className="space-y-4 text-[17px] text-alabaster-silk/85">
                <li><a href="#bespoke" className={linkCls}>Bulk &amp; Corporate Orders</a></li>
                <li><a href="#bespoke" className={linkCls}>Creator Collaborations</a></li>
                <li><a href="#track" className={linkCls}>Track Your Order</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[13px] font-medium uppercase tracking-[0.18em] text-gold-champagne mb-6">Contact</h4>
              <ul className="space-y-4 text-[17px] text-alabaster-silk/85">
                <li>care@vedicnature.com</li>
                <li>Mon – Sat, 10:00 AM – 7:00 PM IST</li>
                <li>Crafted in India</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[15px] text-alabaster-silk/65">
          <p>© {new Date().getFullYear()} Vedic Nature. All rights reserved.</p>
          <p>Rooted in Purity. Crafted for Luxury.</p>
        </div>
      </div>

      <p aria-hidden="true" className="select-none overflow-hidden whitespace-nowrap text-center font-serif font-semibold uppercase text-[12vw] leading-[0.85] text-alabaster-silk/[0.07] pb-6">
        Vedic Nature
      </p>

      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Concierge"
        className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-3 bg-alabaster-silk text-emerald-deep hover:bg-emerald-deep hover:text-alabaster-silk border border-emerald-deep/20 px-5 py-4 shadow-lg shadow-black/15 transition-colors duration-700"
      >
        <MessageCircle className="w-5 h-5 stroke-[1.5]" />
        <span className="text-[13px] font-medium uppercase tracking-[0.18em] hidden sm:inline">Concierge</span>
      </a>
    </footer>
  );
}
