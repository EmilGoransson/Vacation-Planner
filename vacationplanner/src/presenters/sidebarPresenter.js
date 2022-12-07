import React, { useState } from "react";
import SidebarFavView from "../views/sidebarFavView";
import useAttractionStore from "../model/vacationStore";
import useRecentStore from "../model/recentStore";
import SidebarRecentView from "../views/sidebarRecentView";
import { Nav, Container, Button } from "react-bootstrap";

/*
@Author Emil <emilgo@kth.se>
TODO: FIX ISSUE WITH UNIQUE ID (check if already in array), add click functionality to text (details view), maybe some "time" system so that you can actually "plan" activities
DONE: removal + addition of favorites

@Co-Author Mahdi <mnazari@kth.se>
TODO:
DONE:
*/

function Sidebar(props) {
  const [currentView, setCurrentView] = useState("recent");

  const favorites = useAttractionStore((state) => state.favorite);
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

  return (
    <div className="sidebarParents">
      <>
        <Container>
          <Nav className="me-auto">
            <Button onClick={() => setCurrentView("recent")}>
              Recent Searches
            </Button>
            <Button onClick={() => setCurrentView("")}>Favorites</Button>
          </Nav>
        </Container>
      </>
      <div>
        {currentView !== "recent" ? (
          <SidebarFavView
            favoriteArray={favorites}
            removeFavorite={removeObjFromFavoriteACB}
          />
        ) : (
          <SidebarRecentView
            recentArray={recent}
            removeRecent={removeStringFromRecentACB}
          />
        )}
      </div>
    </div>
  );
}
export default Sidebar;
