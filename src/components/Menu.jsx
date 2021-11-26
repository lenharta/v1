import React from 'react'
import styled from 'styled-components';

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  
  p {
    margin: 0 15px;

    a {
      color: var(--text-heading);
    }
  }

  div {
    margin-left: 24px;
  }

  a {
    font-size: var(--text-sm);
    padding: 10px;

    &:hover {
      color: var(--orange);
      transition: var(--transition-link);
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
        <div>
          <button><a href="#">Resume</a></button>
        </div>
      </StyledLinks> 
    </>
  )
}

export default Menu
