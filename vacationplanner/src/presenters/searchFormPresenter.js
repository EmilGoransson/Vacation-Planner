import React, { useState } from "react";
import SearchFormView from "../views/searchFormView";
import useAttractionStore from "../Model/vacationStore";

/*
@Author Mahdi <mnazari@kth.se>
@Co-Author Emil <emilgo@kth.se>
TODO:
DONE:
*/
const SearchForm = () => {
  const setSearchQuery = useAttractionStore((state) => state.setSearchQuery);

  const [locationQuery, setLocationQuery] = useState("");

  function doSearchWithQueryACB() {
    setSearchQuery(locationQuery);
  }
  function setSearchQueryACB(e) {
    setLocationQuery(e);
  }

  return (
    <div>
      {
        <SearchFormView
          doSearch={doSearchWithQueryACB}
          setSearchTest={setSearchQueryACB}
        />
      }
    </div>
  );
};
export default SearchForm;
