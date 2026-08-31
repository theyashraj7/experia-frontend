import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import { cn } from "@/lib/utils";

export default function PageShell({ children, heroFlush = false }) {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className={cn("flex-1", !heroFlush && "pt-[58px]")}>{children}</main>
      <SiteFooter />
      <MobileBottomNav />
      <div className="h-16 lg:hidden" aria-hidden />
    </div>
  );
}
