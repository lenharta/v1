import React from 'react'
import styled from 'styled-components';
import { Menu } from '.';
import { brandLogo } from '../assets/logos';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  height: var(--nav-height);
  width: 100%;
  background: var(--bg-tint);
  backdrop-filter: blur(10px);
`;

const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  
  img {
    height: 50px;
    width: 50px;
  }
`;

const StyledLinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 4;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const Nav = () => {
  return (
    <>
      <StyledHeader>
        <StyledLogoContainer>
          <a><img src={brandLogo} alt="Logo" /></a>
        </StyledLogoContainer>

        <StyledLinksContainer>
          <Menu />
        </StyledLinksContainer>

        <StyledButtonContainer>
          <button><a href="#">Resume</a></button>
        </StyledButtonContainer>
      </StyledHeader>
    </>
  )
}

export default Nav
