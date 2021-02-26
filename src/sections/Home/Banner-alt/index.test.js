
import React from 'react';
import { shallow } from 'enzyme';
import BannerAlt from './index';
it('Banner-default renders without crashing', () => {
  shallow(<BannerAlt />);
});