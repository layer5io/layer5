
import React from 'react';
import { shallow } from 'enzyme';
import BannerModern from './index';
it('Banner-modern renders without crashing', () => {
  shallow(<BannerModern />);
});