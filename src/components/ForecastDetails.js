import React from "react";
import PropTypes from "prop-types";

function ForecastDetails(props) {
  const { date, temperature, humidity, wind } = props;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__maxTemp">{temperature.max} &deg;C</div>
      <div className="forecast-details__minTemp">{temperature.min} &deg;C</div>
      <div className="forecast-details__humidity">{humidity}</div>
      <div className="forecast-details__windSpeed">{wind.speed}</div>
      <div className="forecast-details__windDirection">{wind.direction}</div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.shape({
    speed: PropTypes.number,
    direction: PropTypes.string,
  }).isRequired,
};
