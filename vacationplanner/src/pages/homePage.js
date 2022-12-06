import "../App.css";
import React from "react";
import SearchForm from "../presenters/searchFormPresenter";
import HeaderPage from "../presenters/headerPagePresenter";
import SignInPage from "../presenters/signInPagePresenter";
import "bootstrap/dist/css/bootstrap.min.css";
import SidebarPage from "../pages/sidebarPage";
import SearchResultPage from "../pages/searchResultPage";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <>
      <HeaderPage />
      <div className="search-Sidebar-ResultView">
        <SidebarPage />
        <div className="search-ResultView">
          <SearchForm />
          <SearchResultPage />
        </div>
      </div>
    </>
  );
}
export default HomePage;
