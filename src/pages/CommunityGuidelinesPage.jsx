import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { HeartHandshake, MessageCircleQuestion, ShieldAlert, Users } from "lucide-react";

const GUIDELINES = [
  { icon: HeartHandshake, title: "Be genuinely curious", body: "Ask questions because you want to learn, not to challenge or perform for the room." },
  { icon: MessageCircleQuestion, title: "Respect the expert's time", body: "They're sharing real, lived experience — not reciting a script. Keep questions relevant and considerate." },
  { icon: Users, title: "No harassment, ever", body: "Hate speech, harassment, or targeted abuse toward experts or other participants results in an immediate ban." },
  { icon: ShieldAlert, title: "Report, don't retaliate", body: "If something feels off in a conversation, report it. We review every report from a real person on our team." },
];

export default function CommunityGuidelinesPage() {
  return (
    <PageShell>
      <PageHero
        overline="Community"
        title={<>A good room is a shared <em className="font-display italic text-primary">responsibility.</em></>}
        sub="These guidelines exist so every conversation stays worth showing up to."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.08}>
          {GUIDELINES.map(({ icon: Icon, title, body }) => (
            <motion.div key={title} variants={staggerItem} className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </motion.div>
          ))}
        </Stagger>
      </section>

      <Reveal className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          Guidelines are enforced by our team, not automated moderation alone. Violations may result in warnings,
          suspension, or a permanent ban depending on severity.
        </p>
      </Reveal>
    </PageShell>
  );
}
