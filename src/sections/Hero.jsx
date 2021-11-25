import React from 'react'
import styled from 'styled-components';

const StyledHeroContainer = styled.div`
  height: 100vh;
  background: var(--bg-navy);
  
  h1 {
    color: #fff;
  }
`;

const Hero = () => {
  return (
    <>
      <StyledHeroContainer>
        <h1>Hero</h1>
        <h1>Hero</h1>
        <h1>Hero</h1>
        <h1>Hero</h1>
        <h1>Hero</h1>
      </StyledHeroContainer>
    </>
  )
}

export default Hero