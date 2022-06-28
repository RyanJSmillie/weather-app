import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../components/App";
import forecast from "../data/forecast.json";

test("renders Weather App title", () => {
  render(<App location={forecast.location} />);
  const appTitle = screen.getByText("Weather App");
  const h1Element = screen.getByText(/Manchester, UK/i);
  expect(appTitle).toBeInTheDocument();
  expect(h1Element).toBeInTheDocument();
});
