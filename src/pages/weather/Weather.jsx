import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WeatherDetails from "../../components/WeatherDetails";
import { fetchDetails } from "../../functions/fetchdetails";
import { logoutUser } from "../../functions/logoutuser";
import GetDates from "../../functions/turndays";
import "../../styles/Weather.scss";

function Weather() {
  const navigate = useNavigate();
  const [weather, setWeather] = useState(null);
  const [data, setData] = useState();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [city, setCity] = useState("");
  const [icon, setIcon] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [detailsArray, setDetailsArray] = useState([]);
  const [nextSevenDays, setNextSevenDays] = useState([]);
  const [toggle, setToggle] = useState(false);

  // open weather api key
  const API_KEY = "38d81345dda9c1e5e86a435989b2f509";

  // fetch data from open weather
  const getTempData = async (api, query) => {
    // whenever the search button is pressed hide details
    setToggle(false);

    // whenever the search button is pressed reset the details array state to prevent to show old location details
    setDetailsArray([]);

    // if the input is ""
    if (inputValue === "") {
      return setData();
    }

    // fetch main details from open weather
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      // when the request is successfull set the variables with response
      .then((res) => {
        console.log(res);
        setIcon(res.weather[0].icon);
        setWindSpeed(res.wind.speed);
        setData(res.main);
        setCountryCode(res.sys.country);
        setWeather(res.weather[0]);
        setCity(res.name);
        setLat(res.coord.lat);
        setLon(res.coord.lon);
      })
      .catch((err) => {
        console.log("error in get data", err);
        setData(null);
      });
  };

  // if user not logged in redirect to login
  // fetch 7 days on first render
  useEffect(() => {
    var admin = localStorage.getItem("admin");
    if (!admin) {
      navigate("/login");
    }

    // startdate is today
    var startDate = new Date();
    // use getdates function to get next 7 days and set to new variable
    var aryDates = GetDates(startDate, 7);
    setNextSevenDays(aryDates);
  }, []);

  return (
    <div className="weatherbody">
      {/* Navbar + logo + logout*/}
      <div className="navbarcontainer">
        <div className="navbarimagecontainer">
          <img
            src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
            width="60px"
            height="60px"
            alt="alt"
          />
          <p className="detailsheading">Weather App</p>
        </div>

        <div className="navbarlogoutcontainer">
          <button className="logoutbutton" onClick={() => logoutUser(navigate)}>
            Logout
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="searchbarcontainer">
        <div>
          <input
            className="weather-input-city"
            type="text"
            placeholder="Search City"
            value={inputValue}
            onInput={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className="searbuttoncontainer">
          <button
            className="searchbutton"
            onClick={() => getTempData(API_KEY, inputValue)}
          >
            Search
          </button>
        </div>
      </div>

      {/* if data is null show an error */}
      {data === null && (
        <>
          <p className="errortextp">Submited Wrong city name.</p>
        </>
      )}

      {/* Weather details*/}
      <div className="weatherdetailscontainer">
        {data && (
          <>
            {/* Image and city details */}
            <div className="imageandcitydetailscontainer">
              <div className="detailsleftside">
                <img
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                  className="detailimage"
                  alt="alt"
                />
                <p className="details">
                  {city} , {countryCode}
                </p>
                <p className="details">{data.temp} °C</p>
              </div>

              <div className="detailsrightside">
                <button
                  className="detailbutton"
                  onClick={() =>
                    fetchDetails(
                      lat,
                      lon,
                      API_KEY,
                      setDetailsArray,
                      toggle,
                      setToggle
                    )
                  }
                >
                  {toggle ? "Hide Details" : "Click for details"}
                </button>
              </div>
            </div>

            <div className="detailsparacontainer">
              <p className="details">{weather.description}</p>
              <p className="details">Feels Like : {data.feels_like}°C</p>
              <p className="details">Wind Speed : {windSpeed} m/s</p>
              <p className="details">Humidity : {data.humidity} %</p>
              <p className="details">Pressure : {data.pressure} hPa</p>
            </div>
          </>
        )}
      </div>

      {/* if details button is pressed show here */}
      <WeatherDetails
        detailsArray={detailsArray}
        toggle={toggle}
        nextSevenDays={nextSevenDays}
      />
    </div>
  );
}

export default Weather;