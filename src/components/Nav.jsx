import React from 'react'
import styled from 'styled-components';
import { Menu } from '.';
import { brandLogo } from '../assets/logos';
import { navLinks } from '../config';
import { usePrefersReducedMotion } from '../hooks';

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0 50px;
  height: var(--nav-height);
  background: var(--bg-navy);
  width: 100%;
  backdrop-filter: blur(10px);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  height: 50px;
  width: 100%;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};
    a {
      display: flex;
      height: 50px;
      width: 50px;
    }

    &:hover {
      transform: scale(var(--s-scale));
      svg {
        fill-opacity: var(--orange-tint);
      }
    }
  }
`;

const StyledLinks = styled.div`
  ${({ theme }) => theme.mixins.flexEnd};
  height: 50px;

  @media (max-width: 768px) {
    display: none;
  }
  
  ol {
    display: flex;
    margin-right: 15px;
    li {
      list-style: none;
      margin-right: 25px;
      a {
        color: var(--text);
        padding: 5px 0;

        &:hover {
          color: var(--orange);
          transition: var(--transition);
        }
      }
    }
  }
`;

const Nav = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const Logo = (
    <div className="logo">
      <a href="/" aria-label="home">
        <img src={brandLogo} />       
      </a>
    </div>
  )

  const Resume = (
    <div className="resume__button">
      <button href="#"><a>Resume</a></button>
    </div>
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
                      <li key={i}><a href={url}>{name}</a></li>
                    ))}
                </ol>
                {Resume}
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
