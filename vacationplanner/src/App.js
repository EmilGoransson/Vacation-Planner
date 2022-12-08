import "./App.css";
import React from "react";
import SignInPage from "./presenters/signInPagePresenter";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import HomePage from "./pages/homePage";
import Weather from "./presenters/weatherPresenter";
import SearchResult from "./presenters/searchResultPresenter";
import "./firebaseModel.js";
/*
@Author Mahdi <mnazari@kth.se>
@Co-Author Emil <emilgo@kth.se>
TODO:
DONE:
*/

function App() {
  return (
    <>
      <Nav bg="primary" variant="tabs">
        <Container>
          <Nav className="me-auto">
            <Link as={Link} to="/"></Link>
            <Link as={Link} to="/signin"></Link>
          </Nav>
        </Container>
      </Nav>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />}>
            <Route index element={<SearchResult />} />
            <Route path="/weather" element={<Weather />} />
          </Route>
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
