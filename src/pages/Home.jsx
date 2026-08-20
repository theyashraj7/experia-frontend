import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Compass,
  Factory,
  FlaskConical,
  Landmark,
  Menu,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UsersRound,
  X,
} from "lucide-react";
import { IMAGES } from "@/data/mockData";

/**
 * EXPERIA final landing page
 *
 * The live metrics and expert credentials below are prototype data. In the
 * production app, replace these values with API-backed data from your live
 * conversation and expert-verification services.
 */

const DISCOVERY_TAGS = ["Aviation", "Finance", "Medicine", "Startups", "Manufacturing"];

const LIVE_CONVERSATION = {
  title: "How I Built My First Company",
  name: "Arjun Malhotra",
  role: "Founder & CEO, Pesto Tech",
  credibility: "10+ years building companies",
  description: "Building global SaaS products from India — and what founders often get wrong.",
  watching: "1,247 watching",
  questions: "23 questions being discussed",
  image: IMAGES.arjun,
};

const UPCOMING_CONVERSATIONS = [
  {
    date: "24 May",
    time: "7:00 PM IST",
    topic: "Life in the Cockpit",
    description: "Decisions that matter when everything goes wrong.",
    name: "Capt. Rohit Verma",
    role: "Boeing 777 Captain",
    credibility: "20+ years · Commercial Aviation",
    image: IMAGES.karan,
    accent: "from-sky-400/20 via-transparent to-transparent",
  },
  {
    date: "25 May",
    time: "8:00 PM IST",
    topic: "Inside Venture Capital",
    description: "How investors decide what is worth backing.",
    name: "Rohan Mehta",
    role: "Partner, Northstar Ventures",
    credibility: "15+ years · Venture Capital",
    image: IMAGES.rahul,
    accent: "from-violet-400/20 via-transparent to-transparent",
  },
  {
    date: "26 May",
    time: "7:30 PM IST",
    topic: "The Future of Medicine",
    description: "What patients and young doctors should prepare for next.",
    name: "Dr. Ananya Iyer",
    role: "Physician & Researcher",
    credibility: "18+ years · Medicine",
    image: IMAGES.anjali,
    accent: "from-rose-400/20 via-transparent to-transparent",
  },
  {
    date: "27 May",
    time: "8:00 PM IST",
    topic: "Building from Zero",
    description: "The messy, practical reality of starting from nothing.",
    name: "Kunal Shah",
    role: "Founder, CRED",
    credibility: "12+ years · Serial Entrepreneur",
    image: IMAGES.vikram,
    accent: "from-amber-300/20 via-transparent to-transparent",
  },
];

const EXPERTS = [
  {
    category: "FOUNDERS",
    name: "Rahul Mehta",
    role: "Founder · 3 companies",
    detail: "Building, failing, and starting again.",
    image: IMAGES.rahul,
  },
  {
    category: "SCIENTISTS",
    name: "Dr. Neha Kapoor",
    role: "Biotechnology Scientist",
    detail: "18 years turning research into reality.",
    image: IMAGES.neha,
  },
  {
    category: "DOCTORS",
    name: "Dr. Anjali Rao",
    role: "Emergency Physician",
    detail: "15 years making decisions under pressure.",
    image: IMAGES.anjali,
  },
  {
    category: "ENGINEERS",
    name: "Vikram Sethi",
    role: "Aerospace Engineer",
    detail: "A decade designing for the impossible.",
    image: IMAGES.vikram,
  },
];

const CATEGORY_LINKS = [
  { label: "Aviation", icon: Compass },
  { label: "Finance", icon: Landmark },
  { label: "Medicine", icon: Stethoscope },
  { label: "Startups", icon: Sparkles },
  { label: "Manufacturing", icon: Factory },
];

const HOW_IT_WORKS = [
  {
    number: "01",
    title: "Find a conversation",
    description: "Discover someone who has done what you are trying to do.",
  },
  {
    number: "02",
    title: "Reserve your seat",
    description: "Save a place in a live conversation that feels worth your time.",
  },
  {
    number: "03",
    title: "Ask your question",
    description: "Submit your question, follow the room, and upvote what matters.",
  },
  {
    number: "04",
    title: "Hear the answer",
    description: "Join the conversation and learn directly from lived experience.",
  },
];

