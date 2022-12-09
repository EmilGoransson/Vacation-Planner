import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import Zoom from "react-medium-image-zoom";
import DatePicker from "react-datepicker";

/*
@Author Emil <emilgo@kth.se>
TODO:
DONE: basic functionality, css, now we can display the details in the favorite sidebar by clicking on each favorite attractions name.
@Co-Author Mahdi <mnazari@kth.se>
*/

function SidebarFavView(props) {
  // function showPlanACB() {
  //   {
  //     props.favoriteArray.map(getPlanACB);
  //   }
  //   <>
  //     {/* <div>from={props.startDate ? props.startDate.toString() : null}</div>
  //       <div>to={props.endDate ? props.endDate.toString() : null}</div> */}
  //   </>;
  // }
  // function getPlanACB(obj) {
  //   function closeInfoBoxACB() {
  //     props.closeInfo();
  //   }
  //   return (
  //     <div key={obj.location_id} className="sidebarText">
  //       <Modal
  //         show={props.showInfo}
  //         onHide={closeInfoBoxACB}
  //         dialogClassName="my-modal"
  //         aria-labelledby="example-custom-modal-styling-title"
  //       >
  //         <Modal.Header closeButton>
  //           <Modal.Title id="example-custom-modal-styling-title">
  //             {props.attraction.name}
  //           </Modal.Title>
  //         </Modal.Header>
  //         <Modal.Body>
  //           <div className="Details-View-Main">
  //             <div className="detailsViewBody">
  //               <div>
  //                 from={props.startDate ? props.startDate.toString() : null}
  //               </div>
  //               <div>to={props.endDate ? props.endDate.toString() : null}</div>
  //             </div>
  //           </div>
  //         </Modal.Body>
  //       </Modal>
  //     </div>
  //   );
  // }

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
    function setFromDataACB(date) {
      props.setStartDateTime(date);
    }
    function setToDateACB(date) {
      props.setEndDateTime(date);
    }

    return (
      <ul>
        <div key={obj.attractionInfo.location_id} className="sidebarText">
          <li className="sidebar-bullet">
            <h6>
              <a
                href="#"
                onClick="IDClick(id);event.preventDefault();"
                onClick={getMoreInfoACB}
              >
                {obj.attractionInfo.name}
              </a>
              &#8193;
              <Button
                variant="outline-danger"
                size="sm"
                onClick={removeFavoriteACB}
              >
                X
              </Button>
            </h6>
            <div>
              Start:
              <DatePicker
                placeholderText="from"
                showTimeSelect
                dateFormat="MMM d, yy h:mmaa"
                selected={props.startDate}
                selectsStart
                startDate={props.startDate}
                endDate={props.endDate}
                onChange={setFromDataACB}
              />
              End:
              <DatePicker
                placeholderText="to"
                showTimeSelect
                dateFormat="MMM d, yy h:mmaa"
                selected={props.endDate}
                selectsEnd
                startDate={props.startDate}
                endDate={props.endDate}
                minDate={props.startDate}
                onChange={setToDateACB}
              />
            </div>
            {/* <div>From ={props.startDate ? props.startDate.toString() : null}</div>
        <div>To ={props.endDate ? props.endDate.toString() : null}</div> */}

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
      <Button
        variant="outline-primary"
        size="sm"
        onClick={console.log("summary")}
      >
        Summary
      </Button>
    </div>
  );
}
export default SidebarFavView;
