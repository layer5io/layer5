
import React from 'react';
import { shallow } from 'enzyme';
import FooterClassic from './index';
it('Footer-classic renders without crashing', () => {
  shallow(<FooterClassic />);
});