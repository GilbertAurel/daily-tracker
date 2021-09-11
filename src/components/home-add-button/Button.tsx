/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { Plus } from 'assets/icons/components';
import { COLORS, SIZES } from 'assets/theme';

interface Props {
  openSubMenu: boolean;
  toggleSubMenu: <T>(newValue: T) => void;
}

const HomeAddButton: React.FC<Props> = ({ openSubMenu, toggleSubMenu }) => {
  const styles = {
    button: css`
      height: 3rem;
      width: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${openSubMenu ? COLORS.secondary : COLORS.primary};
      border: none;
      border-radius: 0.75rem;

      :active {
        transform: scale(0.9);
      }
    `,
    icon: css`
      height: ${SIZES.icon};
      width: ${SIZES.icon};
      color: ${openSubMenu ? COLORS.primary : COLORS.white};
      transform: ${openSubMenu ? 'rotate(45deg)' : 'rotate(0deg)'};
      transition: transform 0.3s ease;
    `
  };

  return (
    <button
      css={styles.button}
      type="button"
      onClick={toggleSubMenu}
      data-testid="add-btn"
    >
      <Plus css={styles.icon} />
    </button>
  );
};

export default HomeAddButton;
