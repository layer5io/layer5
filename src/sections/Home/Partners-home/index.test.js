
import React from 'react';
import { shallow } from 'enzyme';
import Partners from './index';
it('Integrations renders without crashing', () => {
  shallow(<Partners />);
});