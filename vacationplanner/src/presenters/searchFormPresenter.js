import React, { useState } from "react";
import useVacationStore from "../Model/vacationStore";
import SearchFormView from "../views/searchFormView";

const SearchForm = () => {
  //const addCities = useVacationStore((state) => state.addCourse);

  const [locationQuery, setLocationQuery] = useState("");
  console.log("SearchForm Rendered");

  // const handleCitySearched = () => {
  //   if (!cityTitle) return alert("please add a city");
  //   addCities({
  //     id: Math.ceil(Math.random() * 10),
  //     title: cityTitle,
  //   });
  //   setCityTitle("");
  // };

  function tempACB(text) {
    setLocationQuery(text);
  }

  return (
    <div>
      {
        <SearchFormView
          dishTypeOptions={["HOTEL", "RESTAURANT", "ACTIVITIES"]}
          setSearchText={tempACB}
        />
      }
    </div>
  );
};
export default SearchForm;
