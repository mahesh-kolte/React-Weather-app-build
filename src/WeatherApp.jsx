 import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {

  const [weatherData, setWeatherData] = useState({
    city: "Mumbai",
    feelLike: 24.8,
    temp: 25,
    tempMin: 22,
    tempMax: 28,
    humidity: 80,
    weather: "Haze",
  });

  let updateInfo = (newInfo) => {
    console.log("NEW INFO =", newInfo);

    setWeatherData(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>

      <h1>Weather App</h1>

      <SearchBox updateInfo={updateInfo} />

      <InfoBox info={weatherData} />

    </div>
  );
}