import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Button from "react-bootstrap/Button";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import Zoom from "react-medium-image-zoom";
import DatePicker from "react-datepicker";

/*
@Author Emil <emilgo@kth.se>
TODO:
DONE: basic functionality, css, now we can display the details in the favorite sidebar by clicking on each favorite attractions name.
@Co-Author Mahdi <mnazari@kth.se>
*/

function SidebarFavView(props) {
  function handlePrintACB() {
    props.handlePrintBtn();
  }

  function closeSumBoxACB() {
    props.closeSummary();
  }

  function showSummaryACB() {
    props.summaryInFocus();
  }

  function getSummaryFromArrayCB(obj) {
    return (
      <div key={obj.attractionInfo.location_id}>
        <h5>&#8226; {" " + obj.attractionInfo.name}</h5>
        <div>
          {" "}
          <b>From: </b> {obj.dateInfo.startDate.toString()}
        </div>
        <div>
          <b>To: </b> {obj.dateInfo.endDate.toString()}
        </div>
        <div>
          <b>Address : </b> {obj.attractionInfo.address}
        </div>
        <br />
      </div>
    );
  }

  function getFavoriteFromArrayCB(obj) {
    function removeFavoriteACB() {
      props.removeFavorite(obj.attractionInfo.location_id);
    }
    function closeInfoBoxACB() {
      props.closeInfo();
    }
    function getMoreInfoACB() {
      props.attractionInFocus(obj);
    }
    function setFromDataACB(date) {
      const temp = { date, obj };
      props.setStartDateTime(temp);
    }
    function setToDateACB(date) {
      const temp = { date, obj };
      props.setEndDateTime(temp);
    }
    return (
      <ul key={obj.attractionInfo.location_id}>
        <div>
          <li>
            <h6>
              <OverlayTrigger
                key="top"
                placement={"top"}
                overlay={<Tooltip id="tooltop-top">More info</Tooltip>}
              >
                <a
                  href="#"
                  onClick="IDClick(id);event.preventDefault();"
                  onClick={getMoreInfoACB}
                >
                  {obj.attractionInfo.name}
                </a>
              </OverlayTrigger>
              &#8193;
              <OverlayTrigger
                key="image-remove"
                placement={"top"}
                overlay={
                  <Tooltip id="tooltop-remove">Remove attraction </Tooltip>
                }
              >
                <img
                  className="sidebar-remove"
                  src="https://i.imgur.com/YLEGXIK.png"
                  onClick={removeFavoriteACB}
                ></img>
              </OverlayTrigger>
            </h6>
            <div>
              <h6>Start:</h6>
              <DatePicker
                placeholderText="from"
                dateFormat="dd-MMM-yyy   HH:mm"
                selected={new Date(obj.dateInfo.startDate)}
                selectsStart
                minDate={new Date()}
                onChange={setFromDataACB}
                showYearDropdown
                scrollableMonthYearDropdown
                showTimeSelect
                timeIntervals={15}
              />

              <h6>End:</h6>
              <DatePicker
                placeholderText="to"
                dateFormat="dd-MMM-yyy   HH:mm"
                selected={new Date(obj.dateInfo.endDate)}
                selectsEnd
                minDate={new Date(obj.dateInfo.startDate)}
                onChange={setToDateACB}
                showYearDropdown
                scrollableMonthYearDropdown
                showTimeSelect
                timeIntervals={15}
              />
            </div>
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
  if (props.favoriteArray.length === 0) {
    return (
      <div className="sidebarParents">
        <h6>Your favorite attractions will be shown here. </h6>
        <div>
          Add a favorite by searching for a famous city & clicking on the button
          "Add to favorite"
        </div>
      </div>
    );
  }
  return (
    <div className="sidebarParents">
      {props.favoriteArray.map(getFavoriteFromArrayCB)}

      <Button variant="outline-primary" size="sm" onClick={showSummaryACB}>
        Your Visiting Plan
      </Button>

      <Modal
        show={props.showSummary}
        onHide={closeSumBoxACB}
        dialogClassName="my-modal"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Your Visiting Plan
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="Details-View-Main">
            <div className="detailsViewBody" ref={props.componentRef}>
              {props.favoriteArray.map(getSummaryFromArrayCB)}
            </div>
            <div>
              <button className="printBtn" onClick={handlePrintACB}>
                &#128424;
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default SidebarFavView;
