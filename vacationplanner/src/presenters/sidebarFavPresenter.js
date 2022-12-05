import React, { useState } from "react";
import SidebarFavView from "../views/sidebarFavView";
import useAttractionStore from "../model/vacationStore";

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
