//@Author Emil Göransson
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Container from "react-bootstrap/Container";

function WeatherView(props) {
  function forecastWeatherCB(obj) {
    return (
      <div className="card flex-row">
        {obj.date}
        <img
          className="card-img-left example-card-img-responsive"
          src={obj.day.condition.icon}
          width={75}
          height={75}
        />
        <div className="card-body">
          <h1 className="card-title h5 h4-sm">{obj.day.condition.text}</h1>
          <div className="card-text">
            {obj.day.avgtemp_c}°C {obj.day.avgvis_km} kph
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {props.data.location.name}, {props.data.location.country},{" "}
      {props.data.location.localtime}
      <Container>
        <div></div>
        <div className="card flex-row">
          {" "}
          <div className=""> Todays weather </div>
          <img
            className="card-img-left example-card-img-responsive"
            src={props.data.current.condition.icon}
            width={75}
            height={75}
          />
          <div className="card-body">
            <h1 className="card-title h5 h4-sm">
              {props.data.current.condition.text}
            </h1>
            <div className="card-text">
              {props.data.current.temp_c}°C {props.data.current.wind_kph} kph
            </div>
          </div>
        </div>
        {props.data.forecast.forecastday.map(forecastWeatherCB)}
      </Container>
    </div>
  );
}
export default WeatherView;
