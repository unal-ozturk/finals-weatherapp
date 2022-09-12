import React from "react";

const WeatherDetails = ({ detailsArray, toggle, nextSevenDays }) => {
  return (
    <>
      {detailsArray.length > 0 && toggle && (
        <div className="detailseperatedcontainer">
          <div className="separetedeachcontainer">
            <div>
              <p className="daydata">{nextSevenDays[1]}</p>
            </div>
            {/* Weather icon */}
            <img
              src={`http://openweathermap.org/img/wn/${detailsArray[0].weather[0].icon}@2x.png`}
              className="detailsdayimage"
              alt="alt"
            />

            {/* Short description */}
            <p className="detailsofdays">{detailsArray[0].weather[0].main}</p>

            {/* Main Temp */}
            <p className="detailsofdays">
              {Math.floor((detailsArray[0].main.temp - 32) * 0.5 - 105)} °C
            </p>
          </div>

          <div className="separetedeachcontainer">
            <div>
              <p className="daydata">{nextSevenDays[2]}</p>
            </div>

            <img
              src={`http://openweathermap.org/img/wn/${detailsArray[5].weather[0].icon}@2x.png`}
              className="detailsdayimage"
              alt="alt"
            />
            <p className="detailsofdays">{detailsArray[5].weather[0].main}</p>
            <p className="detailsofdays">
              {Math.floor((detailsArray[5].main.temp - 32) * 0.5 - 105)} °C
            </p>
          </div>

          <div className="separetedeachcontainer">
            <div>
              <p className="daydata">{nextSevenDays[3]}</p>
            </div>

            <img
              src={`http://openweathermap.org/img/wn/${detailsArray[10].weather[0].icon}@2x.png`}
              className="detailsdayimage"
              alt="alt"
            />
            <p className="detailsofdays">{detailsArray[10].weather[0].main}</p>
            <p className="detailsofdays">
              {Math.floor((detailsArray[10].main.temp - 32) * 0.5 - 105)} °C
            </p>
          </div>

          <div className="separetedeachcontainer">
            <div>
              <p className="daydata">{nextSevenDays[4]}</p>
            </div>

            <img
              src={`http://openweathermap.org/img/wn/${detailsArray[15].weather[0].icon}@2x.png`}
              className="detailsdayimage"
              alt="alt"
            />
            <p className="detailsofdays">{detailsArray[15].weather[0].main}</p>
            <p className="detailsofdays">
              {Math.floor((detailsArray[15].main.temp - 32) * 0.5 - 105)} °C
            </p>
          </div>

          <div className="separetedeachcontainer">
            <div>
              <p className="daydata">{nextSevenDays[5]}</p>
            </div>

            <img
              src={`http://openweathermap.org/img/wn/${detailsArray[20].weather[0].icon}@2x.png`}
              className="detailsdayimage"
              alt="alt"
            />
            <p className="detailsofdays">{detailsArray[20].weather[0].main}</p>
            <p className="detailsofdays">
              {Math.floor((detailsArray[20].main.temp - 32) * 0.5 - 105)} °C
            </p>
          </div>

          <div className="separetedeachcontainer">
            <div>
              <p className="daydata">{nextSevenDays[6]}</p>
            </div>

            <img
              src={`http://openweathermap.org/img/wn/${detailsArray[25].weather[0].icon}@2x.png`}
              className="detailsdayimage"
              alt="alt"
            />
            <p className="detailsofdays">{detailsArray[25].weather[0].main}</p>
            <p className="detailsofdays">
              {Math.floor((detailsArray[25].main.temp - 32) * 0.5 - 105)} °C
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherDetails;