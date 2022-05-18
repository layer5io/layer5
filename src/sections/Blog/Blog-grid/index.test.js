
import React from 'react';
import { shallow } from 'enzyme';
import BlogPage from './index';
it('Blog-grid renders without crashing', () => {
  shallow(<BlogPage />);
});