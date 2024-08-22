import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";

it("should render Footer component", () => {
  render(<Footer />);
  const footer = screen.getByTestId("footer");
  expect(footer).toBeInTheDocument();
});

it("should display the copyright text", () => {
  render(<Footer />);
  const copyrightText = screen.getByText(
    /© 2024 Alexandre Debortoli de Souza/i
  );
  expect(copyrightText).toBeInTheDocument();
});

it("should render GitHub and LinkedIn icons with correct links", () => {
  render(<Footer />);

  const githubIcon = screen.getByLabelText(/GitHub/i);
  const linkedinIcon = screen.getByLabelText(/LinkedIn/i);

  expect(githubIcon).toBeInTheDocument();
  expect(linkedinIcon).toBeInTheDocument();

  expect(githubIcon.closest("a")).toHaveAttribute(
    "href",
    "https://github.com/alexandredebortoli"
  );
  expect(linkedinIcon.closest("a")).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/alexandredds/"
  );
});
