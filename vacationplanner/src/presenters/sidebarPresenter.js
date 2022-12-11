import React, { useState, useRef } from "react";
import SidebarFavView from "../views/sidebarFavView";
import useAttractionStore from "../model/vacationStore";
import useRecentStore from "../model/recentStore";
import SidebarRecentView from "../views/sidebarRecentView";
import { Alert } from "react-bootstrap";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { useReactToPrint } from "react-to-print";

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
  const [showInfo, setShowInfo] = React.useState(false);
  const [showSummary, setShowSummary] = React.useState(false);
  const [currentView, setCurrentView] = useState("recent");
  const [currentFavView, setCurrentFavView] = useState("Favorites");
  const attraction = useAttractionStore((state) => state.inFocus);
  const setSearchQuery = useAttractionStore((state) => state.setSearchQuery);
  const [attractionFocusDate, setAttractionFocusDate] = useState(null);
  const [timeInfoArrayEndTime, setTimeInfoArrayEndTime] = useState([]);
  const [timeInfoArrayStartTime, setTimeInfoArrayStartTime] = useState([]);

  const favorites = useAttractionStore((state) => state.favorite);
  const componentRef = useRef();

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const updateStartDate = useAttractionStore((state) => state.updateStartDate);
  const setObjForDateInFocus = useAttractionStore(
    (state) => state.setChangeTimeInFocus
  );
  const removeFromFavorite = useAttractionStore(
    (state) => state.removeFavorite
  );

  function removeObjFromFavoriteACB(e) {
    removeFromFavorite(e);
  }

  const recent = useRecentStore((state) => state.recent);
  const removeRecent = useRecentStore((state) => state.removeRecent);
  function removeStringFromRecentACB(e) {
    removeRecent(e);
  }

  function setSearchQueryACB(e) {
    setSearchQuery(e);
  }
  function setAttractionInFocusACB(e) {
    //sends currentSelectedAttraction to store used to display more details about the attraction
    console.log(e);
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
    temp[index].dateInfo.startDate = e.date.toString();
    //Doesnt work below this, need to think about how
    setStartDate(e.date);
  }

  function changeEndDateTimeACB(e) {
    const index = favorites.findIndex(
      (obj) =>
        obj.attractionInfo.location_id === e.obj.attractionInfo.location_id
    );
    const temp = [...favorites];

    temp[index].dateInfo.endDate = e.date.toString();
    //Doesnt work below this, need to think about how
    setEndDate(e.date);
  }

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "My Visiting Plan",
    onAfterPrint: () => Alert("Summary was printed!"),
  });

  return (
    <div className="sidebarParents">
      <>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <ToggleButton
            variant="outline-primary"
            onClick={() => setCurrentView("recent")}
            id="tbg-radio-1"
            value={1}
          >
            Recent Search
          </ToggleButton>
          <ToggleButton
            variant="outline-primary"
            onClick={() => setCurrentView("")}
            id="tbg-radio-2"
            value={2}
          >
            Favorites
          </ToggleButton>
        </ToggleButtonGroup>
      </>
      <div>
        {currentView !== "recent" ? (
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
    </div>
  );
}
export default Sidebar;
