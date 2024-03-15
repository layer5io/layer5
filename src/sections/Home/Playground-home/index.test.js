
import React from 'react';
import { shallow } from 'enzyme';
import Projects from './index';
it('Playground-home section renders without crashing', () => {
  shallow(<Projects />);
});