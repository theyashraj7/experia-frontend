import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { SectionHeading, CTA } from "@/components/atoms";
import { motion } from "framer-motion";

const VALUES = [
  { title: "Access over content", body: "We're not building another library of pre-recorded lessons. We're building a door — one that opens directly onto someone's real, lived experience." },
  { title: "Curiosity, not credentials", body: "You don't need a syllabus to be curious. You just need the chance to ask." },
  { title: "Real people, real stakes", body: "Every expert on Expéria is a real person answering real questions live — no scripts, no edits." },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        overline="Our story"
        title={<>We built Expéria because <em className="font-display italic text-primary">access shouldn't be the hard part.</em></>}
        sub="Some people are worth hearing from. The hardest part has always been reaching them — not the wanting to learn."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Most learning platforms are built around content — courses, videos, modules you consume alone. Expéria
            is built around people. Instead of watching someone talk about their field, you get to be in the room
            (virtually) while they talk about it, and ask the question that's actually on your mind.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading overline="What we believe" title="Three things we won't compromise on." />
          <Stagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3" stagger={0.08}>
            {VALUES.map((v) => (
              <motion.div key={v.title} variants={staggerItem} className="rounded-2xl border border-border bg-background p-6">
                <h3 className="font-serif text-xl">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl">Curious where it goes from here?</h2>
          <div className="mt-8 flex justify-center">
            <CTA to="/live">See who's live right now</CTA>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
