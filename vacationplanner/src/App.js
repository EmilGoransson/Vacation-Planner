//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import SearchForm from "./presenters/searchFormPresenter";
import Signing from "./presenters/signingPresenter";
import SearchResult from "./presenters/searchResultPresenter";

function App() {
  return (
    <div className="main-containt">
      <Signing />
      <SearchForm />
      <SearchResult />
    </div>
  );
}

export default App;
