
import React from 'react';
import { shallow } from 'enzyme';
import Meshmap from './index';
it('Blog-sidebar renders without crashing', () => {
  shallow(<Meshmap />);
});