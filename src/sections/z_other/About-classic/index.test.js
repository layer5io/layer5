
import React from 'react';
import { shallow } from 'enzyme';
import AboutClassic from './index';
it('About-Classic renders without crashing', () => {
  shallow(<AboutClassic />);
});