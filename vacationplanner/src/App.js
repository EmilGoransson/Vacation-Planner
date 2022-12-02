//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import SearchForm from "./presenters/searchFormPresenter";
import Signing from "./presenters/signingPresenter";
import SearchResult from "./presenters/searchResultPresenter";
import Sidebar from "./presenters/sidebarPresenter";
import SignInPage from "./presenters/signInPagePresenter";

function App() {
  return (
    <div className="main-containt">
      <Signing />
      <div className="search-Sidebar-ResultView">
        <Sidebar />
        <div className="search-ResultView">
          <SearchForm />
          <SearchResult />
        </div>
      </div>
      <SignInPage />
    </div>
  );
}

export default App;
