import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { usePrefersReducedMotion } from '../hooks';
import sr from '../utils/sr';
import { srConfig } from '../config';

const StyledCTASection = styled.section`
  color: var(--text);
  padding-bottom: 0;
`;

const StyledCTAInner = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  padding: 100px 0 0;
  max-width: 600px;
  margin: 0 auto 100px;
  flex-direction: column;
  text-align: center;

  h2 {
    Color: var(--orange);
    font-family: var(--font-link);
    font-size: 16px;
    margin-bottom: 10px;
  }

  h1 {
    font-family: var(--font-heading);
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  p {
    font-family: var(--font-text);
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 30px;
  }

  h3 {
    Color: var(--orange);
    font-family: var(--font-link);
    font-size: clamp(16px, 5vw, 32px);
    margin-bottom: 50px;
  }

  a {
    ${({ theme }) => theme.mixins.bgButton};
    font-size: 16px;
    font-weight: 400;
  }
`;

const CTA = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const revealContainer = useRef(null)
  
  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }
    
    sr.reveal(revealContainer.current, srConfig())
  }, [])

  const one = <h2 className="gradient__text">So What's Next?</h2>
  const two = <h1>Get In Touch</h1>
  const three = (
    <p>I'm currently looking for opportunities to join a team of professionals and assist 
      in building beautiful, accessible, human-centered digital experiences!
    </p>
  )

  const four = <h3 className="gradient__text">andrew.code21@gmail.com</h3>
  const five = <a aria-label="contact me" href="mailto:andrew.code21@gmail.com">Email Me!</a>

  const ctaItems = [one, two, three, four, five]

  return (
    <>
      <StyledCTASection id="contact" ref={revealContainer}>
        <StyledCTAInner>
          {ctaItems.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </StyledCTAInner>
      </StyledCTASection>
    </>
  )
}

export default CTA