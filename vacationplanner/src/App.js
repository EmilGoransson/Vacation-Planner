//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import SearchForm from "./presenters/searchFormPresenter";
import Signing from "./presenters/signingPresenter";

function App() {
  return (
    <div className="main-containt">
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        Vacation Planner
        <Signing className="signingBtns" />
      </h1>
      <SearchForm />
    </div>
  );
}

export default App;
