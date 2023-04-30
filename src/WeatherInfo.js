import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="clearfix d-flex">
          <div className="col-6">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-start"
            />
            <div className="float-start">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span classNam="unit">°C</span>
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
