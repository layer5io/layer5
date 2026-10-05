import React from 'react';
import { render } from '@testing-library/react';
import Kanvas from './index';

jest.mock('./kanvas-collaborate-banner', () => {
  return jest.fn(() => <div>MockKanvasCollaborateBanner</div>);
});

jest.mock('./collaboration-feature-team', () => {
  return jest.fn(() => <div>MockCollaborationFeatureTeam</div>);
});

jest.mock('./collaboration-feature-work', () => {
  return jest.fn(() => <div>MockCollaborationFeatureWork</div>);
});

jest.mock('../../Pricing/review-slider', () => {
  return jest.fn(() => <div>MockReviews</div>);
});

it('Kanvas-collaborate renders without crashing', () => {
  render(<Kanvas />);
});

