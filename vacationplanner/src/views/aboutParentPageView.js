import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import { Nav, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function AboutPageView() {
  const navigate = useNavigate();
  return (
    <div>
      <Button variant="primary" size="sm" onClick={() => navigate("/")}>
        Back to Home
      </Button>
      <div className="aboutParent">
        <Nav bg="primary" variant="tabs">
          <Container>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about">
                About Vacation Planner
              </Nav.Link>
              <Nav.Link as={Link} to="/about/makePlan">
                How To Make A Visiting Plan
              </Nav.Link>
              <Nav.Link as={Link} to="/about/contact">
                Developers
              </Nav.Link>
            </Nav>
          </Container>
        </Nav>

        <Outlet />
      </div>
    </div>
  );
}
export default AboutPageView;
