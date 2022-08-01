import "./Child.scss"
const WeatherState = (props) => {

    const weatherState = props.weatherState;
    const allWeatherState = {
        "Snow": "sn",
        "Sleet": "sl",
        "Hail": "h",
        "Thunderstorm": "t",
        "Heavy Rain": "hr",
        "Light Rain": "lr",
        "Showers": "s",
        "Heavy Cloud": "hc",
        "Light Cloud": "lc",
        "Clear": "c"
    }
    const getWetherState = (weatherState) => {
        const fetchState = allWeatherState[weatherState]
        return `http://localhost:8080/static/img/weather/${fetchState}.svg`;
    }
    return (
        <div className="weatherState-container">

            <div className="icon-name">
                <img src={getWetherState(weatherState)} />
            </div>
            <div className="name-state">
                {weatherState}
            </div>
        </div>
    )
}
export default WeatherState;