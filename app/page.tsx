import React from "react";
import fs from "fs";
import path from "path";
import Games from "@/components/games";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarNav } from "@/components/sidebar-nav";

export default function Page() {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[300px_minmax(0,1fr)]">
      <aside className="fixed top-[85px] py-6 z-30 hidden h-[calc(100vh-5rem)] w-full shrink-0 md:sticky md:block">
        <ScrollArea className="h-full" type="auto">
          <SidebarNav />
        </ScrollArea>
      </aside>
      <Games />
    </div>
  );
}
