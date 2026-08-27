import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Bell,
  BookMarked,
  CalendarDays,
  ChevronRight,
  Compass,
  Heart,
  Home as HomeIcon,
  LogOut,
  MessageCircle,
  Plane,
  Search,
  Settings,
  Sparkles,
  TrendingUp,
  UsersRound,
  Menu,
  X,
} from "lucide-react";
import { IMAGES } from "@/data/mockData";

/**
 * Post-login home screen. This is the real app surface a signed-in user
 * lands on — distinct from the pre-login marketing page at "/". Data below
 * is prototype content; wire it up to the user's session and live APIs
 * when ready.
 */

const CURRENT_USER = { name: "Ananya", interests: ["Aviation", "Startups", "Medicine"] };

const NAV_ITEMS = [
  { icon: HomeIcon, label: "Home", to: "/dashboard", active: true },
  { icon: Compass, label: "Explore", to: "/explore" },
  { icon: UsersRound, label: "Experts", to: "/experts" },
  { icon: MessageCircle, label: "Questions", to: "/questions" },
  { icon: BookMarked, label: "Saved", to: "/saved" },
  { icon: Settings, label: "Settings", to: "/settings" },
];

const LIVE_NOW = {
  title: "What Nobody Tells You About Building Your First Company",
  name: "Arjun Malhotra",
  role: "Founder & CEO, Pesto Tech",
  watching: "1,247 watching",
  image: IMAGES.arjun,
};

const RESERVED = [
  { date: "24 May", time: "7:00 PM IST", topic: "Life in the Cockpit", name: "Capt. Rohit Verma", image: IMAGES.karan },
  { date: "26 May", time: "7:30 PM IST", topic: "The Future of Medicine", name: "Dr. Ananya Iyer", image: IMAGES.anjali },
];

const RECOMMENDED_EXPERTS = [
  { name: "Rohan Mehta", role: "Partner, Northstar Ventures", tag: "Startups", image: IMAGES.rahul },
  { name: "Capt. Rohit Verma", role: "Boeing 777 Captain", tag: "Aviation", image: IMAGES.karan },
  { name: "Dr. Ananya Iyer", role: "Physician & Researcher", tag: "Medicine", image: IMAGES.anjali },
  { name: "Kunal Shah", role: "Founder, CRED", tag: "Startups", image: IMAGES.vikram },
];

const TRENDING_QUESTIONS = [
  { icon: Plane, question: "What does a commercial pilot actually do during an emergency?", tag: "Aviation" },
  { icon: TrendingUp, question: "How does a VC decide whether to invest in a startup?", tag: "Business" },
  { icon: Heart, question: "What really happens inside an emergency room?", tag: "Medicine" },
];

function FadeUp({ children, delay = 0, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children, action }) {
  return (
    <div className="mb-3 flex items-end justify-between gap-4">
      <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">{children}</p>
      {action}
    </div>
  );
}

