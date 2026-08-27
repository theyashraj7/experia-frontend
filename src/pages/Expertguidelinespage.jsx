import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/atoms";

const SECTIONS = [
  { h: "Who can host", p: "Anyone with genuine, first-hand experience in their field. We verify identity and relevant background before approving new experts." },
  { h: "What makes a good session", p: "Speak from your own experience, welcome hard questions, and treat the room as a conversation — not a presentation." },
  { h: "What's not allowed", p: "No promotional pitches, no soliciting participants outside the platform, and no sharing content that violates our Community Guidelines." },
  { h: "Getting paid", p: "Experts receive a share of each session's reservation fees, paid out monthly to your linked account." },
];

export default function ExpertGuidelinesPage() {
  return (
    <PageShell>
      <PageHero overline="For experts" title="Expert Guidelines" sub="What we expect from anyone hosting a live conversation on Expéria." />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {SECTIONS.map((s, i) => (
          <Reveal key={s.h} delay={i * 0.06} className="mb-10 last:mb-0">
            <h2 className="font-serif text-2xl">{s.h}</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.p}</p>
          </Reveal>
        ))}
        <Reveal delay={0.3} className="mt-4">
          <CTA to="/become-an-expert">Apply to host a conversation</CTA>
        </Reveal>
      </section>
    </PageShell>
  );
}
