/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const MobileLayout: React.FC<Props> = ({ children }) => {
  const styles = {
    container: css`
      min-height: 100vh;
      padding: 0 1.5rem;
      background-color: #fff;

      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      scrollbar-width: none;

      ::-webkit-scrollbar {
        display: none;
      }

      @media (min-width: 480px) {
        min-height: 100vh;
        width: 480px;
        margin: auto;
      }
    `
  };
  return <div css={styles.container}>{children}</div>;
};

export default MobileLayout;