export default function Dashboard() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <main className="flex min-h-screen bg-black text-white selection:bg-violet-400/30 selection:text-white">
      {/* SIDEBAR — desktop */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-white/[0.08] bg-[#07080d] px-5 py-6 lg:flex">
        <Link to="/" className="px-2 font-serif text-xl tracking-[0.2em] text-white">
          EXP<span className="text-violet-300">É</span>RIA
        </Link>

        <nav className="mt-9 flex flex-1 flex-col gap-1">
          {NAV_ITEMS.map(({ icon: Icon, label, to, active }) => (
            <Link
              key={label}
              to={to}
              className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 font-accent text-sm transition ${
                active ? "bg-violet-500/15 text-white" : "text-white/55 hover:bg-white/[0.05] hover:text-white"
              }`}
            >
              <Icon className="h-[18px] w-[18px]" />
              {label}
            </Link>
          ))}
        </nav>

        <button className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 font-accent text-sm text-white/45 transition hover:bg-white/[0.05] hover:text-white/80">
          <LogOut className="h-[18px] w-[18px]" />
          Log out
        </button>
      </aside>

      {/* MOBILE NAV DRAWER */}
      {isMobileNavOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/70" onClick={() => setIsMobileNavOpen(false)} />
          <div className="absolute left-0 top-0 flex h-full w-64 flex-col border-r border-white/[0.08] bg-[#07080d] px-5 py-6">
            <div className="flex items-center justify-between">
              <Link to="/" className="font-serif text-xl tracking-[0.2em] text-white">
                EXP<span className="text-violet-300">É</span>RIA
              </Link>
              <button onClick={() => setIsMobileNavOpen(false)} aria-label="Close menu" className="text-white/60">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-8 flex flex-1 flex-col gap-1">
              {NAV_ITEMS.map(({ icon: Icon, label, to, active }) => (
                <Link
                  key={label}
                  to={to}
                  onClick={() => setIsMobileNavOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 font-accent text-sm transition ${
                    active ? "bg-violet-500/15 text-white" : "text-white/55"
                  }`}
                >
                  <Icon className="h-[18px] w-[18px]" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* MAIN */}
      <div className="min-h-screen flex-1">
        {/* TOPBAR */}
        <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-white/[0.08] bg-black/80 px-5 py-3.5 backdrop-blur-sm lg:px-8">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsMobileNavOpen(true)} aria-label="Open menu" className="text-white/70 lg:hidden">
              <Menu className="h-5 w-5" />
            </button>
            <div className="hidden items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 sm:flex">
              <Search className="h-3.5 w-3.5 text-white/40" />
              <input
                type="search"
                placeholder="Search conversations, experts, topics…"
                className="w-64 bg-transparent font-accent text-sm text-white outline-none placeholder:text-white/35"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button aria-label="Notifications" className="relative text-white/60 transition hover:text-white">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-violet-400" />
            </button>
            <img src={IMAGES.neha} alt="Your profile" className="h-8 w-8 rounded-full object-cover object-top" />
          </div>
        </header>

        <div className="px-5 py-7 lg:px-8 lg:py-9">
          {/* WELCOME */}
          <FadeUp>
            <h1 className="font-serif text-2xl text-white sm:text-3xl">Welcome back, {CURRENT_USER.name}.</h1>
            <p className="mt-1.5 text-sm text-white/50">Here's what's happening in the conversations you care about.</p>
          </FadeUp>

          {/* LIVE NOW */}
          <FadeUp delay={0.05} className="relative mt-7">
            <article className="group relative overflow-hidden rounded-2xl border border-violet-300/30 bg-[#0b0c16] shadow-[0_0_0_1px_rgba(167,139,250,0.18),0_0_50px_rgba(124,58,237,0.18)]">
              <div className="grid min-h-[190px] lg:grid-cols-[0.75fr_1.25fr]">
                <div className="relative min-h-[150px] overflow-hidden lg:min-h-full">
                  <img src={LIVE_NOW.image} alt={LIVE_NOW.name} className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080910] via-[#080910]/10 to-transparent" />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-lg bg-black/60 px-3 py-1.5 font-accent text-[0.7rem] font-bold text-red-500">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.9)]" />
                    LIVE NOW
                  </span>
                </div>
                <div className="flex flex-col justify-center gap-2 px-6 py-5 lg:px-8">
                  <span className="inline-flex w-fit items-center gap-1.5 font-accent text-xs text-white/60">
                    <UsersRound className="h-3.5 w-3.5" />{LIVE_NOW.watching}
                  </span>
                  <h2 className="font-serif text-xl leading-tight text-white sm:text-2xl">{LIVE_NOW.title}</h2>
                  <p className="font-accent text-sm text-white/70">{LIVE_NOW.name} · {LIVE_NOW.role}</p>
                  <Link
                    to="/live"
                    className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-2.5 font-accent text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    Join now <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          </FadeUp>

          <div className="mt-9 grid gap-9 lg:grid-cols-[1.4fr_1fr]">
            <div className="flex flex-col gap-9">
              {/* RESERVED FOR YOU */}
              <FadeUp delay={0.1}>
                <SectionLabel action={<Link to="/live" className="inline-flex items-center gap-1 font-accent text-xs text-white/50 transition hover:text-white">View all <ChevronRight className="h-3.5 w-3.5" /></Link>}>
                  Reserved for you
                </SectionLabel>
                <div className="grid gap-3 sm:grid-cols-2">
                  {RESERVED.map((item) => (
                    <div key={item.topic} className="flex items-center gap-3 rounded-xl border border-white/[0.1] bg-white/[0.03] p-3">
                      <img src={item.image} alt="" className="h-14 w-14 shrink-0 rounded-lg object-cover object-top" />
                      <div className="min-w-0">
                        <p className="flex items-center gap-1.5 font-accent text-[0.68rem] text-violet-300"><CalendarDays className="h-3 w-3" />{item.date} · {item.time}</p>
                        <p className="truncate font-serif text-base text-white">{item.topic}</p>
                        <p className="truncate text-xs text-white/45">{item.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeUp>

              {/* RECOMMENDED EXPERTS */}
              <FadeUp delay={0.15}>
                <SectionLabel action={<Link to="/experts" className="inline-flex items-center gap-1 font-accent text-xs text-white/50 transition hover:text-white">View all <ChevronRight className="h-3.5 w-3.5" /></Link>}>
                  Recommended for you
                </SectionLabel>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {RECOMMENDED_EXPERTS.map((expert) => (
                    <div key={expert.name} className="overflow-hidden rounded-xl border border-white/[0.1] bg-white/[0.03]">
                      <div className="relative h-24 w-full overflow-hidden">
                        <img src={expert.image} alt={expert.name} className="absolute inset-0 h-full w-full object-cover object-top" />
                      </div>
                      <div className="p-3">
                        <p className="truncate font-accent text-sm font-semibold text-white">{expert.name}</p>
                        <p className="truncate text-xs text-white/45">{expert.role}</p>
                        <span className="mt-1.5 inline-block rounded-md bg-violet-500/15 px-2 py-0.5 font-accent text-[0.62rem] text-violet-200">{expert.tag}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* SIDE COLUMN */}
            <div className="flex flex-col gap-9">
              <FadeUp delay={0.2}>
                <SectionLabel>Trending questions</SectionLabel>
                <div className="flex flex-col gap-2.5">
                  {TRENDING_QUESTIONS.map(({ icon: Icon, question, tag }) => (
                    <div key={question} className="rounded-xl border border-white/[0.1] bg-white/[0.03] p-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="mt-3 font-serif text-sm leading-snug text-white">{question}</p>
                      <span className="mt-2 inline-block rounded-md border border-white/[0.1] px-2 py-0.5 font-accent text-[0.62rem] text-white/55">{tag}</span>
                    </div>
                  ))}
                </div>
              </FadeUp>

              <FadeUp delay={0.25}>
                <div className="rounded-2xl border border-violet-300/25 bg-gradient-to-br from-violet-600/15 to-transparent p-5">
                  <Sparkles className="h-5 w-5 text-violet-300" />
                  <p className="mt-3 font-serif text-lg leading-snug text-white">Based on your interests</p>
                  <p className="mt-1 text-xs text-white/50">{CURRENT_USER.interests.join(" · ")}</p>
                  <Link to="/topics" className="mt-4 inline-flex items-center gap-1.5 font-accent text-sm font-semibold text-violet-200 transition hover:text-violet-100">
                    Explore matching topics <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
