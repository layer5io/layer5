import React from 'react';
import { render } from '@testing-library/react';
import BannerDefault from './index';

jest.mock('gatsby-plugin-image', () => ({
  StaticImage: jest.fn(() => <div>MockStaticImage</div>),
}));

it('Banner-default renders without crashing', () => {
  render(<BannerDefault />);
});
