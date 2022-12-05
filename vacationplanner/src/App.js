import "./App.css";
import React from "react";
import SearchForm from "./presenters/searchFormPresenter";
import Signing from "./presenters/signingPresenter";
import SignInPage from "./presenters/signInPagePresenter";
import "bootstrap/dist/css/bootstrap.min.css";
import SidebarPage from "./pages/sidebarPage";
import SearchResultPage from "./pages/searchResultPage";

function App() {
  return (
    <div className="main-containt">
      <Signing />
      <div className="search-Sidebar-ResultView">
        <SidebarPage />
        <div className="search-ResultView">
          <SearchForm />
          <SearchResultPage />
        </div>
      </div>
      <SignInPage />
    </div>
  );
}

export default App;
