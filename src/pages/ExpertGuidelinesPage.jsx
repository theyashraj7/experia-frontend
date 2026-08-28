import { Link } from "react-router-dom";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const SECTIONS = [
  { h: "Who can host", p: "Anyone with genuine, first-hand experience in their field. We verify identity and relevant background before approving new experts." },
  { h: "What makes a good session", p: "Speak from your own experience, welcome hard questions, and treat the room as a conversation — not a presentation." },
  { h: "What's not allowed", p: "No promotional pitches, no soliciting participants outside the platform, and no sharing content that violates our Community Guidelines." },
  { h: "Getting paid", p: "Experts receive a share of each session's reservation fees, paid out monthly to your linked account." },
];

export default function ExpertGuidelinesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-violet-400/30 selection:text-white">
      <SiteHeader />

      <section className="mx-auto max-w-[800px] px-6 pb-8 pt-[110px] text-center lg:px-10 lg:pt-[130px]">
        <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">For experts</p>
        <h1 className="mt-4 font-serif text-3xl text-white sm:text-4xl">Expert Guidelines</h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-white/45">What we expect from anyone hosting a live conversation on EXPÉRIA.</p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-14 lg:px-10 lg:py-16">
        {SECTIONS.map((s) => (
          <div key={s.h} className="mb-10 border-b border-white/[0.08] pb-10 last:mb-0 last:border-0 last:pb-0">
            <h2 className="font-serif text-2xl text-white">{s.h}</h2>
            <p className="mt-3 text-base leading-relaxed text-white/55">{s.p}</p>
          </div>
        ))}

        <Link
          to="/become-an-expert"
          className="mt-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 font-accent text-sm font-semibold text-white shadow-[0_12px_32px_rgba(109,78,255,0.26)] transition hover:-translate-y-0.5"
        >
          Apply to host a conversation
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
