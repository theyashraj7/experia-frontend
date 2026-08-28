import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  CalendarClock,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Code2,
  Factory,
  FlaskConical,
  Gamepad2,
  Heart,
  Landmark,
  MessageCircle,
  MessageSquare,
  Music,
  Palette,
  Plane,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Trophy,
  UserRound,
  UsersRound,
  UtensilsCrossed,
} from "lucide-react";
import { IMAGES } from "@/data/mockData";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

/**
 * EXPERIA final landing page
 *
 * The live metrics and expert credentials below are prototype data. In the
 * production app, replace these values with API-backed data from your live
 * conversation and expert-verification services.
 *
 * The "Questions", "Upcoming conversations", and "Explore topics" strips
 * are intentionally non-interactive (no links/taps) on this pre-login
 * marketing page — they're informational previews only. Real browsing and
 * reservation happens inside the logged-in product.
 */

const LIVE_CONVERSATION = {
  eyebrow: "Inside the mind of a founder",
  question: "A Conversation With a Founder",
  name: "Arjun Malhotra",
  role: "Founder & CEO, Pesto Tech",
  credibility: "10+ years building companies",
  watching: "1,247 watching",
  questions: "23 questions being discussed",
  image: IMAGES.arjun,
};

const UPCOMING_CONVERSATIONS = [
  {
    topic: "Life in the Cockpit",
    question: "What actually happens inside a pilot's mind when things go wrong at 35,000 feet?",
    date: "24 May",
    time: "7:00 PM IST",
    name: "Capt. Rohit Verma",
    role: "Boeing 777 Captain",
    credibility: "20+ years · Commercial Aviation",
    image: IMAGES.karan,
  },
  {
    topic: "Inside Venture Capital",
    question: "What makes a VC lose interest in a startup in the first 10 minutes?",
    date: "25 May",
    time: "8:00 PM IST",
    name: "Rohan Mehta",
    role: "Partner, Northstar Ventures",
    credibility: "15+ years · Venture Capital",
    image: IMAGES.rahul,
  },
  {
    topic: "The Future of Medicine",
    question: "What does an experienced doctor notice that a textbook never teaches you?",
    date: "26 May",
    time: "7:30 PM IST",
    name: "Dr. Ananya Iyer",
    role: "Physician & Researcher",
    credibility: "18+ years · Medicine",
    image: IMAGES.anjali,
  },
  {
    topic: "Building from Zero",
    question: "What does nobody tell you before you build your first company?",
    date: "27 May",
    time: "8:00 PM IST",
    name: "Kunal Shah",
    role: "Founder, CRED",
    credibility: "12+ years · Serial Entrepreneur",
    image: IMAGES.vikram,
  },
  {
    topic: "What Michelin Inspectors Notice",
    question: "What separates a good kitchen from an unforgettable one?",
    date: "28 May",
    time: "6:30 PM IST",
    name: "Chef Meera Nair",
    role: "Executive Chef, Ananta",
    credibility: "16+ years · Culinary Arts",
    image: IMAGES.neha,
  },
  {
    topic: "Designing Buildings That Outlive Us",
    question: "What does an architect think about that a client never notices?",
    date: "29 May",
    time: "7:00 PM IST",
    name: "Aditya Rao",
    role: "Principal Architect, Studio Line",
    credibility: "14+ years · Architecture",
    image: IMAGES.arjun,
  },
  {
    topic: "Inside a Formula 1 Pit Crew",
    question: "What happens in the 2 seconds nobody watching on TV ever notices?",
    date: "30 May",
    time: "8:30 PM IST",
    name: "Vikram Oberoi",
    role: "Race Engineer",
    credibility: "11+ years · Motorsport",
    image: IMAGES.karan,
  },
  {
    topic: "What It Takes to Publish Real Research",
    question: "What does a scientist do the day an experiment fails, again?",
    date: "31 May",
    time: "7:00 PM IST",
    name: "Dr. Priya Nambiar",
    role: "Research Scientist, ISRO",
    credibility: "13+ years · Aerospace Research",
    image: IMAGES.anjali,
  },
];

