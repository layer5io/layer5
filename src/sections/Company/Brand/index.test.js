import React from 'react';
import { render } from '@testing-library/react';
import BrandPage from './index';

jest.mock('@loadable/component', () => {
  return () => () => <div>MockLoadable</div>;
});

jest.mock('@react-icons/all-files/fi/FiDownloadCloud', () => {
  return () => <div>MockIcon</div>;
});

it('Brand renders without crashing', () => {
  render(<BrandPage />);
});
