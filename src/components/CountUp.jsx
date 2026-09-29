import { useEffect, useRef, useState } from "react";

// Counts a number up when it scrolls into view: "24k+" -> 0k+ ... 24k+.
// Years (4+ digits, like 2019) are shown as-is; counting up to a year looks silly.
export default function CountUp({ value, duration = 1400 }) {
  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const animate =
    target !== null && target < 1000 && !reduced && typeof IntersectionObserver !== "undefined";

  const [n, setN] = useState(animate ? 0 : target);
  const ref = useRef(null);

  useEffect(() => {
    if (!animate) return;
    let raf;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3); // ease-out
          setN(Math.round(target * eased));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [animate, target, duration]);

  if (target === null) return <span>{value}</span>;
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}
