import { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { usePrefersReducedMotion } from '../hooks';
import { navbarDelay } from '../utils';

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
  margin-top: 35px;

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
          margin-top: 15px;
          }
          button {
            ${({ theme }) => theme.mixins.smallButton};
            margin-top: 40px;
            padding: 15px 80px;
            &:hover {
              transform: scale(var(--s-scale));
              }
            }

`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const one = <h1 className="gradient__text">Hello, my Name is</h1>
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
  
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navbarDelay);
    return () => clearTimeout(timeout);
  }, [])

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
            <StyledInnerTitle>
              <TransitionGroup component={null}>
                {isMounted && 
                  items.map((item, i) => (
                  <CSSTransition key={i} classNames="fadeup" timeout={navbarDelay}>
                    <div style={{ transitionDelay: `${i * 1}00ms` }}>{item}</div>
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </StyledInnerTitle>
          </>
        )}
      </StyledHero>     
    </>
  )
}

export default Hero