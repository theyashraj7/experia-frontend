import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

const SECTIONS = [
  { h: "Why there's a fee", p: "A small reservation fee keeps live rooms meaningful — it filters for people who genuinely intend to show up and participate." },
  { h: "Cancellations", p: "Cancel up to 12 hours before a session for a full refund. Cancellations inside that window are non-refundable." },
  { h: "No-shows", p: "If you don't join within 10 minutes of a session starting, your seat may be released and the reservation forfeited." },
  { h: "Expert cancellations", p: "If an expert cancels a session, you're automatically refunded in full and notified immediately." },
];

export default function ReservationPolicyPage() {
  return (
    <PageShell>
      <PageHero overline="Legal" title="Reservation Policy" sub="Last updated: January 2026. This is a demo policy for prototype purposes." />
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
