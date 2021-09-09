/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import Layout from 'layout/mobile';
import HomeHeader from 'components/home-header';
import { COLORS } from 'assets/theme';
import HomeContent from 'components/home-content';
import HomeAddButton from 'components/home-add-button';

const HomePage: React.FC = () => {
  const styles = {
    container: css`
      min-height: 100vh;
      display: grid;
      grid-auto-rows: 5rem;
      background-color: ${COLORS.white};
    `
  };

  return (
    <Layout>
      <div css={styles.container}>
        <HomeHeader />
        <HomeContent />
        <HomeAddButton />
      </div>
    </Layout>
  );
};

export default HomePage;
