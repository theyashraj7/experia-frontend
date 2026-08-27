import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { CTA, Overline } from "@/components/atoms";
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
    <PageShell>
      <PageHero
        overline="From curious to answered"
        title={<>Four steps between you and <em className="font-display italic text-primary">someone who's done it.</em></>}
        sub="No courses to finish, no modules to unlock. Just a direct line to real experience."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <motion.div key={title} variants={staggerItem} className="rounded-2xl border border-border bg-surface p-6">
              <span className="font-accent text-xs text-muted-foreground">0{i + 1}</span>
              <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg leading-snug">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </motion.div>
          ))}
        </Stagger>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <Reveal>
            <Overline className="mb-4 block justify-center">Ready when you are</Overline>
            <h2 className="font-serif text-3xl sm:text-4xl">Your first conversation is one search away.</h2>
            <div className="mt-8 flex justify-center gap-3">
              <CTA to="/topics">Explore topics</CTA>
              <CTA to="/live" variant="ghost">See who's live</CTA>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
