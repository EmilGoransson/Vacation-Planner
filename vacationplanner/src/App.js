import "./App.css";
import React from "react";
import SignInPage from "./presenters/signInPagePresenter";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import HomePage from "./pages/homePage";
import SidebarFav from "./presenters/sidebarFavPresenter";
import SidebarRecent from "./presenters/sidebarRecentPresenter";
import SearchResult from "./presenters/searchResultPresenter";
import Weather from "./presenters/weatherPresenter";

function App() {
  return (
    <div className="main-containt">
      <Nav bg="primary" variant="tabs">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
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
          <Route path="/" element={<HomePage />}>
            <Route index element={<Weather />} />
            <Route path="/recent" element={<SidebarRecent />} />
            <Route path="/favorites" element={<SidebarFav />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/actvities" element={<SearchResult />} />
          </Route>
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
