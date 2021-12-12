import React from 'react'
import styled from 'styled-components'

const StyledCTASection = styled.section`
  height: 100vh;
  color: var(--text);
`;

const StyledCTAInner = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
  flex-direction: column;
  text-align: center;

  h2 {
    Color: var(--orange);
    font-family: var(--font-link);
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  h1 {
    font-family: var(--font-heading);
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  p {
    font-family: var(--font-text);
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  h3 {
    Color: var(--orange);
    font-family: var(--font-link);
    font-size: clamp(16px, 5vw, 32px);
    margin-bottom: 20px;
  }

  a {
    ${({ theme }) => theme.mixins.bgButton};
    font-size: 16px;
    font-weight: 400;
  }
`;

const CTA = () => {
  return (
    <>
      <StyledCTASection id="contact">
        <h2 className="section__heading-top">Contact</h2>
        <StyledCTAInner>
          <h2>So What's Next?</h2>
          <h1>Get In Touch</h1>
          <p>I'm currently looking for opportunities to join a team of professionals and assist in building beautiful, accessible, human-centered digital experiences!</p>
          <h3>andrew.code21@gmail.com</h3>
          <a>Email Me!</a>
        </StyledCTAInner>
      </StyledCTASection>
    </>
  )
}

export default CTA