import { Button } from "antd";
import { useState } from "react";
import axios from "axios";
import _ from "lodash"
import { useHistory } from "react-router-dom";

const Search = () => {
    const [keyword, setKeyWord] = useState("");
    const [locationArr, setLocationArr] = useState([]);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [isFocusInput, setIsFocusInput] = useState(false);
    let history = useHistory();
    const handleSearchBtn = async () => {

        setIsLoadingData(true);

        setLocationArr([]);

        let response = await axios({
            method: 'post',
            url: "http://localhost:8080/get-data-by-url",
            data: { url: `https://www.metaweather.com/api/location/search/?query=${keyword}` },

        });

        if (response && response.data) {
            let result = response.data
            let _locationArr = [];
            if (!_.isEmpty(result)) {
                for (let key in result) {

                    _locationArr.push(result[key])

                }

                setLocationArr(_locationArr);
            } else {
                setLocationArr([]);
            }
        }
        setIsLoadingData(false);
        setIsFocusInput(false);
        console.log("<<check data", response)
    }
    const handleViewDetail = (woeid) => {
        history.push(`/weather/detail/${woeid}`);
    }
    return (
        <div className="search-container">
            <div className="search-input">
                <input type="text" placeholder="Search any city..."
                    value={keyword}
                    onChange={(event) => setKeyWord(event.target.value)}
                    onFocus={() => setIsFocusInput(true)}


                />
                <button onClick={() => handleSearchBtn()}>Search</button>

            </div>
            {isLoadingData === true && <div > ....Loading...</div>}

            <div className="result-container">
                {locationArr && locationArr.length > 0 && locationArr.map((item, index) => {
                    return (

                        <div className="result" key={`location-${index}`}>
                            <div className="title">Title:{item.title}</div>
                            <div className="type">Type:{item.location_type}</div>
                            <div className="woeid"><span onClick={() => {
                                handleViewDetail(item.woeid)
                            }}

                                title="Click to view detail"

                            >


                                <b>Woeid:--- {item.woeid} ---</b></span></div>
                            <div className="latt_long">Latt_long:{item.latt_long}</div>


                        </div>
                    )
                })}

                {
                    !isFocusInput && keyword && locationArr && locationArr.length === 0 &&
                    <div> Not found with keyword = {keyword}</div>
                }
            </div>


        </div>
    )
}
export default Search;