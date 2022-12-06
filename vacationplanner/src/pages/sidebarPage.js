import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
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
      <>
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
        {/* <div>
          <Routes>
            <Route exact path="/" element={<SidebarRecent />} />
            <Route path="/favorites" element={<SidebarFav />} />
          </Routes>
        </div> */}
      </>
    </div>
  );
}
export default SidebarPage;
