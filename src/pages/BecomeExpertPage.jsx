import { useState } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Mic } from "lucide-react";

const REASONS = [
  { icon: Clock, title: "Your time, your terms", body: "You choose the topic, the schedule, and how long you host for. No content calendar, no production team required." },
  { icon: Mic, title: "No editing, no scripts", body: "Just show up and talk about what you know. The value is in the fact that it's real, not polished." },
  { icon: ShieldCheck, title: "A room that respects your time", body: "A small reservation fee filters for people who genuinely want to be there — not a passive audience." },
];

export default function BecomeExpertPage() {
  const [form, setForm] = useState({ name: "", field: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm({ name: "", field: "", email: "" });
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-violet-400/30 selection:text-white">
      <SiteHeader />

      <section className="mx-auto max-w-[900px] px-6 pb-10 pt-[110px] text-center lg:px-10 lg:pt-[130px]">
        <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">For experts</p>
        <h1 className="mt-4 font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.6rem]">
          You've lived it. <span className="bg-gradient-to-r from-violet-200 via-violet-400 to-indigo-300 bg-clip-text text-transparent">Someone wants to hear it.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/50 sm:text-base">
          Host a live conversation about the field you know best — no courses to build, no content to produce.
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-14 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/[0.1] bg-white/[0.03] p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-300/30 bg-violet-500/10 text-violet-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/[0.08] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-xl">
          <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">Apply to host</p>
          <h2 className="mt-3 font-serif text-2xl text-white sm:text-3xl">Tell us what you'd talk about.</h2>

          {submitted ? (
            <p className="mt-8 rounded-xl border border-violet-300/30 bg-violet-500/10 px-5 py-4 text-sm text-violet-100">
              Application received. This is a demo — in the real product, our team would follow up by email.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
              <label className="block">
                <span className="mb-1.5 block font-accent text-xs font-medium text-white/60">Full name</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  className="w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 font-accent text-sm text-white outline-none transition focus:border-violet-300/60 focus:bg-white/[0.07]"
                  placeholder="Ananya Iyer"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block font-accent text-xs font-medium text-white/60">Field of experience</span>
                <input
                  required
                  value={form.field}
                  onChange={(e) => setForm((p) => ({ ...p, field: e.target.value }))}
                  className="w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 font-accent text-sm text-white outline-none transition focus:border-violet-300/60 focus:bg-white/[0.07]"
                  placeholder="e.g. Aviation, Venture Capital, Surgery"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block font-accent text-xs font-medium text-white/60">Email</span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  className="w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 font-accent text-sm text-white outline-none transition focus:border-violet-300/60 focus:bg-white/[0.07]"
                  placeholder="you@email.com"
                />
              </label>
              <button
                type="submit"
                className="mt-2 w-fit rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 font-accent text-sm font-semibold text-white shadow-[0_12px_32px_rgba(109,78,255,0.26)] transition hover:-translate-y-0.5"
              >
                Apply to host
              </button>
            </form>
          )}

          <p className="mt-8 text-sm text-white/45">
            Want the details first? Read our{" "}
            <a href="/expert-guidelines" className="text-violet-300 underline underline-offset-4 hover:text-violet-200">expert guidelines</a>.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
