import { render, screen } from "@testing-library/react";
import { WeatherForm } from "../WeatherForm";
import { vi } from "vitest";

const mockSetWeather = vi.fn();

describe("WeatherForm", () => {
  test("should render WeatherForm component", () => {
    render(<WeatherForm setWeather={mockSetWeather} />);
    const form = screen.getByTestId("weather-form");
    expect(form).toBeInTheDocument();
  });
});
