
import React from 'react';
import { shallow } from 'enzyme';
import Solutions from './index';
it('Blog-sidebar renders without crashing', () => {
  shallow(<Solutions />);
});