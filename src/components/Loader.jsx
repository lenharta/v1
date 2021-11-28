import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import anime from 'animejs'
import { BrandLoader } from '../assets/logos';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: var(--x-dark-navy);
  z-index: 200;

  .logo__wrapper {
    max-width: 150px;
    background: var(--x-dark-navy);
    transition: var(--transition);
    opacity: ${props => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }
  }

  .loading__title {
    ${({ theme }) => theme.mixins.flexCenter};
    margin-top: 20px;
    font-family: var(--font-link);
    font-size: 20px;
    color: var(--orange);
    width: 100%;
    letter-spacing: 3px;
  }
`;

const Loader = () => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      duration: 6000,
    });
  
    loader

    
    // Loading Logo
    .add({
      targets: '#logo',
      delay: 400,
      duration: 1750,
      rotateY: 360,
    })
    
    .add({
      targets: '#logo',
      delay: 50,
      duration: 1750,
      rotateX: 360,
    })
    
    .add({
      targets: '#logo',
      delay: 50,
      duration: 1750,
      rotate: 360,
    })
    
    .add({
      targets: '#logo',
      duration: 400,
      easing: 'easeInOutQuart',
      opacity: 0,
      scale: 0.1,
    })

    .add({
      targets: '.loading__title',
      duration: 400,
      easing: 'easeInOutQuart',
      opacity: 0,
      scale: 0.1,
    })
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 500);
    animate();
    return () => clearTimeout(timeout);
  }, [])

  return (
    <StyledLoader isMounted={isMounted}>
      <div className="logo__wrapper">
        <BrandLoader />
      </div>
      <div>
        <span className="loading__title">WELCOME!</span>
      </div> 
    </StyledLoader>
  )
}

export default Loader
