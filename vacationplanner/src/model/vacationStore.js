import create from "zustand";
import { getDatabase, ref, set, onValue, get, child } from "firebase/database";
import { database } from "../firebaseModel";
import { set as setfirebase } from "firebase/database";
import { getCurrentUserID, singInWithGoogle } from "../firebaseModel";

/*
@Author Mahdi <mnazari@kth.se>
@Co-Author Emil <emilgo@kth.se>
TODO: Favorite array,  add & remove favorite, firebase integration, local storage for recent (maybe?)
DONE: Serachquery, setSearchQuery
*/

const attractionStore = (set) => ({
  userEmail: null,
  searchQuery: "Stockholm",
  favorite: [],
  changeTimeInFocusId: "",
  recentAddedAttraction: "",
  recentAddedFailure: "",
  inFocus: {
    photo: {
      images: { original: { url: "https://i.imgur.com/xeHzkTj.png" } },
    },
    description: "temp",
  },
  currentView: { view: "recent", value: 1 },

  // Feches Data and prints correct array but crashes the website for some unknown reason
  // USED TO SAVE DATA FROM FIREBASE  (DATA) TO favorite
  fetchFromFireBase: (data) => {
    console.log("fetching from firebase", data.favorite);
    set(() => ({ favorite: data.favorite }));
  },

  setRecentAddedAttraction: (attraction) => {
    set(() => ({ recentAddedAttraction: attraction }));
  },
  setRecentAddedFailure: (attractionFail) => {
    set(() => ({ recentAddedFailure: attractionFail }));
  },
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

  //TODO: PROBLEM MED ATT HELA OBJEKTET EJ SPARAS I FIREBASE
  addFavorite: (newfavorite) => {
    console.log(newfavorite);
    set((state) => {
      if (!state.userEmail) {
        alert("Please sign in first");
      }
      const id = state.userEmail.replaceAll(".", "");
      console.log(id);
      setfirebase(ref(database, "users/" + id + "/favorite"), [
        newfavorite,
        ...state.favorite,
      ]);

      return { favorite: [newfavorite, ...state.favorite] };
    });
  },

  removeFavorite: (favoriteId) => {
    set((state) => {
      const id = state.userEmail.replaceAll(".", "");
      console.log(id);
      setfirebase(
        ref(database, "users/" + id + "/favorite"),
        state.favorite.filter(
          (c) => c.attractionInfo.location_id !== favoriteId
        )
      );
      return {
        favorite: state.favorite.filter(
          (c) => c.attractionInfo.location_id !== favoriteId
        ),
      };
    });
  },

  setUserEmail: (email) => {
    set((state) => {
      return { userEmail: email };
    });
  },
});

const useAttractionStore = create(attractionStore);

export default useAttractionStore;
