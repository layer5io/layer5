
import React from 'react';
import { shallow } from 'enzyme';
import SeideBar from './index';
it('Blog-sidebar renders without crashing', () => {
  shallow(<SeideBar />);
});