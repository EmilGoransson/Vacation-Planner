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
  setChangeTimeInFocus(obj) {
    set(() => ({
      changeTimeInFocusId: obj,
    }));
  },

  removeFavorite: (favoriteId) => {
    set((state) => ({
      favorite: state.favorite.filter(
        (c) => c.attractionInfo.location_id !== favoriteId
      ),
    }));
  },
  //Supposed to find matching obj and update the startDate
  //1) Find out at what index favorite.attractionInfo.location_id === obj.location_id
  //2) At that index, update the startDate only.

  //  check(fav.attractionInfo.location_id === obj.location_id) if true, save index.

  updateStartDate: (updatedFavorite) => {
    set((state) => ({
      favorite: updatedFavorite,
    }));
  },
});

const useAttractionStore = create(attractionStore);

export default useAttractionStore;
