import WeatherState from "./WeatherState";
import "./Child.scss"
import moment, { months } from "moment";
const WeatherDay = (props) => {
    const dataWeather = props.dataWeather
    return (
        <div className="weather-day-container">
            <div className="date">{moment(dataWeather.applicable_date).format("ddd MMM YY")}</div>
            <div className="state">
                <WeatherState weatherState={dataWeather.weather_state_name} />
            </div>
            <div className="max">
                Max: {dataWeather.max_temp}°C

            </div>

            <div className="min">
                Max: {dataWeather.min_temp}°C

            </div>
            <div className="wind">
                <span className={`dir dir-${dataWeather.wind_direction_compass.toLowerCase()}`}></span>

                {dataWeather.wind_speed}mph

            </div>




        </div>
    )
}
export default WeatherDay;
