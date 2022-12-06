import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";

/*
@Author Emil <emilgo@kth.se>
TODO:
DONE: Loading when waiting on image, displaying image, alert when adding to favorites
*/
function SearchResultView(props) {
  function closeAlertBoxACB() {
    props.closeAlert();
  }
  function pictureFromSearchCB(obj) {
    function whenClickingOnPictureACB() {
      props.attractionInFocus(obj);
    }
    function addToFavoriteOnClickButtonACB() {
      props.addAttractionToFavorite(obj);
    }

    if (obj.photo) {
      //HAVING OPENING HOURS WILL SKIP SOME RESULTS!
      // if there is a photo
      return (
        <div
          key={obj.location_id}
          className="card flex-row"
          onClick={whenClickingOnPictureACB}
        >
          <img
            className="temp"
            src={obj.photo.images.medium.url}
            width={250}
            height={200}
          />
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
                onClick={whenClickingOnPictureACB}
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
    <div className="searchResults">
      <Alert show={props.Alert} variant="success" size="sm">
        Attraction has been added to favorites
        <div className="d-flex justify-content-end">
          <Button
            onClick={closeAlertBoxACB}
            variant="outline-success"
            size="sm"
          >
            Close
          </Button>
        </div>
      </Alert>

      <Container fluid>
        {props.attractionData.map(pictureFromSearchCB)}{" "}
      </Container>
    </div>
  );
}
export default SearchResultView;
