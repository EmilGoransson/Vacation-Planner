import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const vacationStoreFav = (set) => ({
  courses: [],
  addCourse: (course) => {
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },

  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== courseId),
    }));
  },
});

const useVacationStoreFav = create(vacationStoreFav);
export default useVacationStoreFav;
