
import React from 'react';
import { shallow } from 'enzyme';
import TopicPage from './index';
it('Topic-grid renders without crashing', () => {
  shallow(<TopicPage />);
});