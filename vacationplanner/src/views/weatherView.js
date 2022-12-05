import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Container from "react-bootstrap/Container";

/*
@Author Emil <emilgo@kth.se>
TODO: fix ugly css (done ish)
DONE: displaying data passed by props
*/

function WeatherView(props) {
  function forecastWeatherCB(obj) {
    console.log(obj);
    return (
      <div>
        {" "}
        {obj.date}
        <div key={obj.date_epoch} className="card flex-row">
          <img
            className="card-img-left example-card-img-responsive"
            src={obj.day.condition.icon}
            width={75}
            height={75}
          />
          <div className="card-body">
            <h1 className="card-title h5 h4-sm">{obj.day.condition.text} </h1>
            <div className="card-text">
              <img
                className="card-img-left example-card-img-responsive"
                src={"https://i.imgur.com/6Vf17Eo.png"}
                width={17}
                height={17}
              />
              {obj.day.avgtemp_c}°C
            </div>
            <div>
              <img
                className="card-img-left example-card-img-responsive"
                src={"https://i.imgur.com/MSHgT82.png"}
                width={17}
                height={17}
              />
              {obj.day.avgvis_km} kph
            </div>
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
        Today
        <div></div>
        <div className="card flex-row">
          {" "}
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
              <img
                className="card-img-left example-card-img-responsive"
                src={"https://i.imgur.com/6Vf17Eo.png"}
                width={17}
                height={17}
              />
              {props.data.current.temp_c}°C
            </div>
            <div>
              <img
                className="card-img-left example-card-img-responsive"
                src={"https://i.imgur.com/MSHgT82.png"}
                width={17}
                height={17}
              />
              {props.data.current.wind_kph} kph
            </div>
          </div>
        </div>
        <div className=""></div>
        {props.data.forecast.forecastday.map(forecastWeatherCB)}
      </Container>
    </div>
  );
}
export default WeatherView;
