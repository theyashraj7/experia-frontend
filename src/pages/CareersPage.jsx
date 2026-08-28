import { useState } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ROLES = [
  { title: "Senior Product Designer", team: "Design", location: "Remote · India" },
  { title: "Full-Stack Engineer", team: "Engineering", location: "Remote · India" },
  { title: "Expert Relations Lead", team: "Operations", location: "Bengaluru" },
  { title: "Growth Marketer", team: "Marketing", location: "Remote" },
];

export default function CareersPage() {
  const [openRole, setOpenRole] = useState(null);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-violet-400/30 selection:text-white">
      <SiteHeader />

      <section className="mx-auto max-w-[900px] px-6 pb-10 pt-[110px] text-center lg:px-10 lg:pt-[130px]">
        <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">Join the team</p>
        <h1 className="mt-4 font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.6rem]">
          Help us make access to real experience <span className="bg-gradient-to-r from-violet-200 via-violet-400 to-indigo-300 bg-clip-text text-transparent">the default.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/50 sm:text-base">
          We're a small team building something we personally wish existed years ago.
        </p>
      </section>

      <section className="border-t border-white/[0.08] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1000px]">
          <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">Open roles</p>
          <h2 className="mt-3 font-serif text-2xl text-white sm:text-3xl">Current openings.</h2>

          <div className="mt-8 flex flex-col gap-3">
            {ROLES.map((role, i) => (
              <motion.button
                key={role.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setOpenRole(openRole === role.title ? null : role.title)}
                className="group flex items-center justify-between rounded-2xl border border-white/[0.1] bg-white/[0.03] px-6 py-5 text-left transition hover:border-violet-300/35 hover:bg-white/[0.05]"
              >
                <div>
                  <p className="font-serif text-lg text-white">{role.title}</p>
                  <p className="mt-1 font-accent text-xs uppercase tracking-[0.15em] text-white/40">{role.team} · {role.location}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-violet-300" />
              </motion.button>
            ))}
          </div>

          {openRole && (
            <p className="mt-6 rounded-xl border border-violet-300/25 bg-violet-500/10 px-5 py-4 text-sm text-violet-100">
              This is a demo — applications for "{openRole}" aren't collected yet.
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-16 text-center lg:px-10 lg:py-20">
        <p className="text-base leading-relaxed text-white/50">
          Don't see a fit but think you should be here anyway? Reach out at{" "}
          <a href="mailto:careers@experia.app" className="text-violet-300 underline underline-offset-4 hover:text-violet-200">careers@experia.app</a>.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
