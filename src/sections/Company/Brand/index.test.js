import React from 'react';
import { render } from '@testing-library/react';
import BrandPage from './index';

it.skip('Brand renders without crashing', () => {
  render(<BrandPage />);
});
