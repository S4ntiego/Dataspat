import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container flex h-15 items-center border-b">
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}
