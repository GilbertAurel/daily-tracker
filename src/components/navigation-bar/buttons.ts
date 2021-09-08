import { Globe, Home, Layers, User } from 'assets/icons/components';

export type ButtonType = {
  id: string;
  label: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  path: string;
};

export const buttons: ButtonType[] = [
  {
    id: 'home-btn',
    label: 'Home',
    Icon: Home,
    path: ''
  },
  {
    id: 'community-btn',
    label: 'Community',
    Icon: Globe,
    path: 'community'
  },
  {
    id: 'collection-btn',
    label: 'Collections',
    Icon: Layers,
    path: 'collections'
  },
  {
    id: 'profile-btn',
    label: 'Profile',
    Icon: User,
    path: 'c'
  }
];

export default buttons;
