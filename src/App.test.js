import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Weather App title', () => {
  render(<App />);
  const appTitle = screen.getByText("Weather App");
  expect(appTitle).toBeInTheDocument();
});
