import React from 'react'
import styled from 'styled-components';
import { Menu } from '.';
import { brandLogo } from '../assets/logos';
import { usePrefersReducedMotion } from '../hooks';

const StyledHeader = styled.header`

`;

const StyledNav = styled.nav`

`;

const Nav = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <>
      <StyledHeader>
        <StyledNav>
          {prefersReducedMotion ? (
            <>
              
            </>
          ) : (
            <>

            </>
          )}
        </StyledNav>
      </StyledHeader>
    </>
  )
}

export default Nav
