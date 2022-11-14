import react from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>

          <WeatherIcon code="01d" size={32} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max"> 22</span>
            <span className="WeatherForecast-temperature-min"> 12</span>
          </div>
        </div>
      </div>
    </div>
  );
}
