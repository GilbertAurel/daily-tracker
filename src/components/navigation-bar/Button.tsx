/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { COLORS, FONTS, SIZES } from 'assets/theme';
import { ButtonType } from './buttons';

interface Props extends ButtonType {
  clickHandler: (id: string) => void;
  active: boolean;
}

const Button: React.FC<Props> = ({
  id,
  Icon,
  label,
  clickHandler,
  path,
  active = false
}) => {
  const styles = {
    container: css`
      width: 100%;
      padding: 0 1.5rem;
      position: absolute;
      bottom: 2.75rem;
      left: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    `,
    button: css`
      height: 4rem;
      width: 4rem;
      background-color: ${active ? COLORS.secondary : COLORS.white};
      border: none;
      border-radius: 0.5rem;
    `,
    label: css`
      color: ${active ? COLORS.primary : COLORS.gray};
      ${FONTS.button}
    `,
    icon: {
      height: SIZES.icon,
      width: SIZES.icon,
      color: active ? COLORS.primary : COLORS.gray
    }
  };

  return (
    <button
      id={id}
      css={styles.button}
      type="button"
      onClick={() => clickHandler(path)}
      data-testid={id}
    >
      <Icon {...styles.icon} />
      <p css={styles.label}>{label}</p>
    </button>
  );
};

export default Button;
