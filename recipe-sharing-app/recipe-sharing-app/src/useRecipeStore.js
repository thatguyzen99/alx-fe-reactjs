import { create } from 'zustand';

const useStore = create((set) => ({
  favourites: [],
  recommendations: [],
  
  addFavourite: (item) => set((state) => ({
    favourites: [...state.favourites, item],
  })),

  removeFavourite: (item) => set((state) => ({
    favourites: state.favourites.filter((fav) => fav !== item),
  })),

  setRecommendations: (data) => set(() => ({ recommendations: data })),
}));

export default useStore;
