import React, { useState } from "react";
import useVacationStore from "../Model/vacationStore";
import SidebarFavView from "../views/sidebarFavView";

function SidebarFav(props) {
  return (
    <div>
      <SidebarFavView />
    </div>
  );
}
export default SidebarFav;
