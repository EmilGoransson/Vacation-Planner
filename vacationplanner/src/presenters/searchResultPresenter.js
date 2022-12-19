import React from "react";
import axios from "axios";
import { API_KEY } from "../apiConfig";
import SearchResultView from "../views/searchResultView";
import LoadingView from "../views/LoadingView";
import useAttractionStore from "../model/vacationStore";
import NoQueryView from "../views/noQueryView";
import BadSearchView from "../views/badSearchVIew";
import { child, get, getDatabase, ref } from "firebase/database";

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
  const [error, setError] = React.useState(false);
  const favorites = useAttractionStore((state) => state.favorite);
  const addToFavorite = useAttractionStore((state) => state.addFavorite);
  const setInFocus = useAttractionStore((state) => state.setInFocus);
  const attraction = useAttractionStore((state) => state.inFocus);
  const getSearchQuery = useAttractionStore((state) => state.searchQuery);
  const setSidebarInFocus = useAttractionStore((state) => state.setCurrentView);
  const recentAdddedAttraction = useAttractionStore(
    (state) => state.recentAddedAttraction
  );
  const setRecentAddedAttraction = useAttractionStore(
    (state) => state.setRecentAddedAttraction
  );
  const fetchData = useAttractionStore((state) => state.fetchFromFireBase);
  const setFailure = useAttractionStore((state) => state.setRecentAddedFailure);
  const getFailure = useAttractionStore((state) => state.recentAddedFailure);
  const setFavoritesFirebase = useAttractionStore(
    (state) => state.fetchFromFireBase
  );
  const getUserId = useAttractionStore((state) => state.userEmail);

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
    setSidebarInFocus({ view: "", value: 2 });

    if (
      favorites.length === 0 ||
      !favorites.map((info) => info.attractionInfo).includes(e)
    ) {
      setRecentAddedAttraction(e.name);
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
      setTimeout(() => {
        setShow(false);
      }, 4000);
    } else {
      setFailure(e.name);
      setShowFavoriteAlert(true);
      setTimeout(() => {
        setShowFavoriteAlert(false);
      }, 4000);
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
  //test button ACB to fetch data
  function fetchDataACB() {
    console.log("Data fetched");
    getData();
  }
  //correctly fetches data and tries to save it. Problem since the data in firebase is lacking (no dateInfo in firebase)
  //Every attraction should contain {attractionInfo: {}, dateInfo: {startDate: Date, endDate: Date}}
  function getData() {
    let data;

    const id = getUserId().replaceAll(".", "");

    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/` + id)).then((snapshot) => {
      if (snapshot.exists()) {
        data = snapshot.val();
        console.log(data);
        setFavoritesFirebase(data);
        console.log("Favorites after firebase", favorites);
      } else {
        console.log("No data available");
      }
    });
  }

  let locationDataJustNow;
  React.useEffect(() => {
    console.log();
    let canceled = false;

    const getLocationId = async () => {
      setError(false);
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
        if (data.data.length === 0) {
          setError(true);
        }

        if (data.data[0] && !canceled) {
          locationDataJustNow = data.data[0].result_object.location_id;
        }
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
      setIsLoading(false);
    };
    getLocationId();
    return () => {
      canceled = true;
      setAttractionData(null);
    };
  }, [getSearchQuery]);
  if (error) return <BadSearchView />;
  if (getSearchQuery === "") return <NoQueryView />;
  if (!attractionData || isLoading) {
    return <LoadingView />;
  }

  if (attractionData && !isLoading) {
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
        recentAdddedAttraction={recentAdddedAttraction}
        failureAdded={getFailure}
        fetchData={fetchDataACB}
      />
    );
  }
}
export default SearchResult;
