import { useEffect, useState } from 'react'
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Menu } from '.';
import { BrandLogo } from '../assets';
import { navLinks } from '../config';
import { loaderDelay } from '../utils';
import { usePrefersReducedMotion } from '../hooks';

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0 50px;
  height: var(--nav-height);
  width: 100%;
  background: radial-gradient(circle at 30% 30%, rgba(22, 28, 39, .75) 0%, rgba(14, 18, 25, .75) 100%);
  backdrop-filter: blur(10px);
  z-index: 50;

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
  max-width: 1600px;
  margin: 0 auto;

  .logo {
    ${({ theme }) => theme.mixins.flexStart};
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
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const timeout = loaderDelay;
  const fadeSideLClass = 'fadesidel';
  const fadeSideRClass = 'fadesider';

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, [])


  const Logo = (
    <div className="logo">
      <a href="/" aria-label="home">
        <BrandLogo />      
      </a>
    </div>
  )

  const Resume = (
    <div className="resume__button">
      <button href="#" aria-label="view my resume"><a>Resume</a></button>
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
                  {navLinks.map(({ name, url, aria }, i) => (
                      <li key={i}>
                        <a aria-label={aria} href={url}>{name}</a>
                      </li>
                    ))}
                </ol>
                {Resume}
              </StyledLinks>
            </>
          ) : (
            <>
              <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition classNames={fadeSideLClass} timeout={timeout}>
                    {Logo}
                  </CSSTransition>
                )}
              </TransitionGroup>

              <StyledLinks>
                <ol>
                  <TransitionGroup component={null}>
                    {isMounted &&
                      navLinks.map(({ name, url, aria }, i) => (
                        <CSSTransition 
                          classNames={fadeSideRClass} 
                          timeout={timeout}
                          >
                            <li key={i} style={{ transitionDelay: `${i * 50}ms` }}>
                              <a aria-label={aria} href={url}>{name}</a>
                            </li>
                        </CSSTransition>
                    ))}
                  </TransitionGroup>
                </ol>
                <TransitionGroup component={null}>
                  {isMounted && (
                    <CSSTransition 
                      classNames={fadeSideRClass} 
                      timeout={timeout} 
                      style={{ transitionDelay: `${navLinks.length * 50}ms` }}
                      >
                        {Resume}
                    </CSSTransition>
                  )}
                </TransitionGroup>
              </StyledLinks>
            </>
          )}
        </StyledNav>
      </StyledHeader>
    </>
  )
}

export default Nav
