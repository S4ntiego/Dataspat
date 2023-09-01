"use client";

import * as React from "react";
import { GamesOrder } from "./games-order";

export function MainNav() {
  return <div className="flex justify-between items-center w-full bg-background">
    <div className="mr-4 hidden md:flex font-semibold tracking-widest text-lg font-space text-zinc-100">Gridtrain</div>
    <GamesOrder />
    </div>
}
