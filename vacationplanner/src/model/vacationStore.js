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
  changeTimeInFocusId: "",
  inFocus: {
    photo: {
      images: { original: { url: "https://i.imgur.com/xeHzkTj.png" } },
    },
    description: "temp",
  },
  currentView: { view: "recent", value: 1 },
  setCurrentView: (info) => {
    set(() => ({
      currentView: info,
    }));
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
      favorite: [...state.favorite, favorite],
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
