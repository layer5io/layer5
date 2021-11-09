
import React from 'react';
import { shallow } from 'enzyme';
import TopicSinglePage from './index';
it('Topic-single renders without crashing', () => {
  shallow(<TopicSinglePage />);
});