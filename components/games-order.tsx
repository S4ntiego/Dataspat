"use client";

import React from "react";
import { useFilterStore } from "@/context/filterStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function GamesOrder() {
  const { setSortOption } = useFilterStore();

  return (
    <div className="flex justify-end items-center py-2 shrink-0 bg-background">
      <Select onValueChange={(value) => setSortOption(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="title-asc">Title: A-Z</SelectItem>
          <SelectItem value="title-desc">Title: Z-A</SelectItem>
          <SelectItem value="UserScore-desc">User Score: Desc</SelectItem>
          <SelectItem value="MetaScore-desc">Meta Score: Desc</SelectItem>
          <SelectItem value="OriginalReleaseDate-asc">
            Release Date: Asc
          </SelectItem>
          <SelectItem value="OriginalReleaseDate-desc">
            Release Date: Desc
          </SelectItem>
          <SelectItem value="StartDate-desc">Start Date: Desc</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
