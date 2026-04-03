
import React from 'react';
import { shallow } from 'enzyme';
import Banner3 from './index';
it('Banner-default renders without crashing', () => {
  shallow(<Banner3 />);
});