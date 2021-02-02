
import React from 'react';
import { shallow } from 'enzyme';
import GetApp from './index';
it('GetApp renders without crashing', () => {
  shallow(<GetApp />);
});