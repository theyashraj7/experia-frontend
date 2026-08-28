import { useState } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { ChevronDown } from "lucide-react";

const CATEGORIES = [
  {
    heading: "Getting started",
    items: [
      { q: "What is EXPÉRIA?", a: "A platform for live conversations with people who have real, first-hand experience in their field — not pre-recorded courses." },
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
  const [openItem, setOpenItem] = useState(null);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-violet-400/30 selection:text-white">
      <SiteHeader />

      <section className="mx-auto max-w-[900px] px-6 pb-10 pt-[110px] text-center lg:px-10 lg:pt-[130px]">
        <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">Help center</p>
        <h1 className="mt-4 font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.6rem]">
          Find your answer, <span className="bg-gradient-to-r from-violet-200 via-violet-400 to-indigo-300 bg-clip-text text-transparent">or ask us directly.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/50 sm:text-base">
          Browse common questions below, or reach out to our support team.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-14 lg:px-10 lg:py-16">
        {CATEGORIES.map((cat) => (
          <div key={cat.heading} className="mb-10 last:mb-0">
            <p className="mb-4 font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">{cat.heading}</p>
            <div className="flex flex-col gap-2">
              {cat.items.map((item) => {
                const id = `${cat.heading}-${item.q}`;
                const isOpen = openItem === id;
                return (
                  <div key={id} className="rounded-xl border border-white/[0.1] bg-white/[0.03]">
                    <button
                      type="button"
                      onClick={() => setOpenItem(isOpen ? null : id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left font-accent text-sm text-white/85"
                    >
                      {item.q}
                      <ChevronDown className={`h-4 w-4 shrink-0 text-white/45 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <p className="border-t border-white/[0.08] px-4 py-3.5 text-sm leading-relaxed text-white/55">{item.a}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <section className="border-t border-white/[0.08] px-6 py-14 text-center lg:px-10">
        <p className="text-base text-white/50">Still stuck?</p>
        <Link
          to="/contact-support"
          className="mt-5 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 font-accent text-sm font-semibold text-white shadow-[0_12px_32px_rgba(109,78,255,0.26)] transition hover:-translate-y-0.5"
        >
          Contact support
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