function FadeUp({ children, delay = 0, className = "" }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function VerificationBadge({ label = "Verified experience" }) {
  return (
    <span
      title={label}
      aria-label={label}
      className="inline-flex items-center justify-center text-violet-300"
    >
      <BadgeCheck className="h-4 w-4 fill-violet-400/15" />
    </span>
  );
}

function SectionLabel({ children, action }) {
  return (
    <div className="mb-3 flex items-end justify-between gap-4">
      <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">
        {children}
      </p>
      {action}
    </div>
  );
}

function PrimaryButton({ children, to = "/explore", className = "" }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-3 font-accent text-sm font-semibold text-white shadow-[0_12px_32px_rgba(109,78,255,0.26)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(109,78,255,0.38)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05060b] ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}

function ConversationCard({ conversation, index }) {
  return (
    <FadeUp delay={index * 0.06} className="h-full">
      <article className="group relative flex h-full min-h-[190px] flex-col overflow-hidden rounded-[1.1rem] border border-white/[0.11] bg-white/[0.035] p-2.5 transition duration-300 hover:-translate-y-1 hover:border-violet-300/35 hover:bg-white/[0.055] hover:shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
        <div className="relative flex items-start gap-3">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/[0.1]">
            <img
              src={conversation.image}
              alt={`${conversation.name}, ${conversation.role}`}
              loading="lazy"
              className="h-full w-full object-cover object-top grayscale-[0.1]"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 font-accent text-[0.62rem] text-violet-200/70">
              <CalendarDays className="h-3 w-3" />
              {conversation.date}
              <span className="h-1 w-1 rounded-full bg-white/25" />
              <Clock3 className="h-3 w-3" />
              {conversation.time}
            </div>
            <h3 className="mt-1 truncate font-serif text-base leading-tight text-white transition-colors group-hover:text-violet-100">
              {conversation.topic}
            </h3>
          </div>
        </div>

        <div className="relative mt-2 flex flex-1 flex-col">
          <div className="flex items-center gap-1.5">
            <p className="truncate font-accent text-xs font-medium text-white/85">{conversation.name}</p>
            <VerificationBadge />
          </div>
          <p className="mt-0.5 truncate text-[0.7rem] text-white/47">{conversation.role} · {conversation.credibility}</p>

          <Link
            to="/live"
            className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-full border border-violet-300/30 px-3 py-2 font-accent text-[0.7rem] font-semibold text-violet-100 transition hover:border-violet-200/60 hover:bg-violet-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
          >
            Reserve your seat
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </article>
    </FadeUp>
  );
}

export default function Home() {
  const reduce = useReducedMotion();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const heroAnimation = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] },
  });

  const handleSearch = (event) => {
    event.preventDefault();
    // Connect this handler to the Explore search route or API when available.
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#05060b] text-white selection:bg-violet-400/30 selection:text-white">
      <div className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-[-24rem] h-[58rem] w-[72rem] -translate-x-1/2 rounded-full bg-violet-600/[0.10] blur-[140px]" />
          <div className="absolute right-[-18rem] top-[30rem] h-[38rem] w-[38rem] rounded-full bg-indigo-500/[0.10] blur-[130px]" />
          <div className="absolute left-[-22rem] top-[48rem] h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/[0.055] blur-[130px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,transparent_0%,rgba(5,6,11,0.35)_48%,#05060b_90%)]" />
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <header className="relative z-30 border-b border-white/[0.08] bg-[#05060b]/75 backdrop-blur-xl">
          <nav className="mx-auto flex h-[58px] max-w-[1440px] items-center justify-between px-6 lg:px-10" aria-label="Main navigation">
            <Link to="/" className="font-serif text-[1.55rem] tracking-[0.23em] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">
              EXP<span className="text-violet-300">É</span>RIA
            </Link>

            <div className="hidden items-center gap-9 font-accent text-sm text-white/60 md:flex">
              <Link to="/live" className="transition hover:text-white">Live</Link>
              <Link to="/explore" className="transition hover:text-white">Explore</Link>
              <Link to="/experts" className="transition hover:text-white">Experts</Link>
            </div>

            <div className="hidden items-center gap-5 md:flex">
              <button aria-label="Search EXPERIA" className="rounded-full border border-white/15 p-2.5 text-white/75 transition hover:border-violet-300/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">
                <Search className="h-4 w-4" />
              </button>
              <Link to="/login" className="font-accent text-sm text-white/65 transition hover:text-white">Log in</Link>
              <Link to="/signup" className="rounded-full bg-violet-500 px-5 py-2.5 font-accent text-sm font-semibold text-white shadow-[0_8px_24px_rgba(124,58,237,0.28)] transition hover:bg-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">Sign up</Link>
            </div>

            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="rounded-full border border-white/15 p-2.5 text-white md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>

          {isMenuOpen && (
            <div className="border-t border-white/[0.08] px-6 py-5 md:hidden">
              <div className="flex flex-col gap-4 font-accent text-sm text-white/70">
                <Link to="/live" onClick={() => setIsMenuOpen(false)}>Live</Link>
                <Link to="/explore" onClick={() => setIsMenuOpen(false)}>Explore</Link>
                <Link to="/experts" onClick={() => setIsMenuOpen(false)}>Experts</Link>
                <div className="flex gap-3 border-t border-white/[0.08] pt-4">
                  <Link to="/login" className="rounded-full border border-white/15 px-4 py-2">Log in</Link>
                  <Link to="/signup" className="rounded-full bg-violet-500 px-4 py-2 font-semibold text-white">Sign up</Link>
                </div>
              </div>
            </div>
          )}
        </header>

        <section className="relative mx-auto max-w-[1440px] px-6 pb-4 pt-4 lg:px-10 lg:pb-5 lg:pt-5">
          <div className="mx-auto max-w-[1050px] text-center">
            <motion.h1 {...heroAnimation(0.08)} className="font-serif text-[1.9rem] leading-[1.06] tracking-[-0.02em] text-white sm:text-4xl sm:leading-[1.02] sm:tracking-[-0.03em] lg:text-[3.1rem]">
              Don’t Just Learn It.
              <br />
              Ask Someone Who’s{" "}
              <span className="bg-gradient-to-r from-violet-200 via-violet-400 to-indigo-300 bg-clip-text text-transparent">Done It.</span>
            </motion.h1>

            <motion.form {...heroAnimation(0.24)} onSubmit={handleSearch} className="mx-auto mt-3 max-w-[640px]">
              <label htmlFor="experia-search" className="sr-only">What are you curious about?</label>
              <div className="flex items-center gap-3 rounded-full border border-violet-200/30 bg-white/[0.055] p-1.5 pl-5 shadow-[0_18px_70px_rgba(76,29,149,0.16)] backdrop-blur-xl transition focus-within:border-violet-300/70 focus-within:bg-white/[0.08]">
                <Search className="h-4 w-4 shrink-0 text-white/45" />
                <input
                  id="experia-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="What are you curious about?"
                  className="min-w-0 flex-1 bg-transparent py-1.5 font-accent text-sm text-white outline-none placeholder:text-white/38"
                />
                <button type="submit" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 font-accent text-xs font-semibold text-[#12131d] transition hover:bg-violet-100 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.form>

            <motion.div {...heroAnimation(0.3)} className="mt-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 font-accent text-[0.7rem] text-white/42 sm:text-xs">
              {DISCOVERY_TAGS.map((tag, index) => (
                <Link key={tag} to={`/explore?topic=${tag.toLowerCase()}`} className="transition hover:text-violet-200">
                  {tag}
                  {index < DISCOVERY_TAGS.length - 1 && <span className="ml-3 text-violet-300/50">·</span>}
                </Link>
              ))}
            </motion.div>
          </div>

          <FadeUp className="mx-auto mt-3 max-w-[1160px] lg:mt-4">
            <article className="group relative overflow-hidden rounded-[1.3rem] border border-violet-200/25 bg-[#0b0c16]/85 shadow-[0_30px_120px_rgba(0,0,0,0.42)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(124,58,237,0.18),transparent_40%)]" />
              <div className="relative grid min-h-[170px] lg:grid-cols-[0.8fr_1.2fr] lg:min-h-[195px]">
                <div className="relative min-h-[130px] overflow-hidden lg:min-h-full">
                  <img src={LIVE_CONVERSATION.image} alt={`${LIVE_CONVERSATION.name}, ${LIVE_CONVERSATION.role}`} className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.025]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080910] via-[#080910]/15 to-transparent" />
                  <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-[#0b0c16] to-transparent lg:block" />
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-red-300/25 bg-black/45 px-2.5 py-1 font-accent text-[0.65rem] font-semibold text-red-200 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.95)]" />
                    LIVE NOW
                  </div>
                </div>

                <div className="relative flex flex-col justify-center px-5 py-3 sm:px-7 lg:px-8 lg:py-4">
                  <div className="flex items-center gap-3 font-accent text-[0.68rem] text-white/55">
                    <span className="inline-flex items-center gap-2 text-red-200"><span className="h-1.5 w-1.5 rounded-full bg-red-400" />LIVE NOW</span>
                    <span className="h-1 w-1 rounded-full bg-white/20" />
                    <span className="inline-flex items-center gap-1.5"><UsersRound className="h-3 w-3" />{LIVE_CONVERSATION.watching}</span>
                  </div>

                  <h2 className="mt-1.5 max-w-xl font-serif text-lg leading-[1.1] tracking-[-0.02em] text-white sm:text-xl lg:text-[1.55rem]">
                    {LIVE_CONVERSATION.title}
                  </h2>

                  <div className="mt-1.5 flex items-center gap-2">
                    <p className="font-accent text-sm font-semibold text-white/90">{LIVE_CONVERSATION.name}</p>
                    <VerificationBadge />
                  </div>
                  <p className="mt-0.5 font-accent text-xs text-violet-200/75">{LIVE_CONVERSATION.role} · {LIVE_CONVERSATION.credibility}</p>

                  <p className="mt-1.5 hidden max-w-lg text-xs leading-relaxed text-white/58 sm:block">{LIVE_CONVERSATION.description}</p>

                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-white/[0.1] pt-2 font-accent text-xs text-violet-200/80">
                    <span className="inline-flex items-center gap-1.5"><MessageCircle className="h-3.5 w-3.5" />{LIVE_CONVERSATION.questions}</span>
                  </div>

                  <PrimaryButton to="/live" className="mt-2 w-fit px-4 py-2 text-xs">
                    Enter the conversation
                  </PrimaryButton>
                </div>
              </div>
            </article>
          </FadeUp>
        </section>
      </div>

      <section className="relative border-t border-white/[0.08] bg-[#06070d] px-6 pb-6 pt-3 lg:px-10 lg:pb-8 lg:pt-4">
        <div className="mx-auto max-w-[1360px]">
          <SectionLabel action={<Link to="/live" className="inline-flex items-center gap-1 font-accent text-xs text-white/50 transition hover:text-white">View all <ChevronRight className="h-4 w-4" /></Link>}>
            Upcoming live conversations
          </SectionLabel>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {UPCOMING_CONVERSATIONS.map((conversation, index) => (
              <ConversationCard key={conversation.topic} conversation={conversation} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <FadeUp>
            <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">The EXPERIA difference</p>
            <h2 className="mt-5 max-w-md font-serif text-4xl leading-[1.06] tracking-[-0.025em] text-white sm:text-5xl">
              Got a question?
              <br />
              <span className="text-white/45">Find the person who lived the answer.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/52">
              EXPERIA matches curiosity with real-world experience, then gives you a room where questions are part of the experience—not an afterthought.
            </p>
            <PrimaryButton to="/explore" className="mt-8">Explore by question</PrimaryButton>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="relative rounded-[1.8rem] border border-white/[0.1] bg-white/[0.035] p-6 shadow-[0_22px_80px_rgba(0,0,0,0.22)] sm:p-8">
              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-3xl" />
              <div className="relative">
                <p className="font-accent text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-white/40">Your question</p>
                <div className="mt-3 rounded-2xl border border-violet-300/25 bg-[#0a0b13] px-5 py-4 font-serif text-xl leading-snug text-white/90 sm:text-2xl">
                  “How do I raise my first startup round?”
                </div>

                <div className="flex items-center gap-3 py-5">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-300/40 to-transparent" />
                  <span className="rounded-full border border-violet-300/25 bg-violet-300/10 px-3 py-1 font-accent text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-violet-200">EXPERIA</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-300/40 to-transparent" />
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[LIVE_CONVERSATION, UPCOMING_CONVERSATIONS[1], { ...UPCOMING_CONVERSATIONS[0], name: "Kavya Iyer", role: "Angel Investor", credibility: "50+ investments", image: IMAGES.neha }].map((expert, index) => (
                    <div key={`${expert.name}-${index}`} className="rounded-2xl border border-white/[0.09] bg-black/20 p-3 transition hover:border-violet-300/35 hover:bg-white/[0.045]">
                      <img src={expert.image} alt="" loading="lazy" className="h-24 w-full rounded-xl object-cover object-top" />
                      <div className="mt-3 flex items-center gap-1.5">
                        <p className="truncate font-accent text-xs font-semibold text-white/85">{expert.name}</p>
                        <VerificationBadge />
                      </div>
                      <p className="mt-1 truncate text-[0.68rem] text-white/45">{expert.role}</p>
                      <p className="mt-2 text-[0.68rem] leading-relaxed text-violet-200/65">{expert.credibility}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section id="experts" className="border-y border-white/[0.08] bg-[#070810] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1360px]">
          <FadeUp>
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">Expert discovery</p>
                <h2 className="mt-4 font-serif text-4xl leading-[1.06] tracking-[-0.025em] text-white sm:text-5xl">The people who know.<br /><span className="text-white/45">Now within reach.</span></h2>
              </div>
              <div className="flex w-full max-w-sm items-center gap-3 rounded-full border border-white/15 bg-white/[0.035] px-4 py-3 focus-within:border-violet-300/60">
                <Search className="h-4 w-4 text-white/40" />
                <input aria-label="Search experts, topics or questions" placeholder="Search experts, topics or questions..." className="min-w-0 flex-1 bg-transparent font-accent text-xs text-white outline-none placeholder:text-white/35" />
              </div>
            </div>
          </FadeUp>

          <div className="mt-9 flex flex-wrap gap-2">
            {CATEGORY_LINKS.map(({ label, icon: Icon }) => (
              <Link key={label} to={`/experts?category=${label.toLowerCase()}`} className="inline-flex items-center gap-2 rounded-full border border-white/[0.11] px-4 py-2.5 font-accent text-xs text-white/60 transition hover:border-violet-300/45 hover:bg-violet-300/10 hover:text-violet-100">
                <Icon className="h-3.5 w-3.5" />
                {label}
              </Link>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EXPERTS.map((expert, index) => (
              <FadeUp key={expert.name} delay={index * 0.05}>
                <Link to="/experts" className="group block overflow-hidden rounded-[1.35rem] border border-white/[0.1] bg-white/[0.03] p-3 transition duration-300 hover:-translate-y-1 hover:border-violet-300/35 hover:bg-white/[0.055]">
                  <div className="relative overflow-hidden rounded-[1rem]">
                    <img src={expert.image} alt={`${expert.name}, ${expert.role}`} loading="lazy" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090a12] via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-accent text-[0.62rem] font-semibold tracking-[0.14em] text-white/75 backdrop-blur">{expert.category}</span>
                  </div>
                  <div className="px-1.5 pb-2 pt-5">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-2xl text-white">{expert.name}</h3>
                      <VerificationBadge />
                    </div>
                    <p className="mt-1 font-accent text-xs text-violet-200/70">{expert.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/48">{expert.detail}</p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <FadeUp className="max-w-xl">
            <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">How EXPERIA works</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.06] tracking-[-0.025em] text-white sm:text-5xl">One question.<br /><span className="text-white/45">One real conversation.</span></h2>
          </FadeUp>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/[0.1] bg-white/[0.1] md:grid-cols-4">
            {HOW_IT_WORKS.map((step, index) => (
              <FadeUp key={step.number} delay={index * 0.05} className="h-full">
                <div className="flex h-full min-h-[220px] flex-col bg-[#080910] p-6 lg:p-7">
                  <p className="font-accent text-sm font-semibold text-violet-300/70">{step.number}</p>
                  <div className="mt-auto">
                    <h3 className="font-serif text-2xl leading-tight text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/48">{step.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-[#070810] px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1200px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [ShieldCheck, "Verified experience", "Real-world background, not anonymous advice."],
            [MessageCircle, "Live conversations", "Ask questions directly and learn from the room."],
            [UsersRound, "Human access", "Meet people who have actually lived the answer."],
            [Check, "Built for curiosity", "A focused way to go deeper than a search result."],
          ].map(([Icon, title, description], index) => (
            <FadeUp key={title} delay={index * 0.05}>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                <Icon className="h-5 w-5 text-violet-300" />
                <h3 className="mt-5 font-accent text-sm font-semibold text-white/90">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/45">{description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 text-center lg:px-10 lg:py-36">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.12] blur-[130px]" />
        <FadeUp className="mx-auto max-w-3xl">
          <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-violet-300/75">Your next answer is closer than you think</p>
          <h2 className="mt-6 font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-white sm:text-7xl">Somewhere, someone has already done what you’re trying to do.</h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">Find them. Ask them. Learn from them.</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton to="/explore" className="px-7">Explore EXPERIA</PrimaryButton>
            <Link to="/become-an-expert" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-accent text-sm font-semibold text-white/75 transition hover:border-white/35 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">Become an expert <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </FadeUp>
      </section>

      <footer className="border-t border-white/[0.08] px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-[1360px] flex-col gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <Link to="/" className="font-serif text-lg tracking-[0.2em] text-white/85">EXP<span className="text-violet-300">É</span>RIA</Link>
          <p className="font-accent text-xs text-white/35">Live access to people who have actually done it.</p>
          <div className="flex items-center justify-center gap-5 font-accent text-xs text-white/45 sm:justify-end">
            <Link to="/privacy" className="transition hover:text-white">Privacy</Link>
            <Link to="/terms" className="transition hover:text-white">Terms</Link>
            <Link to="/contact" className="transition hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
