import "./App.css";
import React from "react";

import Sidebar from "./presenter/sidebarPresenter";
import {Search} from "./presenter/searchPresenter";

function App() {
  return (
    <div className="count">
      <Search />
    </div>
  );
}

export default App;
