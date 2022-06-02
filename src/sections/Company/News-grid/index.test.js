
import React from 'react';
import { shallow } from 'enzyme';
import NewsPage from './index';
it('News-grid renders without crashing', () => {
  shallow(<NewsPage />);
});
