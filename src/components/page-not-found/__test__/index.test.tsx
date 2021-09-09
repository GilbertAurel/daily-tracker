import { screen, render } from '@testing-library/react';
import NotFoundMessage from '../index';

it('should render not found message with character and message', () => {
  render(<NotFoundMessage />);

  expect(screen.getByTestId('character-img')).toBeInTheDocument();
  expect(screen.getByTestId('message')).toBeInTheDocument();
});
