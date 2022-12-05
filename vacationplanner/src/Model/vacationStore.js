import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const attractionStore = (set) => ({
  favorite: [],
  addFavorite: (course) => {
    set((state) => ({
      favorite: [course, ...state.courses],
    }));
  },

  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== courseId),
    }));
  },

  // toggleCourseStatus: (courseId) => {
  //   set((state) => ({
  //     courses: state.courses.map((course) =>
  //       course.id === courseId
  //         ? { ...course, completed: !course.completed }
  //         : course
  //     ),
  //   }));
  // },
});

const useVacationStore = create(
  devtools(
    persist(vacationStore, {
      name: "courses",
    })
  )
);

export default useVacationStore;
