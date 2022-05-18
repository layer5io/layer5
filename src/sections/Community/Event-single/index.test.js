import React from 'react';
import { shallow } from 'enzyme';
import EventSinglePage from './index';
it('Event-single renders without crashing', () => {
  shallow(<EventSinglePage />);
});
