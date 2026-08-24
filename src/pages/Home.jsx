import { useState, useEffect } from "react";
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
  Instagram,
  Landmark,
  Linkedin,
  Menu,
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
  Twitter,
  TrendingUp,
  UserRound,
  UsersRound,
  UtensilsCrossed,
  X,
  Youtube,
} from "lucide-react";
import { IMAGES } from "@/data/mockData";

/**
 * EXPERIA final landing page
 *
 * The live metrics and expert credentials below are prototype data. In the
 * production app, replace these values with API-backed data from your live
 * conversation and expert-verification services.
 *
 * The "Upcoming conversations", "Questions worth asking", and "Explore
 * topics" strips are intentionally non-interactive (no links/taps) on this
 * pre-login marketing page — they're informational previews only. Real
 * browsing and reservation happens inside the logged-in product.
 */

const DISCOVERY_TAGS = ["Aviation", "Finance", "Medicine", "Startups", "Manufacturing"];

const LIVE_CONVERSATION = {
  title: "What Nobody Tells You About Building Your First Company",
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
    name: "Capt. Rohit Verma",
    role: "Boeing 777 Captain",
    credibility: "20+ years · Commercial Aviation",
    image: IMAGES.karan,
  },
  {
    date: "25 May",
    time: "8:00 PM IST",
    topic: "Inside Venture Capital",
    name: "Rohan Mehta",
    role: "Partner, Northstar Ventures",
    credibility: "15+ years · Venture Capital",
    image: IMAGES.rahul,
  },
  {
    date: "26 May",
    time: "7:30 PM IST",
    topic: "The Future of Medicine",
    name: "Dr. Ananya Iyer",
    role: "Physician & Researcher",
    credibility: "18+ years · Medicine",
    image: IMAGES.anjali,
  },
  {
    date: "27 May",
    time: "8:00 PM IST",
    topic: "Building from Zero",
    name: "Kunal Shah",
    role: "Founder, CRED",
    credibility: "12+ years · Serial Entrepreneur",
    image: IMAGES.vikram,
  },
  {
    date: "28 May",
    time: "6:30 PM IST",
    topic: "What Michelin Inspectors Actually Notice",
    name: "Chef Meera Nair",
    role: "Executive Chef, Ananta",
    credibility: "16+ years · Culinary Arts",
    image: IMAGES.neha,
  },
  {
    date: "29 May",
    time: "7:00 PM IST",
    topic: "Designing Buildings That Outlive Us",
    name: "Aditya Rao",
    role: "Principal Architect, Studio Line",
    credibility: "14+ years · Architecture",
    image: IMAGES.arjun,
  },
  {
    date: "30 May",
    time: "8:30 PM IST",
    topic: "Inside a Formula 1 Pit Crew",
    name: "Vikram Oberoi",
    role: "Race Engineer",
    credibility: "11+ years · Motorsport",
    image: IMAGES.karan,
  },
  {
    date: "31 May",
    time: "7:00 PM IST",
    topic: "What It Takes to Publish Real Research",
    name: "Dr. Priya Nambiar",
    role: "Research Scientist, ISRO",
    credibility: "13+ years · Aerospace Research",
    image: IMAGES.anjali,
  },
];

