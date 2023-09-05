import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 w-full flex-none z-50 border-b bg-background">
      <div className="container">
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}
