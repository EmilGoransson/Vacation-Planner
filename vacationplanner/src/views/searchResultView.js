//@Author Emil Göransson
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

/*
!!NPM INSTALL!! USES REACT-BOOTSTRAP & POSTBOOT
@Author Emil <emilgo@kth.se>
TODO: 
DONE: Loading when waiting on image, displaying image.
*/
function SearchResultView(props) {
  console.log(props.attractionData);
  function pictureFromSearchCB(obj) {
    function whenClickingOnPictureACB() {
      props.attractionInFocus(obj);
    }
    function addToFavoriteOnClickButtonACB() {
      props.addAttractionToFavorite(obj);
    }

    if (obj.photo && obj.hours) {
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
            <div className="star-image"> - {obj.rating}/5</div>
            <div>
              <img
                src="https://i.imgur.com/j1hd1pk.png"
                width={15}
                height={15}
              />
              : {props.dateInfo.dayName} 0
              {obj.hours.week_ranges[props.dateInfo.day - 1][0].open_time} -{" "}
              {obj.hours.week_ranges[props.dateInfo.day - 1][0].close_time}
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
                disabled="isAlreadyAFavorite"
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
    <Container fluid>
      {props.attractionData.map(pictureFromSearchCB)}{" "}
    </Container>
  );
}
export default SearchResultView;
