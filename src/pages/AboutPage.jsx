import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const VALUES = [
  { title: "Access over content", body: "We're not building another library of pre-recorded lessons. We're building a door — one that opens directly onto someone's real, lived experience." },
  { title: "Curiosity, not credentials", body: "You don't need a syllabus to be curious. You just need the chance to ask." },
  { title: "Real people, real stakes", body: "Every expert on EXPÉRIA is a real person answering real questions live — no scripts, no edits." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-violet-400/30 selection:text-white">
      <SiteHeader />

      <section className="mx-auto max-w-[900px] px-6 pb-10 pt-[110px] text-center lg:px-10 lg:pt-[130px]">
        <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">Our story</p>
        <h1 className="mt-4 font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.6rem]">
          We built EXPÉRIA because <span className="bg-gradient-to-r from-violet-200 via-violet-400 to-indigo-300 bg-clip-text text-transparent">access shouldn't be the hard part.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/50 sm:text-base">
          Some people are worth hearing from. The hardest part has always been reaching them — not the wanting to learn.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12 lg:px-10">
        <p className="text-base leading-relaxed text-white/55">
          Most learning platforms are built around content — courses, videos, modules you consume alone. EXPÉRIA
          is built around people. Instead of watching someone talk about their field, you get to be in the room
          (virtually) while they talk about it, and ask the question that's actually on your mind.
        </p>
      </section>

      <section className="border-t border-white/[0.08] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">What we believe</p>
          <h2 className="mt-3 font-serif text-2xl text-white sm:text-3xl">Three things we won't compromise on.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/[0.1] bg-white/[0.03] p-6"
              >
                <h3 className="font-serif text-xl text-white">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/50">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center lg:px-10 lg:py-24">
        <h2 className="font-serif text-3xl text-white sm:text-4xl">Curious where it goes from here?</h2>
        <Link
          to="/live"
          className="group mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 font-accent text-sm font-semibold text-white shadow-[0_12px_32px_rgba(109,78,255,0.26)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(109,78,255,0.38)]"
        >
          See who's live right now
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
