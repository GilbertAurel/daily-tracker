/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';
import { Layers, Plus } from 'assets/icons/components';
import { COLORS, FONTS, SIZES } from 'assets/theme';

const HomeAddButton: React.FC = () => {
  const [subMenu, setSubMenu] = useState(false);

  const toggleSubMenu = () => setSubMenu(!subMenu);

  const styles = {
    container: css`
      position: absolute;
      right: 1.5rem;
      bottom: 8rem;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.25rem;
    `,
    button: css`
      height: 3rem;
      width: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${subMenu ? COLORS.secondary : COLORS.primary};
      border: none;
      border-radius: 0.75rem;

      :active {
        transform: scale(0.9);
      }
    `,
    subButton: css`
      padding: 0.75rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      background-color: ${COLORS.primary};
      border: none;
      border-radius: 0.75rem;

      p {
        margin: 0;
        padding: 0;
        color: ${COLORS.white};
        ${FONTS.body}
      }

      :active {
        transform: scale(0.9);
      }
    `,
    icon: css`
      height: ${SIZES.icon};
      width: ${SIZES.icon};
      color: ${subMenu ? COLORS.primary : COLORS.white};
      transform: ${subMenu ? 'rotate(45deg)' : 'rotate(0deg)'};
      transition: transform 0.3s ease;
    `,
    subIcon: css`
      height: ${SIZES.iconSmall};
      width: ${SIZES.iconSmall};
      color: ${COLORS.white};
    `
  };

  return (
    <div css={styles.container}>
      {subMenu && (
        <button css={styles.subButton} type="button" data-testid="sub-menu">
          <Layers css={styles.subIcon} />
          <p>create new</p>
        </button>
      )}
      <button
        css={styles.button}
        type="button"
        onClick={toggleSubMenu}
        data-testid="add-btn"
      >
        <Plus css={styles.icon} />
      </button>
    </div>
  );
};

export default HomeAddButton;
