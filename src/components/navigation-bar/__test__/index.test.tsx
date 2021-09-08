import { screen, render, fireEvent } from '@testing-library/react';
import Navbar from '../index';

it('should render navbar with 4 buttons', () => {
  render(<Navbar />);

  const homeBtn = screen.getByTestId('home-btn');
  const communityBtn = screen.getByTestId('community-btn');
  const collectionBtn = screen.getByTestId('collection-btn');
  const profileBtn = screen.getByTestId('profile-btn');

  fireEvent.click(homeBtn);
  fireEvent.click(communityBtn);
  fireEvent.click(collectionBtn);
  fireEvent.click(profileBtn);
});
