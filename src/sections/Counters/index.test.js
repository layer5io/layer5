
import React from 'react';
import { shallow } from 'enzyme';
import Counters from './index';
it('Counters renders without crashing', () => {
  shallow(<Counters />);
});