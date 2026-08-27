import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { CTA } from "@/components/atoms";
import { motion } from "framer-motion";
import { BadgeCheck, Lock, Flag } from "lucide-react";

const PILLARS = [
  { icon: BadgeCheck, title: "Verified experts", body: "Every expert's identity and relevant background are reviewed before they're allowed to host a conversation." },
  { icon: Lock, title: "Private by default", body: "Your reservation and personal details are never shown to other participants or the expert beyond your display name." },
  { icon: Flag, title: "Easy reporting", body: "Every live room has a one-tap report option reviewed by a real member of our team, not just a bot." },
];

export default function SafetyPage() {
  return (
    <PageShell>
      <PageHero
        overline="Trust & safety"
        title={<>Real access, built on <em className="font-display italic text-primary">real accountability.</em></>}
        sub="Here's what keeps every conversation on Expéria safe for everyone in the room."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-3" stagger={0.08}>
          {PILLARS.map(({ icon: Icon, title, body }) => (
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

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <p className="text-base text-muted-foreground">Something feel unsafe? Don't wait — report it immediately.</p>
          <div className="mt-5 flex justify-center">
            <CTA to="/contact-support">Report a concern</CTA>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
