import { create } from "zustand";
import data from "@/public/updated_games_data.json";

type FilterState = {
  page: any;
  availabilityFilter: any;
  gamesPerPage: any;
  totalPages: any;
  scoreMin: any;
  scoreMax: any;
  timeMin: any;
  timeMax: any;
  setTimeMin: any;
  setTimeMax: any;
  currentPageGames: any;
  dateMin: any;
  dateMax: any;
  criticMin: any;
  criticMax: any;
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
  setAvailabilityFilter: any;
  setCategoriesFilter: any;
  setSortOption: any;
  setSearchTerm: any;
  setOriginalGames: any;
  setFilteredGames: any;
  setReleasePlatform: any;
  setPage: any;
  setGamesPerPage: any;
  reset: any;
};

export const useFilterStore: any = create<FilterState>((set, get) => ({
  reset: () =>
    set({
      timeMin: null,
      timeMax: null,
      scoreMin: null,
      scoreMax: null,
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
      originalGames: data.games,
      filteredGames: data.games,
    }),
  scoreMin: null,
  timeMin: null,
  timeMax: null,
  gamesPerPage: 100,
  page: 1,
  availabilityFilter: [],
  scoreMax: null,
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
  originalGames: data.games,
  currentPageGames: [],
  filteredGames: data.games,
  totalPages: () => Math.ceil(get().filteredGames.length / get().gamesPerPage),
  getCurrentPageGames: () => {
    const { page, gamesPerPage, filteredGames } = get();
    const start = (page - 1) * gamesPerPage;
    const end = page * gamesPerPage;
    return filteredGames.slice(start, end);
  },
  setPage: (value: any, callback: any) => {
    const { gamesPerPage, filteredGames } = get();
    const current_total_pages = get().totalPages();
    const newPage = Math.max(1, Math.min(value, current_total_pages));
    const start = (newPage - 1) * gamesPerPage;
    const end = newPage * gamesPerPage;
    const currentPageGames = filteredGames.slice(start, end);
    set({ page: newPage, currentPageGames });

    // Call the callback function if it's provided
    if (callback) {
      callback();
    }
  },
  setOriginalGames: (games: any) => set({ originalGames: games }),
  setFilteredGames: (games: any) => {
    const { page, gamesPerPage } = get();
    const start = (page - 1) * gamesPerPage;
    const end = page * gamesPerPage;
    const currentPageGames = games.slice(start, end);
    set({ filteredGames: games, currentPageGames });
  },
  setScoreMin: (value: any) => set(() => ({ scoreMin: value })),
  setScoreMax: (value: any) => set(() => ({ scoreMax: value })),
  setTimeMin: (value: any) => set(() => ({ timeMin: value })),
  setTimeMax: (value: any) => set(() => ({ timeMax: value })),
  setDateMin: (value: any) => set(() => ({ dateMin: value })),
  setDateMax: (value: any) => set(() => ({ dateMax: value })),
  setCriticMin: (value: any) => set(() => ({ criticMin: value })),
  setCriticMax: (value: any) => set(() => ({ criticMax: value })),
  setCollectionFilter: (value: any) => set(() => ({ collectionFilter: value })),
  setGraphicsFilter: (value: any) => set(() => ({ graphicsFilter: value })),
  setAvailabilityFilter: (value: any) =>
    set(() => ({ availabilityFilter: value })),
  setCategoriesFilter: (value: any) => set(() => ({ categoriesFilter: value })),
  setReleasePlatform: (value: any) => set(() => ({ releasePlatform: value })),
  setSearchTerm: (value: any) => set(() => ({ searchTerm: value, page: 1 })),
  setSortOption: (value: any) => set(() => ({ sortOption: value })),
  setGamesPerPage: (value: any) => set(() => ({ gamesPerPage: value })),
}));
