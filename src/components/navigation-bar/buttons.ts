import { Globe, Home, Layers, User } from 'assets/icons/components';

export type ButtonType = {
  id: string;
  label: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

export const buttons: ButtonType[] = [
  {
    id: 'home-btn',
    label: 'Home',
    Icon: Home
  },
  {
    id: 'community-btn',
    label: 'Community',
    Icon: Globe
  },
  {
    id: 'collection-btn',
    label: 'Collections',
    Icon: Layers
  },
  {
    id: 'profile-btn',
    label: 'Profile',
    Icon: User
  }
];

export default buttons;
