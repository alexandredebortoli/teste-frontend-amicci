import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WeatherCardItem from "./WeatherCardItem";
import { WeatherInfo } from "../types/weather.interface";

interface WeatherCardProps {
  weather: WeatherInfo | null;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => (
  <Container maxWidth="md" sx={{ mt: 8 }}>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Atualizado em {weather?.requestTime.toLocaleDateString("pt-BR")}{" "}
      {weather?.requestTime.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} alignContent={"center"}>
                <Typography variant="h4" align="center">
                  {weather?.city}
                </Typography>
                <Typography color="text.secondary" align="center">
                  {weather?.country}
                </Typography>
              </Grid>
              <Grid item xs={6} md={3} alignContent={"center"}>
                <Typography variant="h3" align="center">
                  {weather?.temperature ? weather.temperature : "-"}°
                </Typography>
                <Typography color="text.secondary" align="center">
                  Máx:{weather?.temperatureMax}° Min:{weather?.temperatureMin}°
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                md={3}
                alignContent={"center"}
                justifyContent="center"
                alignItems="center"
              >
                <Grid container justifyContent="center">
                  <img
                    src={weather?.iconUrl}
                    alt={weather?.description}
                    width={68}
                  />
                </Grid>
                <Typography
                  color="text.secondary"
                  align="center"
                  sx={{ textTransform: "capitalize" }}
                >
                  {weather?.description}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <WeatherCardItem
        icon={WaterDropIcon}
        title="Umidade"
        value={`${weather?.humidity}%`}
      />
      <WeatherCardItem
        icon={AirIcon}
        title="Vento"
        value={`${weather?.wind} m/s`}
      />
      <WeatherCardItem
        icon={WbSunnyOutlinedIcon}
        title="Nascer do sol"
        value={weather?.sunrise ?? "-"}
      />
      <WeatherCardItem
        icon={DarkModeOutlinedIcon}
        title="Pôr do sol"
        value={weather?.sunset ?? "-"}
      />
    </Grid>
  </Container>
);
