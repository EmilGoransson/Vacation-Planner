import React, { useState, useRef } from "react";
import SidebarFavView from "../views/sidebarFavView";
import useAttractionStore from "../model/vacationStore";
import useRecentStore from "../model/recentStore";
import SidebarRecentView from "../views/sidebarRecentView";
import { Alert } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import SidebarParentsView from "../views/sidebarParentsView";
import { ref, set as setfirebase } from "firebase/database";
import { database } from "../firebaseModel";

/*
@Author Emil <emilgo@kth.se>
TODO: FIX ISSUE WITH UNIQUE ID (check if already in array), add click functionality to text (details view), maybe some "time" system so that you can actually "plan" activities
DONE: removal + addition of favorites

@Co-Author Mahdi <mnazari@kth.se>
TODO:
DONE: searching from sidebar by clicking on a city is done.
*/

function Sidebar(props) {
  const setInFocus = useAttractionStore((state) => state.setInFocus);
  const getUserId = useAttractionStore((state) => state.userEmail);

  const [showInfo, setShowInfo] = React.useState(false);
  const [showSummary, setShowSummary] = React.useState(false);
  const attraction = useAttractionStore((state) => state.inFocus);
  const setSearchQuery = useAttractionStore((state) => state.setSearchQuery);
  const getSearchQuery = useAttractionStore((state) => state.searchQuery);
  const [timeInfoArrayEndTime] = useState([]);
  const [timeInfoArrayStartTime] = useState([]);
  const favorites = useAttractionStore((state) => state.favorite);
  const componentRef = useRef();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const removeFromFavorite = useAttractionStore(
    (state) => state.removeFavorite
  );
  const setSidebarInFocus = useAttractionStore((state) => state.setCurrentView);
  const sidebarInfo = useAttractionStore((state) => state.currentView);

  function removeObjFromFavoriteACB(e) {
    removeFromFavorite(e);
  }

  const recent = useRecentStore((state) => state.recent);
  const removeRecent = useRecentStore((state) => state.removeRecent);
  function removeStringFromRecentACB(e) {
    removeRecent(e);
  }

  function setSearchQueryACB(e) {
    if (getSearchQuery.toLowerCase() !== e.toLowerCase()) setSearchQuery(e);
  }
  function setAttractionInFocusACB(e) {
    //sends currentSelectedAttraction to store used to display more details about the attraction
    setInFocus(e.attractionInfo);
    setShowInfo(true);
  }
  function setSummaryInFocus() {
    setShowSummary(true);
  }
  function attractionDateChangeACB(e) {}
  function closeInfoBoxACB() {
    setShowInfo(false);
  }

  function closeSummaryBoxACB() {
    setShowSummary(false);
  }
  //updates favorite in store
  function changeStartDateTimeACB(e) {
    const index = favorites.findIndex(
      (obj) =>
        obj.attractionInfo.location_id === e.obj.attractionInfo.location_id
    );
    const temp = [...favorites];
    const id = getUserId.replaceAll(".", "");
    const tempFavorite = favorites[index];
    tempFavorite.dateInfo.startDate = e.date.toString();
    setfirebase(
      ref(database, "users/" + id + "/favorite/" + index),
      tempFavorite
    );

    temp[index].dateInfo.startDate = e.date.toString();
    setStartDate(e.date);
  }

  function changeEndDateTimeACB(e) {
    const index = favorites.findIndex(
      (obj) =>
        obj.attractionInfo.location_id === e.obj.attractionInfo.location_id
    );
    const temp = [...favorites];
    const id = getUserId.replaceAll(".", "");
    const tempFavorite = favorites[index];
    tempFavorite.dateInfo.endDate = e.date.toString();
    setfirebase(
      ref(database, "users/" + id + "/favorite/" + index),
      tempFavorite
    );
    temp[index].dateInfo.endDate = e.date.toString();
    setEndDate(e.date);
  }

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "My Visiting Plan",
    onAfterPrint: () => Alert("Summary was printed!"),
  });

  return (
    <div>
      {
        <SidebarParentsView
          setCurrentViewToRecent={() =>
            setSidebarInFocus({ view: "recent", value: 1 })
          }
          setCurrentViewToFavorite={() =>
            setSidebarInFocus({ view: "", value: 2 })
          }
          buttonInFocus={sidebarInfo.value}
        />
      }
      {sidebarInfo.view !== "recent" ? (
        <SidebarFavView
          favoriteArray={favorites}
          removeFavorite={removeObjFromFavoriteACB}
          attractionInFocus={setAttractionInFocusACB}
          closeInfo={closeInfoBoxACB}
          closeSummary={closeSummaryBoxACB}
          showInfo={showInfo}
          showSummary={showSummary}
          attraction={attraction}
          startDate={startDate}
          endDate={endDate}
          setStartDateTime={changeStartDateTimeACB}
          setEndDateTime={changeEndDateTimeACB}
          setFocus={attractionDateChangeACB}
          startDateInfo={timeInfoArrayStartTime}
          endDateInfo={timeInfoArrayEndTime}
          summaryInFocus={setSummaryInFocus}
          componentRef={componentRef}
          handlePrintBtn={handlePrint}
        />
      ) : (
        <SidebarRecentView
          recentArray={recent}
          removeRecent={removeStringFromRecentACB}
          setSearchTest={setSearchQueryACB}
        />
      )}
    </div>
  );
}
export default Sidebar;
