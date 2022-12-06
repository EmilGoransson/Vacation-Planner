import React from "react";
import axios from "axios";
import { API_KEY, API_KEY_WEATHER } from "../apiConfig";
import WeatherView from "../views/weatherView";
import LoadingView from "../views/LoadingView";
import useAttractionStore from "../Model/vacationStore";
/*
https://ipgeolocation.io/documentation/ip-geolocation-api-javascript-sdk.html for initial state maybe?

TO USE!!! ADD export const API_KEY_WEATHER =
  "YOUR KEY FROM HERE: https://rapidapi.com/weatherapi/api/weatherapi-com"; to apiConfig.js
@Author Emil <emilgo@kth.se>
TODO:  locationQuery should fetch from store, race condition maybe?, if not city name it should do something
DONE: Fetching data & displaying it.
*/

function Weather() {
  const getSearchQuery = useAttractionStore((state) => state.searchQuery);
  const [isLoading, setIsLoading] = React.useState(true);
  const [weatherData, setWeatherData] = React.useState(null);
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
      setIsLoading(true);
      const response = await axios.get(
        "https://weatherapi-com.p.rapidapi.com/forecast.json?q=" +
          getSearchQuery +
          "&days=5",
        options
      );
      const data = response.data;
      if (data) {
        setWeatherData(data);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getWeather();
  }, [getSearchQuery]);
  if (!weatherData || isLoading) return <LoadingView />; //dont know if allowed?
  return <WeatherView data={weatherData} />;
}
export default Weather;
