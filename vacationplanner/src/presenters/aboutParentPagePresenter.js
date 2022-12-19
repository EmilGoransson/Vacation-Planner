import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import AboutParentPageView from "../views/aboutParentPageView";
import { useNavigate } from "react-router";

function AboutParentPage() {
  const navigate = useNavigate();
  return <AboutParentPageView navigateToHome={() => navigate("/")} />;
}
export default AboutParentPage;
