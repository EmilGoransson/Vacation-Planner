import React from "react";
import axios from "axios";
import { API_KEY } from "../apiConfig";
import SearchResultView from "../views/searchResultView";
import LoadingView from "../views/LoadingView";

/*
!!NPM INSTALL, IT USES AXIOS!! (npm install axios but npm install should do it)
@Author Emil <emilgo@kth.se>
API SHOWS WRONG OPENING TIMES?
TODO: Connection to store (needs to get locationQuery, relevant callbacks, CSS (maybe),
 sometimes gets error from api (not sure why but very very very infrequent, might be the APIs fault), locationQuery should fetch from store
DONE: Fetches attraction array from API, passes it to view. NEEDS API_KEY to work which can be defined inside apiConfig https://rapidapi.com/apidojo/api/travel-advisor/pricing.
*/

export function Search() {
  const [locationData, setLocationData] = React.useState([]);
  const [attractionData, setAttractionData] = React.useState(null);
  const locationQuery = "Stockholm"; //temp should fetch from store
  const [show, setShow] = React.useState(false);
  const [, reRender] = React.useState();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };
  const getLocationId = async () => {
    try {
      const response = await axios.get(
        "https://travel-advisor.p.rapidapi.com/locations/search?query=" +
          locationQuery +
          "&limit=1&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US",
        options
      );
      const data = response.data;
      if (data) setLocationData(data.data[0].result_object.location_id); //saves specific ID needed for next API call
    } catch (error) {
      console.log(error);
    }
  };
  const getAttractions2 = async () => {
    try {
      console.log(locationData);
      const response = await axios.get(
        "https://travel-advisor.p.rapidapi.com/attractions/list?location_id=" +
          locationData +
          "&currency=USD&lang=en_US&lunit=km&sort=recommended",
        options
      );
      const attrcData = response.data;
      if (attrcData) {
        setAttractionData(attrcData.data);
      }
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
    console.log("Attraction in focus:");
    console.log(e);
  }
  function addAttractionToFavoriteACB(e) {
    //sends currentSelectedAttraction to store used to display more details about the attraction
    console.log("Attraction added to favorites:");
    console.log(e);
    setShow(true);
  }
  function closeAlertBoxACB() {
    setShow(false);
  }
  function showAlertBoxACB() {
    if (show) {
    }
    setShow(true);
  }

  React.useEffect(() => {
    getLocationId();
  }, []);

  React.useEffect(() => {
    getAttractions2();
  }, [locationData]);

  if (!attractionData) return <LoadingView />;
  return (
    <SearchResultView
      attractionData={attractionData}
      dateInfo={weekdays}
      attractionInFocus={setAttractionInFocusACB}
      addAttractionToFavorite={addAttractionToFavoriteACB}
      Alert={show}
      closeAlert={closeAlertBoxACB}
      showAlert={showAlertBoxACB}
    />
  );
}