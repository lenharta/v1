import React from 'react'
import styled from 'styled-components';
import { brandLogo } from '../assets/logos';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: var(--nav-height);
  width: 100%;
  background: var(--bg-navy);
`;

const StyledLogo = styled.div`
  display: flex;
  
  img {
    height: 60px;
    width: 60px;
  }
`;

const StyledLinks = styled.div`
  
`;



const Nav = () => {
  return (
    <>
      <StyledHeader>
        <StyledLogo>
          <img src={brandLogo} alt="Logo" />
        </StyledLogo>

        <StyledLinks>

        </StyledLinks>
      </StyledHeader>
    </>
  )
}

export default Nav
