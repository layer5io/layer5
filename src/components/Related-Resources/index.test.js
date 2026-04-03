
import React from 'react';
import { shallow } from 'enzyme';
import RelatedResources from './index';
it('Blog-sidebar renders without crashing', () => {
  shallow(<RelatedResources />);
});