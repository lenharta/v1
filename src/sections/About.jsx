import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { srConfig } from '../config';
import { usePrefersReducedMotion } from '../hooks';
import sr from '../utils/sr'

const StyledAbout = styled.section`
  ${({ theme }) => theme.mixins.flexCenter };
  flex-direction: column;
`;

const StyledInner = styled.div`

`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, [])

  // const one = (

  // )

  return (
    <StyledAbout id="about" ref={revealContainer}>
      <h2 className="section__heading gradient__text">About Me</h2>
      <StyledInner>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
      </StyledInner>
    </StyledAbout>
  )
}

export default About
