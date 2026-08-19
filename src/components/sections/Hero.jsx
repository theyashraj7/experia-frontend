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
  Palette,
} from "lucide-react";
import { IMAGES } from "@/data/mockData";

// Uniform, symmetric cards — 3 left / 4 right — matching the reference
// layout exactly. No badges, no quotes, no embedded CTAs: label + stat only.
const CARDS = [
  {
    label: "SCIENTIST",
    stat: "18 years in biotechnology",
    image: IMAGES.neha,
    icon: FlaskConical,
    className: "top-[6%] left-[10%] w-48 xl:w-52 -rotate-3",
  },
  {
    label: "FOUNDER",
    stat: "Built 3 companies",
    image: IMAGES.vikram,
    icon: Rocket,
    className: "top-[34%] left-0 w-48 xl:w-52 rotate-2",
  },
  {
    label: "ENGINEER",
    stat: "10 years in aerospace",
    image: IMAGES.arjun,
    icon: HardHat,
    className: "bottom-[4%] left-[6%] w-48 xl:w-52 -rotate-2",
  },
  {
    label: "ATHLETE",
    stat: "12 years professional",
    image: IMAGES.karan,
    icon: Activity,
    className: "top-[2%] right-[8%] w-48 xl:w-52 rotate-3",
  },
  {
    label: "DOCTOR",
    stat: "15 years in medicine",
    image: IMAGES.anjali,
    icon: Stethoscope,
    className: "top-[26%] right-0 w-44 xl:w-48 -rotate-2",
  },
  {
    label: "VC",
    stat: "20+ years in venture capital",
    image: IMAGES.rahul,
    icon: TrendingUp,
    className: "bottom-[26%] right-[6%] w-48 xl:w-52 rotate-2",
  },
  {
    label: "ARTIST",
    stat: "25 years in visual arts",
    image: IMAGES.karan,
    icon: Palette,
    className: "bottom-[2%] right-[2%] w-44 xl:w-48 -rotate-2",
  },
];

const TRUST = ["Verified professionals", "Founders", "Scientists", "Doctors", "Athletes", "Artists", "Leaders", "Experts"];

function FloatingCard({ label, stat, image, icon: Icon, className, delay }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`pointer-events-none absolute hidden overflow-hidden rounded-2xl border border-white/[0.14] bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-sm lg:block ${className}`}
    >
      <div className="relative h-52 w-full xl:h-56">
        <img src={image} alt="" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
        <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-black/40 backdrop-blur">
          <Icon className="h-4 w-4 text-white" />
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="font-accent text-xs font-bold tracking-wide text-blue-400">{label}</p>
          <p className="mt-0.5 text-sm leading-snug text-white">{stat}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#04060F]">
      {/* Starfield / radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_32%,rgba(76,105,210,0.28),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_45%)]" />
      <div className="noise opacity-[0.05]" />

      {/* Orbit ring behind logo, with two glinting dots on the path */}
      <div className="pointer-events-none absolute left-1/2 top-[28%] hidden h-[280px] w-[720px] -translate-x-1/2 -translate-y-1/2 -rotate-3 sm:block">
        <div className="absolute inset-0 rounded-[50%] border border-white/[0.12]" />
        <span className="absolute right-[6%] top-[18%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_3px_rgba(255,255,255,0.6)]" />
        <span className="absolute bottom-[14%] left-[14%] h-1 w-1 rounded-full bg-white/70 shadow-[0_0_8px_2px_rgba(255,255,255,0.4)]" />
      </div>

      {/* Safe zone: starts below the fixed header, ends above the trust strip. */}
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

        {/* Brand — dominant, matching the reference: EXPÉRIA is the visual centerpiece.
            The X gets its own bright glint, echoing the swoosh in the reference art. */}
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mt-6 font-serif text-6xl font-medium tracking-wide sm:text-7xl lg:text-8xl"
        >
          <span
            className="text-transparent"
            style={{
              backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #C9CDD9 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            E
          </span>
          <span
            className="relative inline-block text-transparent"
            style={{
              backgroundImage: "linear-gradient(200deg, #FFFFFF 10%, #A9B8E8 45%, #FFFFFF 70%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 18px rgba(160,180,255,0.55))",
            }}
          >
            X
          </span>
          <span
            className="text-transparent"
            style={{
              backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #C9CDD9 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            PÉRIA
          </span>
        </motion.h1>

        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 font-serif text-3xl leading-[1.15] text-white sm:text-4xl lg:text-5xl"
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
