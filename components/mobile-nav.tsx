"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Input } from "./ui/input";
import { GamesOrder } from "@/components/games-order";
import { useFilterStore } from "@/context/filterStore";
import { SidebarNav } from "./sidebar-nav";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const { setSearchTerm } = useFilterStore();

  return (
    <div className="flex lg:hidden items-center">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-4 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <HamburgerMenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <p className="font-space text-xl mb-8">Gridtrain</p>
          <SidebarNav />
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
            <div className="flex flex-col space-y-3"></div>
            <div className="flex flex-col space-y-2"></div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
      <Input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mr-2 lg:w-96"
      />
      <GamesOrder />
    </div>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
