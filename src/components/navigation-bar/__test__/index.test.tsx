import { screen, render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../index';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

it('should render navbar with 4 buttons', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const homeBtn = screen.getByTestId('home-btn');
  const communityBtn = screen.getByTestId('community-btn');
  const collectionBtn = screen.getByTestId('collection-btn');
  const profileBtn = screen.getByTestId('profile-btn');

  fireEvent.click(homeBtn);
  fireEvent.click(communityBtn);
  fireEvent.click(collectionBtn);
  fireEvent.click(profileBtn);

  expect(mockHistoryPush).toBeCalledTimes(4);
});
