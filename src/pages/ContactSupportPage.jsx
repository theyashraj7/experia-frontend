import { useState } from "react";
import { toast } from "sonner";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/atoms";
import { LifeBuoy } from "lucide-react";

const TOPICS = ["Booking issue", "Account access", "Payment / refund", "Report a concern", "Something else"];

export default function ContactSupportPage() {
  const [form, setForm] = useState({ topic: TOPICS[0], email: "", message: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    toast("Support request sent", { description: "This is a demo — our support team would reply within 24 hours." });
    setForm({ topic: TOPICS[0], email: "", message: "" });
  };

  return (
    <PageShell>
      <PageHero
        overline="Support"
        title={<>Stuck on a booking or your account? <em className="font-display italic text-primary">We'll sort it.</em></>}
        sub="For general company questions, use Contact instead — this is for account and booking help."
      />

      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 flex items-center gap-3 rounded-2xl border border-border bg-surface p-5">
          <LifeBuoy className="h-6 w-6 shrink-0 text-primary" />
          <p className="text-sm text-muted-foreground">Average response time: under 24 hours.</p>
        </div>

        <Reveal>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="block">
              <span className="mb-1.5 block font-accent text-xs font-medium text-muted-foreground">What's this about?</span>
              <select
                value={form.topic}
                onChange={(e) => setForm((p) => ({ ...p, topic: e.target.value }))}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              >
                {TOPICS.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block font-accent text-xs font-medium text-muted-foreground">Email</span>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block font-accent text-xs font-medium text-muted-foreground">Describe the issue</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </label>
            <CTA type="submit" className="w-fit">Send to support</CTA>
          </form>
        </Reveal>
      </section>
    </PageShell>
  );
}
