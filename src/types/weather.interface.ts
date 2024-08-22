export interface WeatherInfo {
  temperature: number;
  temperatureMax: number;
  temperatureMin: number;
  humidity: number;
  description: string;
  city: string;
  country: string;
  iconType: "Rain" | "Clear" | "Clouds" | "Snow" | "Drizzle" | "Thunderstorm";
  wind: number;
  sunrise: string;
  sunset: string;
  requestTime: Date;
}
