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
  inFocus: {
    photo: {
      images: { original: { url: "https://i.imgur.com/xeHzkTj.png" } },
    },
    description: "temp",
  },
  setSearchQuery: (query) => {
    set(() => ({
      searchQuery: query,
    }));
  },

  setInFocus: (attraction) => {
    set(() => ({
      inFocus: attraction,
    }));
  },

  addFavorite: (favorite) => {
    set((state) => ({
      favorite: [favorite, ...state.favorite],
    }));
  },

  removeFavorite: (favoriteId) => {
    set((state) => ({
      favorite: state.favorite.filter(
        (c) => c.attractionInfo.location_id !== favoriteId
      ),
    }));
  },
});

const useAttractionStore = create(attractionStore);

export default useAttractionStore;
