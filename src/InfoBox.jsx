import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
 

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600";

  const HOT_URL =
    "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600";
  const COLD_URL =
    "https://images.unsplash.com/photo-1486308510493-aa648336e503?w=600";

  const RAINY_URL =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600";
     
  return (
    <div style={{ marginTop: "20px" }}>
      <Card
        sx={{
          maxWidth: 400,
          margin: "auto",
          padding: "10px",
        }}
      >
        <CardMedia
          sx={{ height: 200 }}
          image={
            info.humidity > 70
              ? RAINY_URL
              : info.temp > 30
                ? HOT_URL
                : info.temp < 15
                    ? COLD_URL
                    : INIT_URL

          }
          title="Weather Image"
        />

        <CardContent>
          <Typography variant="h4">{info.city}
             
          </Typography>

          <Typography>🌥 Weather: {info.weather}</Typography>

          <Typography>🌡 Temperature: {info.temp}°C</Typography>

          <Typography>🤔 Feels Like: {info.feelLike}°C</Typography>

          <Typography>📉 Min Temp: {info.tempMin}°C</Typography>

          <Typography>📈 Max Temp: {info.tempMax}°C</Typography>

          <Typography>💧 Humidity: {info.humidity}%</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
