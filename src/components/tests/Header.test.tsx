import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

it("should render Header component", () => {
  render(<Header />);
  const header = screen.getByTestId("header");
  expect(header).toBeInTheDocument();
});

it("should display the correct header text", () => {
  render(<Header />);
  const headerText = screen.getByText(/Weather App/i);
  expect(headerText).toBeInTheDocument();
  expect(headerText).toBeVisible();
});

it("should have correct header text styles", () => {
  render(<Header />);
  const headerText = screen.getByText(/Weather App/i) as HTMLHeadingElement;

  expect(headerText).toHaveStyle({
    fontSize: "48px",
    letterSpacing: "2px",
  });
});

it("should render Container and Typography components", () => {
  render(<Header />);
  const container = screen.getByTestId("header");
  expect(container).toBeInTheDocument();

  const typography = container.querySelector("h1");
  expect(typography).toBeInTheDocument();
  expect(typography).toHaveTextContent(/Weather App/i);
});
