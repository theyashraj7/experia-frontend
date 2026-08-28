import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const SECTIONS = [
  { h: "Why there's a fee", p: "A small reservation fee keeps live rooms meaningful — it filters for people who genuinely intend to show up and participate." },
  { h: "Cancellations", p: "Cancel up to 12 hours before a session for a full refund. Cancellations inside that window are non-refundable." },
  { h: "No-shows", p: "If you don't join within 10 minutes of a session starting, your seat may be released and the reservation forfeited." },
  { h: "Expert cancellations", p: "If an expert cancels a session, you're automatically refunded in full and notified immediately." },
];

export default function ReservationPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-violet-400/30 selection:text-white">
      <SiteHeader />

      <section className="mx-auto max-w-[800px] px-6 pb-8 pt-[110px] text-center lg:px-10 lg:pt-[130px]">
        <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">Legal</p>
        <h1 className="mt-4 font-serif text-3xl text-white sm:text-4xl">Reservation Policy</h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-white/45">Last updated: January 2026. This is a demo policy for prototype purposes.</p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-14 lg:px-10 lg:py-16">
        {SECTIONS.map((s) => (
          <div key={s.h} className="mb-10 border-b border-white/[0.08] pb-10 last:mb-0 last:border-0 last:pb-0">
            <h2 className="font-serif text-2xl text-white">{s.h}</h2>
            <p className="mt-3 text-base leading-relaxed text-white/55">{s.p}</p>
          </div>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
