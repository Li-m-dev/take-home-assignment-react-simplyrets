const onToggleFavMock = jest.fn();

import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import PropertyCard from './PropertyCard';
import * as PropertyCardRoot from './PropertyCard';

const mockProps = {
  address: {
    streetNumberText: '111',
    streetName: 'Santa Fe',
    city: 'Houston',
    state: 'TX',
  },
  photos: 'test',
  property: { bedrooms: 4, bathsFull: 3, bathsHalf: 1, area: 2210 },
  listPrice: 300000,
  listDate: '1994-10-25T13:58:17.284009Z',
  mlsId: 123,
  isSavedFav: false,
  onToggleFav: onToggleFavMock,
};

describe('PropertyCard tests', () => {
  it('should render property card', () => {
    // Act
    const { container } = render(<PropertyCard {...mockProps} />);

    // Assert
    expect(container).toMatchSnapshot();
  });

  it('should call toggleFav on click', () => {
    // Arrange

    // const temp = jest.spyOn(PropertyCardRoot, 'toggleFav');
    // Act
    const { container, getByTestId } = render(<PropertyCard {...mockProps} />);
    const heartIcon = getByTestId('heartIcon');
    fireEvent.click(heartIcon);

    // Assert
    expect(container).toMatchSnapshot();
    // expect(temp).toHaveBeenCalledTimes(1);
    expect(onToggleFavMock).toHaveBeenCalledTimes(1);
  });
});