const TRENDING_QUESTIONS = [
  {
    icon: Plane,
    question: "What does a commercial pilot actually do during an emergency?",
    curious: "12.4K people curious",
    tag: "Aviation",
  },
  {
    icon: TrendingUp,
    question: "How does a VC decide whether to invest in a startup?",
    curious: "8.7K people curious",
    tag: "Business",
  },
  {
    icon: Heart,
    question: "What really happens inside an emergency room?",
    curious: "6.3K people curious",
    tag: "Medicine",
  },
  {
    icon: Sparkles,
    question: "What does it actually take to build a company from zero?",
    curious: "4.8K people curious",
    tag: "Startups",
  },
  {
    icon: Scale,
    question: "How do lawyers decide whether a case is worth taking?",
    curious: "3.9K people curious",
    tag: "Law",
  },
  {
    icon: Palette,
    question: "How does a designer know when something is actually finished?",
    curious: "3.1K people curious",
    tag: "Design",
  },
  {
    icon: Trophy,
    question: "What separates a good athlete from a great one?",
    curious: "5.6K people curious",
    tag: "Sports",
  },
  {
    icon: FlaskConical,
    question: "What does a scientist do after an experiment fails?",
    curious: "2.7K people curious",
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
  { emphasis: "Learn from experience.", muted: "Not just information." },
  { emphasis: "Ask what you actually want to know.", muted: "Not just watch." },
  { emphasis: "Hear how people really think.", muted: "Not just what they achieved." },
  { emphasis: "Get closer to people you normally couldn't reach.", muted: "That's the actual value." },
];

const HOW_IT_WORKS = [
  { icon: Search, number: "1", title: "Find someone worth hearing from", description: "Find something — or someone — you're curious about." },
  { icon: UserRound, number: "2", title: "Reserve access", description: "A small commitment to reserve your place in the conversation." },
  { icon: CalendarClock, number: "3", title: "Enter the live conversation", description: "Join at the scheduled time." },
  { icon: MessageSquare, number: "4", title: "Listen. Ask. Learn.", description: "Hear their experience. Ask your questions. Get real answers." },
];

const FAQ_ITEMS = [
  { q: "What exactly happens in an EXPÉRIA conversation?", a: "You join a live session with someone who has actually done what you're curious about, hear their experience, and ask them questions directly." },
  { q: "Can I ask the expert questions?", a: "Yes — every conversation includes a question queue. Your questions are part of the conversation, not an afterthought." },
  { q: "Who are the people I can hear from?", a: "Founders, pilots, doctors, investors, engineers, and other people with real, lived experience in their field." },
  { q: "How does EXPÉRIA verify experts?", a: "Every expert's identity and relevant background are reviewed before they can host a conversation." },
  { q: "Is EXPÉRIA a course platform?", a: "No. EXPÉRIA isn't about structured lessons — it's about direct access to people and their real experience." },
  { q: "Why is there a reservation fee?", a: "A small reservation keeps conversations meaningful — it's a commitment to genuinely be part of the room, not the product itself." },
  { q: "What happens if a conversation is cancelled?", a: "You'll be notified immediately and your reservation will be refunded or moved to another session." },
  { q: "Do I need prior knowledge?", a: "No. Come with your curiosity — that's the only requirement." },
];

const FOOTER_LINKS = {
  Explore: [
    { label: "Conversations", to: "/live" },
    { label: "Questions", to: "/questions" },
    { label: "Topics", to: "/topics" },
  ],
  "For Experts": [
    { label: "Become an EXPÉRIA expert", to: "/become-an-expert" },
    { label: "Expert guidelines", to: "/expert-guidelines" },
  ],
  Company: [
    { label: "About", to: "/about" },
    { label: "Mission", to: "/mission" },
    { label: "Contact", to: "/contact" },
  ],
  Trust: [
    { label: "Safety", to: "/safety" },
    { label: "Privacy", to: "/privacy" },
    { label: "Terms", to: "/terms" },
  ],
};

const SOCIAL_LINKS = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
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

// Non-interactive: no link, no click destination. Purely an informational
// preview card for the marquee — real reservation happens after login.
function ConversationPreviewCard({ conversation }) {
  return (
    <article className="flex h-full w-[280px] overflow-hidden rounded-2xl border border-white/[0.11] bg-white/[0.035] sm:w-[320px]">
      <div className="relative w-[38%] shrink-0 overflow-hidden">
        <img
          src={conversation.image}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 px-4 py-3">
        <div className="flex items-center gap-1.5 font-accent text-[0.68rem] text-violet-300">
          <CalendarDays className="h-3.5 w-3.5" />
          {conversation.date} · {conversation.time}
        </div>
        <h3 className="truncate font-serif text-lg leading-tight text-white">{conversation.topic}</h3>
        <div className="flex items-center gap-1.5">
          <p className="truncate font-accent text-sm font-medium text-white/85">{conversation.name}</p>
          <VerificationBadge />
        </div>
        <p className="truncate text-xs text-white/47">{conversation.role} · {conversation.credibility}</p>
        <span className="mt-1.5 inline-flex w-fit items-center justify-center rounded-lg border border-violet-300/40 px-3 py-2 font-accent text-[0.7rem] font-semibold text-violet-100/80">
          Reserve access
        </span>
      </div>
    </article>
  );
}

// Non-interactive preview card for the Questions marquee.
function QuestionPreviewCard({ item }) {
  const Icon = item.icon;
  return (
    <div className="flex h-full w-[280px] flex-col rounded-xl border border-white/[0.1] bg-white/[0.03] p-5 sm:w-[300px]">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
        <Icon className="h-4 w-4" />
      </div>
      <p className="mt-4 flex-1 font-serif text-lg leading-snug text-white">{item.question}</p>
      <p className="mt-4 text-xs text-white/45">{item.curious}</p>
      <span className="mt-2 inline-flex w-fit items-center rounded-lg border border-white/[0.12] px-2.5 py-1 font-accent text-[0.65rem] text-white/55">{item.tag}</span>
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroAnimation = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] },
  });

  const handleSearch = (event) => {
    event.preventDefault();
    // Connect this handler to the Explore search route or API when available.
  };

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    // Connect this handler to your email/newsletter service when available.
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

      {/* 01 — NAVBAR */}
      <div className="relative">
        <header className={`fixed inset-x-0 top-0 z-30 transition-colors duration-300 ${isScrolled ? "border-b border-white/[0.08] bg-black" : "border-b border-transparent bg-transparent"}`}>
          <nav className="mx-auto flex h-[58px] max-w-[1440px] items-center justify-between px-6 lg:px-10" aria-label="Main navigation">
            <Link to="/" className="font-serif text-[1.55rem] tracking-[0.23em] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">
              EXP<span className="text-violet-300">É</span>RIA
            </Link>

            <div className="hidden items-center gap-7 font-accent text-sm text-white/60 md:flex">
              <a href="#why" className="transition hover:text-white">Why EXPÉRIA</a>
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
                <a href="#why" onClick={() => setIsMenuOpen(false)}>Why EXPÉRIA</a>
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

        {/* 02 — HERO */}
        <section className="relative mx-auto max-w-[1440px] px-6 pb-4 pt-[74px] lg:px-10 lg:pb-5 lg:pt-[82px]">
          <div className="mx-auto max-w-[1050px] text-center">
            <motion.h1 {...heroAnimation(0.08)} className="font-serif text-[1.9rem] leading-[1.06] tracking-[-0.02em] text-white sm:text-4xl sm:leading-[1.02] sm:tracking-[-0.03em] lg:text-[3.1rem]">
              Don't Just Learn It.
              <br />
              Ask Someone Who's{" "}
              <span className="bg-gradient-to-r from-violet-200 via-violet-400 to-indigo-300 bg-clip-text text-transparent">Done It.</span>
            </motion.h1>

            <motion.p {...heroAnimation(0.16)} className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/55 sm:text-base">
              Get access to people who've actually lived the experience — not just people who've studied it.
            </motion.p>

            <motion.form {...heroAnimation(0.24)} onSubmit={handleSearch} className="mx-auto mt-6 lg:mt-7 max-w-[512px]">
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
                  Explore
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </motion.form>

            {/* 03 — TOPIC CURIOSITY */}
            <motion.div {...heroAnimation(0.3)} className="mt-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 font-accent text-[0.7rem] text-white/42 sm:text-xs">
              {DISCOVERY_TAGS.map((tag, index) => (
                <Link key={tag} to={`/explore?topic=${tag.toLowerCase()}`} className="transition hover:text-violet-200">
                  {tag}
                  {index < DISCOVERY_TAGS.length - 1 && <span className="ml-3 text-violet-300/50">·</span>}
                </Link>
              ))}
            </motion.div>
          </div>

          {/* 04 — LIVE NOW */}
          <FadeUp className="relative mx-auto mt-10 max-w-[900px] lg:mt-12">
  <div className="pointer-events-none absolute -inset-24 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.35),rgba(124,58,237,0.1)_40%,transparent_70%)]" />
  <article className="group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0b0c16] shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
              <div className="relative grid min-h-[200px] lg:grid-cols-[0.8fr_1.2fr] lg:min-h-[230px]">
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

                  <h2 className="mt-2 max-w-xl font-serif text-xl leading-[1.1] tracking-[-0.015em] text-white sm:text-2xl lg:text-[1.85rem]">
                    {LIVE_CONVERSATION.title}
                  </h2>

                  <div className="mt-2 flex items-center gap-2">
                    <p className="font-accent text-sm font-semibold text-white/90">{LIVE_CONVERSATION.name}</p>
                    <VerificationBadge />
                  </div>
                  <p className="mt-0.5 font-accent text-xs text-violet-200/75">{LIVE_CONVERSATION.role} · {LIVE_CONVERSATION.credibility}</p>

                  <p className="mt-2 hidden max-w-lg text-xs leading-relaxed text-white/58 sm:block">{LIVE_CONVERSATION.description}</p>

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

      {/* 05 — ACCESS GAP */}
      <section className="relative px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="font-serif text-2xl leading-snug text-white sm:text-3xl">
            You can watch them. You can follow them. You can read about them.
            <br className="hidden sm:block" />
            <span className="text-violet-300">But can you ask them?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/50 sm:text-base">
            EXPÉRIA exists to close that gap. Some people are worth hearing from — the difficult part has always been access.
            You don't always need another course. Sometimes you need to hear how someone ahead of you thinks.
          </p>
        </div>
      </section>

      {/* 06 — QUESTIONS PEOPLE WANT ANSWERED (auto-sliding preview, not tappable) */}
      <section className="relative py-14 lg:py-16">
        <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
          <SectionLabel action={<Link to="/questions" className="inline-flex items-center gap-1 font-accent text-xs text-white/50 transition hover:text-white">View all questions <ChevronRight className="h-4 w-4" /></Link>}>
            Questions worth asking
          </SectionLabel>
          <p className="-mt-4 mb-6 max-w-md text-sm text-white/45">Hear the answer from someone who's actually done it.</p>
        </div>
        <Marquee items={TRENDING_QUESTIONS} keyFn={(item, i) => `${item.question}-${i}`} renderItem={(item) => <QuestionPreviewCard item={item} />} duration={50} />
      </section>

      {/* 07 — PEOPLE WHO'VE DONE IT (auto-sliding preview, not tappable) */}
      <section className="relative py-14 lg:py-16">
        <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
          <SectionLabel action={<Link to="/live" className="inline-flex items-center gap-1 font-accent text-xs text-white/50 transition hover:text-white">View all <ChevronRight className="h-4 w-4" /></Link>}>
            Upcoming live conversations
          </SectionLabel>
        </div>
        <Marquee items={UPCOMING_CONVERSATIONS} keyFn={(c) => c.topic} renderItem={(c) => <ConversationPreviewCard conversation={c} />} duration={60} reverse />
      </section>

      {/* EXPLORE TOPICS (auto-sliding preview, not tappable) */}
      <section className="relative py-10 lg:py-12">
        <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
          <SectionLabel>Explore topics</SectionLabel>
        </div>
        <Marquee items={EXPLORE_TOPICS} keyFn={(t) => t.label} renderItem={(t) => <TopicPill item={t} />} duration={38} />
      </section>

      {/* 08 — WHY EXPERIA */}
      <section id="why" className="relative px-6 py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[720px]">
          <div className="grid gap-6 sm:grid-cols-2">
            {WHY_EXPERIA.map(({ emphasis, muted }) => (
              <FadeUp key={emphasis}>
                <p className="font-serif text-lg leading-snug text-white sm:text-xl">{emphasis}</p>
                <p className="mt-1 text-sm text-white/40">{muted}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — HOW IT WORKS */}
      <section className="relative px-6 py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="font-serif text-2xl text-white sm:text-3xl">
            How <span className="text-violet-300">EXPÉRIA</span> works
          </h2>

          <div className="relative mt-12 hidden grid-cols-4 items-start sm:grid">
            <div className="absolute left-[12.5%] right-[12.5%] top-6 border-t border-dashed border-white/15" />
            {HOW_IT_WORKS.map(({ icon: Icon, number, title, description }) => (
              <div key={number} className="relative flex flex-col items-center px-3 text-center">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-violet-300/30 bg-[#0b0c16] text-violet-300">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 font-accent text-sm font-semibold text-white/90">{number}. {title}</p>
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
                <p className="mt-4 font-accent text-sm font-semibold text-white/90">{number}. {title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-white/45">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — TRUST */}
      <section className="relative px-6 py-8 lg:px-10">
        <div className="mx-auto max-w-[1000px] rounded-xl border border-white/[0.08] bg-white/[0.02] px-6 py-6 text-center sm:px-10">
          <p className="font-serif text-lg text-white">People worth listening to.</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-accent text-xs text-white/55 sm:text-sm">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-violet-300" />Identity verified</span>
            <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-violet-300" />Background verified where applicable</span>
            <span className="inline-flex items-center gap-2"><UserRound className="h-4 w-4 text-violet-300" />Real, contextualized experience</span>
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
          <h2 className="font-serif text-4xl leading-[1.15] text-white sm:text-5xl">Get closer to the people who've done it.</h2>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton to="/explore" className="px-7">Enter EXPÉRIA</PrimaryButton>
          </div>
        </FadeUp>
      </section>

      {/* 13 — FOOTER */}
      <footer className="border-t border-white/[0.08] px-6 py-12 lg:px-10">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <div>
              <Link to="/" className="font-serif text-lg tracking-[0.2em] text-white/85">EXP<span className="text-violet-300">É</span>RIA</Link>
              <p className="mt-3 max-w-[240px] text-xs leading-relaxed text-white/40">Real people. Real experience. Real access.</p>
              <div className="mt-5 flex items-center gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/50 transition hover:border-violet-300/40 hover:text-violet-200">
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <p className="font-accent text-xs font-semibold uppercase tracking-[0.16em] text-white/40">{heading}</p>
                <ul className="mt-4 space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="font-accent text-sm text-white/60 transition hover:text-white">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-2 border-t border-white/[0.08] pt-6 text-center font-accent text-xs text-white/30 sm:text-left">
            <p>Conversations on EXPÉRIA are educational and don't replace professional medical, legal, or financial advice.</p>
            <p>©️ {new Date().getFullYear()} EXPÉRIA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
