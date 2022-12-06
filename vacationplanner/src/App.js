import "./App.css";
import React from "react";
import SignInPage from "./presenters/signInPagePresenter";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/homePage";

function App() {
  return (
    <div className="main-containt">
      <BrowserRouter>
        <Nav bg="primary" variant="tabs">
          <Container>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/signin">
                Sign in
              </Nav.Link>
            </Nav>
          </Container>
        </Nav>
        <div>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
