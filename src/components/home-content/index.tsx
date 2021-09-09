/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import grow from 'assets/images/grow.webp';
import { COLORS, FONTS } from 'assets/theme';

const HomeContent: React.FC = () => {
  const styles = {
    container: css`
      grid-row: span 8;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
    character: css`
      width: 17.2rem;
      object-fit: cover;
    `,
    message: css`
      width: 36ch;
      text-align: center;
      color: ${COLORS.black};
      ${FONTS.body}
    `
  };

  return (
    <div css={styles.container}>
      <img
        src={grow}
        alt=""
        css={styles.character}
        data-testid="character-img"
      />
      <p css={styles.message} data-testid="message">
        You have no collections yet, try create a new one by pressing + button
        below.
      </p>
    </div>
  );
};

export default HomeContent;
