import React from 'react'
import styled from 'styled-components';
import { Menu } from '.';
import { brandLogo } from '../assets/logos';
import { navLinks } from '../config';
import { usePrefersReducedMotion } from '../hooks';

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  align-items: center;
  top: 0;
  padding: 0 50px;
  height: var(--nav-height);
  background: var(--bg-navy);
  width: 100%;
  backdrop-filter: blur(10px);
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  height: 75px;
  width: 100%;
  margin: 0;

  .logo {
    display: flex;

    a {
      width: 45px;
      height: 45px;

      svg {
        fill: var(--orange);
      }
    } 
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  
  a {
    color: var(--text);
    padding: 0 15px;

    &:hover {
      color: var(--orange);
      transition: var(--transition);
    }
  }

  button {
    color: var(--orange);
    margin-left: 15px;
  }
`;

const Nav = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const Logo = (
    <div className="logo">
      <a href="/" aria-label="home">
        <svg src={brandLogo} />       
      </a>
    </div>
  )

  const Resume = (
    <button href="#">Resume</button>
  )

  return (
    <>
      <StyledHeader className="nav__shadow">
        <StyledNav>
          {prefersReducedMotion ? (
            <>
              {Logo}

              <StyledLinks>
                <ol>
                  {navLinks.map(({ name, url }, i) => (
                      <a key={i} href={url}>{name}</a>
                    ))}
                </ol>
                <div>{Resume}</div>
              </StyledLinks>
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
