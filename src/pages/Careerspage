import { toast } from "sonner";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/atoms";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ROLES = [
  { title: "Senior Product Designer", team: "Design", location: "Remote · India" },
  { title: "Full-Stack Engineer", team: "Engineering", location: "Remote · India" },
  { title: "Expert Relations Lead", team: "Operations", location: "Bengaluru" },
  { title: "Growth Marketer", team: "Marketing", location: "Remote" },
];

export default function CareersPage() {
  return (
    <PageShell>
      <PageHero
        overline="Join the team"
        title={<>Help us make access to real experience <em className="font-display italic text-primary">the default.</em></>}
        sub="We're a small team building something we personally wish existed years ago."
      />

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading overline="Open roles" title="Current openings." />
          <Stagger className="mt-10 flex flex-col gap-3" stagger={0.06}>
            {ROLES.map((role) => (
              <motion.button
                key={role.title}
                variants={staggerItem}
                onClick={() => toast(role.title, { description: "This is a demo — applications aren't collected yet." })}
                className="group flex items-center justify-between rounded-2xl border border-border bg-background px-6 py-5 text-left transition-colors hover:border-primary"
              >
                <div>
                  <p className="font-serif text-lg">{role.title}</p>
                  <p className="mt-1 font-accent text-xs uppercase tracking-[0.15em] text-muted-foreground">{role.team} · {role.location}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </motion.button>
            ))}
          </Stagger>
        </div>
      </section>

      <Reveal className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        <p className="text-base leading-relaxed text-muted-foreground">
          Don't see a fit but think you should be here anyway? Reach out at{" "}
          <a href="mailto:careers@experia.app" className="text-primary underline underline-offset-4">careers@experia.app</a>.
        </p>
      </Reveal>
    </PageShell>
  );
}
