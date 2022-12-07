import "../App.css";
import React from "react";
import SearchForm from "../presenters/searchFormPresenter";
import HeaderPage from "../presenters/headerPagePresenter";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchResultPage from "../pages/searchResultPage";
import Sidebar from "../presenters/sidebarPresenter";

/*
@Author Mahdi <mnazari@kth.se>
@Co-Author Emil <emilgo@kth.se>
TODO:
DONE:
*/

function HomePage() {
  return (
    <div className="main-containt">
      <HeaderPage />
      <div className="search-Sidebar-ResultView">
        <Sidebar />
        <div className="search-ResultView">
          <SearchForm />
          <SearchResultPage />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
