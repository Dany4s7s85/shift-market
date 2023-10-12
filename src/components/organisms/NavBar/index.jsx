import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import Button from 'components/atoms/Button';
import { Nav, Ul, Li, IconWrapper, NavIconHolder, Nav2, Ul2, Li2 } from './NavBar.styles';

function NavBar() {
  const [isMenu, setIsMenu] = useState(false);
  const menuTogle = () => {
    setIsMenu(!isMenu);
  };
  return (
    <>
      <Nav>
        <IconWrapper>
          <h2>SHIFT</h2>
        </IconWrapper>

        <Ul>
          <Li>Home</Li>
          <Li>About</Li>
          <Li>Contact</Li>
          <Li>About-US</Li>
        </Ul>
      </Nav>
      <NavIconHolder>
        <Button onClick={menuTogle} css="text-align:end">
          <span
            className="material-icons-outlined"
            style={{ fontSize: '40px' }}
            css="background-color: rgba(255, 255, 255, 0.14); border-radius: 50%; padding: 10px">
            menu
          </span>
        </Button>
      </NavIconHolder>
      {isMenu ? (
        <Nav2>
          <Button onClick={menuTogle} css="text-align:end">
            <span
              className="material-icons-outlined"
              style={{ fontSize: '40px' }}
              css="font-size: 40px; background-color: rgba(255, 255, 255, 0.14); border-radius: 50%; padding: 10px">
              close
            </span>
          </Button>
          <Ul2>
            <Li2>Home</Li2>
            <Li2>About</Li2>
            <Li2>Contact</Li2>
            <Li2>About-US</Li2>
          </Ul2>
        </Nav2>
      ) : (
        ''
      )}
    </>
  );
}

export default NavBar;
