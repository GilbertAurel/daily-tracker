/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import confused from 'assets/images/confused.webp';
import { COLORS, FONTS } from 'assets/theme';

interface Props {
  message: string;
}

const NotFoundMessage: React.FC<Props> = ({ message }) => {
  const styles = {
    container: css`
      grid-row: span 10;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
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
        src={confused}
        alt=""
        css={styles.character}
        data-testid="character-img"
      />
      <p css={styles.message} data-testid="message">
        {message}
      </p>
    </div>
  );
};

export default NotFoundMessage;
