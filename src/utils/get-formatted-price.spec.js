import { getFormattedPrice } from './get-formatted-price';

describe('getFormattedPrice tests', () => {
  it('should return the correct formatted price when a price string is passed in', () => {
    // Arrange
    const fakePrice = 9375751;
    const expectedFormattedPrice = '$9,375,751';

    // Act
    const actual = getFormattedPrice(fakePrice);

    // Assert
    expect(actual).toBe(expectedFormattedPrice);
  });
});
