import React from 'react';
import { render } from '@testing-library/react';
import NewsPage from './index';

it.skip('News-grid renders without crashing', () => {
  render(<NewsPage />);
});
