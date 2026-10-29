import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { REVIEWS } from "@/lib/reviews";

const ROTATE_MS = 6000;
/** Sections the card must never sit on top of — it folds back to the star there. */
const PROTECTED = ["hero", "stats", "reviews"];

/**
 * Small floating review card in the bottom-left corner that cycles through
 * client reviews. It pops in after a short delay, and folds back to a star
 * button whenever it would cover one of the protected page sections.
 */
export function ReviewTicker() {
  const pathname = useLocation({ select: (l) => l.pathname });
  const onHome = pathname === "/";
  const wrapRef = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [overProtected, setOverProtected] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setShown(true), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % REVIEWS.length), ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const check = () => {
      const box = wrapRef.current?.getBoundingClientRect();
      if (!box) return;
      const hits = PROTECTED.some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const b = el.getBoundingClientRect();
        return box.left < b.right && box.right > b.left && box.top < b.bottom && box.bottom > b.top;
      });
      setOverProtected(hits);
    };
    check();
    let raf = 0;
    const onMove = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(check);
    };
    window.addEventListener("scroll", onMove, { passive: true });
    window.addEventListener("resize", onMove);
    return () => {
      window.removeEventListener("scroll", onMove);
      window.removeEventListener("resize", onMove);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  const current = REVIEWS[index] ?? REVIEWS[0];
  const name = current?.[0] ?? "";
  const date = current?.[1] ?? "";
  const text = current?.[2] ?? "";

  const cardOpen = expanded && !overProtected;

  return (
    <div
      ref={wrapRef}
      aria-live="polite"
      className={`fixed bottom-4 left-4 z-30 flex flex-col items-start gap-3 transition-opacity duration-500 ${
        shown ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className={`w-[min(20rem,calc(100vw-2rem))] rounded-lg border border-border bg-card p-4 shadow-doc transition-all duration-500 ease-out ${
          cardOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-base text-gold">
              ★
            </span>
            <span>
              <span className="block font-display text-lg leading-tight text-navy">5.0 Client Reviews</span>
              <span className="block text-xs text-muted-foreground">From our customers on Justdial</span>
            </span>
          </div>
          <button
            type="button"
            onClick={() => setExpanded(false)}
            aria-label="Hide the review popup"
            className="-mr-1 -mt-1 px-2 text-xl leading-none text-muted-foreground hover:text-foreground"
          >
            ×
          </button>
        </div>

        <p
          key={index}
          className="animate-review-fade mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-foreground"
        >
          “{text}”
        </p>

        <p className="mt-1 text-sm font-semibold text-navy">
          {name}
          <span className="ml-2 font-normal text-muted-foreground">{date}</span>
        </p>

        <div className="mt-3 flex items-center justify-between gap-3 border-t border-border pt-3">
          {onHome ? (
            <a href="#reviews" className="text-sm font-semibold text-primary underline">
              Read all reviews
            </a>
          ) : (
            <Link to="/" hash="reviews" className="text-sm font-semibold text-primary underline">
              Read all reviews
            </Link>
          )}
          <span className="text-xs text-muted-foreground" aria-hidden="true">
            {index + 1} / {REVIEWS.length}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setExpanded(true)}
        aria-label="Show client reviews"
        aria-pressed={!expanded}
        className="animate-review-float flex h-12 w-12 items-center justify-center rounded-full bg-navy text-lg text-gold shadow-doc"
      >
        ★
      </button>
    </div>
  );
}
