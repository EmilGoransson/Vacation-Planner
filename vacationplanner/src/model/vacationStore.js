import create from "zustand";
import { getDatabase, ref, set } from "firebase/database";
import { database } from '../firebaseModel';
import { set as setfirebase } from 'firebase/database';
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

  addFavorite: (newfavorite) => {
    set((state) => {

      const id = state.userEmail.replaceAll('.', "");
      console.log(id)
      setfirebase(ref(database, 'users/' + id + '/favorite'), [newfavorite, ...state.favorite]);

      return { favorite: [newfavorite, ...state.favorite] }
    });

  },



  removeFavorite: (favoriteId) => {
    set((state) => {
      const id = state.userEmail.replaceAll('.', "");
      console.log(id)
      setfirebase(ref(database, 'users/' + id + '/favorite'), state.favorite.filter((c) => c.attractionInfo.location_id !== favoriteId));
      return { favorite: state.favorite.filter((c) => c.attractionInfo.location_id !== favoriteId) }
    });
  },

  setUserEmail: (email) => {

    set((state) => {
      return { userEmail: email }

    });
  },



});

const useAttractionStore = create(attractionStore);

export default useAttractionStore;
