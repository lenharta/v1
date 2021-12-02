import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { srConfig } from '../config';
import { usePrefersReducedMotion } from '../hooks';
import sr from '../utils/sr'

const StyledAbout = styled.section`
  ${({ theme }) => theme.mixins.flexCenter };
  color: #fff;
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

  return (
    <StyledAbout id="about" ref={revealContainer}>
      <h2 className="section__heading">About Me</h2>
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
