import React from "react";
import axios from "axios";
import { API_KEY } from "../apiConfig";
import SearchResultView from "../views/searchResultView";
import LoadingView from "../views/LoadingView";
import useAttractionStore from "../model/vacationStore";
import NoQueryView from "../views/noQueryView";

/*
@Author Emil <emilgo@kth.se>
TODO: DONE
DONE: Fetches attraction array from API, passes it to view. NEEDS API_KEY to work which can be defined inside apiConfig https://rapidapi.com/apidojo/api/travel-advisor/pricing.
, Connection to store
*/

function SearchResult() {
  const [attractionData, setAttractionData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [show, setShow] = React.useState(false);
  const [showInfo, setShowInfo] = React.useState(false);
  const [showFavoriteAlert, setShowFavoriteAlert] = React.useState(false);
  const favorites = useAttractionStore((state) => state.favorite);
  const addToFavorite = useAttractionStore((state) => state.addFavorite);
  const setInFocus = useAttractionStore((state) => state.setInFocus);
  const attraction = useAttractionStore((state) => state.inFocus);
  const getSearchQuery = useAttractionStore((state) => state.searchQuery);
  const setSidebarInFocus = useAttractionStore((state) => state.setCurrentView);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  function setAttractionInFocusACB(e) {
    //sends currentSelectedAttraction to store used to display more details about the attraction
    setInFocus(e);
    setShowInfo(true);
  }
  function addAttractionToFavoriteACB(e) {
    //sends currentSelectedAttraction to store used to display more details about the attraction
    if (
      favorites.length === 0 ||
      !favorites.map((info) => info.attractionInfo).includes(e)
    ) {
      let endDate = new Date();
      endDate.setHours(endDate.getHours() + 1);

      const favorite = {
        attractionInfo: e,
        dateInfo: {
          startDate: new Date(),
          endDate: endDate,
        },
      };
      addToFavorite(favorite);
      setShow(true);
      setSidebarInFocus({ view: "", value: 2 });
    } else {
      setShowFavoriteAlert(true);
    }
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
  function closeFavoriteAlertBoxACB() {
    setShowFavoriteAlert(false);
  }
  let locationDataJustNow = 189852;
  React.useEffect(() => {
    let canceled = false;

    const getLocationId = async () => {
      //to get locationID data instant
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://travel-advisor.p.rapidapi.com/locations/search?query=" +
            getSearchQuery +
            "&limit=1&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US",
          options
        );
        const data = response.data;

        if (data && !canceled)
          locationDataJustNow = data.data[0].result_object.location_id;

        console.log(data.data[0].result_object.location_id);
      } catch (error) {
        console.log(error);
      }

      try {
        const response = await axios.get(
          "https://travel-advisor.p.rapidapi.com/attractions/list?location_id=" +
            locationDataJustNow +
            "&currency=USD&lang=en_US&lunit=km&sort=recommended",
          options
        );
        const attrcData = response.data;
        if (attrcData && !canceled) {
          setAttractionData(attrcData.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getLocationId().then(() => {
      setIsLoading(false);
    });
    return () => {
      canceled = true;
      setAttractionData(null);
    };
  }, [getSearchQuery]);
  if (getSearchQuery === "") return <NoQueryView />;
  if (!attractionData || isLoading) {
    return <LoadingView />;
  }

  if (attractionData && !isLoading) {
    console.log(attractionData);
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
        showFavoriteAlertState={showFavoriteAlert}
        closeFavoriteAlert={closeFavoriteAlertBoxACB}
      />
    );
  }
}
export default SearchResult;
