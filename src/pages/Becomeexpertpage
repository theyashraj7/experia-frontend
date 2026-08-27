import { useState } from "react";
import { toast } from "sonner";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { SectionHeading, CTA } from "@/components/atoms";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Mic } from "lucide-react";

const REASONS = [
  { icon: Clock, title: "Your time, your terms", body: "You choose the topic, the schedule, and how long you host for. No content calendar, no production team required." },
  { icon: Mic, title: "No editing, no scripts", body: "Just show up and talk about what you know. The value is in the fact that it's real, not polished." },
  { icon: ShieldCheck, title: "A room that respects your time", body: "A small reservation fee filters for people who genuinely want to be there — not a passive audience." },
];

export default function BecomeExpertPage() {
  const [form, setForm] = useState({ name: "", field: "", email: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    toast("Application received", { description: "This is a demo — in the real product, our team would follow up by email." });
    setForm({ name: "", field: "", email: "" });
  };

  return (
    <PageShell>
      <PageHero
        overline="For experts"
        title={<>You've lived it. <em className="font-display italic text-primary">Someone wants to hear it.</em></>}
        sub="Host a live conversation about the field you know best — no courses to build, no content to produce."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-3" stagger={0.08}>
          {REASONS.map(({ icon: Icon, title, body }) => (
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
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading overline="Apply to host" title="Tell us what you'd talk about." />
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
            <label className="block">
              <span className="mb-1.5 block font-accent text-xs font-medium text-muted-foreground">Full name</span>
              <input
                required
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                placeholder="Ananya Iyer"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block font-accent text-xs font-medium text-muted-foreground">Field of experience</span>
              <input
                required
                value={form.field}
                onChange={(e) => setForm((p) => ({ ...p, field: e.target.value }))}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                placeholder="e.g. Aviation, Venture Capital, Surgery"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block font-accent text-xs font-medium text-muted-foreground">Email</span>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                placeholder="you@email.com"
              />
            </label>
            <CTA type="submit" className="mt-2 w-fit">Apply to host</CTA>
          </form>
        </div>
      </section>

      <Reveal className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          Want the details first? Read our <a href="/expert-guidelines" className="text-primary underline underline-offset-4">expert guidelines</a>.
        </p>
      </Reveal>
    </PageShell>
  );
}
