import React, { useState } from "react";
import useFavoriteStore from "../model/sidebarStore";
import SidebarView from "../views/sidebarView";
import getData from "../presenter/sidebarPresenter";

function Sidebar() {
  const addFavorites = useFavoriteStore((state) => state.addFavorites);
  const removeFavorites = useFavoriteStore((state) => state.removeFavorites);
  const [favorites, setFavorites] = useState("");

  console.log("Sidebar rendered");

  function handleFavoriteRemoving(id) {
    removeFavorites({});
  }

  return <SidebarView favorites={favorites} />;
}
export default Sidebar;
