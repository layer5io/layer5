
import React from 'react';
import { shallow } from 'enzyme';
import RelatedPosts from './index';
it('Blog-sidebar renders without crashing', () => {
  shallow(<RelatedPosts />);
});