import { render, screen } from "@testing-library/react";
import App from "./App";

it("should render App component", () => {
  render(<App />);
  const message = screen.queryByText(/Weather App/i);
  expect(message).toBeVisible();
});

it("should render WeatherForm component", () => {
  render(<App />);
  const weatherForm = screen.getByTestId("weather-form");
  expect(weatherForm).toBeInTheDocument();
});

it("should render SkeletonLoader component when weather is null", () => {
  render(<App />);
  const skeletonLoader = screen.getByTestId("skeleton-loader");
  expect(skeletonLoader).toBeInTheDocument();
});
it("should render Header component", () => {
  render(<App />);
  const header = screen.getByTestId("header");
  expect(header).toBeInTheDocument();
});
it("should render Footer component", () => {
  render(<App />);
  const footer = screen.getByTestId("footer");
  expect(footer).toBeInTheDocument();
});
