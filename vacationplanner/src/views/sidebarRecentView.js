import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./viewStyles.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

/*
!!NPM INSTALL, IT USES AXIOS!! (npm install axios but npm install should do it)
@Author Emil <emilgo@kth.se>
TODO: PROBLEM: can add two of the same cities to recent & cant remove multiple entries ina a row (e.g sthml, sthml (doesnt work))
DONE: Fetches attraction array from API, passes it to view. NEEDS API_KEY to work which can be defined inside apiConfig https://rapidapi.com/apidojo/api/travel-advisor/pricing.
, Connection to store
@Co-Author Mahdi <mnazari@kth.se>
DONE: Now we can search from "recent search" sidebar by clicking on a city in the sidebar
*/

function SidebarRecentView(props) {
  function renderRecentArrayCB(obj) {
    function removeFromRecentOnClickButtonACB(e) {
      props.removeRecent(obj);
    }
    function addButtonACB() {
      props.setSearchTest(obj);
    }
    return (
      <ul key={obj}>
        <div className="sidebarText">
          <li className="sidebar-bullet">
            <h6>
              {
                <OverlayTrigger
                  key="text-search"
                  placement={"top"}
                  overlay={
                    <Tooltip id="tooltop-search">
                      Press to search for{" "}
                      {obj.charAt(0).toUpperCase() + obj.slice(1)}{" "}
                    </Tooltip>
                  }
                >
                  <a href="#" onClick={addButtonACB}>
                    {obj.charAt(0).toUpperCase() + obj.slice(1)}
                  </a>
                </OverlayTrigger>
              }{" "}
              &#8193;
              <OverlayTrigger
                key="image-remove"
                placement={"top"}
                overlay={<Tooltip id="tooltop-remove">Remove search </Tooltip>}
              >
                <img
                  src="https://i.imgur.com/YLEGXIK.png"
                  onClick={removeFromRecentOnClickButtonACB}
                  className={"sidebar-remove"}
                ></img>
              </OverlayTrigger>
            </h6>
          </li>
        </div>
      </ul>
    );
  }
  if (props.recentArray.length === 0) {
    return (
      <div className="sidebarParents">
        <h6>Your recent searches will be shown here</h6>
      </div>
    );
  }
  return (
    <div className="sidebarParents">
      {props.recentArray.map(renderRecentArrayCB)}
    </div>
  );
}
export default SidebarRecentView;
