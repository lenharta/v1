import React from 'react'
import styled from 'styled-components';

const StyledLinks = styled.div`
  display: flex;
  
  p {
    margin: 1rem 1.5rem;
  }

  a {
    color: var(--reg-text);

    &:hover {
      color: var(--orange);
    }
  }
`;

const Menu = () => {
  return (
    <>
      <StyledLinks>
        <p><a href="#About">About</a></p>
        <p><a href="#Work">Work</a></p>
        <p><a href="#Experience">Experience</a></p>
        <p><a href="#Contact">Contact</a></p>
      </StyledLinks> 
    </>
  )
}

export default Menu
