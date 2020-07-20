
import React from 'react';
import { shallow } from 'enzyme';
import BannerClassic from './index';
it('Banner-classic renders without crashing', () => {
  shallow(<BannerClassic />);
});