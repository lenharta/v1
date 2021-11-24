import React from 'react'
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: var(--nav-height);
  width: 100%;
  background: var(--bg-navy);
`;

const StyledNav = styled.nav`

`;

const StyledNavLinks = styled.div`

`;

const Nav = () => {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledNavLinks>
            
          </StyledNavLinks>
        </StyledNav>
      </StyledHeader>
    </>
  )
}

export default Nav
