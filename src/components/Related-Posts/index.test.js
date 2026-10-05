import React from 'react';
import { render } from '@testing-library/react';
import RelatedPosts from './index';

it.skip('Blog-sidebar renders without crashing', () => {
  render(<RelatedPosts />);
});