const TRENDING_QUESTIONS = [
  {
    icon: Plane,
    question: "What goes through a pilot's mind when an emergency happens at 35,000 feet?",
    tag: "Aviation",
  },
  {
    icon: Briefcase,
    question: "What makes a VC lose interest in a startup in the first 10 minutes?",
    tag: "Business",
  },
  {
    icon: Heart,
    question: "What does an experienced doctor notice that a textbook never teaches you?",
    tag: "Medicine",
  },
  {
    icon: Sparkles,
    question: "What does nobody tell you before you build your first company?",
    tag: "Startups",
  },
  {
    icon: Scale,
    question: "How does an experienced lawyer know when a case isn't worth taking?",
    tag: "Law",
  },
  {
    icon: Palette,
    question: "How does a great designer know when something isn't good enough?",
    tag: "Design",
  },
  {
    icon: Trophy,
    question: "What actually separates elite athletes from everyone else?",
    tag: "Sports",
  },
  {
    icon: FlaskConical,
    question: "What does a scientist do when an experiment keeps failing?",
    tag: "Science",
  },
];

const EXPLORE_TOPICS = [
  { icon: Plane, label: "Aviation" },
  { icon: Briefcase, label: "Business" },
  { icon: Landmark, label: "Finance" },
  { icon: Heart, label: "Medicine" },
  { icon: Code2, label: "Technology" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Scale, label: "Law" },
  { icon: Palette, label: "Design" },
  { icon: Trophy, label: "Sports" },
  { icon: FlaskConical, label: "Science" },
  { icon: Music, label: "Music" },
  { icon: UtensilsCrossed, label: "Culinary Arts" },
  { icon: Gamepad2, label: "Game Design" },
  { icon: Stethoscope, label: "Surgery" },
];

const WHY_EXPERIA = [
  "Ask what you actually want to know.",
  "Hear how people really think.",
  "Understand what happened along the way.",
];

const HOW_IT_WORKS = [
  { icon: Search, number: "01", title: "Find your question", description: "Start with something you've genuinely been wondering about." },
  { icon: UserRound, number: "02", title: "Find someone who's lived it", description: "Meet people with real experience in that world." },
  { icon: CalendarClock, number: "03", title: "Reserve your seat", description: "Save your place in the conversation." },
  { icon: MessageSquare, number: "04", title: "Ask.", description: "Listen to their experience. Ask what you actually want to know." },
];

