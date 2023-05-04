import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Menu } from ".";
import { BrandLogo } from "../assets";
import { navLinks } from "../config";
import { loaderDelay } from "../utils";
import { useScrollDirection, usePrefersReducedMotion } from "../hooks";

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0 50px;
  height: var(--nav-height);
  width: 100%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(22, 28, 39, 0.75) 0%,
    rgba(14, 18, 25, 0.75) 100%
  );
  backdrop-filter: blur(10px);
  z-index: 50;
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${(props) =>
      props.scrollDirection === "up" &&
      !props.showNav &&
      css`
        transform: translateY(0px);
      `};
    ${(props) =>
      props.scrollDirection === "down" &&
      !props.showNav &&
      css`
        transform: translateY(calc(var(--nav-height) * -1));
      `};
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
      svg {
        fill-opacity: var(--orange-tint);
        &:hover,
        &:focus {
          transform: scale(var(--s-scale));
        }
      }
    }
  }
`;

const StyledLinks = styled.div`
  ${({ theme }) => theme.mixins.flexEnd};
  width: 100%;
  height: 50px;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    display: flex;
    margin-right: 15px;
    li {
      list-style: none;
      margin: 0 10px;
      a {
        color: var(--text);
        padding: 10px 10px;
        &:hover,
        &:focus {
          color: var(--orange);
          transition: var(--transition);
        }
      }
    }
  }
`;

const Nav = () => {
  const [isMounted, setIsMounted] = useState(false);
  const scrollDirection = useScrollDirection("down");
  const [showNav, setShowNav] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();
  const timeout = loaderDelay;
  const fadeSideLClass = "fadesidel";
  const fadeSideRClass = "fadesider";

  const handleScroll = () => {
    setShowNav(window.scrollY < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Logo = (
    <div className="logo">
      <a href="/" aria-label="home">
        <BrandLogo />
      </a>
    </div>
  );

  const Resume = (
    <a
      href="/resume-v1.pdf"
      aria-label="view my resume"
      target="_blank"
      rel="noopener noreferrer"
      className="resume__button"
    >
      Resume
    </a>
  );

  const resume2 = (
    <TransitionGroup component={null}>
      {isMounted && (
        <CSSTransition
          classNames={fadeSideRClass}
          timeout={timeout}
          style={{ transitionDelay: `${navLinks.length * 50}ms` }}
        >
          {/* {Resume} */}
        </CSSTransition>
      )}
    </TransitionGroup>
  );

  return (
    <>
      <StyledHeader
        className="nav__shadow"
        scrollDirection={scrollDirection}
        showNav={showNav}
      >
        <StyledNav>
          {prefersReducedMotion ? (
            <>
              {Logo}

              <StyledLinks>
                <ol>
                  {navLinks.map(({ name, url, aria }, i) => (
                    <li key={i}>
                      <a aria-label={aria} href={url}>
                        {name}
                      </a>
                    </li>
                  ))}
                </ol>
                {/* {Resume} */}
              </StyledLinks>

              <Menu />
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
                          <li
                            key={i}
                            style={{ transitionDelay: `${i * 50}ms` }}
                          >
                            <a aria-label={aria} href={url}>
                              {name}
                            </a>
                          </li>
                        </CSSTransition>
                      ))}
                  </TransitionGroup>
                </ol>
              </StyledLinks>

              <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition
                    classNames={fadeSideRClass}
                    timeout={timeout}
                    style={{ transitionDelay: `${navLinks.length * 50}ms` }}
                  >
                    <Menu />
                  </CSSTransition>
                )}
              </TransitionGroup>
            </>
          )}
        </StyledNav>
      </StyledHeader>
    </>
  );
};

export default Nav;
