import React from 'react';
import { shallow } from 'enzyme';
import NewsSingle from './index';
import * as Gatsby from 'gatsby';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
const mockUseStyledDarkMode = jest.fn();

jest.mock('../../../theme/app/useStyledDarkMode', () => ({
  useStyledDarkMode: () => ({ isDark: false }),
}));

describe('NewsSingle', () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => ({
      allMdx: {
        nodes: []
      }
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders "Originally published at" link when source_url is present', () => {
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

    const wrapper = shallow(<NewsSingle data={data} />);
    const link = wrapper.find('a[href="https://original.com"]');
    expect(link.exists()).toBe(true);
    expect(wrapper.text()).toContain('Originally published at');
  });

  it('does not render "Originally published at" link when source_url is missing', () => {
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

    const wrapper = shallow(<NewsSingle data={data} />);
    expect(wrapper.text()).not.toContain('Originally published at');
  });
});
