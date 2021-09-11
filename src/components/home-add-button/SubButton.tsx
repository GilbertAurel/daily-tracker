/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { COLORS, FONTS, SIZES } from 'assets/theme';

interface Props {
  title: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

const HomeSubButton: React.FC<Props> = ({ title, Icon }) => {
  const styles = {
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
    subIcon: css`
      height: ${SIZES.iconSmall};
      width: ${SIZES.iconSmall};
      color: ${COLORS.white};
    `
  };

  return (
    <button css={styles.subButton} type="button" data-testid="sub-menu">
      <Icon css={styles.subIcon} />
      <p>{title}</p>
    </button>
  );
};

export default HomeSubButton;
