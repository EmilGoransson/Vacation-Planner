import create from "zustand";

/*
@Author Mahdi <mnazari@kth.se>
@Co-Author Emil <emilgo@kth.se>
TODO: Favorite array,  add & remove favorite, firebase integration, local storage for recent (maybe?)
DONE: Serachquery, setSearchQuery
*/

const attractionStore = (set) => ({
  searchQuery: "Stockholm",
  favorite: [],
  setSearchQuery: (query) => {
    set(() => ({
      searchQuery: query,
    }));
  },
  /*
  addFavorite: (favorite) => {
    set((state) => ({
      favorite: [favorite, ...state.courses],
    }));
  },
  removeFavorite: (favoriteId) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== favoriteId),
    }));
  },
    */
});

const useAttractionStore = create(attractionStore);

export default useAttractionStore;
