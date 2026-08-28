import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";

/**
 * Shared site header used on every page. On the landing page, pass
 * `floating` so it starts transparent and picks up a solid background once
 * the user scrolls past the hero. On every other page it's solid from the
 * start (no hero behind it to float over).
 */
export default function SiteHeader({ floating = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(!floating);

  useEffect(() => {
    if (!floating) return undefined;
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [floating]);

  return (
    <header className={`fixed inset-x-0 top-0 z-30 transition-colors duration-300 ${isScrolled ? "border-b border-white/[0.08] bg-black" : "border-b border-transparent bg-transparent"}`}>
      <nav className="mx-auto flex h-[58px] max-w-[1440px] items-center justify-between px-6 lg:px-10" aria-label="Main navigation">
        <Link to="/" className="font-serif text-[1.55rem] tracking-[0.23em] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">
          EXP<span className="text-violet-300">É</span>RIA
        </Link>

        <div className="hidden items-center gap-7 font-accent text-sm text-white/60 md:flex">
          <Link to="/topics" className="transition hover:text-white">Explore</Link>
          <Link to="/how-it-works" className="transition hover:text-white">How it works</Link>
          <Link to="/become-an-expert" className="transition hover:text-white">For Experts</Link>
          <Link to="/about" className="transition hover:text-white">About</Link>
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <button aria-label="Search EXPÉRIA" className="rounded-lg border border-white/15 p-2.5 text-white/75 transition hover:border-violet-300/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">
            <Search className="h-4 w-4" />
          </button>
          <Link to="/login" className="font-accent text-sm text-white/65 transition hover:text-white">Log in</Link>
          <Link to="/signup" className="rounded-lg bg-violet-500 px-5 py-2.5 font-accent text-sm font-semibold text-white shadow-[0_8px_24px_rgba(124,58,237,0.28)] transition hover:bg-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">Enter EXPÉRIA</Link>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="rounded-lg border border-white/15 p-2.5 text-white md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-white/[0.08] bg-black px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4 font-accent text-sm text-white/70">
            <Link to="/topics" onClick={() => setIsMenuOpen(false)}>Explore</Link>
            <Link to="/how-it-works" onClick={() => setIsMenuOpen(false)}>How it works</Link>
            <Link to="/become-an-expert" onClick={() => setIsMenuOpen(false)}>For Experts</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <div className="flex gap-3 border-t border-white/[0.08] pt-4">
              <Link to="/login" className="rounded-lg border border-white/15 px-4 py-2">Log in</Link>
              <Link to="/signup" className="rounded-lg bg-violet-500 px-4 py-2 font-semibold text-white">Enter EXPÉRIA</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
