import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('render Bean', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Bean');
  });
});
