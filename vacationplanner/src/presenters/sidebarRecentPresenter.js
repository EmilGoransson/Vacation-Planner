import React, { useState } from "react";
import SidebarRecentView from "../views/sidebarRecentView";
import useRecentStore from "../model/recentStore";

function SidebarRecent() {
  const recent = useRecentStore((state) => state.recent);
  const removeRecent = useRecentStore((state) => state.removeRecent);
  function removeStringFromRecentACB(e) {
    removeRecent(e);
  }

  return (
    <div>
      <SidebarRecentView
        recentArray={recent}
        removeRecent={removeStringFromRecentACB}
      />
    </div>
  );
}
export default SidebarRecent;
