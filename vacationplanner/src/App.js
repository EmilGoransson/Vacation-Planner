import "./App.css";
import React from "react";
import SignInPage from "./presenters/signInPagePresenter";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import HomePage from "./pages/homePage";
import "./firebaseModel.js";
import AboutPageView from "./views/aboutPageView";

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
            <Link as={Link} to="/about"></Link>
          </Nav>
        </Container>
      </Nav>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/about" element={<AboutPageView />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
