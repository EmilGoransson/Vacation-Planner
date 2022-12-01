import "./App.css";
import React from "react";

import Count from "./presenter/sidebarPresenter";
import useBearStore from "./store";

function App() {
  return (
    <div className="count">
      <Count bears={useBearStore} />
    </div>
  );
}

export default App;
