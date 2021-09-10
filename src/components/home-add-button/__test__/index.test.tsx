import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import HomeAddButton from '../index';

it('should render add button', () => {
  render(<HomeAddButton />);

  const addButton = screen.getByTestId('add-btn');
  fireEvent.click(addButton);
});

it('should show sub menu after button click', async () => {
  render(<HomeAddButton />);

  const addButton = screen.getByTestId('add-btn');
  waitFor(() => fireEvent.click(addButton));
  expect(screen.queryAllByTestId('sub-menu')).toHaveLength(1);
});
