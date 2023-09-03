"use client";

import * as React from "react";
import { GamesOrder } from "./games-order";
import { Input } from "./ui/input";
import { useFilterStore } from "@/context/filterStore";

export function MainNav() {
  const { setSearchTerm } = useFilterStore();

  return (
    <div className="flex justify-between items-center w-full bg-background gap-x-48">
      <div className="mr-4 hidden md:flex font-semibold tracking-widest text-lg font-space text-zinc-100">
        Gridtrain
      </div>
      <Input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <GamesOrder />
    </div>
  );
}
