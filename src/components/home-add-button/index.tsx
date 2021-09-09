/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Plus } from 'assets/icons/components';
import { COLORS, SIZES } from 'assets/theme';
import React from 'react';

const HomeAddButton: React.FC = () => {
  const styles = {
    button: css`
      height: 3rem;
      width: 3rem;
      position: absolute;
      right: 1.5rem;
      bottom: 8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${COLORS.primary};
      border: none;
      border-radius: 0.75rem;
    `,
    icon: {
      height: SIZES.icon,
      width: SIZES.icon,
      color: COLORS.white
    }
  };

  return (
    <button css={styles.button} type="button" data-testid="add-btn">
      <Plus {...styles.icon} />
    </button>
  );
};

export default HomeAddButton;
