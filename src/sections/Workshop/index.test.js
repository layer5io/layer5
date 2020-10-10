
import React from 'react';
import { shallow } from 'enzyme';
import Workshop from './index';
it('Workshops renders without crashing', () => {
  shallow(<Workshop />);
});