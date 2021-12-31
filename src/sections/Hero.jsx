import { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import { ComputerSitImg } from '../assets'
import { usePrefersReducedMotion } from '../hooks'
import { navbarDelay } from '../utils'

const StyledHero = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
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
  margin-top: 50px;
  position: relative;
  
  @media (max-width: 480px) and (min-height: 700px) {
    padding: 10vh 0;
  }

  h1 {
    font-family: var(--font-link);
    font-size: clamp(var(--fs-xs), 5vw, var(--fs-sm));
    margin: 5px 0 5px;
  }

  h2 {
    ${({ theme }) => theme.mixins.bgHeading};
    margin-top: 5px;
  }

  h3 {
    ${({ theme }) => theme.mixins.mdHeading};
    margin-top: 5px;
    color: var(--text);
  }

  p {
    font-family: var(--font-text);
    font-size: var(--fs-sm);
    color: var(--text);
    max-width: 540px;
    margin-top: 15px;
    line-height: 1.7;

    @media (max-width: 480px) {
      line-height: 1.5;
    }
  }

  a {
    ${({ theme }) => theme.mixins.bgButton};
    margin: 40px 0 0 0;
  }

  .comp-img {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    left: 700px;
    transform: translateY(-5px);
    transform: rotateY(180deg);
    margin-right: 25px;
    svg {
      width: 300px;
      }

    @media (max-width: 1200px) {
      display: none;
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  const one = <h1 className="gradient__text">Hello World, my name is</h1>
  const two = <h2 className="gradient__text">Andrew Lenhart</h2>
  const three = <h3>I'm a Frontend Developer</h3>
  
  const four = (
    <p>
      I'm currently looking for new opportunities to further my career and education in software development.
      Based in the United States, I love combining left brain logic with right brain creativity to create beautiful
      and functional digital experiences for everyone.
    </p>
  )
  
  const five = (
    <a aria-label="contact me" href="mailto:andrew.code21@gmail.com">
      Get In Touch
    </a> 
  )

  const compImg = (
    <div className="comp-img">
      <ComputerSitImg />
    </div>
  )
  
  const heroItems = [one, two, three, four, five]
  
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navbarDelay);
    return () => clearTimeout(timeout);
  }, [])

  return (
    <>
      <StyledHero>
        {prefersReducedMotion ? (
          <>
            <StyledInnerTitle>
              {heroItems.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
              {compImg}
            </StyledInnerTitle>
          </>
        ) : (
          <>
            <StyledInnerTitle>
              <TransitionGroup component={null}>
                {isMounted && 
                  heroItems.map((item, i) => (
                  <CSSTransition key={i} classNames="fadeup" timeout={navbarDelay}>
                    <div style={{ transitionDelay: `${i * 1}00ms` }}>{item}</div>
                  </CSSTransition>
                ))}
              </TransitionGroup>
              {compImg}
            </StyledInnerTitle>
          </>
        )}
      </StyledHero>     
    </>
  )
}

export default Hero