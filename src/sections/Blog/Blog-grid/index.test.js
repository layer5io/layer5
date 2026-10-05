import React from 'react';
import { render } from '@testing-library/react';
import BlogPage from './index';

it.skip('Blog-grid renders without crashing', () => {
  render(<BlogPage />);
});
