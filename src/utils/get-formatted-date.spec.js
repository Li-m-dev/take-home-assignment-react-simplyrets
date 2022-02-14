import { getFormattedDate } from './get-formatted-date';

describe('getFormattedDate tests', () => {
  it('should return the correct formatted date when a date string is passed in', () => {
    // Arrange
    const fakeDateString = '2015-01-10T00:35:54.030847Z';
    const expectedDate = '1/10/2015';

    // Act
    const actual = getFormattedDate(fakeDateString);

    // Assert
    expect(actual).toBe(expectedDate);
  });
});
