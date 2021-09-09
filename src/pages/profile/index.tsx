/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import Layout from 'layout/mobile';
import { COLORS } from 'assets/theme';
import NotFoundMessage from 'components/page-not-found';

const ProfilePage: React.FC = () => {
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
        <NotFoundMessage message="User profile page is currently under development!" />
      </div>
    </Layout>
  );
};

export default ProfilePage;
