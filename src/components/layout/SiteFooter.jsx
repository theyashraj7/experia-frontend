import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const FOOTER_LINKS = {
  Platform: [
    { label: "Explore", to: "/topics" },
    { label: "Live", to: "/live" },
    { label: "Experts", to: "/experts" },
    { label: "Topics", to: "/topics" },
    { label: "Questions", to: "/questions" },
    { label: "My Learning", to: "/learning" },
  ],
  Company: [
    { label: "About", to: "/about" },
    { label: "How it works", to: "/how-it-works" },
    { label: "Become an Expert", to: "/become-an-expert" },
    { label: "Careers", to: "/careers" },
    { label: "Contact", to: "/contact" },
  ],
  Support: [
    { label: "Help Center", to: "/help" },
    { label: "Community Guidelines", to: "/community-guidelines" },
    { label: "Safety", to: "/safety" },
    { label: "Contact Support", to: "/contact-support" },
  ],
  Legal: [
    { label: "Privacy", to: "/privacy" },
    { label: "Terms", to: "/terms" },
    { label: "Reservation Policy", to: "/reservation-policy" },
    { label: "Expert Guidelines", to: "/expert-guidelines" },
  ],
};

const SOCIAL_LINKS = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-black px-6 py-12 lg:px-10">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="font-serif text-lg tracking-[0.2em] text-white/85">EXP<span className="text-violet-300">É</span>RIA</Link>
            <p className="mt-3 max-w-[240px] text-xs leading-relaxed text-white/40">Real people. Real experience. Real access.</p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/50 transition hover:border-violet-300/40 hover:text-violet-200">
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <p className="font-accent text-xs font-semibold uppercase tracking-[0.16em] text-white/40">{heading}</p>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="font-accent text-sm text-white/60 transition hover:text-white">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-2 border-t border-white/[0.08] pt-6 text-center font-accent text-xs text-white/30 sm:text-left">
          <p>Conversations on EXPÉRIA are educational and don't replace professional medical, legal, or financial advice.</p>
          <p>© {new Date().getFullYear()} EXPÉRIA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
