import { screen, render, fireEvent } from '@testing-library/react';
import HomeAddButton from '../index';

it('should render add button', () => {
  render(<HomeAddButton />);

  const addButton = screen.getByTestId('add-btn');
  fireEvent.click(addButton);
});
