import create from "zustand";
import { devtools, persist } from "zustand/middleware";
/*
@Author Emil <emilgo@kth.se>
TODO:
DONE: Cookies for recent
*/

const recentStore = (set) => ({
  recent: [], //Persisted with cookies
  addRecent: (recent) => {
    set((state) => ({
      recent: [
        recent.charAt(0).toUpperCase() + recent.slice(1),
        ...state.recent,
      ],
    }));
  },

  removeRecent: (string) => {
    set((state) => ({
      recent: state.recent.filter((c) => c !== string),
    }));
  },
});

const useRecentStore = create(
  //Persisted with cookies
  devtools(
    persist(recentStore, {
      name: "recent",
    })
  )
);
export default useRecentStore;
