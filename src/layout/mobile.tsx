/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS } from 'assets/theme';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const MobileLayout: React.FC<Props> = ({ children }) => {
  const styles = {
    container: css`
      min-height: 100vh;
      min-width: 100vw;
      padding: 0 1.5rem;
      background-color: ${COLORS.white};

      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      scrollbar-width: none;

      ::-webkit-scrollbar {
        display: none;
      }
    `
  };
  return <div css={styles.container}>{children}</div>;
};

export default MobileLayout;
