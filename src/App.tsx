/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS } from 'assets/theme';
import React from 'react';
import Router from 'router';

const App: React.FC = () => {
  const styles = {
    container: css`
      min-height: 100vh;
      min-width: 100vw;
      background-color: ${COLORS.lightgray};
    `
  };

  return (
    <div css={styles.container}>
      <Router />
    </div>
  );
};

export default App;
