import { getBathCount } from './get-bath-count';

describe('getBathCount tests', () => {
  it('should return the correct total bathroom count with both bathsFull and bathsHalf count', () => {
    // Arrange
    const fakeBathsFull = 2;
    const fakeBathsHalf = 3;

    // Act
    const actual = getBathCount(fakeBathsFull, fakeBathsHalf);

    // Assert
    expect(actual).toBe(3.5);
  });

  it('should return bathsFull count when only bathsFull is defined', () => {
    // Arrange
    const fakeBathsFull = 2;
    const fakeBathsHalf = null;

    // Act
    const actual = getBathCount(fakeBathsFull, fakeBathsHalf);

    // Assert
    expect(actual).toBe(2);
  });

  it('should return bathsHalf count when only bathsHalf is defined', () => {
    // Arrange
    const fakeBathsFull = undefined;
    const fakeBathsHalf = 5;

    // Act
    const actual = getBathCount(fakeBathsFull, fakeBathsHalf);

    // Assert
    expect(actual).toBe(2.5);
  });
});
