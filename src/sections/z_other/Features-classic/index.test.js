
import React from 'react';
import { shallow } from 'enzyme';
import FeaturesClassic from './index';
it('Features-classic renders without crashing', () => {
  shallow(<FeaturesClassic />);
});