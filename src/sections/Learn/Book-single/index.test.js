import React from 'react';
import { render } from '@testing-library/react';
import BookSinglePage from './index';

it.skip('Book-single renders without crashing', () => {
  render(<BookSinglePage />);
});
