import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import WeatherState from "./Child/WeatherState";
import { useHistory } from "react-router-dom";
import { isEmpty } from "lodash";
import WeatherDay from "./Child/WeatherDay";
import _ from "lodash"
import "./Weather.scss"
import moment from "moment";
const WeatherByLocation = (props) => {
    let { woeid } = useParams();
    const [weatherByLocation, setWeatherByLocation] = useState("");
    let history = useHistory();

    useEffect(() => {
        getWeatherByLocation();
    }, [])
    const getWeatherByLocation = async () => {
        if (!woeid) {
            woeid = props.woiedFromParent;
        }
        let response = await axios({
            method: 'post',
            url: "http://localhost:8080/get-data-by-url",
            data: { url: `https://www.metaweather.com/api/location/${woeid}/` },
        });
        console.log("<<ccheeckk data reponse", response)
        if (response && response.data) {
            setWeatherByLocation(response.data);
        }
    }
    const handleBack = () => {
        history.push("/weather")
    }
    return (
        <div className="weather-by-location-container">
            {
                !props.woiedFromParent &&
                <div>
                    <div>
                        <span onClick={() => handleBack()}>--BACK--</span>
                    </div>
                </div>
            }
            {/* {JSON.stringify(weatherByLocation)} */}

            <div className="list-weather-day">
                {
                    !isEmpty(weatherByLocation) && weatherByLocation.consolidated_weather
                    && weatherByLocation.consolidated_weather.length > 0
                    && weatherByLocation.consolidated_weather.map((item, index) => {
                        return (

                            <div key={`weatherday-${index}`} className={`weather-day-${index}`}>

                                {
                                    index === 0 &&
                                    <div className="location-data">
                                        <div className="title">
                                            {weatherByLocation.title}
                                        </div>
                                        <div className="day">
                                            <div> {moment(weatherByLocation.time).format("hh:mm:ss A")}</div>
                                        </div>

                                    </div>

                                }
                                <WeatherDay dataWeather={item} />
                            </div>
                        )
                    })
                }
            </div>
            {/* <WeatherState weatherState={"Heavy Cloud"} /> */}
        </div>
    )
}
export default WeatherByLocation;