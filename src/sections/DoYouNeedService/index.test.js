import React from 'react';
import { render } from '@testing-library/react';
import DoYouNeedService from './index';

it.skip('Blog-sidebar renders without crashing', () => {
  render(<DoYouNeedService />);
});
