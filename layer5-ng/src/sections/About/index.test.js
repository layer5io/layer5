
import React from 'react';
import { shallow } from 'enzyme';
import About from './index';
it('About renders without crashing', () => {
  shallow(<About />);
});