import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, UserRound, CalendarClock, MessageSquare } from "lucide-react";

const STEPS = [
  { icon: Search, title: "Find someone worth hearing from", body: "Search by field, topic, or the exact question you're curious about. Every expert here has actually done the thing." },
  { icon: UserRound, title: "Reserve your seat", body: "A small reservation keeps the room meaningful — it's a signal you genuinely want to be there, not just a ticket." },
  { icon: CalendarClock, title: "Show up live", body: "Join at the scheduled time. You'll see the expert, hear their story unfold, and watch questions come in from others too." },
  { icon: MessageSquare, title: "Ask. Get a real answer.", body: "Submit your question, upvote what matters to you, and get an answer shaped by real, lived experience — not a script." },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-violet-400/30 selection:text-white">
      <SiteHeader />

      <section className="mx-auto max-w-[900px] px-6 pb-10 pt-[110px] text-center lg:px-10 lg:pt-[130px]">
        <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">From curious to answered</p>
        <h1 className="mt-4 font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.6rem]">
          Four steps between you and <span className="bg-gradient-to-r from-violet-200 via-violet-400 to-indigo-300 bg-clip-text text-transparent">someone who's done it.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/50 sm:text-base">
          No courses to finish, no modules to unlock. Just a direct line to real experience.
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-14 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/[0.1] bg-white/[0.03] p-6"
            >
              <span className="font-accent text-xs text-white/40">0{i + 1}</span>
              <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-full border border-violet-300/30 bg-violet-500/10 text-violet-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg leading-snug text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/[0.08] px-6 py-16 text-center lg:px-10 lg:py-20">
        <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">Ready when you are</p>
        <h2 className="mt-4 font-serif text-2xl text-white sm:text-3xl">Your first conversation is one search away.</h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/topics" className="rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 font-accent text-sm font-semibold text-white shadow-[0_12px_32px_rgba(109,78,255,0.26)] transition hover:-translate-y-0.5">
            Explore topics
          </Link>
          <Link to="/live" className="rounded-lg border border-white/15 px-6 py-3 font-accent text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white">
            See who's live
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
