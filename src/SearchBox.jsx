 import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {

  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const API_URL =
    "https://api.openweathermap.org/data/2.5/weather";

  const API_KEY =
    "d1884be8930df8ce34ff0ed13f292e6e";

  // Weather function
  const getWeather = async () => {

    try {

      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      let data = await response.json();

      console.log(data);

      if (data.cod == "404") {
        setError("City not found!");
        return null;
      }

      setError("");

      let result = {
        city: data.name,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelLike: data.main.feels_like,
        weather: data.weather[0].main,
      };

      return result;

    } catch {

      setError(
        "Failed to fetch weather data. Please try again later."
      );

      return null;
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    let newInfo = await getWeather();

    if (newInfo) {
      updateInfo(newInfo);
    }

    setCity("");
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>

        <TextField
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <Button type="submit" variant="contained">
          Search
        </Button>

      </form>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

    </div>
  );
}