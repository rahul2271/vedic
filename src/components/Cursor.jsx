"use client";

import { useEffect, useRef } from "react";

// Soft follower ring that blooms into a label over elements marked data-cursor="…"
export default function Cursor() {
  const pos = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const el = pos.current;
    document.documentElement.classList.add("has-cursor");

    let x = -200, y = -200, cx = -200, cy = -200, raf;
    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      el.style.opacity = 1;
    };
    const over = (e) => {
      const t = e.target.closest ? e.target.closest("[data-cursor]") : null;
      if (t) {
        label.current.textContent = t.dataset.cursor;
        el.classList.add("is-active");
      } else {
        el.classList.remove("is-active");
      }
    };
    const leave = () => (el.style.opacity = 0);
    const loop = () => {
      cx += (x - cx) * 0.16;
      cy += (y - cy) * 0.16;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return (
    <div ref={pos} className="cursor-pos" aria-hidden="true">
      <div className="cursor-ring">
        <span ref={label} />
      </div>
    </div>
  );
}
