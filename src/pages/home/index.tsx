/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import Layout from 'layout/mobile';
import HomeHeader from 'components/home-header';
import { COLORS } from 'assets/theme';

const HomePage: React.FC = () => {
  const styles = {
    container: css`
      padding-top: 2.5rem;
      display: grid;
      grid-auto-rows: 5rem;
      background-color: ${COLORS.white};
    `
  };
  return (
    <Layout>
      <div css={styles.container}>
        <HomeHeader />
      </div>
    </Layout>
  );
};

export default HomePage;
