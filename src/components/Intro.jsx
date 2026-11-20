"use client";

import { useEffect, useState } from "react";

// Short brand opening, shown once per browser session.
export default function Intro() {
  const [phase, setPhase] = useState("show"); // show -> lift -> gone

  useEffect(() => {
    const root = document.documentElement;
    const finish = () => {
      root.dataset.intro = "done";
      window.dispatchEvent(new Event("vn-intro-done"));
    };

    let seen = false;
    try { seen = sessionStorage.getItem("vn-intro") === "1"; } catch {}
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || reduce) {
      setPhase("gone");
      finish();
      return;
    }

    root.style.overflow = "hidden";
    const t1 = setTimeout(() => {
      setPhase("lift");
      root.style.overflow = "";
      finish();
      try { sessionStorage.setItem("vn-intro", "1"); } catch {}
    }, 2300);
    const t2 = setTimeout(() => setPhase("gone"), 3700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      root.style.overflow = "";
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] bg-emerald-obsidian flex flex-col items-center justify-center transition-[clip-path] duration-[1400ms] ease-luxe ${
        phase === "lift" ? "[clip-path:inset(0_0_100%_0)]" : "[clip-path:inset(0_0_0_0)]"
      }`}
    >
      <span className="animate-introword font-serif font-semibold uppercase text-alabaster-silk text-3xl sm:text-5xl pl-[0.34em] whitespace-nowrap">
        Vedic Nature
      </span>
      <span className="animate-introline block h-px bg-gold-champagne mt-8" />
    </div>
  );
}
