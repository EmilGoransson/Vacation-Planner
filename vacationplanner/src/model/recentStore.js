import create from "zustand";
import { devtools, persist } from "zustand/middleware";
/*
@Author Emil <emilgo@kth.se>
TODO:
DONE:
*/

const recentStore = (set) => ({
  recent: [],
  addRecent: (recent) => {
    set((state) => ({
      recent: [recent, ...state.recent],
    }));
  },

  /*
  removeRecent: (favoriteId) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== favoriteId),
    }));
  },
  */
});

const useRecentStore = create(
  devtools(
    persist(recentStore, {
      name: "recentQuery",
    })
  )
);

export default useRecentStore;
