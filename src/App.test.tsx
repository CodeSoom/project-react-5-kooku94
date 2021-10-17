import { render, screen } from '@testing-library/react';

import App from './App';

test('renders Beans', () => {
  render(<App />);
  const Beans = screen.getByText(/Beans/i);
  expect(Beans).not.toBeUndefined();
});
