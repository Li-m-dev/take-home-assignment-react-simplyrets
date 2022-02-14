import React from 'react';
import { render } from '@testing-library/react';
import PropertyListings from './PropertyListings';

describe('PropertyListings tests', () => {
  it('should render property lists', () => {
    // Arrange
    // Act
    const { container } = render(<PropertyListings />);

    // Assert
    expect(container).toMatchSnapshot();
  });

  //TODO: Add more tests here
});
