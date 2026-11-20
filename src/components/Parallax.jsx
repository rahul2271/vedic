"use client";

import { useEffect, useRef } from "react";

// Moves its content slower than the page. Give the caller the positioning class (relative / absolute).
export default function Parallax({ speed = 0.12, className = "", children }) {
  const wrap = useRef(null);
  const inner = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf;
    const update = () => {
      const r = wrap.current.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < -100 || r.top > vh + 100) return;
      const p = r.top + r.height / 2 - vh / 2;
      inner.current.style.transform = `translate3d(0, ${p * -speed}px, 0)`;
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
  }, [speed]);

  return (
    <div ref={wrap} className={`overflow-hidden ${className}`}>
      <div ref={inner} className="absolute inset-x-0 -top-[15%] h-[130%] will-change-transform">
        {children}
      </div>
    </div>
  );
}
