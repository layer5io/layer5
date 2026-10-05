import React from 'react';
import { render } from '@testing-library/react';
import About from './index';

jest.mock('gatsby-plugin-image', () => ({
  StaticImage: jest.fn(() => <div>MockStaticImage</div>),
}));

jest.mock('gatsby', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

jest.mock('../Layer5-statement', () => {
  return jest.fn(() => <div>MockStatement</div>);
});

jest.mock('../WhoWeAre', () => {
  return jest.fn(() => <div>MockWhoWeAre</div>);
});

it('About renders without crashing', () => {
  render(<About />);
});
