"use client";

import { useEffect, useRef } from "react";

// Paragraph that "fills in" word by word as you scroll through it.
export default function ScrollText({ text, className = "" }) {
  const ref = useRef(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    const spans = Array.from(el.querySelectorAll("[data-w]"));
    const n = spans.length;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      spans.forEach((s) => (s.style.opacity = 1));
      return;
    }
    let raf;
    const update = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = vh * 0.35;
      let p = (start - r.top) / (start - end + r.height);
      p = Math.min(1, Math.max(0, p));
      spans.forEach((s, i) => {
        const o = Math.min(1, Math.max(0, p * (n + 3) - i));
        s.style.opacity = 0.18 + 0.82 * o;
      });
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} data-w style={{ opacity: 0.18 }}>
          {w}{" "}
        </span>
      ))}
    </p>
  );
}
