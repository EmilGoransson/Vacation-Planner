import React, { useState } from "react";
import SidebarRecentView from "../views/sidebarRecentView";
import useRecentStore from "../Model/recentStore";

/*
@Author Emil <emilgo@kth.se>
TODO: FIX ISSUE WITH UNIQUE ID (check if already in array), add click functionality to text
DONE: removal + addition of recent searches, shows recent searches
*/

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
