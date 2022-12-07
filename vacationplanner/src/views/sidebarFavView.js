import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Button from "react-bootstrap/Button";

/*
@Author Emil <emilgo@kth.se>
@Co-Author Mahdi <mnazari@kth.se>
TODO:
DONE: basic functionality, css
*/

function SidebarFavView(props) {
  function getFavoriteFromArrayCB(obj) {
    function removeFavoriteACB() {
      props.removeFavorite(obj.location_id);
      //props.removeFavorite(obj);
    }
    return (
      <div key={obj} className="sidebarText">
        <h6>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={removeFavoriteACB}
          >
            X
          </Button>
          &#8193;
          {obj.name}
        </h6>
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
