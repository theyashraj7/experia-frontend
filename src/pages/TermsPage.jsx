import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const SECTIONS = [
  { h: "Using EXPÉRIA", p: "You must be 18+ (or have guardian consent) to reserve a live conversation. Accounts are personal and non-transferable." },
  { h: "Reservations", p: "A reservation reserves your seat in a live conversation. See our Reservation Policy for cancellation and refund terms." },
  { h: "Expert content", p: "Conversations are the personal views of individual experts, not professional medical, legal, or financial advice." },
  { h: "Termination", p: "We may suspend or terminate accounts that violate our Community Guidelines or misuse the platform." },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-violet-400/30 selection:text-white">
      <SiteHeader />

      <section className="mx-auto max-w-[800px] px-6 pb-8 pt-[110px] text-center lg:px-10 lg:pt-[130px]">
        <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">Legal</p>
        <h1 className="mt-4 font-serif text-3xl text-white sm:text-4xl">Terms of Service</h1>
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
