//@Author Emil Göransson
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

/*
!!NPM INSTALL!! USES REACT-BOOTSTRAP & POSTBOOT
@Author Emil <emilgo@kth.se>
TODO: Title, description, rating, location, price, link to website when clicking on object, CSS
DONE: Loading when waiting on image, displaying image.
*/

function SearchResultView(props) {
  function pictureFromSearchCB(obj) {
    console.log(obj);
    function whenClickingOnPictureACB() {
      console.log("callACBonClick");
    }
    function openingHoursDisplay() {
      console.log(obj.hours.week_ranges);
    }

    if (obj.photo) {
      // if there is a photo
      return (
        <div key={obj.location_id} className="card flex-row">
          <img
            className="temp"
            src={obj.photo.images.medium.url}
            width={250}
            height={200}
          />
          <div className="card-body">
            <div className="card-title h5 h4-sm">{obj.name}</div>
            <img src="https://i.imgur.com/RXQNkY2.png" width={15} height={15} />
            <div className="star-image"> - {obj.rating}/5</div>
            <div>
              <img
                src="https://i.imgur.com/j1hd1pk.png"
                width={15}
                height={15}
              />
              - display hours here
            </div>
            <div>
              <img
                src="https://i.imgur.com/l6oK6Lh.png"
                width={15}
                height={15}
              />
              - {obj.address}
            </div>
            <div>
              <img
                src="https://i.imgur.com/ZlbR6MO.png"
                width={15}
                height={15}
              />
              - <a href={obj.website}>{obj.website}</a>
            </div>
            <div className="more-info-button">
              <Button variant="primary" size="sm" onClick="OpenMoreDetailsACB">
                More info
              </Button>{" "}
              <Button
                variant="primary"
                size="sm"
                onClick="AddToFavoriteACB"
                disabled="isAlreadyAFavorite"
              >
                Add as favorite
              </Button>{" "}
            </div>
          </div>
        </div>
      );
    } else return null;
  }
  return (
    <Container fluid>{props.attractionData.map(pictureFromSearchCB)}</Container>
  );
}
export default SearchResultView;
