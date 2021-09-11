/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import useToggle from 'utils/useToggle';
import { COLORS, FONTS, SIZES } from 'assets/theme';
import { Layers } from 'assets/icons/components';
import Button from './Button';
import SubButton from './SubButton';

const HomeAddButton: React.FC = () => {
  const [openSubMenu, toggleSubMenu] = useToggle(false);

  const subButtons = [
    {
      title: 'create new',
      Icon: Layers
    }
  ];

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
      background-color: ${openSubMenu ? COLORS.secondary : COLORS.primary};
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
      color: ${openSubMenu ? COLORS.primary : COLORS.white};
      transform: ${openSubMenu ? 'rotate(45deg)' : 'rotate(0deg)'};
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
      {openSubMenu &&
        subButtons.map((subButton) => (
          <SubButton
            key={subButton.title}
            title={subButton.title}
            Icon={subButton.Icon}
          />
        ))}
      <Button openSubMenu={openSubMenu} toggleSubMenu={toggleSubMenu} />
    </div>
  );
};

export default HomeAddButton;
