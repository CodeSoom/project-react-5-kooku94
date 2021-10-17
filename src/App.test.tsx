import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Beans', () => {
  render(<App />);
  const linkElement = screen.getByText(/Beans/i);
  expect(linkElement).toBeInTheDocument();
});
