import { useState } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { LifeBuoy } from "lucide-react";

const TOPICS = ["Booking issue", "Account access", "Payment / refund", "Report a concern", "Something else"];

export default function ContactSupportPage() {
  const [form, setForm] = useState({ topic: TOPICS[0], email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    setForm({ topic: TOPICS[0], email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-violet-400/30 selection:text-white">
      <SiteHeader />

      <section className="mx-auto max-w-[900px] px-6 pb-10 pt-[110px] text-center lg:px-10 lg:pt-[130px]">
        <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">Support</p>
        <h1 className="mt-4 font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.6rem]">
          Stuck on a booking or your account? <span className="bg-gradient-to-r from-violet-200 via-violet-400 to-indigo-300 bg-clip-text text-transparent">We'll sort it.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/50 sm:text-base">
          For general company questions, use Contact instead — this is for account and booking help.
        </p>
      </section>

      <section className="mx-auto max-w-xl px-6 py-14 lg:px-10 lg:py-16">
        <div className="mb-8 flex items-center gap-3 rounded-2xl border border-white/[0.1] bg-white/[0.03] p-5">
          <LifeBuoy className="h-6 w-6 shrink-0 text-violet-300" />
          <p className="text-sm text-white/55">Average response time: under 24 hours.</p>
        </div>

        {sent ? (
          <p className="rounded-xl border border-violet-300/30 bg-violet-500/10 px-5 py-4 text-sm text-violet-100">
            Support request sent. This is a demo — our support team would reply within 24 hours.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="block">
              <span className="mb-1.5 block font-accent text-xs font-medium text-white/60">What's this about?</span>
              <select
                value={form.topic}
                onChange={(e) => setForm((p) => ({ ...p, topic: e.target.value }))}
                className="w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 font-accent text-sm text-white outline-none transition focus:border-violet-300/60 focus:bg-white/[0.07]"
              >
                {TOPICS.map((t) => <option key={t} value={t} className="bg-[#0b0c16]">{t}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block font-accent text-xs font-medium text-white/60">Email</span>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                className="w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 font-accent text-sm text-white outline-none transition focus:border-violet-300/60 focus:bg-white/[0.07]"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block font-accent text-xs font-medium text-white/60">Describe the issue</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                className="w-full resize-none rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 font-accent text-sm text-white outline-none transition focus:border-violet-300/60 focus:bg-white/[0.07]"
              />
            </label>
            <button
              type="submit"
              className="w-fit rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 font-accent text-sm font-semibold text-white shadow-[0_12px_32px_rgba(109,78,255,0.26)] transition hover:-translate-y-0.5"
            >
              Send to support
            </button>
          </form>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
