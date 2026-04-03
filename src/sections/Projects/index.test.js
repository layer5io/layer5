
import React from 'react';
import { shallow } from 'enzyme';
import Projects from './index';
it('Integrations renders without crashing', () => {
  shallow(<Projects />);
});