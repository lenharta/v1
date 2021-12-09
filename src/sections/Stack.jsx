import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Icons } from '../assets';
import { srConfig } from '../config';
import { usePrefersReducedMotion } from '../hooks';
import sr from '../utils/sr';


const StyledStackContainer = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  max-width: 1200px;
  padding-top: 0;

  .perspective {
    perspective: 1000px;
  }

  .section__heading-top {
    max-width: 1000px;
    margin-bottom: 10px;
  }
`;

const StyledStackInner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 16px;
  width: 100%;
  max-height: 700px;
  padding: 0 200px;
  margin: 0 auto;

  transform: rotateX(35deg);

  @media (max-width: 768px) {
    grid-gap: 6px;
    max-width: 600px;
    padding: 0 25px;
  }

  .card {
    height: 100%;
    width:100%;
    
    
    div {
      ${({ theme }) => theme.mixins.flexCenter};
      background: linear-gradient(180deg, rgba(14, 18, 25, 1) 0%, rgba(22, 28, 39, 1) 100%);
      border-radius: 15px;
      border-bottom-left-radius: 25px;
      border-bottom-right-radius: 25px;
      height: 100%;
      width: 100%;
      border-top: solid .5px var(--orange-tint);
      border-left: solid 1px var(--orange-tint);
      border-right: solid 1px var(--orange-tint);
      border-bottom: solid 10px var(--orange-tint);
      
      svg {
        height: 75%;
        width: 75%; 
      }

      &:hover,
      &:focus-visible {
        box-shadow: 0 0 32px var(--orange-tint);
        transform: scale(1.05);
        transform: translateY(-20px);
        transition: var(--transition);
      }
    }

    &:nth-child(1), &:nth-child(4), &:nth-child(5), &:nth-child(7) {
      grid-row: span 3;
    }

    &:nth-child(2), &:nth-child(3) {
      grid-row: span 2;
    }

    &:nth-child(6) {
      grid-column: 2 / span 2;
      grid-row: 3 / span 4;
    }
  }
`;

const Stack = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const revealContainer = useRef(null)
  
  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }
    
    sr.reveal(revealContainer.current, srConfig())
  }, [])

  const one = (
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" aria-label="HTML 5 Link">
      <div>
        <Icons name="HTML5" />
      </div>
    </a>
  )

  const two = (
    <a href="https://sass-lang.com/" aria-label="Sass Link">
      <div>
        <Icons name="Sass" />
      </div>
    </a>
  )
  
  const three = (
    <a href="https://www.figma.com/" aria-label="Figma Link">
      <div>
        <Icons name="Figma" />
      </div>
    </a>
  )
  
  const four = (
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" aria-label="CSS 3 Link">
      <div>
        <Icons name="Css3" />
      </div>
    </a>
  )
  
  const five = (
    <a href="https://www.javascript.com/" aria-label="Javascript Link">
      <div>
        <Icons name="JavaScript" />
      </div>
    </a>
  )
  
  const six = (
    <a href="https://reactjs.org/" aria-label="React Link">
      <div>
        <Icons name="React" />
      </div>
    </a>
  )
  
  const seven = (
    <a href="https://redux.js.org/" aria-label="Redux Link">
      <div>
        <Icons name="Redux" />
      </div>
    </a>
  )

  const stackItems = [one, two, three, four, five, six, seven]

  return (
    <>
      <StyledStackContainer id="stack" ref={revealContainer} >
        <h2 className="section__heading-top">Stack</h2>
        <div className="perspective">
        <StyledStackInner >
          {stackItems.map((item, i) => (
            <div key={i} className="card">{item}</div>
          ))}
        </StyledStackInner>
        </div>
      </StyledStackContainer>
    </>
  )
}

export default Stack
