import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { WeatherCard } from "../WeatherCard";

describe("WeatherCard", () => {
  const mockWeather = {
    city: "São Paulo",
    country: "BR",
    temperature: "25",
    temperatureMax: "28",
    temperatureMin: "20",
    humidity: "60",
    wind: "5",
    sunrise: "06:00",
    sunset: "18:00",
    description: "Clear sky",
    iconUrl: "http://example.com/icon.png",
    requestTime: new Date(),
  };

  it("should render the WeatherCard component with given weather data", () => {
    render(<WeatherCard weather={mockWeather} />);
    expect(screen.getByText("São Paulo")).toBeInTheDocument();
    expect(screen.getByText("BR")).toBeInTheDocument();

    expect(screen.getByText("25°")).toBeInTheDocument();
    expect(screen.getByText("Máx:28° Min:20°")).toBeInTheDocument();

    expect(screen.getByAltText("Clear sky")).toBeInTheDocument();
    expect(screen.getByText("Clear sky")).toBeInTheDocument();

    expect(screen.getByText("Umidade")).toBeInTheDocument();
    expect(screen.getByText("60%")).toBeInTheDocument();

    expect(screen.getByText("Vento")).toBeInTheDocument();
    expect(screen.getByText("5 m/s")).toBeInTheDocument();

    expect(screen.getByText("Nascer do sol")).toBeInTheDocument();
    expect(screen.getByText("06:00")).toBeInTheDocument();

    expect(screen.getByText("Pôr do sol")).toBeInTheDocument();
    expect(screen.getByText("18:00")).toBeInTheDocument();
  });
});
