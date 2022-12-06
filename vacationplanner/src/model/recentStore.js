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

  removeRecent: (string) => {
    set((state) => ({
      recent: state.recent.filter((c) => c !== string),
    }));
  },
});

const useRecentStore = create(recentStore);
export default useRecentStore;
