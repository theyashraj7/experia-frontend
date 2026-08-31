import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import SiteHeader from "@/components/layout/SiteHeader";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  ChevronRight,
  MessageCircle,
  Search,
} from "lucide-react";
import {
  EXPERTS,
  FIELDS,
  LIVE_NOW,
  UPCOMING,
  QUESTIONS,
  LEARNER,
} from "@/data/mockData";

/**
 * EXPÉRIA — post-login dashboard.
 *
 * Product philosophy this page is built around (see /areas notes):
 * EXPÉRIA is not a lecture marketplace. It sells access to people who have
 * actually done the thing you're curious about. The primary object of this
 * interface is PEOPLE, not sessions or content — every section should make
 * the user feel closer to someone extraordinary, never like they're
 * browsing a content catalogue. Price is never the headline; a reservation
 * is a small commitment, not a purchase. Language stays human: ask, meet,
 * hear, access — never buy, watch, enroll, course.
 *
 * Unlike the pre-login marketing homepage, every link here is real and
 * functional — the user is already inside the product.
 */

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

function VerificationBadge() {
  return (
    <span title="Verified experience" aria-label="Verified experience" className="inline-flex items-center justify-center text-violet-300">
      <BadgeCheck className="h-4 w-4 fill-violet-400/15" />
    </span>
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
  const reduce = useReducedMotion();
  const [query, setQuery] = useState("");

  const heroAnimation = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] },
  });

  const live = LIVE_NOW[0];
  const featuredExperts = EXPERTS.slice(0, 6);
  const arriving = UPCOMING.slice(0, 4);
  const questions = QUESTIONS.slice(0, 4);
  const worlds = FIELDS.slice(0, 8);

  const handleSearch = (event) => {
    event.preventDefault();
    // Connect to real search/discovery once the backend exists.
  };

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white selection:bg-violet-400/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
        <div className="absolute left-1/2 top-[-24rem] h-[58rem] w-[72rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.2)_0%,transparent_65%)]" />
        <div className="absolute right-[-18rem] top-[36rem] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18)_0%,transparent_65%)]" />
      </div>

      <SiteHeader />

      {/* THE DOORWAY — personal, quiet, a question not a dashboard */}
      <section className="relative mx-auto max-w-[900px] px-6 pb-6 pt-[100px] text-center lg:pt-[130px]">
        <motion.p {...heroAnimation(0)} className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-violet-300/70">
          Welcome back, {LEARNER.name}
        </motion.p>
        <motion.h1 {...heroAnimation(0.08)} className="mt-4 font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">
          Who do you want to learn from today?
        </motion.h1>

        <motion.form {...heroAnimation(0.2)} onSubmit={handleSearch} className="mx-auto mt-6 max-w-[520px]">
          <label htmlFor="dash-search" className="sr-only">Who or what are you curious about?</label>
          <div className="flex items-center gap-2 rounded-full border border-violet-400/50 bg-white/[0.05] p-1.5 pl-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition focus-within:border-violet-300">
            <Search className="h-3.5 w-3.5 shrink-0 text-white/45" />
            <input
              id="dash-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="A person, a field, a question you've always had..."
              className="min-w-0 flex-1 bg-transparent py-1.5 font-accent text-sm text-white outline-none placeholder:text-white/35"
            />
            <button type="submit" className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-4 py-2 font-accent text-xs font-semibold text-[#12131d] transition hover:bg-violet-100">
              Find <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </motion.form>
      </section>

      {/* LIVE NOW — you have access, right now */}
      {live && (
        <section className="relative mx-auto mt-8 max-w-[1000px] px-6">
          <FadeUp>
            <Link
              to={`/conversations/${live.slug}`}
              className="group relative block overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0b0c16] shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition hover:border-violet-300/40"
            >
              <div className="relative grid min-h-[190px] lg:grid-cols-[0.8fr_1.2fr] lg:min-h-[220px]">
                <div className="relative min-h-[140px] overflow-hidden lg:min-h-full">
                  <img src={live.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080910] via-[#080910]/10 to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-lg border border-red-300/25 bg-black/50 px-2.5 py-1 font-accent text-[0.65rem] font-bold text-red-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                    LIVE — YOU HAVE ACCESS
                  </div>
                </div>
                <div className="relative flex flex-col justify-center px-5 py-4 sm:px-7 lg:px-8">
                  <p className="font-accent text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-violet-300/75">{live.field}</p>
                  <h2 className="mt-1.5 font-serif text-xl leading-[1.12] text-white sm:text-2xl">{live.title}</h2>
                  <div className="mt-2.5 flex items-center gap-2">
                    <p className="font-accent text-sm font-semibold text-white/90">{live.expert}</p>
                    <VerificationBadge />
                  </div>
                  <p className="mt-0.5 font-accent text-xs text-violet-200/70">{live.role} · {live.years}+ years</p>
                  <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-2 font-accent text-xs font-semibold text-white transition group-hover:-translate-y-0.5">
                    Enter the conversation <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </FadeUp>
        </section>
      )}

      {/* COMING TO EXPÉRIA — people arriving, not "upcoming lectures" */}
      <section className="relative px-6 py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1360px]">
          <SectionLabel action={<Link to="/live" className="inline-flex items-center gap-1 font-accent text-xs text-white/50 transition hover:text-white">See everyone coming <ChevronRight className="h-4 w-4" /></Link>}>
            Coming to EXPÉRIA
          </SectionLabel>
          <p className="-mt-1 mb-6 max-w-md text-sm text-white/45">People with real experience, arriving soon. Reserve your place.</p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {arriving.map((c, i) => (
              <FadeUp key={c.slug} delay={i * 0.05}>
                <Link to={`/conversations/${c.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.03] transition hover:-translate-y-1 hover:border-violet-300/35">
                  <div className="relative h-32 w-full overflow-hidden">
                    <img src={c.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c16] via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5 px-4 py-3.5">
                    <p className="font-accent text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-violet-300/70">{c.field}</p>
                    <p className="font-serif text-base leading-snug text-white">{c.title}</p>
                    <div className="mt-auto flex items-center gap-1.5 pt-2">
                      <p className="truncate font-accent text-xs font-medium text-white/85">{c.expert}</p>
                      <VerificationBadge />
                    </div>
                    <p className="truncate text-[0.7rem] text-white/45">{c.role}</p>
                    <div className="mt-1.5 flex items-center justify-between gap-2 border-t border-white/[0.08] pt-2">
                      <span className="flex items-center gap-1.5 font-accent text-[0.65rem] text-white/40">
                        <CalendarDays className="h-3 w-3" />
                        {c.date}
                      </span>
                      <span className="font-accent text-[0.68rem] font-semibold text-violet-300 transition group-hover:text-violet-200">Reserve →</span>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PEOPLE — the primary object of the interface, not sessions */}
      <section className="relative px-6 py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1360px]">
          <SectionLabel action={<Link to="/experts" className="inline-flex items-center gap-1 font-accent text-xs text-white/50 transition hover:text-white">Meet everyone <ChevronRight className="h-4 w-4" /></Link>}>
            People you might want to meet
          </SectionLabel>
          <p className="-mt-1 mb-6 max-w-md text-sm text-white/45">Selected for the world you've been curious about lately.</p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredExperts.map((expert, i) => (
              <FadeUp key={expert.slug} delay={i * 0.05}>
                <Link to={`/experts/${expert.slug}`} className="group block overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.03] p-3 transition duration-300 hover:-translate-y-1 hover:border-violet-300/35">
                  <div className="relative overflow-hidden rounded-xl">
                    <img src={expert.image} alt={expert.name} loading="lazy" className="h-56 w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090a12] via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 rounded-lg border border-white/15 bg-black/40 px-2.5 py-1 font-accent text-[0.62rem] font-semibold tracking-[0.1em] text-white/75">{expert.field.toUpperCase()}</span>
                  </div>
                  <div className="px-1.5 pb-1 pt-4">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-xl text-white">{expert.name}</h3>
                      <VerificationBadge />
                    </div>
                    <p className="mt-1 font-accent text-xs text-violet-200/70">{expert.role} · {expert.years}+ years</p>
                    <p className="mt-2.5 text-sm italic leading-relaxed text-white/55">"{expert.hook}"</p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* QUESTIONS — the entry point into a person */}
      <section className="relative px-6 py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1360px]">
          <SectionLabel action={<Link to="/questions" className="inline-flex items-center gap-1 font-accent text-xs text-white/50 transition hover:text-white">All questions <ChevronRight className="h-4 w-4" /></Link>}>
            Questions worth asking
          </SectionLabel>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {questions.map((q, i) => (
              <FadeUp key={q.slug} delay={i * 0.05}>
                <Link to="/questions" className="group flex h-full flex-col rounded-xl border border-white/[0.1] bg-white/[0.03] p-5 transition hover:border-violet-300/35">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <p className="mt-4 flex-1 font-serif text-lg leading-snug text-white">{q.text}</p>
                  <p className="mt-4 font-accent text-[0.68rem] text-violet-300/75">{q.field} · Ask {q.expert.split(" ")[0]}</p>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* YOUR WORLD SO FAR — identity, not gamification */}
      <section className="relative px-6 py-10 lg:px-10">
        <div className="mx-auto max-w-[1000px] rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-8 sm:px-10">
          <p className="font-serif text-xl text-white">Your world so far.</p>
          <p className="mt-2 max-w-md text-sm text-white/45">Every conversation you enter becomes part of who you're becoming.</p>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {LEARNER.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl text-violet-200">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-white/45">{stat.label}</p>
              </div>
            ))}
          </div>
          <Link to="/learning" className="mt-6 inline-flex items-center gap-1.5 font-accent text-xs font-semibold text-violet-300 transition hover:text-violet-200">
            See your full journey <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* WORLDS — discovery by field, framed as doorways not categories */}
      <section className="relative px-6 py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1360px]">
          <SectionLabel action={<Link to="/topics" className="inline-flex items-center gap-1 font-accent text-xs text-white/50 transition hover:text-white">Every field <ChevronRight className="h-4 w-4" /></Link>}>
            Or discover a whole world
          </SectionLabel>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {worlds.map((field, i) => (
              <FadeUp key={field.slug} delay={i * 0.04}>
                <Link to={`/topic/${field.slug}`} className="group relative flex h-32 flex-col justify-end overflow-hidden rounded-xl border border-white/[0.1] p-4 transition hover:border-violet-300/35">
                  <img src={field.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-500 group-hover:scale-105 group-hover:opacity-55" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
                  <div className="relative">
                    <p className="font-serif text-lg text-white">{field.name}</p>
                    <p className="mt-0.5 text-xs text-white/50">{field.experts} people you could meet</p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING — quiet reinforcement, not a hard sell */}
      <section className="relative overflow-hidden px-6 py-20 text-center lg:px-10 lg:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[26rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.18)_0%,transparent_65%)]" />
        <FadeUp className="mx-auto max-w-xl">
          <p className="font-serif text-2xl leading-snug text-white sm:text-3xl">
            You don't have to wonder what they know.
            <br />
            <span className="text-violet-300">You can ask them.</span>
          </p>
          <Link to="/experts" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 font-accent text-sm font-semibold text-white shadow-[0_12px_32px_rgba(109,78,255,0.26)] transition hover:-translate-y-0.5">
            Find who you want to meet <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeUp>
      </section>
    </main>
  );
}
