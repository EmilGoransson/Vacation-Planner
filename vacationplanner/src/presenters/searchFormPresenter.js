import React, { useState } from "react";
import SearchFormView from "../views/searchFormView";
import useAttractionStore from "../model/vacationStore";
import useRecentStore from "../model/recentStore";

/*
@Author Mahdi <mnazari@kth.se>
@Co-Author Emil <emilgo@kth.se>
TODO:
DONE:
*/
const SearchForm = () => {
  const setSearchQuery = useAttractionStore((state) => state.setSearchQuery);
  const addRecent = useRecentStore((state) => state.addRecent);
  const addToFavorite = useAttractionStore((state) => state.addFavorite);

  const [locationQuery, setLocationQuery] = useState("");

  function doSearchWithQueryACB() {
    setSearchQuery(locationQuery);
    addRecent(locationQuery);
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
