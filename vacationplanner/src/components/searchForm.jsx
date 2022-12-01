import React, { useState } from "react";
import useVacationStore from "../App/vacationStore";

const SearchForm = () => {
  const addCities = useVacationStore((state) => state.addCourse);

  const [cityTitle, setCityTitle] = useState("");
  console.log("SearchForm Rendered");

  const handleCitySearched = () => {
    if (!cityTitle) return alert("please add a city");
    addCities({
      id: Math.ceil(Math.random() * 10),
      title: cityTitle,
    });
    setCityTitle("");
  };
  return (
    <div className="form-container">
      <input
        placeholder="type here"
        value={cityTitle}
        onChange={(e) => {
          setCityTitle(e.target.value);
        }}
        className="form-input"
      />
      <button
        className="searchButton"
        onClick={() => {
          handleCitySearched();
        }}
      >
        Search
      </button>

      <select onChange={console.log("One City was chosen")}>
        <option>Choose City</option>
      </select>

      <select onChange={console.log("One option was chosen")}>
        <option>Choose Options</option>
      </select>
    </div>
  );
};
export default SearchForm;
