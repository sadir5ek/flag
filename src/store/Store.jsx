import { create } from 'zustand';

const useCountryStore = create((set) => ({
  countries: [],
  searchQuery: '',
  selectedRegion: '',
  sortOption: 'name-asc',
  setCountries: (countries) => set({ countries }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedRegion: (region) => set({ selectedRegion: region }),
  setSortOption: (option) => set({ sortOption: option }),
}));

export default useCountryStore;