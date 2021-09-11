/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { COLORS, FONTS, SIZES } from 'assets/theme';
import { Bell } from 'assets/icons/components';

const HomeHeader: React.FC = () => {
  const styles = {
    container: css`
      align-self: flex-end;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    title: css`
      ${FONTS.h2}
    `,
    button: css`
      height: 2.5rem;
      width: 2.5rem;
      position: relative;
      border: none;
      border-radius: 5px;
      background-color: ${COLORS.lightgray};
    `,
    bellIcon: css`
      height: ${SIZES.icon};
      width: ${SIZES.icon};
    `,
    indicator: css`
      height: 0.5rem;
      width: 0.5rem;
      position: absolute;
      top: 25%;
      right: 25%;
      border-radius: 0.25rem;
      background-color: ${COLORS.notification};
    `
  };

  return (
    <div css={styles.container}>
      <h2 css={styles.title} data-testid="header-title">
        Flashcards
      </h2>
      <button css={styles.button} type="button" data-testid="notification-btn">
        <Bell css={styles.bellIcon} />
        <div css={styles.indicator} data-testid="indicator" />
      </button>
    </div>
  );
};

export default HomeHeader;
