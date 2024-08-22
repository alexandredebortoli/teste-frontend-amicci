import { WeatherInfo } from "../types/weather.interface";
import { formatTime } from "../utils/weatherUtils";

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

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

      const data: any = await response.json();

      const requestTime = new Date();

      return {
        city: data.name,
        temperature: data.main.temp,
        temperatureMax: data.main.temp_max,
        temperatureMin: data.main.tem_min,
        iconType: data.weather[0].main,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        country: data.sys.country,
        sunrise: formatTime(data.sys.sunrise, data.timezone),
        sunset: formatTime(data.sys.sunset, data.timezone),
        requestTime: requestTime,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

const openWeatherService = new OpenWeatherService(apiKey);
export default openWeatherService;
