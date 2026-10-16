import React from 'react';
import { render } from '@testing-library/react';
import BannerDefault from './index';

it.skip('Banner-default renders without crashing', () => {
  render(<BannerDefault />);
});
