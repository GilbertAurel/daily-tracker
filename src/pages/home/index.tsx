/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import Layout from 'layout/mobile';

const HomePage: React.FC = () => {
  const styles = {
    container: css``
  };
  return (
    <Layout>
      <div css={styles.container}>test</div>;
    </Layout>
  );
};

export default HomePage;
