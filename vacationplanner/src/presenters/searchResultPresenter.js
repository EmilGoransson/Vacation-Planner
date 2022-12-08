import React from "react";
import axios from "axios";
import { API_KEY } from "../apiConfig";
import SearchResultView from "../views/searchResultView";
import LoadingView from "../views/LoadingView";
import useAttractionStore from "../model/vacationStore";

/*
@Author Emil <emilgo@kth.se>
TODO: CSS (maybe), FIX RACE CONDITION (tried something but didnt work)
DONE: Fetches attraction array from API, passes it to view. NEEDS API_KEY to work which can be defined inside apiConfig https://rapidapi.com/apidojo/api/travel-advisor/pricing.
, Connection to store
*/

function SearchResult() {
  const [locationData, setLocationData] = React.useState([]);
  const [attractionData, setAttractionData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [show, setShow] = React.useState(false);
  const [, reRender] = React.useState();
  const [showInfo, setShowInfo] = React.useState(false);
  const favorites = useAttractionStore((state) => state.favorite);
  const addToFavorite = useAttractionStore((state) => state.addFavorite);
  const setInFocus = useAttractionStore((state) => state.setInFocus);
  const attraction = useAttractionStore((state) => state.inFocus);
  const getSearchQuery = useAttractionStore((state) => state.searchQuery);
  let locationControl;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };
  const getLocationId = async () => {
    locationControl = getSearchQuery;
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://travel-advisor.p.rapidapi.com/locations/search?query=" +
          getSearchQuery +
          "&limit=1&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US",
        options
      );
      const data = response.data;
      if (data && locationControl === getSearchQuery)
        setLocationData(data.data[0].result_object.location_id); //saves specific ID needed for next API call
    } catch (error) {
      console.log(error);
    }
  };
  const getAttractions2 = async () => {
    try {
      const response = await axios.get(
        "https://travel-advisor.p.rapidapi.com/attractions/list?location_id=" +
          locationData +
          "&currency=USD&lang=en_US&lunit=km&sort=recommended",
        options
      );
      const attrcData = response.data;
      /* console.log("Location ControL:");
      console.log(locationControl);
      console.log("getSearchQuery:");
      console.log(getSearchQuery); */
      if (attrcData /*&& locationControl === getSearchQuery*/) {
        setAttractionData(attrcData.data);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const todaysDate = new Date();
  let day = todaysDate.getDay();

  let dayName = [
    //maybe needs to be in store?
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const weekdays = {
    day: day,
    dayName: dayName[day - 1],
    todaysDay: dayName,
  };
  function setAttractionInFocusACB(e) {
    //sends currentSelectedAttraction to store used to display more details about the attraction
    setInFocus(e);
    setShowInfo(true);
  }
  function addAttractionToFavoriteACB(e) {
    //sends currentSelectedAttraction to store used to display more details about the attraction
    if (!favorites.includes(e)) {
      addToFavorite(e);
      setShow(true);
      console.log(e);
    }
    console.log("Already in favorites");
  }

  function closeAlertBoxACB() {
    setShow(false);
  }
  function showAlertBoxACB() {
    setShow(true);
  }
  function closeInfoBoxACB() {
    setShowInfo(false);
  }
  function forceRenderACB() {
    reRender(new Object());
  }

  React.useEffect(() => {
    getLocationId();
  }, [getSearchQuery]);

  React.useEffect(() => {
    getAttractions2();
  }, [locationData]);
  React.useEffect(forceRenderACB, [attraction]);

  if (!attractionData || isLoading) return <LoadingView />;
  return (
    <SearchResultView
      attractionData={attractionData}
      attractionInFocus={setAttractionInFocusACB}
      addAttractionToFavorite={addAttractionToFavoriteACB}
      Alert={show}
      closeAlert={closeAlertBoxACB}
      showAlert={showAlertBoxACB}
      closeInfo={closeInfoBoxACB}
      showInfo={showInfo}
      attraction={attraction}
    />
  );
}
export default SearchResult;
