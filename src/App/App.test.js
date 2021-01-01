import React from 'react';
import { render } from '@testing-library/react';

import App from './index';

describe('App', () => {
  it('should match snapshot', () => {
    const container = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
