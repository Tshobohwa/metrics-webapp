import React from 'react';
import { render } from '@testing-library/react';
import HomeHeader from '../components/HomeHeader';

describe('HomeHeader', () => {
  it('renders the header image and title', () => {
    const { getByAltText, getByText } = render(<HomeHeader />);
    const earthImage = getByAltText('earth map');
    const title = getByText('AIR POLLUTION ALERT');
    expect(earthImage).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
