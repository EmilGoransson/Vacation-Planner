import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Button from "react-bootstrap/Button";
import { Nav, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function AboutParentPageView(props) {
  return (
    <div className="signingViewParent">
      <img src={"https://i.imgur.com/CJBGl6T.png"} width={75} height={75} />
      <div className="signingBtns">
        <Button
          variant="primary"
          size="sm"
          onClick={() => props.navigateToHome()}
        >
          Back to Home
        </Button>
      </div>
      <h3
        style={{
          fontSize: "2.2rem",
          marginBottom: "2rem",
        }}
      >
        Vacation Planner
      </h3>
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
export default AboutParentPageView;
