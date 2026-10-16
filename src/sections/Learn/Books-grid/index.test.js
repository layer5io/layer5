import React from 'react';
import { render } from '@testing-library/react';
import BookPage from './index';

it.skip('Books-grid renders without crashing', () => {
  render(<BookPage />);
});
