import React from 'react';
import { render } from '@testing-library/react';
import NewsSinglePage from './index';

it.skip('News-single renders without crashing', () => {
  render(<NewsSinglePage />);
});
