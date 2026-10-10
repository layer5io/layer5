import React from 'react';
import { render } from '@testing-library/react';
import Kanvas from './index';

jest.mock('./kanvas-visualize-banner', () => {
  return jest.fn(() => <div>MockKanvasVisualizeBanner</div>);
});

jest.mock('./kanvas-visualize-features', () => {
  return jest.fn(() => <div>MockKanvasVisualizerFeatures</div>);
});

jest.mock('./kanvas-visualize-views', () => {
  return jest.fn(() => <div>MockKanvasVisualizerViews</div>);
});

jest.mock('../../Pricing/review-slider', () => {
  return jest.fn(() => <div>MockReviews</div>);
});

jest.mock('../../Kanvas/Kanvas-design/kanvas-design-hero', () => {
  return jest.fn(() => <div>MockKanvasHeroSection</div>);
});

jest.mock('../../Home/MeshmapDesignHighlight/index.js', () => {
  return jest.fn(() => <div>MockDesignDefault</div>);
});

it('Kanvas-visualize renders without crashing', () => {
  render(<Kanvas />);
});

