
import React from 'react';
import { shallow } from 'enzyme';
import BlogSinglePage from './index';
it('Blog-single renders without crashing', () => {
  shallow(<BlogSinglePage />);
});