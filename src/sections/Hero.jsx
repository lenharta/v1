import React from 'react'
import styled from 'styled-components';
import { computerSitImg } from '../assets/images';
import { socialMedia } from '../config';

const StyledHero = styled.div`
  width: 100%;
  height: 100vh;
  color: #fff;
`;

const Hero = () => {
  
  return (
    <>
      <StyledHero>
        
      </StyledHero>     
    </>
  )
}

export default Hero


//  {socialMedia.map(({ name, url }, i) => (
//    <button key={i}><a href={url}>{name}</a></button>
//  ))}


//   const one = <h1>1</h1>
//   const two = <h1>2</h1>
//   const three = <h1>3</h1>
//   const four = <h1>4</h1>
//   const five = <h1>5</h1>

//   const items = [one, two, three, four, five];

//  {items.map((item, i) => (
//    <div key={i}>{item}</div>
//  ))}