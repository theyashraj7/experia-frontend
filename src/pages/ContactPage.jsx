import { useState } from "react";
import { toast } from "sonner";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/atoms";
import { Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    toast("Message sent", { description: "This is a demo — in production this would reach our team." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <PageShell>
      <PageHero
        overline="Get in touch"
        title={<>Questions about Expéria itself? <em className="font-display italic text-primary">We're listening.</em></>}
        sub="For account or booking issues, visit Contact Support instead — this is for everything else."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="flex flex-col gap-6">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="font-serif text-lg">Email</p>
                <p className="text-sm text-muted-foreground">hello@experia.app</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="font-serif text-lg">Press &amp; partnerships</p>
                <p className="text-sm text-muted-foreground">press@experia.app</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="font-serif text-lg">Based in</p>
                <p className="text-sm text-muted-foreground">Bengaluru, India</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <label className="block">
                <span className="mb-1.5 block font-accent text-xs font-medium text-muted-foreground">Name</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
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
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block font-accent text-xs font-medium text-muted-foreground">Message</span>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </label>
              <CTA type="submit" className="w-fit">Send message</CTA>
            </form>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
