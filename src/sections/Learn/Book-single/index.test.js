import React from 'react';
import { shallow } from 'enzyme';
import BookSinglePage from './index';
it('Book-single renders without crashing', () => {
  shallow(<BookSinglePage />);
});
