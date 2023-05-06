import React from 'react';
import { render } from '@testing-library/react';
import LoadingSpinner from '../components/LoadingSpinner';

describe('LoadingSpinner', () => {
  test('renders correctly', () => {
    const { container } = render(<LoadingSpinner />);
    expect(container.firstChild).toHaveClass('spinner-container');
    expect(container.firstChild.firstChild).toHaveClass('spinner');
  });
});
