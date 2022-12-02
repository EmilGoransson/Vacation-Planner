import React, { useState } from "react";
import useVacationStore from "../Model/vacationStore";
import SidebarView from "../views/sidebarView";

function Sidebar(props) {
  return (
    <div>
      <SidebarView />
    </div>
  );
}
export default Sidebar;
