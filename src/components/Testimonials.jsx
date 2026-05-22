import { useState, useEffect, useCallback } from "react";
import { testimonials } from "../data";

function StarRating({ rating = 5 }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="text-base"
          style={{
            color: i < rating ? "var(--color-terra)" : "var(--color-border)",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function TestiCard({ testimonial }) {
  return (
    <div
      className="rounded-2xl p-6 flex-shrink-0 h-full transition-colors duration-500"
      style={{
        background: "var(--color-surface)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <span
        className="block font-heading text-5xl leading-none font-bold mb-3"
        style={{ color: "var(--color-terra)" }}
      >
        "
      </span>
      <StarRating rating={testimonial.rating} />
      <p className="text-sm text-muted leading-relaxed italic mb-6">
        {testimonial.text}
      </p>
      <div>
        <p className="font-heading font-semibold text-theme text-sm">
          {testimonial.name}
        </p>
        <p className="text-xs text-faint mt-0.5">{testimonial.type}</p>
      </div>
    </div>
  );
}

function getPerPage() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

function isDesktop() {
  if (typeof window === "undefined") return true;
  return window.innerWidth >= 1024;
}

// ── Mobile carousel ────────────────────────────────────────────────
function MobileCarousel() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const maxIndex = total - 1;

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(
    () => setCurrent((c) => Math.min(maxIndex, c + 1)),
    [maxIndex],
  );

  return (
    <div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t) => (
            <div key={t.id} style={{ minWidth: "100%", maxWidth: "100%" }}>
              <TestiCard testimonial={t} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous"
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            color: "var(--color-text)",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: current === i ? "24px" : "8px",
                background:
                  current === i ? "var(--color-forest)" : "var(--color-border)",
              }}
            />
          ))}
        </div>
        <button
          onClick={next}
          disabled={current >= maxIndex}
          aria-label="Next"
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            color: "var(--color-text)",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ── Desktop infinite marquee ───────────────────────────────────────
function DesktopMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  const doubled = [...testimonials, ...testimonials];

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex gap-8"
        style={{
          animation: `marquee 40s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
          width: "max-content",
        }}
      >
        {doubled.map((t, i) => (
          <div key={i} style={{ width: "360px", flexShrink: 0 }}>
            <TestiCard testimonial={t} />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────
export default function Testimonials() {
  const [desktop, setDesktop] = useState(isDesktop);

  useEffect(() => {
    const onResize = () => setDesktop(isDesktop());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section
      id="testimonials"
      className="section-py transition-colors duration-500"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="container-custom">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-theme text-4xl lg:text-5xl mb-4">
            Words from Clients
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Therapy is a deeply personal experience. Here is what some clients
            have shared about their journey and the safe space we created
            together.
          </p>
        </div>

        <div className="reveal">
          {desktop ? <DesktopMarquee /> : <MobileCarousel />}
        </div>
      </div>
    </section>
  );
}
