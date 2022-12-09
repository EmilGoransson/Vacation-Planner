import React, { useState } from "react";
import SidebarFavView from "../views/sidebarFavView";
import useAttractionStore from "../model/vacationStore";
import useRecentStore from "../model/recentStore";
import SidebarRecentView from "../views/sidebarRecentView";
import { Nav, Container, Button } from "react-bootstrap";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import summarySidebarFavView from "../views/summarySidebarFavView";

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
  const [currentView, setCurrentView] = useState("recent");
  const [currentFavView, setCurrentFavView] = useState("Favorites");
  const attraction = useAttractionStore((state) => state.inFocus);
  const setSearchQuery = useAttractionStore((state) => state.setSearchQuery);

  const favorites = useAttractionStore((state) => state.favorite);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
    console.log("LocationQueryset: " + e);
  }
  function setAttractionInFocusACB(e) {
    //sends currentSelectedAttraction to store used to display more details about the attraction
    setInFocus(e);
    setShowInfo(true);
  }
  function closeInfoBoxACB() {
    setShowInfo(false);
  }

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
            showInfo={showInfo}
            attraction={attraction}
            startDate={startDate}
            endDate={endDate}
            setStartDateTime={(date) => setStartDate(date)}
            setEndDateTime={(date) => setEndDate(date)}
            showSummary={() => setCurrentFavView("summary")}
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
