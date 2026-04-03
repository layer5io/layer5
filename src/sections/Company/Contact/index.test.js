
import React from 'react';
import { shallow } from 'enzyme';
import Contact from './index';
it('Contact renders without crashing', () => {
  shallow(<Contact />);
});