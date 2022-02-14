import { render } from '@testing-library/react';
import App from './App';
import React from 'react';

it('should render', () => {
  // Act
  const { container } = render(<App />);

  // Assert
  expect(container).toMatchSnapshot();
});
