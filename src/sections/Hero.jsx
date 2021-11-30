import { useState } from 'react'
import styled from 'styled-components';
import { ComputerSitImg } from '../assets';
import { usePrefersReducedMotion } from '../hooks';

const StyledHero = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }
`;

const StyledInnerTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    font-family: var(--font-link);
    font-size: 20px;
    font-size: clamp(14px, 5vw, 20px);
    margin: 10px 0 10px;
    }
    h2 {
      ${({ theme }) => theme.mixins.bgHeading};
      font-size: clamp(40px, 8vw, 80px);
      }
      h3 {
        ${({ theme }) => theme.mixins.mdHeading};
        font-size: clamp(40px, 8vw, 60px);
        color: var(--text);
        }
        p {
          font-family: var(--font-link);
          color: var(--text);
          font-size: 16px;
          max-width: 540px;
          margin-top: 20px;
          }
          button {
            ${({ theme }) => theme.mixins.smallButton};
            margin-top: 40px;
            padding: 15px 45px;
            }

`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const one = <h1 className="gradient__text">Hi, my Name is</h1>
  const two = <h2 className="gradient__text">Andrew Lenhart</h2>
  const three = <h3>I'm a Frontend Developer</h3>
  const four = (
    <>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Ex natus sapiente fuga eius facere dolore illum quia eos, 
        voluptatem sed.
      </p>
    </>
  )

  const five = (
    <button className="mail__to-button">
      <a href="mailto:andrew.code21@gmail.com">
        Get In Touch!
      </a>
    </button>
  )
  
  const items = [one, two, three, four, five]

  return (
    <>
      <StyledHero>
        {prefersReducedMotion ? (
          <>
            <StyledInnerTitle>
              {items.map((item, i) => (
                <div key={i}>{item}</div>
              ))}  
            </StyledInnerTitle>
          </>
        ) : (
          <>
          
          </>
        )}
      </StyledHero>     
    </>
  )
}

export default Hero