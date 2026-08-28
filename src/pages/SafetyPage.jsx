import { Link } from "react-router-dom";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { motion } from "framer-motion";
import { BadgeCheck, Lock, Flag } from "lucide-react";

const PILLARS = [
  { icon: BadgeCheck, title: "Verified experts", body: "Every expert's identity and relevant background are reviewed before they're allowed to host a conversation." },
  { icon: Lock, title: "Private by default", body: "Your reservation and personal details are never shown to other participants or the expert beyond your display name." },
  { icon: Flag, title: "Easy reporting", body: "Every live room has a one-tap report option reviewed by a real member of our team, not just a bot." },
];

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-violet-400/30 selection:text-white">
      <SiteHeader />

      <section className="mx-auto max-w-[900px] px-6 pb-10 pt-[110px] text-center lg:px-10 lg:pt-[130px]">
        <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">Trust &amp; safety</p>
        <h1 className="mt-4 font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.6rem]">
          Real access, built on <span className="bg-gradient-to-r from-violet-200 via-violet-400 to-indigo-300 bg-clip-text text-transparent">real accountability.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/50 sm:text-base">
          Here's what keeps every conversation on EXPÉRIA safe for everyone in the room.
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-14 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, body }, i) => (
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

      <section className="border-t border-white/[0.08] px-6 py-14 text-center lg:px-10">
        <p className="text-base text-white/50">Something feel unsafe? Don't wait — report it immediately.</p>
        <Link
          to="/contact-support"
          className="mt-5 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 font-accent text-sm font-semibold text-white shadow-[0_12px_32px_rgba(109,78,255,0.26)] transition hover:-translate-y-0.5"
        >
          Report a concern
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
