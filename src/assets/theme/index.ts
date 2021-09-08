import { css } from '@emotion/react';

export const COLORS = {
  primary: '#5285EA',
  secondary: '#DEE9FF',

  white: '#ffffff',
  gray: '#878787',
  lightgray: '#EFEFEF',
  black: '#353642',

  notification: '#FF5252',
  success: '#75CD66',
  failed: '#B86161'
};

export const FONTS = {
  h1: css`
    margin: 0;
    padding: 0;
    font-size: 2.5rem;
    font-family: 'Roboto', sans-serif;
  `,
  h2: css`
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
  `,
  subtitle: css`
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
  `,
  body: css`
    font-size: 0.75rem;
    font-family: 'Roboto', sans-serif;
  `,
  button: css`
    margin: 0;
    padding: 0;
    font-size: 0.5rem;
    font-family: 'Roboto', sans-serif;
  `,
  preTitle: css`
    font-size: 0.5rem;
    font-family: 'Roboto', sans-serif;
  `
};

export const SIZES = {
  icon: '24px',
  iconSmall: '16px'
};
