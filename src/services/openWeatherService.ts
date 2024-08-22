import { WeatherInfo } from "../types/weather.interface";
import { formatTime } from "../utils/weatherUtils";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

interface OpenWeatherResponse {
  name: string;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  weather: Array<{
    icon: string;
    description: string;
  }>;
  wind: {
    speed: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
}

class OpenWeatherService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public async fetchWeatherByCoordinates(
    lat: number,
    lon: number
  ): Promise<WeatherInfo> {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&lang=pt_br&units=metric`
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar as informações do clima");
      }

      const data: OpenWeatherResponse = await response.json();

      const requestTime = new Date();
      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      return {
        city: data.name ?? "-",
        temperature: data.main.temp.toFixed(1) ?? "-",
        temperatureMax: data.main.temp_max.toFixed(1) ?? "-",
        temperatureMin: data.main.temp_min.toFixed(1) ?? "-",
        iconUrl: iconUrl,
        description: data.weather[0].description ?? "-",
        humidity: data.main.humidity.toString() ?? "-",
        wind: data.wind.speed.toString() ?? "-",
        country: data.sys.country ?? "-",
        sunrise: formatTime(data.sys.sunrise, data.timezone) ?? "-",
        sunset: formatTime(data.sys.sunset, data.timezone) ?? "-",
        requestTime: requestTime,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

const openWeatherService = new OpenWeatherService(API_KEY);
export default openWeatherService;
