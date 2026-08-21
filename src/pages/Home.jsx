import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  CalendarClock,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  Code2,
  Compass,
  Factory,
  FlaskConical,
  Heart,
  Instagram,
  Landmark,
  Linkedin,
  Menu,
  MessageCircle,
  MessageSquare,
  Plane,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TrendingUp,
  Twitter,
  UserRound,
  UsersRound,
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

const WHY_EXPERIA = [
  {
    icon: UsersRound,
    title: "Learn from experience",
    description: "Not theory from a textbook. Hear how things actually work from someone who has lived it.",
  },
  {
    icon: MessageSquare,
    title: "Ask real questions",
    description: "You don't just watch. Ask the questions you actually care about, live.",
  },
  {
    icon: UserRound,
    title: "Meet the people behind the experience",
    description: "Discover experts by their experience, industry, and stories — not just a title.",
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
];

const EXPLORE_EXPERIENCE = [
  { icon: Plane, title: "Aviation", description: "Pilots, engineers, airline leaders" },
  { icon: Briefcase, title: "Business", description: "Founders, CEOs, operators" },
  { icon: Landmark, title: "Finance", description: "Investors, analysts, traders, CFOs" },
  { icon: Heart, title: "Medicine", description: "Doctors, surgeons, healthcare pros" },
  { icon: Code2, title: "Technology", description: "Engineers, PMs, tech leaders" },
  { icon: Factory, title: "Manufacturing", description: "Engineers, plant heads, industry experts" },
];

const HOW_IT_WORKS = [
  { icon: Search, number: "1", title: "Find", description: "Find something you're curious about." },
  { icon: UserRound, number: "2", title: "Discover", description: "Find someone who has actually done it." },
  { icon: CalendarClock, number: "3", title: "Join", description: "Join the live conversation at the scheduled time." },
  { icon: MessageSquare, number: "4", title: "Ask", description: "Ask your questions. Get real answers." },
];

const FAQ_ITEMS = [
  { q: "What is EXPERIA?", a: "EXPERIA connects you with real people who have lived the experience you're curious about, through live conversations." },
  { q: "Are conversations live?", a: "Yes, conversations happen live at a scheduled time so you can ask questions directly." },
  { q: "Can I become an expert?", a: "Yes — if you have real-world experience worth sharing, you can apply to host a conversation." },
  { q: "How are experts verified?", a: "Every expert is reviewed for real-world credentials and experience before they can host a conversation." },
  { q: "Can I suggest someone as an expert?", a: "Yes, you can nominate someone from their profile page or through our contact form." },
  { q: "What happens after I join?", a: "You'll get a reminder before the session starts and can submit questions in advance or live." },
  { q: "Can I ask questions in a conversation?", a: "Yes — every live conversation includes a question queue you can add to and upvote." },
  { q: "Do I need an account to explore?", a: "You can browse experts and topics without an account, but you'll need one to join a live conversation." },
  { q: "Are conversations free or paid?", a: "Most conversations are free to join; some specialized sessions may have a reserved-seat fee." },
];

const FOOTER_LINKS = {
  Platform: [
    { label: "Explore", to: "/explore" },
    { label: "Live", to: "/live" },
    { label: "Experts", to: "/experts" },
    { label: "How it works", to: "/how-it-works" },
  ],
  Company: [
    { label: "About us", to: "/about" },
    { label: "Become an expert", to: "/become-an-expert" },
    { label: "Careers", to: "/careers" },
    { label: "Contact us", to: "/contact" },
  ],
  Support: [
    { label: "Help center", to: "/help" },
    { label: "FAQ", to: "/faq" },
    { label: "Privacy policy", to: "/privacy" },
    { label: "Terms of service", to: "/terms" },
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

function ConversationCard({ conversation, index }) {
  return (
    <FadeUp delay={index * 0.06} className="h-full">
      <article className="group relative flex h-full min-h-[190px] overflow-hidden rounded-2xl border border-white/[0.11] bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-violet-300/35 hover:bg-white/[0.055] hover:shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
        <div className="relative w-[38%] shrink-0 overflow-hidden">
          <img
            src={conversation.image}
            alt={`${conversation.name}, ${conversation.role}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="relative flex min-w-0 flex-1 flex-col justify-center gap-1.5 px-4 py-3">
          <div className="flex items-center gap-1.5 font-accent text-[0.68rem] text-violet-300">
            <CalendarDays className="h-3.5 w-3.5" />
            {conversation.date} · {conversation.time}
          </div>
          <h3 className="truncate font-serif text-lg leading-tight text-white transition-colors group-hover:text-violet-100">
            {conversation.topic}
          </h3>
          <div className="flex items-center gap-1.5">
            <p className="truncate font-accent text-sm font-medium text-white/85">{conversation.name}</p>
            <VerificationBadge />
          </div>
          <p className="truncate text-xs text-white/47">{conversation.role} · {conversation.credibility}</p>

          <Link
            to="/live"
            className="mt-1.5 inline-flex items-center justify-center rounded-lg border border-violet-300/40 px-3 py-2 font-accent text-[0.7rem] font-semibold text-violet-100 transition hover:border-violet-200/60 hover:bg-violet-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
          >
            Reserve your seat
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
        <div className="absolute left-1/2 top-[-24rem] h-[58rem] w-[72rem] -translate-x-1/2 rounded-full bg-violet-600/[0.10] blur-[140px]" />
        <div className="absolute right-[-18rem] top-[30rem] h-[38rem] w-[38rem] rounded-full bg-indigo-500/[0.10] blur-[130px]" />
        <div className="absolute left-[-22rem] top-[48rem] h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/[0.055] blur-[130px]" />
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

      <div className="relative isolate">
        <header className="fixed inset-x-0 top-0 z-30 border-b border-white/[0.08] bg-black">
          <nav className="mx-auto flex h-[58px] max-w-[1440px] items-center justify-between px-6 lg:px-10" aria-label="Main navigation">
            <Link to="/" className="font-serif text-[1.55rem] tracking-[0.23em] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">
              EXP<span className="text-violet-300">É</span>RIA
            </Link>

            <p className="hidden font-accent text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-violet-300/80 md:block">
              Real experience. Live access.
            </p>

            <div className="hidden items-center gap-5 md:flex">
              <button aria-label="Search EXPERIA" className="rounded-lg border border-white/15 p-2.5 text-white/75 transition hover:border-violet-300/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">
                <Search className="h-4 w-4" />
              </button>
              <Link to="/login" className="font-accent text-sm text-white/65 transition hover:text-white">Log in</Link>
              <Link to="/signup" className="rounded-lg bg-violet-500 px-5 py-2.5 font-accent text-sm font-semibold text-white shadow-[0_8px_24px_rgba(124,58,237,0.28)] transition hover:bg-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">Sign up</Link>
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
                <div className="flex gap-3">
                  <Link to="/login" className="rounded-lg border border-white/15 px-4 py-2">Log in</Link>
                 <Link to="/signup" className="rounded-lg bg-violet-500 px-4 py-2 font-semibold text-white">Sign up</Link>
                </div>
              </div>
            </div>
          )}
        </header>

        <section className="relative mx-auto max-w-[1440px] px-6 pb-4 pt-[74px] lg:px-10 lg:pb-5 lg:pt-[82px]">
          <div className="mx-auto max-w-[1050px] text-center">
            <motion.h1 {...heroAnimation(0.08)} className="font-serif text-[1.9rem] leading-[1.06] tracking-[-0.02em] text-white sm:text-4xl sm:leading-[1.02] sm:tracking-[-0.03em] lg:text-[3.1rem]">
              You Don't Need Another Course.
              <br />
              Ask Someone Who's{" "}
              <span className="bg-gradient-to-r from-violet-200 via-violet-400 to-indigo-300 bg-clip-text text-transparent">Done It.</span>
            </motion.h1>

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

            <motion.div {...heroAnimation(0.3)} className="mt-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 font-accent text-[0.7rem] text-white/42 sm:text-xs">
              {DISCOVERY_TAGS.map((tag, index) => (
                <Link key={tag} to={`/explore?topic=${tag.toLowerCase()}`} className="transition hover:text-violet-200">
                  {tag}
                  <span className="ml-3 text-violet-300/50">·</span>
                </Link>
              ))}
              <Link to="/explore" className="inline-flex items-center gap-1 text-violet-300 transition hover:text-violet-200">
                <span className="text-sm leading-none">+</span> More topics
              </Link>
            </motion.div>
          </div>

          <FadeUp className="mx-auto mt-11 max-w-[900px] lg:mt-14">
                        <article className="group relative overflow-hidden rounded-[28px] border border-white/[0.14] bg-[#0b0c16]/85 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.65),0_60px_170px_rgba(88,28,207,0.38),0_0_90px_rgba(76,29,149,0.22)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(124,58,237,0.18),transparent_40%)]" />
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

                  <h2 className="mt-2 max-w-xl font-serif text-2xl leading-[1.06] tracking-[-0.02em] text-white sm:text-3xl lg:text-[2.3rem]">
                    {LIVE_CONVERSATION.title}?
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

      <section className="relative px-6 pb-14 pt-6 lg:px-10 lg:pb-16 lg:pt-8">
        <div className="mx-auto mt-8 grid max-w-[1200px] gap-4 sm:grid-cols-3">
          {WHY_EXPERIA.map(({ icon: Icon, title, description }, index) => (
            <FadeUp key={title} delay={index * 0.06} className="h-full">
              <div className="h-full rounded-xl border border-white/[0.1] bg-white/[0.03] p-5">
                <Icon className="h-5 w-5 text-violet-300" />
                <h3 className="mt-4 font-accent text-sm font-semibold text-white/90">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/48">{description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="relative px-6 pb-6 pt-3 lg:px-10 lg:pb-8 lg:pt-4">
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

      <section className="relative px-6 py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1360px]">
          <SectionLabel action={<Link to="/questions" className="inline-flex items-center gap-1 font-accent text-xs text-white/50 transition hover:text-white">View all questions <ChevronRight className="h-4 w-4" /></Link>}>
            Trending questions
          </SectionLabel>
          <p className="-mt-4 mb-6 max-w-md text-sm text-white/45">What people are most curious about right now.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TRENDING_QUESTIONS.map(({ icon: Icon, question, curious, tag }, index) => (
              <FadeUp key={question} delay={index * 0.06} className="h-full">
                <div className="flex h-full flex-col rounded-xl border border-white/[0.1] bg-white/[0.03] p-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="mt-4 flex-1 font-serif text-lg leading-snug text-white">{question}</p>
                  <p className="mt-4 text-xs text-white/45">{curious}</p>
                  <span className="mt-2 inline-flex w-fit items-center rounded-lg border border-white/[0.12] px-2.5 py-1 font-accent text-[0.65rem] text-white/55">{tag}</span>
                  <Link to="/questions" className="mt-4 inline-flex items-center gap-1 font-accent text-xs font-semibold text-violet-300 transition hover:text-violet-200">
                    Explore question <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1360px]">
          <SectionLabel action={<Link to="/explore" className="inline-flex items-center gap-1 font-accent text-xs text-white/50 transition hover:text-white">Explore all topics <ChevronRight className="h-4 w-4" /></Link>}>
            Explore by experience
          </SectionLabel>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {EXPLORE_EXPERIENCE.map(({ icon: Icon, title, description }, index) => (
              <FadeUp key={title} delay={index * 0.05} className="h-full">
                <Link to={`/experts?category=${title.toLowerCase()}`} className="group flex h-full flex-col rounded-xl border border-white/[0.1] bg-white/[0.03] p-5 transition hover:border-violet-300/40 hover:bg-white/[0.05]">
                  <Icon className="h-5 w-5 text-violet-300" />
                  <h3 className="mt-4 font-accent text-sm font-semibold text-white/90">{title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/45">{description}</p>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

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

      <section className="relative overflow-hidden px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1360px]">
          <div className="relative overflow-hidden rounded-2xl border border-violet-300/30 bg-gradient-to-br from-violet-700/50 via-[#241246] to-indigo-900/40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(196,181,253,0.25),transparent_55%)]" />
            <div className="relative grid gap-8 p-8 lg:grid-cols-2 lg:items-center lg:p-12">
              <FadeUp>
                <h2 className="font-serif text-3xl leading-[1.1] text-white sm:text-4xl">
                  You've spent years learning it.
                  <br />
                  Someone is curious about it.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
                  Share your experience. Inspire the next generation. Make a real impact.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Link to="/become-an-expert" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-accent text-sm font-semibold text-[#241246] shadow-[0_12px_32px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 hover:bg-violet-50">
                    Become an expert <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/how-it-works" className="font-accent text-sm text-white/75 underline underline-offset-4 transition hover:text-white">Learn more</Link>
                </div>
              </FadeUp>
              <FadeUp delay={0.1} className="relative h-48 overflow-hidden rounded-xl lg:h-full lg:min-h-[220px]">
                <img src={IMAGES.karan} alt="" loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

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

      <section className="relative overflow-hidden px-6 py-24 text-center lg:px-10 lg:py-36">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.12] blur-[130px]" />
        <FadeUp className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl leading-[1.15] text-white sm:text-5xl">Somewhere, someone has already lived the experience you're looking for. Ask them.</h2>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton to="/explore" className="px-7">Explore EXPERIA</PrimaryButton>
          </div>
        </FadeUp>
      </section>

      <footer className="border-t border-white/[0.08] px-6 py-12 lg:px-10">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.3fr]">
            <div>
              <Link to="/" className="font-serif text-lg tracking-[0.2em] text-white/85">EXP<span className="text-violet-300">É</span>RIA</Link>
              <p className="mt-3 max-w-[220px] text-xs leading-relaxed text-white/40">Real people. Real experience. Real conversations.</p>
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

            <div>
              <p className="font-accent text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Stay in the loop</p>
              <p className="mt-4 text-sm text-white/50">Get updates about new conversations and experts.</p>
              <form onSubmit={handleNewsletterSubmit} className="mt-4 flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] p-1.5 pl-3 focus-within:border-violet-300/60">
                <input type="email" required aria-label="Email address" placeholder="Enter your email" className="min-w-0 flex-1 bg-transparent font-accent text-xs text-white outline-none placeholder:text-white/35" />
                <button type="submit" aria-label="Subscribe" className="flex shrink-0 items-center justify-center rounded-md bg-violet-500 px-3 py-2 text-white transition hover:bg-violet-400">
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          </div>

          <div className="mt-10 border-t border-white/[0.08] pt-6 text-center font-accent text-xs text-white/30 sm:text-left">
            ©️ {new Date().getFullYear()} EXPÉRIA. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
