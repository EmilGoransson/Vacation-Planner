import sidebarView from "../views/sidebarView";
import React, { useEffect } from "react";
import useStoreFavorites from "../store";

export default function Sidebar() {
  const [count, setCount] = React.useState(useStoreFavorites);

  function wasCreatedACB() {
    setCount(useStoreFavorites);
  }

  React.useEffect(wasCreatedACB, []);

  return <countView count={count} />;
}
