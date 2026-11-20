"use client";

import { useState, useEffect, useRef } from "react";
import { User, ShoppingBag } from "lucide-react";

const navLinks = [
  { label: "Collections / Shop", href: "#collections" },
  { label: "New Arrivals", href: "#collections" },
  { label: "Gifting", href: "#bespoke" },
  { label: "Bulk Orders", href: "#bespoke" },
  { label: "Collaborations", href: "#bespoke" },
  { label: "Order Tracking", href: "#track" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const bar = useRef(null);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      // Glide away on the way down, return on the way up
      if (y > 700 && y > lastY.current + 4) setHidden(true);
      else if (y < lastY.current - 4 || y < 700) setHidden(false);
      lastY.current = y;

      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.__lenis) open ? window.__lenis.stop() : window.__lenis.start();
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-[900ms] ease-luxe ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${
          solid
            ? "bg-alabaster-silk text-emerald-obsidian py-4"
            : "bg-transparent text-alabaster-silk py-7"
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-14 grid grid-cols-3 items-center">
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="justify-self-start flex items-center gap-4 text-[13px] font-medium uppercase tracking-[0.18em] hover:opacity-60 transition-opacity duration-500"
          >
            <span className="relative block w-7 h-[9px]">
              <span className={`absolute left-0 w-full h-px bg-current transition-all duration-700 ease-luxe ${open ? "top-1/2 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 w-full h-px bg-current transition-all duration-700 ease-luxe ${open ? "top-1/2 -rotate-45" : "bottom-0"}`} />
            </span>
            <span className="hidden sm:inline">{open ? "Close" : "Menu"}</span>
          </button>

          <a
            href="#"
            onClick={() => setOpen(false)}
            className="justify-self-center font-serif font-semibold uppercase tracking-[0.34em] pl-[0.34em] text-[22px] sm:text-[28px] leading-none whitespace-nowrap"
          >
            Vedic Nature
          </a>

          <div className="justify-self-end flex items-center gap-6">
            <button aria-label="Login or Register" className="hover:opacity-60 transition-opacity duration-500">
              <User className="w-[22px] h-[22px] stroke-[1.4]" />
            </button>
            <button aria-label="Shopping Bag" className="relative hover:opacity-60 transition-opacity duration-500">
              <ShoppingBag className="w-[22px] h-[22px] stroke-[1.4]" />
              <span className="absolute -top-2 -right-2.5 text-[11px] font-medium">0</span>
            </button>
          </div>
        </div>

        {/* Scroll progress hairline */}
        <span
          ref={bar}
          className={`absolute left-0 bottom-0 h-px w-full bg-gold-champagne origin-left transition-opacity duration-700 ${solid ? "opacity-100" : "opacity-0"}`}
          style={{ transform: "scaleX(0)" }}
        />
      </header>

      {/* Full-screen menu */}
      <div
        aria-hidden={!open}
        data-lenis-prevent
        className={`fixed inset-0 z-40 bg-alabaster-silk text-emerald-obsidian pt-28 transition-[clip-path] duration-[1000ms] ease-luxe overflow-y-auto ${
          open ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_100%_0)] pointer-events-none"
        }`}
      >
        <div className="max-w-[1500px] mx-auto min-h-full px-6 lg:px-14 pb-12 grid lg:grid-cols-12 gap-12">
          <nav className="lg:col-span-8 flex flex-col justify-center">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                style={{ transitionDelay: open ? `${300 + i * 80}ms` : "0ms" }}
                className={`font-serif font-medium text-[40px] sm:text-6xl lg:text-[76px] leading-[1.15] hover:text-gold-burnished hover:translate-x-3 transition-all duration-[900ms] ease-luxe ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="lg:col-span-4 flex flex-col justify-end gap-6 text-[17px] text-ink-stone border-t border-alabaster-border lg:border-t-0 lg:border-l lg:pl-12 pt-8 lg:pt-0">
            <a href="#" className="text-emerald-obsidian hover:text-gold-burnished transition-colors">Login / Register</a>
            <p>care@vedicnature.com</p>
            <p>Mon – Sat, 10:00 AM – 7:00 PM IST</p>
          </div>
        </div>
      </div>
    </>
  );
}
