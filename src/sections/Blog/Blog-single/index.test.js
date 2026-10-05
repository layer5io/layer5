import React from 'react';
import { render } from '@testing-library/react';
import BlogSinglePage from './index';

it.skip('Blog-single renders without crashing', () => {
  render(<BlogSinglePage />);
});
