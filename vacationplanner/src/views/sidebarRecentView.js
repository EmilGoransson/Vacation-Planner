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
  console.log(props);
  function renderRecentArrayCB(obj) {
    function removeFromRecentOnClickButtonACB(e) {
      props.removeRecent(obj);
    }
    function addButtonACB() {
      props.setSearchTest(obj);
      //console.log(obj);
    }
    return (
      <ul>
        <div key={obj.location_id} className="sidebarText">
          <li className="sidebar-bullet">
            <h6>
              {
                <a
                  href="#"
                  onClick="IDClick(id);event.preventDefault();"
                  onClick={addButtonACB}
                >
                  {obj}
                </a>
              }{" "}
              &#8193;
              <Button
                className="sidebarRecentBTN"
                variant="outline-danger"
                size="sm"
                onClick={removeFromRecentOnClickButtonACB}
              >
                X
              </Button>
            </h6>
          </li>
        </div>
      </ul>
    );
  }
  return (
    <div className="sidebarParents">
      {props.recentArray.map(renderRecentArrayCB)}
    </div>
  );
}
export default SidebarRecentView;
