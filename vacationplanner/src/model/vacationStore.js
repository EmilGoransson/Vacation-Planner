import create from "zustand";
//import {addToFavoriteFirebase} from "./firebase";
import { getDatabase, ref, set } from "firebase/database";
import { database } from '../firebase';
import { set as setfirebase } from 'firebase/database';

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

  addFavorite: (newfavorite) => {
    set((state) => {
      setfirebase(ref(database, 'AddToFavorite'), { favorite: [newfavorite, ...state.favorite] });

      return { favorite: [newfavorite, ...state.favorite] }
    });

  },



  /*function addToFavorite(favorite){
    addToFavoriteCB(state){ 
      return {favorite : [favorite, ...state.favorite]};
    }
    set (addToFavoriteCB);

  },*/

  /*
    removeFavorite: (favoriteId) => {
      set((state) => {
  
        setfirebase(ref(database, 'RemoveFavorite'), { favorite: state.favorite.filter((c) => c.location_id !== favoriteId) });
  
  
        return { favorite: state.favorite.filter((c) => c.location_id !== favoriteId) }
      });
    },*/


  removeFavorite: (favoriteId) => {
    set((state) => ({

      favorite: state.favorite.filter((c) => c.location_id !== favoriteId),
    }));
  },


});

const useAttractionStore = create(attractionStore);

export default useAttractionStore;
