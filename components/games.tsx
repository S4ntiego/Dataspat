"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useFilterStore } from "@/context/filterStore";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

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
  const gridRef = useRef(null);
  const {
    scoreMin,
    scoreMax,
    comingSoon,
    recentlyAdded,
    leavingSoon,
    dateMin,
    dateMax,
    criticMin,
    criticMax,
    availabilityFilter,
    categoriesFilter,
    collectionFilter,
    graphicsFilter,
    searchTerm,
    sortOption,
    originalGames,
    filteredGames,
    releasePlatform,
    setFilteredGames,
    page,
    totalPages,
    setPage,
    getCurrentPageGames,
  } = useFilterStore();

  let gamesToRender = getCurrentPageGames();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const Pagination = ({ currentPage, totalPages, changePage }: any) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="pagination pt-4 md:pt-0 mb-8 flex justify-center items-center space-x-2">
        {pageNumbers.map((number) => (
          <Button
            variant="outline"
            key={number}
            onClick={() => changePage(number)}
            className={number === currentPage ? "bg-accent" : ""}
          >
            {number}
          </Button>
        ))}
      </div>
    );
  };

  useEffect(() => {
    let gamesToFilter = originalGames;

    // Apply filters
    gamesToFilter = gamesToFilter.filter((game: any) => {
      const score = game.UserScore;
      const date = new Date(game.OriginalReleaseDate).getFullYear();
      const soon = game.ComingSoon;
      const leaving = game.GoingToBeDeleted;
      const recent = game.RecentlyAdded;
      const criticScore = game.MetaScore;
      const collection = game.Collection;
      const graphics = game.Graphics;
      const category = game.Category;
      const platform = game.XboxConsoleGenOptimized;

      return (
        (scoreMin === null || score >= scoreMin) &&
        (scoreMax === null || score <= scoreMax) &&
        (dateMin === null || date >= dateMin) &&
        (dateMax === null || date <= dateMax) &&
        (criticMin === null || criticScore >= criticMin) &&
        (criticMax === null || criticScore <= criticMax) &&
        (comingSoon === null ||
          comingSoon === false ||
          (comingSoon === true && soon === true)) &&
        (recentlyAdded === null ||
          recentlyAdded === false ||
          (recentlyAdded === true && recent === true)) &&
        (leavingSoon === null ||
          leavingSoon === false ||
          (leavingSoon === true && leaving === true)) &&
        (collectionFilter.length === 0 ||
          collectionFilter.includes(collection)) &&
        (graphicsFilter.length === 0 || graphicsFilter.includes(graphics)) &&
        (categoriesFilter.length === 0 ||
          categoriesFilter.includes(category)) &&
        (releasePlatform.length === 0 || releasePlatform.includes(platform)) &&
        (searchTerm === "" ||
          game.ProductTitle.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });

    // Apply sorting
    const [field, order] = sortOption.split("-");
    gamesToFilter.sort((a: any, b: any) => {
      let valA, valB;

      if (field === "OriginalReleaseDate" || field === "StartDate") {
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
    comingSoon,
    leavingSoon,
    recentlyAdded,
    criticMin,
    criticMax,
    availabilityFilter,
    collectionFilter,
    graphicsFilter,
    categoriesFilter,
    releasePlatform,
    searchTerm,
    sortOption,
    setFilteredGames,
  ]);

  const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return (
    <div className="flex flex-col" ref={gridRef}>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8 py-4 lg:py-6">
        {gamesToRender.map((game: any) => (
          <div className="flex flex-col" key={game.ProductId}>
            <div className="relative">
              <Image
                key={game.ProductId}
                src={`/resized_images/${game.ProductId}_resized.jpg`}
                alt={game.ProductTitle}
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  shimmer(300, 400)
                )}`}
                width={188}
                height={256}
                className="rounded-[4px]"
              />
            </div>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages()}
        changePage={(newPage: any) => {
          setPage(newPage, () => {
            window.scrollTo({ top: 0 });
          });
        }}
      />
    </div>
  );
};

export default Games;
