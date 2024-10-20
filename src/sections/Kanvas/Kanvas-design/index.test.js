
import React from 'react';
import { shallow } from 'enzyme';
import Kanvas from './index';
it('Blog-sidebar renders without crashing', () => {
  shallow(<Kanvas />);
});