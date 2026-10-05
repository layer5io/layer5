import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsSingle from './index';
import * as Gatsby from 'gatsby';

jest.mock('gatsby', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
  useStaticQuery: jest.fn(),
  graphql: jest.fn(),
}));

jest.mock('../../../theme/app/useStyledDarkMode', () => ({
  useStyledDarkMode: () => ({ isDark: false }),
}));

jest.mock('../../../reusecore/PageHeader', () => ({
  __esModule: true,
  default: jest.fn(({ children }) => <div>{children}</div>),
}), { virtual: true });

jest.mock('../../../components/image', () => ({
  __esModule: true,
  default: jest.fn(() => <div>MockImage</div>),
}), { virtual: true });

jest.mock('simple-react-lightbox', () => ({
  SRLWrapper: jest.fn(({ children }) => <div>{children}</div>),
}), { virtual: true });

jest.mock('../../../components/Related-Posts', () => {
  return jest.fn(() => <div>RelatedPosts</div>);
}, { virtual: true });

jest.mock('./Sidebar', () => {
  return jest.fn(() => <div>Sidebar</div>);
}, { virtual: true });

describe('NewsSingle', () => {
  beforeEach(() => {
    Gatsby.useStaticQuery.mockImplementation(() => ({
      allMdx: {
        nodes: []
      }
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders "Originally published on" link when source_url is present', () => {
    const data = {
      mdx: {
        frontmatter: {
          title: 'Test',
          source_url: 'https://original.com',
          author: 'Me',
          date: '2023-01-01'
        },
        fields: { slug: '/test' }
      }
    };

    render(<NewsSingle data={data} />);
    const link = screen.getByRole('link', { name: /Me/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://original.com');
    expect(screen.getByText(/Originally published on/i)).toBeInTheDocument();
  });

  it('does not render "Originally published on" link when source_url is missing', () => {
    const data = {
      mdx: {
        frontmatter: {
            title: 'Test',
          author: 'Me',
          date: '2023-01-01'
        },
        fields: { slug: '/test' }
      }
    };

    render(<NewsSingle data={data} />);
    expect(screen.queryByText(/Originally published on/i)).not.toBeInTheDocument();
  });

  it('does not render "Read the full article on" (eurl) when source_url is present', () => {
    const data = {
      mdx: {
        frontmatter: {
          title: 'Test',
          source_url: 'https://original.com',
          eurl: 'https://eurl.com',
          author: 'Me',
          date: '2023-01-01'
        },
        fields: { slug: '/test' }
      }
    };

    render(<NewsSingle data={data} />);
    expect(screen.getByText(/Originally published on/i)).toBeInTheDocument();
    expect(screen.queryByText(/Read the full article on/i)).not.toBeInTheDocument();
  });
});
