import React from "react";
import Signing from "../presenters/signingPresenter";

function Page1() {
  return (
    <h1
      style={{
        fontSize: "2.5rem",
        marginBottom: "2rem",
      }}
    >
      Vacation Planner
      <Signing className="signingBtns" />
    </h1>
  );
}
