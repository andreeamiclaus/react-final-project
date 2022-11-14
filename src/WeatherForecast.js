import react from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let longitude = props.coordinates.lon; //lon and lat come from the apiURL and the props coordinates from the WeatherData object from Weather.js
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

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
