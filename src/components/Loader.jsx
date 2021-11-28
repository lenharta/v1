import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import anime from 'animejs'
import { BrandLoader } from '../assets/logos';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: var(--x-dark-navy);
  z-index: 99;

  .logo__wrapper {
    max-width: 100px;
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }

    h1 {
      ${({ theme }) => theme.mixins.flexCenter};
      color: var(--orange);
      font-family: var(--font-link);
      margin-top: 20px;
      font-size: var(--text);
      letter-spacing: 7px;
      fon
    }
  }
`;

const Loader = () => {
  const animate = () => {
    const loader = anime.timeline({
      duration: 1750,
      loop: true
    });
  
    loader
      .add({
        targets: '#logo',
        delay: 750,
        rotate: 360
    })
  }

  useEffect(() => {
    animate();
  }, [])

  return (
    <StyledLoader>
      <div className="logo__wrapper">
        <BrandLoader />
        <h1>WELCOME</h1>
      </div>
    </StyledLoader>
  )
}

export default Loader
