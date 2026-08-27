import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

const SECTIONS = [
  { h: "What we collect", p: "Account details (name, email), reservation history, and basic usage data to keep the platform working and improving." },
  { h: "How we use it", p: "To run your account, process reservations, personalize recommendations, and communicate essential updates — never to sell to third parties." },
  { h: "What experts see", p: "Experts only see your display name and submitted questions during a live conversation — never your email or payment details." },
  { h: "Your controls", p: "You can request a copy of your data or full account deletion at any time via Contact Support." },
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero overline="Legal" title="Privacy Policy" sub="Last updated: January 2026. This is a demo policy for prototype purposes." />
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
