import React from 'react';
import { render } from '@testing-library/react';
import News from './index';

it.skip('News renders without crashing', () => {
  render(<News />);
});
