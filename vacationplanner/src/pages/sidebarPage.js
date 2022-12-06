import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SidebarFav from "../presenters/sidebarFavPresenter";
import SidebarRecent from "../presenters/sidebarRecentPresenter";

/*
@Author Mahdi <mnazari@kth.se>
@Co-Author Emil <emilgo@kth.se>
TODO:
DONE:
*/

function SidebarPage() {
  return (
    <div className="sidebarParents">
      <BrowserRouter>
        <Nav bg="primary" variant="tabs">
          <Container>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/recent">
                Recent Searches
              </Nav.Link>
              <Nav.Link as={Link} to="/favorites">
                Favorites
              </Nav.Link>
            </Nav>
          </Container>
        </Nav>
        <div>
          <Routes>
            <Route path="/" element={<SidebarRecent />} />
            <Route path="/favorites" element={<SidebarFav />} />
            <Route path="/recent" element={<SidebarRecent />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default SidebarPage;
