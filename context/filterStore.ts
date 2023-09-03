import { create } from "zustand";

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
  scoreMin: number | null;
  scoreMax: number | null;
  dateMin: number | null;
  dateMax: number | null;
  criticMin: number | null;
  criticMax: number | null;
  categoriesFilter: string[];
  searchTerm: string;
  sortOption: string;
  filteredGames: Game[];
  games: Game[];
  setFilteredGames: (games: Game[]) => void;
  setScoreMin: (value: number) => void;
  setScoreMax: (value: number) => void;
  setDateMin: (value: number) => void;
  setDateMax: (value: number) => void;
  setCriticMin: (value: number) => void;
  setCriticMax: (value: number) => void;
  setCategoriesFilter: (value: string[]) => void;
  setSortOption: (value: string) => void;
  setSearchTerm: (value: string) => void;
};

export const useFilterStore = create<FilterState>((set) => ({
  scoreMin: null,
  scoreMax: null,
  dateMin: null,
  dateMax: null,
  criticMin: null,
  criticMax: null,
  categoriesFilter: [],
  searchTerm: "",
  sortOption: "",
  filteredGames: [],
  games: [],
  setGames: (value) => set(() => ({ games: value })),
  setFilteredGames: (games: Game[]) => set(() => ({ filteredGames: games })),
  setScoreMin: (value) => set(() => ({ scoreMin: value })),
  setScoreMax: (value) => set(() => ({ scoreMax: value })),
  setDateMin: (value) => set(() => ({ dateMin: value })),
  setDateMax: (value) => set(() => ({ dateMax: value })),
  setCriticMin: (value) => set(() => ({ criticMin: value })),
  setCriticMax: (value) => set(() => ({ criticMax: value })),
  setCategoriesFilter: (value) => set(() => ({ categoriesFilter: value })),
  setSearchTerm: (value) => set(() => ({ searchTerm: value })),
  setSortOption: (value) => set(() => ({ sortOption: value })),
}));
