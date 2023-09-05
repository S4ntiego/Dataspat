"use client";

import * as React from "react";
import { GamesOrder } from "./games-order";
import { Input } from "./ui/input";
import { useFilterStore } from "@/context/filterStore";

export function MainNav() {
  const { setSearchTerm } = useFilterStore();

  return (
    <div className="hidden lg:flex py-4 border-b lg:border-0 lg:mx-0 w-full">
      <div className="relative flex items-center justify-between w-full">
        <p className="font-space text-xl">Gridtrain</p>
        <div className="flex items-center gap-4">
          <Input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full lg:w-96"
          />
          <GamesOrder />
        </div>
      </div>
    </div>
  );
}
