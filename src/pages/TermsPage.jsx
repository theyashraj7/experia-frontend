import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

const SECTIONS = [
  { h: "Using Expéria", p: "You must be 18+ (or have guardian consent) to reserve a live conversation. Accounts are personal and non-transferable." },
  { h: "Reservations", p: "A reservation reserves your seat in a live conversation. See our Reservation Policy for cancellation and refund terms." },
  { h: "Expert content", p: "Conversations are the personal views of individual experts, not professional medical, legal, or financial advice." },
  { h: "Termination", p: "We may suspend or terminate accounts that violate our Community Guidelines or misuse the platform." },
];

export default function TermsPage() {
  return (
    <PageShell>
      <PageHero overline="Legal" title="Terms of Service" sub="Last updated: January 2026. This is a demo policy for prototype purposes." />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {SECTIONS.map((s, i) => (
          <Reveal key={s.h} delay={i * 0.06} className="mb-10 last:mb-0">
            <h2 className="font-serif text-2xl">{s.h}</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.p}</p>
          </Reveal>
        ))}
      </section>
    </PageShell>
  );
}
