import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import "./Weather.scss"
import WeatherByLocation from "./WeatherByLocation";
const Weather = () => {
    // const [title, setTitle] = useState("");
    // useEffect(async () => {
    //     console.log("<<run use effect")
    //     let response = await axios({
    //         method: 'post',
    //         url: "http://localhost:8080/get-data-by-url",
    //         data: { url: 'https://www.metaweather.com/api/location/1236594/' },
    //     });
    //     setTimeout(() => {
    //         setTitle(response.data.title)
    //     }, 1000)
    // }, []);

    return (
        // <div>inside Weather component: title = {title}</div>

        <div className="weather-container">
            <Search />
            <hr />
            <WeatherByLocation woiedFromParent={"1252431"} />
            <hr />
            <WeatherByLocation woiedFromParent={"1236594"} />

        </div>
    )
}

// class Weather extends React.Component {
//     constructor(props) {
//         super(props)
//         console.log(">>>run contrucctor: 00000")
//         this.state = {
//             title: ""
//         }
//     }

//     async componentDidMount() {
//         console.log("<<<Check run didmout")
//         let response = await axios({
//             method: 'post',
//             url: "http://localhost:8080/get-data-by-url",
//             data: { url: 'https://www.metaweather.com/api/location/1236594/' },
//         });
//         setTimeout(() => {
//             this.setState({
//                 title: response.data.title

//             })
//         }, 4000)

//         // console.log(">>checck data: ", response)
//     }
//     render() {
//         console.log(">>> run render:")
//         return (
//             <div>inside Weather component: title = {this.state.title}</div>
//         )
//     }
// }
export default Weather;