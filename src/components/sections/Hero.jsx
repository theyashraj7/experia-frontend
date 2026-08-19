import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Circle,
  ShieldCheck,
  FlaskConical,
  Rocket,
  HardHat,
  Activity,
  Stethoscope,
  TrendingUp,
} from "lucide-react";
import { IMAGES } from "@/data/mockData";
import { LiveDot } from "@/components/atoms";

// Positions are percentages *within the safe zone* (see the wrapper in Hero,
// which already sits clear of the fixed header and the bottom trust strip) —
// not percentages of the full section — so cards can never collide with either.
const CARDS = [
  {
    label: "FOUNDER",
    stat: "Built 3 companies",
    image: IMAGES.vikram,
    icon: Rocket,
    size: "dominant",
    live: { when: "LIVE SESSION" },
    quote: "What nobody tells you before starting.",
    className: "top-[22%] left-[2%] w-60 xl:w-64 -rotate-2",
  },
  {
    label: "SCIENTIST",
    stat: "18 years in biotechnology",
    image: IMAGES.neha,
    icon: FlaskConical,
    size: "medium",
    live: { when: "LIVE TOMORROW · 7:00 PM", curious: "1,842 curious people" },
    cta: "Ask a question",
    className: "top-[4%] right-[3%] w-48 xl:w-56 rotate-3",
  },
  {
    label: "DOCTOR",
    stat: "15 years in medicine",
    image: IMAGES.anjali,
    icon: Stethoscope,
    size: "medium",
    className: "bottom-[6%] right-[6%] w-44 xl:w-52 -rotate-2",
  },
  {
    label: "ENGINEER",
    stat: "10 years in aerospace",
    image: IMAGES.arjun,
    icon: HardHat,
    size: "small",
    className: "bottom-[2%] left-[6%] w-32 xl:w-36 -rotate-3 opacity-90",
  },
  {
    label: "ATHLETE",
    stat: "12 years professional",
    image: IMAGES.karan,
    icon: Activity,
    size: "small",
    className: "top-[2%] left-[16%] w-28 xl:w-32 rotate-2 opacity-80",
  },
  {
    label: "VC",
    stat: "20+ years in venture capital",
    image: IMAGES.rahul,
    icon: TrendingUp,
    size: "small",
    className: "top-[46%] right-[18%] w-28 xl:w-32 rotate-3 opacity-80",
  },
];

const TRUST = ["Verified professionals", "Founders", "Scientists", "Doctors", "Athletes", "Artists", "Leaders"];

const IMG_HEIGHT = { dominant: "h-52 sm:h-56", medium: "h-40 sm:h-44", small: "h-28 sm:h-32" };

function FloatingCard({ label, stat, image, icon: Icon, className, delay, size, live, quote, cta }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`pointer-events-none absolute hidden overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-2xl backdrop-blur-sm lg:block ${className}`}
    >
      <div className={`relative w-full ${IMG_HEIGHT[size] || IMG_HEIGHT.medium}`}>
        <img src={image} alt="" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

        <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-black/40 backdrop-blur">
          <Icon className="h-4 w-4 text-white" />
        </div>

        {live && (
          <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2 py-1 backdrop-blur">
            {live.when.startsWith("LIVE") && <LiveDot />}
            <span className="font-accent text-[0.6rem] font-bold tracking-wide text-white">{live.when}</span>
          </div>
        )}

        <div className="absolute bottom-3 left-3 right-3">
          <p className="font-accent text-xs font-bold tracking-wide text-blue-400">{label}</p>
          <p className="mt-0.5 text-sm leading-snug text-white">{stat}</p>
          {quote && <p className="mt-1.5 text-[0.8rem] italic leading-snug text-white/75">&ldquo;{quote}&rdquo;</p>}
          {live?.curious && <p className="mt-1.5 text-[0.65rem] text-white/60">{live.curious}</p>}
          {cta && (
            <span className="mt-1.5 inline-flex items-center gap-1 text-[0.7rem] font-semibold text-blue-300">
              {cta} <ArrowRight className="h-3 w-3" />
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#05060B]">
      {/* Starfield / radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(59,90,180,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_50%)]" />
      <div className="noise opacity-[0.05]" />

      {/* Orbit ring behind logo */}
      <div className="pointer-events-none absolute left-1/2 top-[24%] hidden h-[240px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/10 sm:block" />

      {/* Safe zone: starts below the fixed header, ends above the trust strip.
          All card positions are percentages of THIS box, not the full section. */}
      <div className="pointer-events-none absolute inset-x-0 top-24 bottom-28 hidden lg:block">
        {CARDS.map((c, i) => (
          <FloatingCard key={c.label} {...c} delay={0.3 + i * 0.08} />
        ))}
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-accent text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-white/50"
        >
          The people who know. Now within reach.
        </motion.p>

        {/* Brand — deliberately smaller than the headline so it reads as a mark, not the message */}
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 font-serif text-4xl font-medium tracking-wide text-transparent sm:text-5xl lg:text-6xl"
          style={{
            backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #C9CDD9 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          EXPÉRIA
        </motion.h1>

        {/* Headline — primary visual weight */}
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 font-serif text-4xl leading-[1.12] text-white sm:text-5xl lg:text-6xl"
        >
          Don't Just Learn It.
          <br />
          Ask Someone{" "}
          <span
            className="text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #93B4FF 0%, #E4EAFF 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Who's Done It.
          </span>
        </motion.h2>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
        >
          Live conversations with people who have actually built, achieved, discovered, solved, and
          experienced what you want to understand.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Link
            to="/experts"
            data-testid="hero-cta-explore"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-8 py-3.5 font-accent text-sm font-bold text-white shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-transform hover:-translate-y-0.5"
          >
            Explore EXPÉRIA
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/live"
            data-testid="hero-cta-live"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3.5 font-accent text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            See Who's Live
            <Circle className="h-3 w-3 fill-current" />
          </Link>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex w-full max-w-2xl flex-wrap items-center justify-center gap-x-2 gap-y-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:text-sm"
        >
          <ShieldCheck className="h-4 w-4 shrink-0 text-white/45" />
          {TRUST.map((t, i) => (
            <span key={t} className="flex items-center gap-2">
              {t}
              {i < TRUST.length - 1 && <span className="text-white/25">&bull;</span>}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
