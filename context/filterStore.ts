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
  scoreMin: any;
  scoreMax: any;
  dateMin: any;
  dateMax: any;
  criticMin: any;
  criticMax: any;
  categoriesFilter: any;
  searchTerm: any;
  sortOption: any;
  setScoreMin: any;
  setScoreMax: any;
  setDateMin: any;
  setDateMax: any;
  setCriticMin: any;
  setCriticMax: any;
  setCategoriesFilter: any;
  setSortOption: any;
  setSearchTerm: any;
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
  setScoreMin: (value: any) => set(() => ({ scoreMin: value })),
  setScoreMax: (value: any) => set(() => ({ scoreMax: value })),
  setDateMin: (value: any) => set(() => ({ dateMin: value })),
  setDateMax: (value: any) => set(() => ({ dateMax: value })),
  setCriticMin: (value: any) => set(() => ({ criticMin: value })),
  setCriticMax: (value: any) => set(() => ({ criticMax: value })),
  setCategoriesFilter: (value: any) => set(() => ({ categoriesFilter: value })),
  setSearchTerm: (value: any) => set(() => ({ searchTerm: value })),
  setSortOption: (value: any) => set(() => ({ sortOption: value })),
}));
