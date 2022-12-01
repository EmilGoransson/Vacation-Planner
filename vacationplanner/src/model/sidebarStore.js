import create from "zustand";

const favoriteStore = (set) => ({
  favorites: [],
  addFavorites: (favorite) => {
    set((state) => ({
      favorites: [favorite, ...state.favorites],
    }));
  },
  //TODO: removeFavoritesbyId
});
const useFavoriteStore = create(favoriteStore);

export default useFavoriteStore;
