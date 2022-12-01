import React, { useState } from "react";
import useBearStore from "../store";
import countView from "../views/countView";

export default function Count(props) {
  debugger;
  const [count, setCount] = React.useState(props.bears);
  function wasCreatedACB() {
    setCount(useBearStore);
  }

  React.useEffect(wasCreatedACB, []);

  return <countView amount={props.bears} />;
}
