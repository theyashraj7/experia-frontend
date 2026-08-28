import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
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
    <main className="min-h-screen bg-black text-white selection:bg-violet-400/30 selection:text-white">
      <SiteHeader />

      <section className="mx-auto max-w-[900px] px-6 pb-10 pt-[110px] text-center lg:px-10 lg:pt-[130px]">
        <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">Community</p>
        <h1 className="mt-4 font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.6rem]">
          A good room is a shared <span className="bg-gradient-to-r from-violet-200 via-violet-400 to-indigo-300 bg-clip-text text-transparent">responsibility.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/50 sm:text-base">
          These guidelines exist so every conversation stays worth showing up to.
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-14 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {GUIDELINES.map(({ icon: Icon, title, body }, i) => (
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

      <section className="mx-auto max-w-3xl px-6 py-14 text-center lg:px-10">
        <p className="text-sm text-white/45">
          Guidelines are enforced by our team, not automated moderation alone. Violations may result in warnings,
          suspension, or a permanent ban depending on severity.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
