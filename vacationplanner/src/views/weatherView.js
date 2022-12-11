import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Container from "react-bootstrap/Container";

/*
@Author Emil <emilgo@kth.se>
@Co-Author Mahdi <mnazari@kth.se
TODO: fix ugly css (done ish)
DONE: displaying data passed by props,
*/

function WeatherView(props) {
  function forecastWeatherCB(obj) {
    return (
      <div key={obj.date_epoch}>
        {" "}
        <h5>{obj.date}</h5>
        <div className="card flex-row">
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
              &#8192;{obj.day.avgtemp_c}°C
            </div>
            <div>
              <img
                className="card-img-left example-card-img-responsive"
                src={"https://i.imgur.com/MSHgT82.png"}
                width={17}
                height={17}
              />
              &#8192; {obj.day.avgvis_km} kph
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {props.locationCity}, {props.locationCountry}, {props.locationDate}
      <Container>
        <h5>Today</h5>
        <div className="card flex-row">
          {" "}
          <img
            className="card-img-left example-card-img-responsive"
            src={props.weatherIcon}
            width={75}
            height={75}
          />
          <div className="card-body">
            <h1 className="card-title h5 h4-sm">{props.weatherCondition}</h1>
            <div className="card-text">
              <img
                className="card-img-left example-card-img-responsive"
                src={"https://i.imgur.com/6Vf17Eo.png"}
                width={17}
                height={17}
              />
              &#8192; {props.weatherTemp}°C
            </div>
            <div>
              <img
                className="card-img-left example-card-img-responsive"
                src={"https://i.imgur.com/MSHgT82.png"}
                width={17}
                height={17}
              />
              &#8192; {props.weatherWind} kph
            </div>
          </div>
        </div>
        <div className=""></div>
        {props.forecast.map(forecastWeatherCB)}
      </Container>
    </div>
  );
}
export default WeatherView;
