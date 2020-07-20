
import React from 'react';
import { shallow } from 'enzyme';
import Integrations from './index';
it('Integrations renders without crashing', () => {
  shallow(<Integrations />);
});