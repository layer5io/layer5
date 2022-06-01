
import React from 'react';
import { shallow } from 'enzyme';
import Features from './index';
it('Features renders without crashing', () => {
  shallow(<Features />);
});