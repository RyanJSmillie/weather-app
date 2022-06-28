import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../components/App";
import forecast from "../data/forecast.json";

test("renders Weather App", () => {
  render(<App location={forecast.location} forecasts={forecast.forecasts} />);
  const h1Element = screen.getByText(/Manchester, UK/i);
  expect(h1Element).toBeInTheDocument();
});
