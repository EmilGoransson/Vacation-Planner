import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

/*
@Author Emil <emilgo@kth.se>
TODO: css
DONE: basic functionality
*/

function SidebarFavView(props) {
  function getFavoriteFromArrayCB(obj) {
    function removeFavoriteACB() {
      props.removeFavorite(obj.location_id);
      //props.removeFavorite(obj);
    }
    return (
      <div key={obj}>
        <h3>
          {obj.name}{" "}
          <Button
            variant="outline-danger"
            size="sm"
            onClick={removeFavoriteACB}
          >
            X
          </Button>
        </h3>
      </div>
    );
  }
  return (
    <div className="sidebarParents">
      {props.favoriteArray.map(getFavoriteFromArrayCB)}
    </div>
  );
}
export default SidebarFavView;
