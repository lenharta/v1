import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import anime from 'animejs'
import { BrandLoader } from '../assets/logos';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  max-width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  background: var(--x-dark-navy);
  z-index: 200;

  .logo__wrapper {
    max-width: 150px;
    transition: var(--transition);
    background: var(--x-dark-navy);
    opacity: ${props => (props.isMounted ? 1 : 0)};
    svg {
      width: 100%;
      height: 100%;
      margin: 0 auto 25px;
    }
  }

  .title__container {
    ${({ theme }) => theme.mixins.flexCenter};
    max-width: 300px;
    transition: var(--transition);
    flex-direction: column;
  }

  .loading__title {
    ${({ theme }) => theme.mixins.flexCenter};
    width: 100%;
    font-family: var(--font-link);
    font-size: 16px;
    font-weight: 400;
    font-style: bold;
    text-align: center;
    color: var(--orange);
    margin-top: 5px;
    letter-spacing: 5px;

    &:last-child {
      font-size: 22px;
      font-weight: 800;
    }
  }
`;

const Loader = () => {
  const [isMounted, setIsMounted] = useState(false);

  // https://animejs.com/documentation/
  const animate = () => {
    const loader = anime.timeline({
      duration: 6350,
    });
  
    loader
      // Loading Logo Animation
      .add({
        targets: '#logo',
        delay: 600,
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

      //Loading Logo Disappear
      .add({
        targets: '#logo',
        duration: 400,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })

      // Title Disappear
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
      <div className="title__container">
        <span className="loading__title">DESIGNED & BUILT BY</span>
        <span className="loading__title">ANDREW LENHART</span>
      </div> 
    </StyledLoader>
  )
}

export default Loader
