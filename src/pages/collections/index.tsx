/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import Layout from 'layout/mobile';
import { COLORS } from 'assets/theme';

const CollectionsPage: React.FC = () => {
  const styles = {
    container: css`
      display: grid;
      grid-auto-rows: 5rem;
      background-color: ${COLORS.white};
    `
  };
  return (
    <Layout>
      <div css={styles.container}>profile page</div>
    </Layout>
  );
};

export default CollectionsPage;
