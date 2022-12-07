import React from "react";
import { Nav, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import SearchResult from "../presenters/searchResultPresenter";
import SignInPage from "../presenters/signInPagePresenter";
import Weather from "../presenters/weatherPresenter";
/*
@Author Mahdi <mnazari@kth.se>
@Co-Author Emil <emilgo@kth.se>
TODO:
DONE:
*/

function SearchResultPage() {
  return (
    <div className="searchResults">
      <>
        <Nav bg="primary" variant="tabs">
          <Container>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Activites
              </Nav.Link>
              <Nav.Link as={Link} to="/weather">
                Weather
              </Nav.Link>
            </Nav>
          </Container>
        </Nav>
      </>
      <Outlet />
    </div>
  );
}
export default SearchResultPage;
