import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import anime from 'animejs'
import { BrandLoader } from '../assets/logos';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  max-width: 100%;
  background: var(--x-dark-navy);
  z-index: 200;

  .logo__wrapper {
    max-width: 150px;
    background: var(--x-dark-navy);
    transition: var(--transition);
    opacity: ${props => (props.isMounted ? 1 : 0)};
    svg {
      width: 100%;
      height: 100%;
      margin: 0 auto 25px;
    }
  }

  .title__container {
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    max-width: 300px;
  }

  .loading__title {
    ${({ theme }) => theme.mixins.flexCenter};
    font-family: var(--font-link);
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    font-style: bold;
    color: var(--orange);
    margin-top: 5px;
    width: 100%;
    letter-spacing: 5px;

    &:last-child {
      font-weight: 800;
      font-size: 22px;
    }
  }
`;

const Loader = () => {
  const [isMounted, setIsMounted] = useState(false);

  // https://animejs.com/documentation/
  const animate = () => {
    const loader = anime.timeline({
      duration: 6400,
    });
  
    loader
      // Loading Logo Animation
      .add({
        targets: '#logo',
        delay: 500,
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
