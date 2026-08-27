import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, CTA } from "@/components/atoms";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const CATEGORIES = [
  {
    heading: "Getting started",
    items: [
      { q: "What is Expéria?", a: "A platform for live conversations with people who have real, first-hand experience in their field — not pre-recorded courses." },
      { q: "Do I need an account to browse?", a: "No. You can explore experts, topics, and questions without signing up. You'll need an account to reserve a seat in a live conversation." },
    ],
  },
  {
    heading: "Reservations",
    items: [
      { q: "Why is there a reservation fee?", a: "It keeps the room meaningful — a small commitment filters for people who genuinely want to be there." },
      { q: "Can I get a refund if I miss a session?", a: "See our Reservation Policy for full details on cancellations and rescheduling." },
    ],
  },
  {
    heading: "Account",
    items: [
      { q: "How do I reset my password?", a: "Use the \"Forgot password?\" link on the login page to receive a reset email." },
      { q: "How do I delete my account?", a: "Reach out via Contact Support and we'll process the deletion within a few business days." },
    ],
  },
];

export default function HelpCenterPage() {
  return (
    <PageShell>
      <PageHero
        overline="Help center"
        title={<>Find your answer, <em className="font-display italic text-primary">or ask us directly.</em></>}
        sub="Browse common questions below, or reach out to our support team."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {CATEGORIES.map((cat, i) => (
          <Reveal key={cat.heading} delay={i * 0.08} className="mb-10 last:mb-0">
            <SectionHeading title={cat.heading} className="mb-4" />
            <Accordion type="single" collapsible className="w-full">
              {cat.items.map((item, idx) => (
                <AccordionItem key={item.q} value={`${cat.heading}-${idx}`} className="border-border">
                  <AccordionTrigger className="font-accent text-base hover:no-underline">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        ))}
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <p className="text-base text-muted-foreground">Still stuck?</p>
          <div className="mt-5 flex justify-center">
            <CTA to="/contact-support">Contact support</CTA>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
