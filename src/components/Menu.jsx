import { useState, useRef } from 'react'
import styled from 'styled-components'
import MobileMenu from '../assets/icons/MobileMenu';
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
    ${({ theme }) => theme.mixins.flexCenter};
    justify-content: space-around;
    flex-direction: column;
    position: relative;
    height: 50px;
    width: 50px;
    border: none;
    background: transparent;
    cursor: pointer;
    z-index: 30;

    div {
      height: 3px;
      width: 40px;
      background: var(--orange);
      border-radius: 10px;
    }
  }
`;

const StyledMobileNav = styled.aside`
  display: none;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
    width: min(75vw, 400px);
    background: var(--bg-lgtnavy);
  }
`;

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);

  // const buttonRef = useRef(null);
  // const navRef = useRef(null);

  // const wrapperRef = useRef();
  // useOnClickOutside(wrapperRef, () => setOpenMenu(false));

  return (
    <>
      <StyledMobileMenu>
          <StyledHamburger onClick={toggleMenu} openMenu={openMenu} >
            <div />
            <div />
            <div />
          </StyledHamburger>

          <StyledMobileNav openMenu={openMenu} >
            
          </StyledMobileNav>
      </StyledMobileMenu> 
    </>
  )
}

export default Menu
