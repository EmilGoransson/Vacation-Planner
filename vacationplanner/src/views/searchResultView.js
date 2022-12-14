import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Alert, Modal } from "react-bootstrap";
import "./viewStyles.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "react-bootstrap/Image";
/*
https://www.npmjs.com/package/react-medium-image-zoom
@Author Emil <emilgo@kth.se>
<<<<<<< HEAD
@Co-Author Mahdi <mnazari@kth.se>
TODO:
=======
TODO: Make the view dumber, move logic & shorten the props. thing (props.attraction.photo.images.original.url TO props.url) to presenter
>>>>>>> Mahdi-Branch
DONE: Loading when waiting on image, displaying image, alert when adding to favorites
*/
function SearchResultView(props) {
  function closeAlertBoxACB() {
    props.closeAlert();
  }
  function closeInfoBoxACB() {
    props.closeInfo();
  }
  function closeFavoriteAlertBoxACB() {
    props.closeFavoriteAlert();
  }

  function pictureFromSearchCB(obj) {
    function whenClickingOnMoreDetailsACB() {
      props.attractionInFocus(obj);
    }
    function addToFavoriteOnClickButtonACB() {
      props.addAttractionToFavorite(obj);
    }
    // if there is a photo
    if (obj.photo) {
      return (
        <div key={obj.location_id} className="card flex-row">
          <Zoom>
            <Image
              className="temp"
              rounded="true"
              src={obj.photo.images.large.url}
              width={250}
              height={200}
            />
          </Zoom>
          <div className="card-body">
            <div className="card-title h5 h4-sm">{obj.name}</div>
            <img src="https://i.imgur.com/RXQNkY2.png" width={15} height={15} />
            <div className="star-image"> : {obj.rating}/5</div>
            <div>
              <img
                src="https://i.imgur.com/3JusHsK.png"
                width={15}
                height={15}
              />
              : {obj.subcategory_ranking}
            </div>

            <div>
              <img
                src="https://i.imgur.com/l6oK6Lh.png"
                width={15}
                height={15}
              />
              : {obj.address}
            </div>
            <div>
              <img
                src="https://i.imgur.com/ZlbR6MO.png"
                width={15}
                height={15}
              />
              : <a href={obj.website}>{obj.website}</a>
            </div>
            <div className="more-info-button">
              <Button
                variant="primary"
                size="sm"
                onClick={whenClickingOnMoreDetailsACB}
              >
                More info
              </Button>{" "}
              <Button
                className="button-in-card"
                variant="primary"
                size="sm"
                onClick={addToFavoriteOnClickButtonACB}
              >
                Add to favorite
              </Button>{" "}
            </div>
          </div>
        </div>
      );
    } else return null;
  }
  return (
    <>
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


            <Zoom>
              <img
                src={props.attraction.photo.images.original.url}
                width="800"
                height="600"
              />
            </Zoom>
            <div className="detailsViewBody">
              {props.attraction.description}
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div className="searchResults">
        <Alert
          show={props.showFavoriteAlertState}
          key={"danger"}
          variant={"danger"}
          onClose={closeFavoriteAlertBoxACB}
          dismissible={true}
        >
          Already added in favorites
        </Alert>
        <Alert
          show={props.Alert}
          variant="success"
          size="sm"
          onClick={closeAlertBoxACB}
          dismissible
        >
          Added to favorites
        </Alert>

        <Container>{props.attractionData.map(pictureFromSearchCB)} </Container>
      </div>
    </>
  );
}
export default SearchResultView;
