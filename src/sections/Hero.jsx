import React from 'react'
import styled from 'styled-components';
import { computerSitImg } from '../assets/images';

const StyledHeroSection = styled.section`
  margin: 120px 0;
`;

const StyledHeroInner = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3fr;
  grid-gap: 50px;
  max-width: 1000px;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;

  /* h1 {
    margin-top: 40px
  }

  p {
    margin-top: 40px;
    width: 75%;
  }

  button {
    margin-top: 60px;
  } */
`;

const Hero = () => {
  return (
    <>
      <StyledHeroSection>
        <StyledHeroInner>
          <img src={computerSitImg} />
          <StyledTitleContainer>
            <div>
              <span>Hello, my name is</span>
              <h1>Andrew Lenhart.</h1>
              <h2>I build things for the web.</h2>
            </div>
            <p>
              I’m a software engineer specializing in building (and occasionally designing) 
              exceptional digital experiences. Currently, I’m focused on building accessible, 
              human-centered products at <a>Home.</a>
            </p>
            <div>
              <button><a>Check out my Resume!</a></button> 
            </div>
          </StyledTitleContainer>
        </StyledHeroInner>
        
      </StyledHeroSection>
    </>
  )
}

export default Hero