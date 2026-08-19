import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { DemoTag, LiveDot } from "@/components/atoms";
import { cn } from "@/lib/utils";

// Deterministic per-expert so the same expert always shows the same status
// on every page, instead of flickering between renders.
function accessStatus(slug) {
  const n = slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const mod = n % 3;
  if (mod === 0) return { label: "LIVE NOW", tone: "live" };
  if (mod === 1) return { label: "LIVE TOMORROW", tone: "upcoming" };
  return null;
}

export default function ExpertCard({ expert, className = "" }) {
  const status = accessStatus(expert.slug);
  return (
    <Link
      to={`/experts/${expert.slug}`}
      data-testid={`expert-card-${expert.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={expert.image}
          alt={expert.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <DemoTag className="border-white/30 bg-black/30 text-white/90" />
        </div>
        {status && (
          <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 backdrop-blur">
            {status.tone === "live" ? <LiveDot /> : <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" />}
            <span
              className={cn(
                "font-accent text-[0.6rem] font-bold tracking-wide",
                status.tone === "live" ? "text-red-400" : "text-indigo-300"
              )}
            >
              {status.label}
            </span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <span className="font-accent text-[0.65rem] uppercase tracking-[0.18em] text-white/70">{expert.field}</span>
          <p className="font-serif text-2xl leading-tight">{expert.name}</p>
          <p className="text-xs text-white/75">{expert.role} · {expert.years} yrs</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-5">
        <p className="font-serif text-lg italic leading-snug text-foreground/90">“{expert.hook}”</p>
        <span className="mt-4 flex items-center gap-1.5 font-accent text-xs font-bold text-foreground transition-colors group-hover:text-primary">
          Ask {expert.name.split(" ")[0]} a question
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
