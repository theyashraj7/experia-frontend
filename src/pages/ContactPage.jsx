import { useState } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-violet-400/30 selection:text-white">
      <SiteHeader />

      <section className="mx-auto max-w-[900px] px-6 pb-10 pt-[110px] text-center lg:px-10 lg:pt-[130px]">
        <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">Get in touch</p>
        <h1 className="mt-4 font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.6rem]">
          Questions about EXPÉRIA itself? <span className="bg-gradient-to-r from-violet-200 via-violet-400 to-indigo-300 bg-clip-text text-transparent">We're listening.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/50 sm:text-base">
          For account or booking issues, visit Contact Support instead — this is for everything else.
        </p>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-14 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-violet-300" />
              <div>
                <p className="font-serif text-lg text-white">Email</p>
                <p className="text-sm text-white/50">hello@experia.app</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-5 w-5 text-violet-300" />
              <div>
                <p className="font-serif text-lg text-white">Press &amp; partnerships</p>
                <p className="text-sm text-white/50">press@experia.app</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-violet-300" />
              <div>
                <p className="font-serif text-lg text-white">Based in</p>
                <p className="text-sm text-white/50">Bengaluru, India</p>
              </div>
            </div>
          </div>

          <div>
            {sent ? (
              <p className="rounded-xl border border-violet-300/30 bg-violet-500/10 px-5 py-4 text-sm text-violet-100">
                Message sent. This is a demo — in production this would reach our team.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border border-white/[0.1] bg-white/[0.03] p-6 sm:p-8">
                <label className="block">
                  <span className="mb-1.5 block font-accent text-xs font-medium text-white/60">Name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    className="w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 font-accent text-sm text-white outline-none transition focus:border-violet-300/60 focus:bg-white/[0.07]"
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
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-accent text-xs font-medium text-white/60">Message</span>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    className="w-full resize-none rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 font-accent text-sm text-white outline-none transition focus:border-violet-300/60 focus:bg-white/[0.07]"
                  />
                </label>
                <button
                  type="submit"
                  className="w-fit rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 font-accent text-sm font-semibold text-white shadow-[0_12px_32px_rgba(109,78,255,0.26)] transition hover:-translate-y-0.5"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
