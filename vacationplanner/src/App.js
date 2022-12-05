import "./App.css";
import React from "react";
import SearchForm from "./presenters/searchFormPresenter";
import Signing from "./presenters/signingPresenter";
import SearchResult from "./presenters/searchResultPresenter";
import SidebarFav from "./presenters/sidebarFavPresenter";
import SignInPage from "./presenters/signInPagePresenter";
import Weather from "./presenters/weatherPresenter";
import SidebarReset from "./presenters/sidebarResetPresenter";

function App() {
  return (
    <div className="main-containt">
      <Signing />
      <div className="search-Sidebar-ResultView">
        <div className="search-ResultView">
          <SearchForm />
          <SearchResult />
        </div>
        <div className="search-ResultView">
          <Weather />
        </div>
      </div>
      <SignInPage />
    </div>
  );
}

export default App;
