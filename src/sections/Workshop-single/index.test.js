
import React from 'react';
import { shallow } from 'enzyme';
import WorkshopsSinglePage from './index';
it('Workshops-single renders without crashing', () => {
  shallow(<WorkshopsSinglePage />);
});
