"use client";

import { useEffect, useRef } from "react";

// variant: "up" (soft rise) · "image" (curtain wipe + settle) · "line" (hairline draws in)
export default function Reveal({ variant = "up", delay = 0, className = "", as: Tag = "div", children, ...rest }) {
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
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} style={{ "--d": `${delay}ms` }} className={`rv-${variant} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
