import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// Things that fade/slide in as they scroll into view. Pages don't need to
// know about this — it finds these elements after every route change.
const TARGETS = [
  ".section-head",
  ".card",
  ".panel-card",
  ".step",
  ".cta-band",
  ".faq-item",
  ".stat-grid > div",
  ".trust-strip-inner",
  ".map-card",
  ".info-item",
].join(",");

export default function RevealOnScroll() {
  const { pathname } = useLocation();

  // useLayoutEffect runs before the browser paints, so elements are hidden
  // *before* the first frame — no flash of visible-then-hidden content.
  useLayoutEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(document.querySelectorAll("main *")).filter(
      (el) =>
        el.matches(TARGETS) &&
        !el.closest(".banner, .page-hero") && // heroes have their own entrance
        !el.querySelector(TARGETS) // animate the inner pieces, not their wrapper
    );

    const timers = [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          io.unobserve(el);
          el.classList.add("is-visible");
          // Once shown, drop the helper classes so normal hover effects and
          // transitions work without the reveal's delay getting in the way.
          const delay = parseInt(el.style.transitionDelay || "0", 10) || 0;
          timers.push(
            setTimeout(() => {
              el.classList.remove("reveal", "is-visible");
              el.style.transitionDelay = "";
            }, 900 + delay)
          );
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    const perParent = new Map(); // stagger siblings in the same grid
    els.forEach((el) => {
      const n = perParent.get(el.parentElement) || 0;
      perParent.set(el.parentElement, n + 1);
      el.style.transitionDelay = `${Math.min(n, 5) * 90}ms`;
      el.classList.add("reveal");
      io.observe(el);
    });

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [pathname]);

  return null;
}