const FAQ_ITEMS = [
  { q: "What exactly happens in an EXPÉRIA conversation?", a: "You join a live session with someone who has actually done what you're curious about, hear their experience, and ask them questions directly." },
  { q: "What makes EXPÉRIA different from watching an expert on YouTube?", a: "YouTube lets you watch someone else's conversation. EXPÉRIA lets you enter one." },
  { q: "Can I ask the expert questions?", a: "Yes — every conversation includes a question queue. Your questions are part of the conversation, not an afterthought." },
  { q: "Who are the people I can hear from?", a: "Founders, pilots, doctors, investors, engineers, and other people with real, lived experience in their field." },
  { q: "How does EXPÉRIA verify experts?", a: "Every expert's identity and relevant background are reviewed before they can host a conversation." },
  { q: "Is EXPÉRIA a course platform?", a: "No. EXPÉRIA isn't about structured lessons — it's about direct access to people and their real experience." },
  { q: "Why is there a reservation fee?", a: "A small reservation keeps conversations meaningful — it's a commitment to genuinely be part of the room, not the product itself." },
  { q: "What happens if a conversation is cancelled?", a: "You'll be notified immediately and your reservation will be refunded or moved to another session." },
  { q: "Do I need prior knowledge?", a: "No. Come with your curiosity — that's the only requirement." },
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

// Slow, continuous, non-interactive auto-scrolling strip. Used for the
// informational previews that shouldn't be tappable before login.
function Marquee({ items, renderItem, keyFn, duration = 45, reverse = false }) {
  const reduce = useReducedMotion();
  const doubled = reduce ? items : [...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ maskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)" }}
    >
      <motion.div
        className="flex w-max gap-4 pb-1"
        animate={reduce ? undefined : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={reduce ? undefined : { duration, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <div key={keyFn(item, i)} className="shrink-0">
            {renderItem(item)}
          </div>
        ))}
      </motion.div>
    </div>
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
      className={`group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-3 font-accent text-sm font-semibold text-white shadow-[0_12px_32px_rgba(109,78,255,0.26)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(109,78,255,0.38)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05060b] ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}

// Non-interactive: no link, no click destination — question leads, date is secondary.
function ConversationPreviewCard({ conversation }) {
  return (
    <article className="flex h-full w-[300px] flex-col overflow-hidden rounded-2xl border border-white/[0.11] bg-white/[0.035] sm:w-[340px]">
      <div className="relative h-32 w-full overflow-hidden">
        <img src={conversation.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c16] via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 px-4 py-3.5">
        <p className="font-accent text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-violet-300/70">{conversation.topic}</p>
        <p className="font-serif text-base leading-snug text-white">{conversation.question}</p>
        <div className="mt-auto flex items-center gap-1.5 pt-2">
          <p className="truncate font-accent text-xs font-medium text-white/85">{conversation.name}</p>
          <VerificationBadge />
        </div>
        <p className="truncate text-[0.7rem] text-white/45">{conversation.role} · {conversation.credibility}</p>
        <div className="mt-1.5 flex items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 font-accent text-[0.65rem] text-white/40">
            <CalendarDays className="h-3 w-3" />
            {conversation.date} · {conversation.time}
          </span>
          <span className="font-accent text-[0.68rem] font-semibold text-violet-300/80">Reserve your seat →</span>
        </div>
      </div>
    </article>
  );
}

// Non-interactive preview card for the Questions marquee — no fake numbers.
function QuestionPreviewCard({ item }) {
  const Icon = item.icon;
  return (
    <div className="flex h-full w-[280px] flex-col rounded-xl border border-white/[0.1] bg-white/[0.03] p-5 sm:w-[300px]">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
        <Icon className="h-4 w-4" />
      </div>
      <p className="mt-4 flex-1 font-serif text-lg leading-snug text-white">{item.question}</p>
      <p className="mt-4 font-accent text-[0.68rem] text-violet-300/75">{item.tag} · Live conversation</p>
    </div>
  );
}

// Non-interactive pill for the Topics marquee.
function TopicPill({ item }) {
  const Icon = item.icon;
  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-white/[0.1] bg-white/[0.03] px-4 py-2.5 font-accent text-xs text-white/60">
      <Icon className="h-3.5 w-3.5 text-violet-300" />
      {item.label}
    </div>
  );
}

export default function Home() {
  const reduce = useReducedMotion();
  const [query, setQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

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
    <main className="min-h-screen overflow-hidden bg-black text-white selection:bg-violet-400/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
        <div className="absolute left-1/2 top-[-24rem] h-[58rem] w-[72rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.22)_0%,transparent_65%)]" />
        <div className="absolute right-[-18rem] top-[30rem] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.22)_0%,transparent_65%)]" />
        <div className="absolute left-[-22rem] top-[48rem] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.12)_0%,transparent_65%)]" />
        <svg className="absolute left-0 top-[22%] h-[460px] w-[680px] opacity-70" viewBox="0 0 620 420" fill="none">
          <defs>
            <linearGradient id="streak1" x1="0" y1="0" x2="620" y2="420" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#c4b5fd" stopOpacity="0" />
              <stop offset="0.5" stopColor="#c4b5fd" stopOpacity="0.85" />
              <stop offset="1" stopColor="#c4b5fd" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 60 Q 220 120 320 260 T 560 400" stroke="url(#streak1)" strokeWidth="1.5" />
          <path d="M40 0 Q 200 160 300 220 T 500 340" stroke="url(#streak1)" strokeWidth="1" />
          <path d="M0 160 Q 180 200 260 300 T 460 400" stroke="url(#streak1)" strokeWidth="0.75" />
        </svg>
        <svg className="absolute right-0 top-[8%] h-[400px] w-[560px] scale-x-[-1] opacity-50" viewBox="0 0 620 420" fill="none">
          <defs>
            <linearGradient id="streak2" x1="0" y1="0" x2="620" y2="420" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#818cf8" stopOpacity="0" />
              <stop offset="0.5" stopColor="#818cf8" stopOpacity="0.7" />
              <stop offset="1" stopColor="#818cf8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 40 Q 200 100 300 220 T 540 360" stroke="url(#streak2)" strokeWidth="1.25" />
        </svg>
      </div>

      {/* NAVBAR */}
      <div className="relative">
        <SiteHeader floating />

        {/* 01 — HERO */}
        <section className="relative mx-auto max-w-[1440px] px-6 pb-4 pt-[74px] lg:px-10 lg:pb-5 lg:pt-[82px]">
          <div className="mx-auto max-w-[1050px] text-center">
            <motion.h1 {...heroAnimation(0.08)} className="font-serif text-[1.9rem] leading-[1.06] tracking-[-0.02em] text-white sm:text-4xl sm:leading-[1.02] sm:tracking-[-0.03em] lg:text-[3.1rem]">
              Some Answers Can't Be{" "}
              <span className="bg-gradient-to-r from-violet-200 via-violet-400 to-indigo-300 bg-clip-text text-transparent">Googled.</span>
            </motion.h1>

            <motion.p {...heroAnimation(0.16)} className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/55 sm:text-base">
              The internet gives you information. EXPERIA gives you access to people who've actually lived it.
            </motion.p>

            <motion.form {...heroAnimation(0.24)} onSubmit={handleSearch} className="mx-auto mt-4 lg:mt-5 max-w-[512px]">
              <label htmlFor="experia-search" className="sr-only">What are you curious about?</label>
             <div className="glare-border flex items-center gap-2 rounded-full border border-violet-400/60 bg-white/[0.055] p-1.5 pl-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_0_1px_rgba(167,139,250,0.15),0_18px_70px_rgba(76,29,149,0.25)] transition focus-within:border-violet-300 focus-within:bg-white/[0.08]">
                <Search className="h-3.5 w-3.5 shrink-0 text-white/45" />
                <input
                  id="experia-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="What are you curious about?"
                  className="min-w-0 flex-1 bg-transparent py-1 font-accent text-xs text-white outline-none placeholder:text-white/38"
                />
                <button type="submit" className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 font-accent text-[0.7rem] font-semibold text-[#12131d] transition hover:bg-violet-100 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">
                  Find
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </motion.form>

            <motion.p {...heroAnimation(0.3)} className="mt-3 font-accent text-[0.7rem] italic text-white/35 sm:text-xs">
              Ask. Listen. Learn from experience.
            </motion.p>
          </div>

          {/* 03 — LIVE PROOF */}
          <FadeUp className="relative mx-auto mt-10 max-w-[900px] lg:mt-12">
  <div className="pointer-events-none absolute -inset-24 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.35),rgba(124,58,237,0.1)_40%,transparent_70%)]" />
  <article className="group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0b0c16] shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
              <div className="relative grid min-h-[240px] lg:grid-cols-[0.8fr_1.2fr] lg:min-h-[276px]">
                <div className="relative min-h-[150px] overflow-hidden lg:min-h-full">
                  <img src={LIVE_CONVERSATION.image} alt={`${LIVE_CONVERSATION.name}, ${LIVE_CONVERSATION.role}`} className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.025]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080910] via-[#080910]/15 to-transparent" />
                  <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-[#0b0c16] to-transparent lg:block" />
                </div>

                <div className="relative flex flex-col justify-center px-5 py-4 pb-9 sm:px-7 lg:px-8 lg:py-5 lg:pb-10">
                  <div className="flex items-center gap-3 font-accent text-[0.7rem] text-white/60">
                    <span className="inline-flex items-center gap-2 font-bold text-red-500"><span className="h-2 w-2 animate-pulse rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.9)]" />LIVE NOW</span>
                    <span className="h-1 w-1 rounded-full bg-white/20" />
                    <span className="inline-flex items-center gap-1.5 font-semibold text-white/85"><UsersRound className="h-3.5 w-3.5" />{LIVE_CONVERSATION.watching}</span>
                  </div>

                  <p className="mt-2.5 font-accent text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-violet-300/80">{LIVE_CONVERSATION.eyebrow}</p>
                  <h2 className="mt-1.5 max-w-xl font-serif text-xl leading-[1.1] tracking-[-0.015em] text-white sm:text-2xl lg:text-[1.7rem]">
                    {LIVE_CONVERSATION.question}
                  </h2>

                  <div className="mt-3 flex items-center gap-2">
                    <p className="font-accent text-sm font-semibold text-white/90">{LIVE_CONVERSATION.name}</p>
                    <VerificationBadge />
                  </div>
                  <p className="mt-0.5 font-accent text-xs text-violet-200/75">{LIVE_CONVERSATION.role} · {LIVE_CONVERSATION.credibility}</p>

                  <div className="mt-2.5 flex items-center gap-1.5 font-accent text-xs text-violet-200/80">
                    <MessageCircle className="h-3.5 w-3.5" />{LIVE_CONVERSATION.questions}
                  </div>

                  <PrimaryButton to="/live" className="absolute bottom-3 right-5 px-4 py-2 text-xs sm:bottom-3.5 sm:right-7 lg:bottom-3.5 lg:right-8">
                    Enter the conversation
                  </PrimaryButton>
                </div>
              </div>
            </article>
          </FadeUp>
        </section>
      </div>

      {/* 02 — PROBLEM */}
      <section className="relative px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-serif text-2xl leading-snug text-white sm:text-3xl">You've already searched for the answer.</h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/50 sm:text-base">
            You watched the videos. Read the articles. Asked AI. Maybe even took a course.
            And sometimes you're still left wondering —
          </p>
          <p className="mt-4 font-serif text-[1.35rem] font-medium italic leading-snug tracking-[-0.02em] text-violet-300 sm:text-[1.65rem]">
  "But what is it actually like?"
</p>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/40">
            Information can tell you what to do. Experience can tell you what happens when you do it.
          </p>
        </div>
      </section>

      {/* 04 — THE GAP */}
      <section className="relative px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="font-serif text-2xl leading-snug text-white sm:text-3xl">
            You've seen what they achieved.
            <br className="hidden sm:block" />
            <span className="text-violet-300">Now ask them why.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/50 sm:text-base">
            You can watch their interviews. Follow their work. Read about their success. Study what they built.
            But there is a distance between watching someone's experience and having a conversation with them.
            EXPÉRIA closes that distance.
          </p>
        </div>
      </section>

      {/* 05 — QUESTIONS (auto-sliding preview, not tappable) */}
      <section className="relative py-14 lg:py-16">
        <div className="mx-auto max-w-[1360px] px-6 text-center lg:px-10">
          <h2 className="font-serif text-2xl text-white sm:text-3xl">The questions that matter aren't always in the textbook.</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/45">
            The things you're most curious about are often the things you can't learn from information alone.
          </p>
        </div>
        <div className="mt-8">
          <Marquee items={TRENDING_QUESTIONS} keyFn={(item, i) => `${item.question}-${i}`} renderItem={(item) => <QuestionPreviewCard item={item} />} duration={50} />
        </div>
      </section>

      {/* 06 — UPCOMING (auto-sliding preview, not tappable) */}
      <section className="relative py-14 lg:py-16">
        <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
          <SectionLabel action={<Link to="/live" className="inline-flex items-center gap-1 font-accent text-xs text-white/50 transition hover:text-white">View all <ChevronRight className="h-4 w-4" /></Link>}>
            Don't just watch from the outside
          </SectionLabel>
        </div>
        <Marquee items={UPCOMING_CONVERSATIONS} keyFn={(c) => c.topic} renderItem={(c) => <ConversationPreviewCard conversation={c} />} duration={65} reverse />
      </section>

      {/* 07 — TOPICS (auto-sliding preview, not tappable, kept compact) */}
      <section className="relative py-10 lg:py-12">
        <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
          <SectionLabel>What are you curious about?</SectionLabel>
        </div>
        <Marquee items={EXPLORE_TOPICS} keyFn={(t) => t.label} renderItem={(t) => <TopicPill item={t} />} duration={38} />
      </section>

      {/* 08 — POSITIONING */}
      <section id="why" className="relative px-6 py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-serif text-2xl leading-snug text-white sm:text-3xl">
            Information tells you what happened.
            <br className="hidden sm:block" />
            <span className="text-violet-300">Experience tells you why.</span>
          </h2>
          <div className="mx-auto mt-8 flex flex-col items-center gap-3">
            {WHY_EXPERIA.map((line) => (
              <FadeUp key={line}>
                <p className="text-sm text-white/55 sm:text-base">{line}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — HOW IT WORKS */}
      <section className="relative px-6 py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="font-serif text-2xl text-white sm:text-3xl">
            From "I wonder..." to <span className="text-violet-300">"Now I know."</span>
          </h2>

          <div className="relative mt-12 hidden grid-cols-4 items-start sm:grid">
            <div className="absolute left-[12.5%] right-[12.5%] top-6 border-t border-dashed border-white/15" />
            {HOW_IT_WORKS.map(({ icon: Icon, number, title, description }) => (
              <div key={number} className="relative flex flex-col items-center px-3 text-center">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-violet-300/30 bg-[#0b0c16] text-violet-300">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 font-accent text-sm font-semibold text-white/90">{number} — {title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-white/45">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:hidden">
            {HOW_IT_WORKS.map(({ icon: Icon, number, title, description }) => (
              <div key={number} className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-violet-300/30 bg-[#0b0c16] text-violet-300">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 font-accent text-sm font-semibold text-white/90">{number} — {title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-white/45">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — TRUST */}
      <section className="relative px-6 py-10 lg:px-10">
        <div className="mx-auto max-w-[1000px] rounded-xl border border-white/[0.08] bg-white/[0.02] px-6 py-7 text-center sm:px-10">
          <p className="font-serif text-xl text-white">Experience is the credential.</p>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/50">
            EXPÉRIA brings you closer to people who've actually spent years doing the work.
            Their decisions. Their mistakes. Their breakthroughs. The parts that rarely make it into the textbook.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-accent text-xs text-white/55 sm:text-sm">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-violet-300" />Identity verified</span>
            <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-violet-300" />Experience reviewed where applicable</span>
            <span className="inline-flex items-center gap-2"><UserRound className="h-4 w-4 text-violet-300" />Real-world experience</span>
          </div>
        </div>
      </section>

      {/* 11 — FAQ */}
      <section className="relative px-6 py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1200px]">
          <SectionLabel action={<Link to="/faq" className="inline-flex items-center gap-1 font-accent text-xs text-white/50 transition hover:text-white">View all FAQs <ChevronRight className="h-4 w-4" /></Link>}>
            Frequently asked questions
          </SectionLabel>
          <div className="grid gap-3 sm:grid-cols-2">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={item.q} className="rounded-xl border border-white/[0.1] bg-white/[0.03]">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left font-accent text-sm text-white/85"
                  >
                    {item.q}
                    <ChevronDown className={`h-4 w-4 shrink-0 text-white/45 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <p className="border-t border-white/[0.08] px-4 py-3.5 text-sm leading-relaxed text-white/55">{item.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12 — FINAL CTA */}
      <section className="relative overflow-hidden px-6 py-24 text-center lg:px-10 lg:py-36">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.2)_0%,transparent_65%)]" />
        <FadeUp className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl leading-[1.15] text-white sm:text-5xl">
            You have a question.
            <br />
            Someone out there has already lived the answer.
          </h2>
          <p className="mt-5 font-serif text-lg italic text-white/50">Find them.</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton to="/explore" className="px-7">Find your conversation</PrimaryButton>
          </div>
          <p className="mt-8 font-accent text-xs uppercase tracking-[0.2em] text-white/35">Real people. Real experience. Real access.</p>
        </FadeUp>
      </section>

      {/* 13 — FOOTER */}
      <SiteFooter />
    </main>
  );
}
