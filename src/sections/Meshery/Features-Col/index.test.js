
import React from 'react';
import { shallow } from 'enzyme';
import Pricing from './index';
it('Pricing renders without crashing', () => {
  shallow(<Pricing />);
});