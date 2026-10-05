import React from 'react';
import { render } from '@testing-library/react';
import BookSinglePage from './index';

jest.mock('gatsby', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

jest.mock('../../../reusecore/PageHeader', () => ({
  __esModule: true,
  default: jest.fn(({ title }) => <h1>{title}</h1>),
}));

it('Book-single renders without crashing', () => {
  const mockData = {
    mdx: {
      frontmatter: {
        title: 'Test Book',
      },
    },
  };
  render(<BookSinglePage data={mockData}><div>Test content</div></BookSinglePage>);
});

