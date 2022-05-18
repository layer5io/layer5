
import React from 'react';
import { shallow } from 'enzyme';
import News from './index';
it('News renders without crashing', () => {
  shallow(<News />);
});