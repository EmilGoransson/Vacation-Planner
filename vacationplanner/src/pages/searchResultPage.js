import React from "react";
import { Nav, Container } from "react-bootstrap";
import { Routes, Route, Link, BrowserRouter, Outlet } from "react-router-dom";
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
    <>
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
      <Outlet />
      {/* <div>
        <Routes>
          <Route exact path="/" element={<Weather />} />
          <Route path="/actvities" element={<SearchResult />} />
        </Routes>
      </div> */}
    </>
  );
}
export default SearchResultPage;
