import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Container from "react-bootstrap/Container";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

/*
@Author Emil <emilgo@kth.se>
@Co-Author Mahdi <mnazari@kth.se
TODO: fix ugly css (done ish)
DONE: displaying data passed by props,
*/

function WeatherView(props) {
  const currenPageUrl = "https://vacationplanner-d5ea1.web.app/";
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
    <div className="weatherSidebar">
      <h4>Weather Forecast</h4>
      <h6>
        {props.locationCity}, {props.locationCountry}
      </h6>
      <h6> Retrieved at localtime:</h6>
      {props.locationDate}
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
        {props.forecast.map(forecastWeatherCB)}
      </Container>
      <div className="shareBtns">
        <h5>Share us:</h5>
        <FacebookShareButton url={currenPageUrl}>
          <FacebookIcon round={true} size={40} />
        </FacebookShareButton>
        <EmailShareButton url={currenPageUrl}>
          <EmailIcon round={true} size={40} />
        </EmailShareButton>
        <TwitterShareButton url={currenPageUrl}>
          <TwitterIcon round={true} size={40} />
        </TwitterShareButton>
        <WhatsappShareButton url={currenPageUrl}>
          <WhatsappIcon round={true} size={40} />
        </WhatsappShareButton>
      </div>
    </div>
  );
}
export default WeatherView;
