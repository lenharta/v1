import React from 'react'
import styled from 'styled-components';
import { computerSitImg } from '../assets/images';

const StyledHeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
`;

const StyledImgContainer = styled.div`
  display: flex;
  width: 300px;
`;

const StyledTitleContainer = styled.div`
  font-family: var(--font-roboto);
  
  h1 {
    color: var(--orange);
    font-size: var(--fz-md);
  }

  h2 {
    color: var(--bld-text);
    font-size: var(--fz-xxl-heading);
  }

  h3 {
    color: var(--reg-text);
    font-size: var(--fz-xxl-heading);
  }

  div {
    color: var(--reg-text);

    span {
      color: var(--orange);
    }
  }
`;

const Hero = () => {
  return (
    <>
      <StyledHeroContainer>
        <StyledImgContainer>
          <img src={computerSitImg} />
        </StyledImgContainer>

        <StyledTitleContainer>
          <h1>Hello, my name is</h1>
          <h2>Andrew Lenhart.</h2>
          <h3>I build things for the web.</h3>
          <div>
            <p>I’m a software engineer specializing in building (and occasionally designing) 
              exceptional digital experiences. Currently, I’m focused on building accessible, 
              human-centered products at <span>Home.</span>
            </p>
          </div>
          <button><a>Check out my Resume!</a></button>
          
        </StyledTitleContainer>
        
      </StyledHeroContainer>
    </>
  )
}

export default Hero