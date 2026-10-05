import React from 'react';
import { render } from '@testing-library/react';
import Contact from './index';

jest.mock('../../../reusecore/PageHeader', () => ({
  __esModule: true,
  default: jest.fn(({ title, subtitle }) => (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )),
}));

jest.mock('../../../components/Card-Outline', () => ({
  __esModule: true,
  default: jest.fn(({ title, content }) => (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )),
}));

jest.mock('../../../components/CommonForm', () => ({
  __esModule: true,
  default: jest.fn(() => <div>MockCommonForm</div>),
}));

it('Contact renders without crashing', () => {
  render(<Contact />);
});
