
import React from 'react';
import { shallow } from 'enzyme';
import ResourcePage from './index';
it('Resouce-grid renders without crashing', () => {
  shallow(<ResourcePage />);
});