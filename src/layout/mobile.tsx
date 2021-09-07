/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const MobileLayout: React.FC<Props> = ({ children }) => {
  const styles = {
    container: css``
  };
  return <div css={styles.container}>{children}</div>;
};

export default MobileLayout;
