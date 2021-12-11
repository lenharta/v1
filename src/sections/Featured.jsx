import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { usePrefersReducedMotion } from '../hooks'
import { srConfig } from '../config'
import sr from '../utils/sr'
import { Gpt3 } from '../assets';
import { projectData } from '../config';

const StyledFeaturedSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  max-width: 1000px;

  @media (max-width: 768px) {

  }
`;

const StyledInner = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  max-width: 900px;
  padding: 100px 0 0;
`;

const Featured = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const revealContainer = useRef(null)
  
  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }
    
    sr.reveal(revealContainer.current, srConfig())
  }, [])

  return (
    <>
      <StyledFeaturedSection id="projects" ref={revealContainer}>
        <h2 className="section__heading-top">Projects</h2>
        <StyledInner>
          <div>Hello World</div>
        </StyledInner>
      </StyledFeaturedSection>
    </>
  )
}

export default Featured

// <a> link Container with blue border (Rotate on scroll animation)
// Picture of Project behind
// Skewed Div with opac border (translates horizontally on hover) => Div inside Title of project w/ < See more that translates on hover
// full screen Modal Pop-up with more information (github + external link) opac background
// use props with ID to map information in modal