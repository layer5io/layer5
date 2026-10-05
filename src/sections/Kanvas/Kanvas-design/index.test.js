import React from 'react';
import { render } from '@testing-library/react';
import Kanvas from './index';

jest.mock('./kanvas-design-banner', () => {
  return jest.fn(() => <div>MockKanvasDesignBanner</div>);
});

jest.mock('./kanvas-design-hero', () => {
  return jest.fn(() => <div>MockKanvasHeroSection</div>);
});

jest.mock('./kanvas-design-integrations', () => {
  return jest.fn(() => <div>MockKanvasIntegrationsSection</div>);
});

jest.mock('./Kanvas_Mobile_swiper/KanvasMobileSwiper', () => {
  return jest.fn(() => <div>MockKanvasMobileSwiper</div>);
});

jest.mock('./kanvas-design-features-carousel', () => {
  return jest.fn(() => <div>MockKanvasDesignFeatureCarousel</div>);
});

jest.mock('../../Pricing/review-slider', () => {
  return jest.fn(() => <div>MockReviews</div>);
});

it('Kanvas-design renders without crashing', () => {
  render(<Kanvas />);
});

