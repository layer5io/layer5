
import React from 'react';
import { shallow } from 'enzyme';
import BannerDefault from './index';
it('Banner-default renders without crashing', () => {
  shallow(<BannerDefault />);
});