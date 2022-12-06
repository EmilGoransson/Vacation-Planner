import React, { useState } from "react";
import SidebarFavView from "../views/sidebarFavView";
import useAttractionStore from "../Model/vacationStore";

/*
@Author Emil <emilgo@kth.se>
TODO: FIX ISSUE WITH UNIQUE ID (check if already in array), add click functionality to text (details view), maybe some "time" system so that you can actually "plan" activities
DONE: removal + addition of favorites
*/

function SidebarFav(props) {
  const favorites = useAttractionStore((state) => state.favorite);
  const removeFromFavorite = useAttractionStore(
    (state) => state.removeFavorite
  );

  function removeObjFromFavoriteACB(e) {
    removeFromFavorite(e);
  }
  return (
    <div>
      <SidebarFavView
        favoriteArray={favorites}
        removeFavorite={removeObjFromFavoriteACB}
      />
    </div>
  );
}
export default SidebarFav;
