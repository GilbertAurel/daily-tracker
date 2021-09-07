import { screen, render, fireEvent } from '@testing-library/react';
import HomeHeader from '../index';

it('should render home header with title and notification button', () => {
  render(<HomeHeader />);

  const notificationButton = screen.getByTestId('notification-btn');

  expect(screen.getByTestId('header-title')).toBeInTheDocument();
  expect(screen.getByTestId('indicator')).toBeInTheDocument();
  fireEvent.click(notificationButton);
});
