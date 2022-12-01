import { API_KEY } from "../apiConfig";
function getRestaurantLocation(locationQuery) {
  const key = API_KEY;
  return fetch(
    "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=" +
      locationQuery,
    {
      method: "GET", // HTTP method
      headers: {
        // HTTP headers, also object literal
        "X-Mashape-Key": key,
        "x-rapidapi-host": "tripadvisor16.p.rapidapi.com",
      }, // end of headers object
    } /* end of second fetch parameter, object */
  ).then(treatHTTPResponseACB);
}

function treatHTTPResponseACB(response) {
  /* throw if the HTTP response is not 200, otherwise return response.json()*/
  if (response.status !== 200) {
    throw new Error("Code not 200");
  }
  return response.json();
}

function transformSearchResultACB(params) {
  return params.results;
}

function searchRestaurants(params) {
  return fetch(
    "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants" +
      new URLSearchParams(params) /*query string*/,
    {
      method: "Get",
      headers: {
        "X-Mashape-Key": API_KEY,
        "x-rapidapi-host": "tripadvisor16.p.rapidapi.com",
      },
    }
  )
    .then(treatHTTPResponseACB)
    .then(transformSearchResultACB);
}
export { getRestaurantLocation, searchRestaurants };
