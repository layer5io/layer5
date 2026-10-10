import React from 'react';
import { render } from '@testing-library/react';
import Counters from './index';

it.skip('Counters renders without crashing', () => {
  render(<Counters />);
});
