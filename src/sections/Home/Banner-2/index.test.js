
import React from 'react';
import { shallow } from 'enzyme';
import Banner2 from './index';
it('Banner-default renders without crashing', () => {
  shallow(<Banner2 />);
});