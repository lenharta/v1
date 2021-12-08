import { useState, useRef } from 'react'
import styled from 'styled-components'
import { navLinks } from '../config';
import useOnClickOutside from '../hooks/useOnClickOutside'

const StyledMobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  } 
`;

const StyledHamburger = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    flex-direction: column;
    position: relative;
    height: 45px;
    width: 45px;
    border: none;
    background: transparent;
    cursor: pointer;
    z-index: 30;

    div {
      height: 3px;
      width: 35px;
      background: ${({ openMenu }) => openMenu ? 'var(--text)' : 'var(--orange)'};
      position: ${({ openMenu }) => openMenu ? 'absolute' : 'relative'};
      transition: var(--transition);
      border-radius: 10px;

      &:nth-child(1) {
        transform: ${({ openMenu }) => openMenu ? 'rotate(45deg)' : 'rotate(0)'};
      }
      &:nth-child(2) {
        transform: ${({ openMenu }) => !openMenu ? 'translateX(0)' : 'translateX(100%)'};
        opacity: ${({ openMenu }) => openMenu ? 0 : 1};
      }
      &:nth-child(3) {
        transform: ${({ openMenu }) => openMenu ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    }
  }
`;

const StyledMobileNav = styled.aside`
  display: none;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
    width: min(75vw, 400px);
    background: radial-gradient(circle at 50% 50%, rgba(22, 28, 39, 1) 0%, rgba(14, 18, 25, 1) 100%);
    transform: translateX(${props => (props.openMenu ? 0 : 100)}vw);
    transition: var(--transition);
    border-left: solid 2px var(--navy-shadow);

    .resume__button {
      padding: 15px 40px;
      margin-top: 10px;
    }

    ol {
      display: flex;
      justify-content: space-evenly;
      height: 60vh;
      flex-direction: column;
      li {
        list-style: none;
        font-size: var(--fs-md);
        margin: 10px 0;
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
  }
`;

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);

  // const buttonRef = useRef(null);
  const navRef = useRef(null);

  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setOpenMenu(false));

  const Resume = (
    <a href="#" aria-label="view my resume" className="resume__button">
      Resume
    </a>
  )

  return (
    <>
      <StyledMobileMenu>
        <div ref={wrapperRef}>
          <StyledHamburger onClick={toggleMenu} openMenu={openMenu} >
            <div />
            <div />
            <div />
          </StyledHamburger>

          <StyledMobileNav openMenu={openMenu} ref={navRef}>
            <ol>
              {navLinks.map(({ name, url, aria }, i) => (
                <li key={i}>
                  <a aria-label={aria} href={url} onClick={toggleMenu}>{name}</a>
                </li>
              ))}
            </ol>
            {Resume}
          </StyledMobileNav>
        </div>
      </StyledMobileMenu> 
    </>
  )
}

export default Menu
