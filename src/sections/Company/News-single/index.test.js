
import React from 'react';
import { shallow } from 'enzyme';
import NewsSinglePage from './index';
it('News-single renders without crashing', () => {
  shallow(<NewsSinglePage />);
});
