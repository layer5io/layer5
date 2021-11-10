
import React from 'react';
import { shallow } from 'enzyme';
import RelatedTopics from './index';
it('Blog-sidebar renders without crashing', () => {
  shallow(<RelatedTopics />);
});