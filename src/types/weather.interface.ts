export interface WeatherInfo {
  temperature: string;
  temperatureMax: string;
  temperatureMin: string;
  humidity: string;
  description: string;
  city: string;
  country: string;
  iconType: "Rain" | "Clear" | "Clouds" | "Snow" | "Drizzle" | "Thunderstorm";
  wind: string;
  sunrise: string;
  sunset: string;
  requestTime: Date;
}
