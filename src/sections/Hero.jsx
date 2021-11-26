import React from 'react'
import styled from 'styled-components';
import { computerSitImg } from '../assets/images';

const StyledHeroContainer = styled.div`
  
`;

const StyledImgContainer = styled.div`

`;

const StyledTitleContainer = styled.div`
  
`;

const Hero = () => {
  return (
    <>
      <StyledHeroContainer>
        <StyledImgContainer>
          {/* <img src={computerSitImg} /> */}
        </StyledImgContainer>

        <StyledTitleContainer>
          {/* <div>
            <h1>Hello, my name is</h1>
            <h2>Andrew Lenhart.</h2>
            <h3>I build things for the web.</h3>
          </div>

          <div>
            <p>
              I’m a software engineer specializing in building (and occasionally designing) 
              exceptional digital experiences. Currently, I’m focused on building accessible, 
              human-centered products at <span>Home.</span>
            </p>
          </div>

          <div>
            <button><a>Check out my Resume !</a></button> 
          </div> */}
        </StyledTitleContainer>
        
      </StyledHeroContainer>
    </>
  )
}

export default Hero