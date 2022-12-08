import React from "react";
import axios from "axios";
import { API_KEY, API_KEY_WEATHER } from "../apiConfig";
import WeatherView from "../views/weatherView";
import LoadingView from "../views/LoadingView";
import useAttractionStore from "../model/vacationStore";
/*
@Author Emil <emilgo@kth.se>
TODO: race condition maybe?, if not city name it should do something
DONE: Fetching data & displaying it.
*/

function Weather() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [weatherData, setWeatherData] = React.useState(null);
  const getSearchQuery = useAttractionStore((state) => state.searchQuery);
  const [forecast, setForecast] = React.useState(null);
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
        setForecast([
          data.forecast.forecastday[1],
          data.forecast.forecastday[2],
        ]);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getWeather();
  }, [getSearchQuery]);
  if (!weatherData || isLoading || !forecast) return <LoadingView />;
  return (
    <WeatherView
      locationCity={weatherData.location.name}
      locationDate={weatherData.location.localtime}
      locationCountry={weatherData.location.country}
      weatherIcon={weatherData.current.condition.icon}
      weatherCondition={weatherData.current.condition.text}
      weatherTemp={weatherData.current.temp_c}
      weatherWind={weatherData.current.wind_kph}
      forecast={forecast}
    />
  );
}
export default Weather;
