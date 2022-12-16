import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

function AboutPageView() {
  const navigate = useNavigate();
  return (
    <div>
      <Button variant="primary" size="sm" onClick={() => navigate("/")}>
        Back to Home
      </Button>
      <div className="card-body">About</div>
    </div>
  );
}
export default AboutPageView;
