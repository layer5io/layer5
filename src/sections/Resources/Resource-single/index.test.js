
import React from 'react';
import { shallow } from 'enzyme';
import ResourceSinglePage from './index';
it('Resource-single renders without crashing', () => {
  shallow(<ResourceSinglePage />);
});