import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import WeatherCardItem from "../WeatherCardItem";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

describe("WeatherCardItem", () => {
  it("should render the WeatherCardItem component with given props", () => {
    render(
      <WeatherCardItem
        icon={WbSunnyOutlinedIcon}
        title="Temperature"
        value="22°C"
      />
    );

    expect(screen.getByText("Temperature")).toBeInTheDocument();
    expect(screen.getByText("22°C")).toBeInTheDocument();
    expect(screen.getByTestId("weather-card-item")).toBeInTheDocument();
  });

  it("should render the icon correctly", () => {
    render(
      <WeatherCardItem
        icon={WbSunnyOutlinedIcon}
        title="Humidity"
        value="80%"
      />
    );
    expect(
      screen.getByTestId("weather-card-item").querySelector("svg")
    ).toBeInTheDocument();
  });
});
