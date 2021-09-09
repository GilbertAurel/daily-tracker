/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { buttons } from './buttons';
import Button from './Button';

const Navbar: React.FC = () => {
  const history = useHistory();
  const currentPath = useLocation().pathname;

  const buttonClickHandler = (path: string) => history.push({ pathname: path });

  const styles = {
    container: css`
      height: 6.25rem;
      width: 100%;
      padding: 0 1.5rem;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0px -10px 30px -15px rgba(0, 0, 255, 0.2);

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
