import "../styles/App.css";
import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationsDetails";
import ForecastSummaries from "./ForecastSummaries";

function App({ location, forecasts }) {
  const { city, country } = location;
  // const { date, temperature, description, icon } = forecasts;
  return (
    <div className="App">
      <h1 className="header">Weather App</h1>
      <LocationDetails city={city} country={country} />
      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.shape({
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
  }).isRequired,
};

export default App;
