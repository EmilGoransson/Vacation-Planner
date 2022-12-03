import React from "react";
import axios from "axios";
import { API_KEY, API_KEY_WEATHER } from "../apiConfig";
import WeatherView from "../views/weatherPresenter";
import LoadingView from "../views/LoadingView";
/*
https://ipgeolocation.io/documentation/ip-geolocation-api-javascript-sdk.html for initial state maybe?

TO USE!!! ADD export const API_KEY_WEATHER =
  "YOUR KEY FROM HERE: https://rapidapi.com/weatherapi/api/weatherapi-com"; to apiConfig.js
@Author Emil <emilgo@kth.se>
TODO: fix css, locationQuery should fetch from store, race condition maybe?
DONE: Fetching data & displaying it.
*/

export function Weather() {
  const [weatherData, setWeatherData] = React.useState(null);
  const locationQuery = "Stockholm"; //temp should fetch from store

  //from locationQuery
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY_WEATHER,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const getWeather = async () => {
    try {
      const response = await axios.get(
        "https://weatherapi-com.p.rapidapi.com/forecast.json?q=" +
          locationQuery +
          "&days=5",
        options
      );
      const data = response.data;
      if (data) {
        setWeatherData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const day = new Date();

  React.useEffect(() => {
    getWeather();
  }, []);
  if (!weatherData)
    //dont know if allowed?
    return <LoadingView />;
  return <WeatherView data={weatherData} />;
}
