import { useState } from "react";
import {
  Alert,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { handleError } from "../utils/errorHandling";
import googleMapsService from "../services/googleMapsService";
import openWeatherService from "../services/openWeatherService";
import { WeatherInfo } from "../types/weather.interface";
import geolocationService from "../services/geolocationService";

interface WeatherFormProps {
  setWeather: (weather: WeatherInfo | null) => void;
}

export const WeatherForm: React.FC<WeatherFormProps> = ({ setWeather }) => {
  const [city, setCity] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWeather(null);
    setError(null);
    try {
      if (!city) {
        throw new Error("Por favor, informe o nome da cidade");
      }

      const coords = await googleMapsService.fetchCoordinatesByCity(city);
      const weatherData = await openWeatherService.fetchWeatherByCoordinates(
        coords.lat,
        coords.lng
      );
      setWeather(weatherData);
    } catch (err) {
      setError(handleError(err));
    }
  };

  const handleLocationClick = async () => {
    setWeather(null);
    setError(null);
    try {
      const coords = await geolocationService.fetchCurrentLocation();
      const weatherData = await openWeatherService.fetchWeatherByCoordinates(
        coords.latitude,
        coords.longitude
      );
      setWeather(weatherData);
    } catch (err) {
      setError(handleError(err));
    }
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSearchSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} container alignItems="stretch">
            <TextField
              label="Nome da cidade"
              variant="outlined"
              value={city}
              placeholder="New York"
              onChange={(e) => setCity(e.target.value)}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <NearMeOutlinedIcon fontSize="medium" />
                  </InputAdornment>
                ),
              }}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid item xs={12} container alignItems="stretch">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="whitespace-nowrap"
              sx={{ height: "100%" }}
              fullWidth
            >
              Obter Clima
            </Button>
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Alert severity="error" className="w-full">
                {error}
              </Alert>
            </Grid>
          )}
          <Grid item xs={12}>
            <Divider variant="middle" sx={{ my: 2 }}>
              <Chip label="OU" size="small" />
            </Divider>
          </Grid>
          <Grid item xs={12} container alignItems="stretch">
            <Button
              variant="outlined"
              color="primary"
              className="whitespace-nowrap"
              fullWidth
              sx={{ height: "100%" }}
              startIcon={<MyLocationIcon />}
              onClick={handleLocationClick}
            >
              Minha Localização
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
