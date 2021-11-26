import React from 'react'
import styled from 'styled-components';
import { Menu } from '../components';
import { brandLogo } from '../assets/logos';

const StyledHeader = styled.header`
  display: flex;

  img {
    height: 50px;
    width: 50px;
  }
`;

const StyledLogoContainer = styled.div`
  
`;

const StyledLinksContainer = styled.div`
  
`;

const StyledButtonContainer = styled.div`
  
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
