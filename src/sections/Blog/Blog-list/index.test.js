import React from 'react';
import { render } from '@testing-library/react';
import BlogList from './index';

it.skip('Blog-list renders without crashing', () => {
  render(<BlogList />);
});
