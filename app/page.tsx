import React from "react";
import fs from "fs";
import path from "path";
import Games from "@/components/games";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarNav } from "@/components/sidebar-nav";

export function getGames() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "updated_games_data.json"
  );
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}

export default async function Page() {
  const { games, categories } = getGames();
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[300px_minmax(0,1fr)]">
      <aside className="fixed top-14 py-3 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
        <ScrollArea className="h-full">
          <SidebarNav games={games} categories={categories} />
        </ScrollArea>
      </aside>
      <div className="flex h-full flex-col py-4 pl-4 border-l !overflow-auto">
        <Games data={games} />
      </div>
    </div>
  );
}
