import { screen, render } from '@testing-library/react';
import HomeContent from '../index';

it('should render home content with no collection message', () => {
  render(<HomeContent />);

  expect(screen.getByTestId('character-img')).toBeInTheDocument();
  expect(screen.getByTestId('message')).toBeInTheDocument();
});
