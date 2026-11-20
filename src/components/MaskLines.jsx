"use client";

import { useEffect, useRef } from "react";

// Headline whose lines rise out of a mask. `wait` holds it until the intro finishes.
export default function MaskLines({ lines, as: Tag = "h2", className = "", wait = false, step = 120 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-in", "");
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    const arm = () => io.observe(el);
    if (wait && document.documentElement.dataset.intro !== "done") {
      window.addEventListener("vn-intro-done", arm, { once: true });
    } else {
      arm();
    }
    return () => {
      io.disconnect();
      window.removeEventListener("vn-intro-done", arm);
    };
  }, [wait]);

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => {
        const item = typeof line === "string" ? { text: line } : line;
        return (
          <span key={i} className="mask-line">
            <span className={item.className || ""} style={{ transitionDelay: `${i * step}ms` }}>
              {item.text}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
