import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import Zoom from "react-medium-image-zoom";

/*
@Author Emil <emilgo@kth.se>
TODO:
DONE: basic functionality, css, now we can display the details in the favorite sidebar by clicking on each favorite attractions name.
@Co-Author Mahdi <mnazari@kth.se>
*/

function SidebarFavView(props) {
  function getFavoriteFromArrayCB(obj) {
    function removeFavoriteACB() {
      props.removeFavorite(obj.location_id);
      //props.removeFavorite(obj);
    }
    function closeInfoBoxACB() {
      props.closeInfo();
    }
    function getMoreInfoACB() {
      props.attractionInFocus(obj);
    }

    return (
      <ul>
        <div key={obj.location_id} className="sidebarText">
          <li className="sidebar-bullet">
            <h6>
              <a
                href="#"
                onClick="IDClick(id);event.preventDefault();"
                onClick={getMoreInfoACB}
              >
                {obj.name}
              </a>
              &#8193;
              <Button
                variant="outline-danger"
                size="sm"
                onClick={removeFavoriteACB}
                className="btn"
              >
                X
              </Button>
            </h6>

            <Modal
              show={props.showInfo}
              onHide={closeInfoBoxACB}
              dialogClassName="my-modal"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Details
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="Details-View-Main">
                  <h1>{props.attraction.name}</h1>

                  <Zoom>
                    <img
                      src={props.attraction.photo.images.original.url}
                      width="300"
                      height="300"
                    />
                  </Zoom>
                  <div className="detailsViewBody">
                    {props.attraction.description}
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </li>
        </div>
      </ul>
    );
  }
  return (
    <div className="sidebarParents">
      {props.favoriteArray.map(getFavoriteFromArrayCB)}
    </div>
  );
}
export default SidebarFavView;
