import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Container from "react-bootstrap/Container";
function SidebarFavView(props) {
  return (
    <div className="sidebarParents">
      <h1
        style={{
          fontSize: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        Favorites
      </h1>
    </div>
  );
}
export default SidebarFavView;
