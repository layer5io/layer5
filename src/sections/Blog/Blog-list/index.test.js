
import React from 'react';
import { shallow } from 'enzyme';
import BlogList from './index';
it('Blog-list renders without crashing', () => {
  shallow(<BlogList />);
});