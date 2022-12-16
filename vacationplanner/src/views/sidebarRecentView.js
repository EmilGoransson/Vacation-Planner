import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./viewStyles.css";

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
                <a
                  href="#"
                  onClick="IDClick(id);event.preventDefault();"
                  onClick={addButtonACB}
                >
                  {obj.charAt(0).toUpperCase() + obj.slice(1)}
                </a>
              }{" "}
              &#8193;
              <img
                src="https://i.imgur.com/YLEGXIK.png"
                onClick={removeFromRecentOnClickButtonACB}
                className={"sidebar-remove"}
              ></img>
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
