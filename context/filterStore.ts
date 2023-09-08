import { create } from "zustand";
import data from "@/public/updated_games_data.json";

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

type FilterState = {
  scoreMin: any;
  scoreMax: any;
  dateMin: any;
  dateMax: any;
  criticMin: any;
  criticMax: any;
  comingSoon: any;
  leavingSoon: any;
  recentlyAdded: any;
  collectionFilter: any;
  graphicsFilter: any;
  categoriesFilter: any;
  originalGames: any;
  filteredGames: any;
  releasePlatform: any;
  searchTerm: any;
  sortOption: any;
  setScoreMin: any;
  setScoreMax: any;
  setDateMin: any;
  setDateMax: any;
  setCriticMin: any;
  setCriticMax: any;
  setCollectionFilter: any;
  setGraphicsFilter: any;
  setCategoriesFilter: any;
  setSortOption: any;
  setSearchTerm: any;
  setOriginalGames: any;
  setFilteredGames: any;
  setReleasePlatform: any;
  setComingSoon: any;
  setLeavingSoon: any;
  setRecentlyAdded: any;
  reset: any;
};

export const useFilterStore: any = create<FilterState>((set) => ({
  reset: () =>
    set({
      scoreMin: null,
      scoreMax: null,
      dateMin: null,
      dateMax: null,
      criticMin: null,
      criticMax: null,
      comingSoon: null,
      recentlyAdded: null,
      leavingSoon: null,
      releasePlatform: [],
      collectionFilter: [],
      graphicsFilter: [],
      categoriesFilter: [],
      searchTerm: "",
      sortOption: "",
      originalGames: data.games.slice(0, 20),
      filteredGames: data.games.slice(0, 20),
    }),
  scoreMin: null,
  scoreMax: null,
  comingSoon: null,
  recentlyAdded: null,
  leavingSoon: null,
  dateMin: null,
  dateMax: null,
  criticMin: null,
  criticMax: null,
  releasePlatform: [],
  collectionFilter: [],
  graphicsFilter: [],
  categoriesFilter: [],
  searchTerm: "",
  sortOption: "",
  originalGames: data.games.slice(0, 20),
  filteredGames: data.games.slice(0, 20),
  setOriginalGames: (games: any) => set({ originalGames: games }),
  setFilteredGames: (games: any) => set({ filteredGames: games }),
  setScoreMin: (value: any) => set(() => ({ scoreMin: value })),
  setScoreMax: (value: any) => set(() => ({ scoreMax: value })),
  setDateMin: (value: any) => set(() => ({ dateMin: value })),
  setComingSoon: (value: any) => set(() => ({ comingSoon: value })),
  setLeavingSoon: (value: any) => set(() => ({ leavingSoon: value })),
  setRecentlyAdded: (value: any) => set(() => ({ recentlyAdded: value })),
  setDateMax: (value: any) => set(() => ({ dateMax: value })),
  setCriticMin: (value: any) => set(() => ({ criticMin: value })),
  setCriticMax: (value: any) => set(() => ({ criticMax: value })),
  setCollectionFilter: (value: any) => set(() => ({ collectionFilter: value })),
  setGraphicsFilter: (value: any) => set(() => ({ graphicsFilter: value })),
  setCategoriesFilter: (value: any) => set(() => ({ categoriesFilter: value })),
  setReleasePlatform: (value: any) => set(() => ({ releasePlatform: value })),
  setSearchTerm: (value: any) => set(() => ({ searchTerm: value })),
  setSortOption: (value: any) => set(() => ({ sortOption: value })),
}));
