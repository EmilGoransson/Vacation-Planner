import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchResult from "../presenters/searchResultPresenter";
import Weather from "../presenters/weatherPresenter";
/*
@Author Mahdi <mnazari@kth.se>
@Co-Author Emil <emilgo@kth.se>
TODO:
DONE:
*/

function SearchResultPage() {
  return (
    <BrowserRouter>
      <Nav bg="primary" variant="tabs">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/actvities">
              Activites
            </Nav.Link>
            <Nav.Link as={Link} to="/weather">
              Weather
            </Nav.Link>
          </Nav>
        </Container>
      </Nav>
      <div>
        <Routes>
          <Route path="/actvities" element={<SearchResult />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default SearchResultPage;
