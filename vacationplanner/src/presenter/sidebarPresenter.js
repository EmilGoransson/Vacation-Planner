import React, { useState } from "react";
import useFavoriteStore from "../model/sidebarStore";
import SidebarView from "../views/sidebarView";
import getData from "../presenter/sidebarPresenter";



function Sidebar() {
  const addFavorites = useFavoriteStore((state) => state.addFavorites);
  const removeFavorites = useFavoriteStore((state) => state.removeFavorites);
  const [favorites, setFavorites] = useState("");

  console.log("Sidebar rendered");

  function handleFavoriteAdding() {
    if (!favorites) return alert("Please enter a title");
    addFavorites({
      id: Math.ceil(Math.random() * 1000), // just for now maybe change to api call id?
      title: favorites,
    });
  }
  function handleFavoriteRemoving(id) {
    removeFavorites({});
  }

  return <SidebarView favorites={favorites} />;
}
export default Sidebar;
