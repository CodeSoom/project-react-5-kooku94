import { render } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
  const renderHome = () => render(<Home />);

  it('Home 타이틀을 볼 수 있다.', () => {
    const { container } = renderHome();

    expect(container).toHaveTextContent('Home');
  });

  it('사진들을 볼 수 있다.', () => {
    const { container } = renderHome();

    expect(container).toContainHTML('<img');
  });
});
