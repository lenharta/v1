import React from 'react'
import styled from 'styled-components';
import { Menu } from '.';
import { brandLogo } from '../assets/logos';

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  width: 100%;
  height: var(--nav-height);
  backdrop-filter: blur(10px);

  img {
    height: 50px;
    width: 50px;
  }
`;

const StyledHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  height: 50px;
  width: 100%;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  a {
    height: 50px;
    width: 50px;
  }
`;

const StyledLinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Nav = () => {
  return (
    <>
      <StyledHeader>
        <StyledHeaderContent>
          <StyledLogoContainer>
            <a><img src={brandLogo} alt="Logo" href="/"/></a>
          </StyledLogoContainer>

          <StyledLinksContainer>
            <Menu />
          </StyledLinksContainer>
        </StyledHeaderContent>
      </StyledHeader>
    </>
  )
}

export default Nav
