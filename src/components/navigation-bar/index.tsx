/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { buttons } from './buttons';
import Button from './Button';

const Navbar: React.FC = () => {
  const history = useHistory();
  const currentPath = useLocation().pathname.split('/')[1];

  const buttonClickHandler = (path: string) => history.push({ pathname: path });

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
    `
  };

  return (
    <div css={styles.container}>
      {buttons.map((button) => (
        <Button
          key={button.id}
          label={button.label}
          id={button.id}
          Icon={button.Icon}
          clickHandler={buttonClickHandler}
          path={button.path}
          active={currentPath === button.path}
        />
      ))}
    </div>
  );
};

export default Navbar;
