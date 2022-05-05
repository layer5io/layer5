
import React from 'react';
import { shallow } from 'enzyme';
import FaqClassic from './index';
it('Faq-classic renders without crashing', () => {
  shallow(<FaqClassic />);
});