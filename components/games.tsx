"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useFilterStore } from "@/context/filterStore";
import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";

interface Game {
  ProductId: string;
  DeveloperName: string;
  PublisherName: string;
  ProductTitle: string;
  ShortTitle: string;
  ShortDescription: string;
  MainImgUrl: string;
  Category: string;
  OriginalReleaseDate: string;
  ProductGroupName: string;
  XboxConsoleGenOptimized: string;
  UserScore: number;
  MetaScore: number;
}

const Games = () => {
  const {
    scoreMin,
    scoreMax,
    dateMin,
    dateMax,
    criticMin,
    criticMax,
    categoriesFilter,
    searchTerm,
    sortOption,
    originalGames,
    filteredGames,
    setFilteredGames,
  } = useFilterStore();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  useEffect(() => {
    let gamesToFilter = originalGames;

    // Apply filters
    gamesToFilter = gamesToFilter.filter((game: any) => {
      const score = game.UserScore;
      const date = new Date(game.OriginalReleaseDate).getFullYear();
      const criticScore = game.MetaScore;
      const category = game.Category;

      return (
        (scoreMin === null || score >= scoreMin) &&
        (scoreMax === null || score <= scoreMax) &&
        (dateMin === null || date >= dateMin) &&
        (dateMax === null || date <= dateMax) &&
        (criticMin === null || criticScore >= criticMin) &&
        (criticMax === null || criticScore <= criticMax) &&
        (categoriesFilter.length === 0 ||
          categoriesFilter.includes(category)) &&
        (searchTerm === "" ||
          game.ProductTitle.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });

    // Apply sorting
    const [field, order] = sortOption.split("-");
    gamesToFilter.sort((a: any, b: any) => {
      let valA, valB;

      if (field === "OriginalReleaseDate") {
        valA = new Date(a[field]).getTime();
        valB = new Date(b[field]).getTime();
      } else if (field === "title") {
        valA = a.ProductTitle.toLowerCase();
        valB = b.ProductTitle.toLowerCase();
      } else {
        valA = Number(a[field]);
        valB = Number(b[field]);
      }

      if (valA < valB) return order === "asc" ? -1 : 1;
      if (valA > valB) return order === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredGames(gamesToFilter);
  }, [
    scoreMin,
    scoreMax,
    dateMin,
    dateMax,
    criticMin,
    criticMax,
    categoriesFilter,
    searchTerm,
    sortOption,
    setFilteredGames,
  ]);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 gap-y-8 py-4">
      {filteredGames.map((game: any) => (
        <div className="flex flex-col" key={game.ProductId}>
          <div className="relative">
            <Image
              key={game.ProductId}
              src={`/resized_images/${game.ProductId}_resized.jpg`}
              alt={game.ProductTitle}
              width={360}
              height={540}
              className="rounded-[4px]"
            />
            <div className="absolute bottom-1.5 right-1.5 w-full flex justify-end space-x-1">
              <div
                className={cn(
                  "rounded-md h-8 w-8 flex items-center justify-center text-xs font-bold transition-colors text-background",
                  game.MetaScore >= 75
                    ? "bg-[#65CC33]"
                    : game.MetaScore >= 50
                    ? "bg-[#FFCC33]"
                    : game.MetaScore >= 0
                    ? "bg-[#FF0000]"
                    : "bg-accent text-foreground"
                )}
              >
                {game.MetaScore === -1 ? "tbd" : game.MetaScore}
              </div>
              <div
                className={cn(
                  "rounded-md h-8 w-8 flex items-center justify-center text-xs font-bold transition-colors text-background",
                  game.UserScore >= 7.5
                    ? "bg-[#65CC33]"
                    : game.UserScore >= 5.0
                    ? "bg-[#FFCC33]"
                    : game.UserScore >= 0.0
                    ? "bg-[#FF0000]"
                    : "bg-accent text-foreground"
                )}
              >
                {game.UserScore === -1 ? "tbd" : game.UserScore.toFixed(1)}
              </div>
            </div>
          </div>
          <div className="flex text-muted-foreground text-[10px] uppercase mt-2 tracking-wide">
            <div>
              {new Date(game.OriginalReleaseDate) > today
                ? "tba"
                : game.OriginalReleaseDate.substring(0, 4)}
            </div>
            <div>, {game.Category}</div>
          </div>
          <div className="text-md">{game.ProductTitle}</div>
        </div>
      ))}
    </div>
  );
};

export default Games;
