//Author Emil Göransson

import { API_KEY } from "./apiConfig";
//returns Restu
const key = API_KEY;
//returns locationId needed by API

export function getAttractionLocation(locationQuery) {
  const URL =
    "https://travel-advisor.p.rapidapi.com/locations/search?query=" +
    locationQuery +
    "&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US";
  return fetch(
    URL,
    {
      method: "GET", // HTTP method
      headers: {
        "X-RapidAPI-Key": key,
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      }, // end of headers object
    } /* end of second fetch parameter, object */
  )
    .then((response) => response.json())
    .then((response) => console.log(response.data[0].result_object.location_id)) //return location ID
    .catch((err) => console.error(err));
}
//returns attractions from ID
export function getAttactions(locationId) {
  const URL =
    "https://travel-advisor.p.rapidapi.com/attractions/list?location_id=" +
    locationId +
    "&currency=USD&lang=en_US&lunit=km&sort=recommended";
  return fetch(
    URL,
    {
      method: "GET", // HTTP method
      headers: {
        "X-RapidAPI-Key": key,
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      }, // end of headers object
    } /* end of second fetch parameter, object */
  )
    .then((response) => response.json())
    .then(transformSearchResultACB) //return location ID
    .catch((err) => console.error(err));
}
function transformSearchResultACB(response) {
  console.log(response.data);
  return response.data;
}
