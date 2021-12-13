import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { accordionData, srConfig } from '../config'
import { usePrefersReducedMotion } from '../hooks'
import sr from '../utils/sr'
import { UpIcon, PlusIcon, AboutImg } from '../assets'

const StyledAboutContainer = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  max-width: 1000px;
  padding-bottom: 0;

  .inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const Side = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  justify-content: flex-end;
  width: 100%;
  transform: rotateY(180deg);
  padding: 50px 0;
  svg {
    width: 75%;
  }

  @media (max-width: 768px) {
    justify-content: center;
    svg {
      width: 40%;
    }
  }
`;

const Accordian = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  width: 100%;
  border-radius: 15px;
  
`;

const Tab = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
  width: 100%;
  padding: 10px 0;
  background: linear-gradient(rgba(22, 28, 39, 1) 25%, rgba(14, 18, 25, 1) 100%);
  border: solid 1px var(--orange);
  cursor: pointer;
  box-shadow: 2px 10px 35px 1px var(--navy-tint);

  &:nth-child(1) {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:nth-child(4) {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  h1 {
    padding: 0 20px;
    color: var(--orange);
    font-family: var(--font-link);
    font-size: var(--fs-sm);
    letter-spacing: 2px;
    }
    svg {
      margin: 10px 20px;
      stroke: var(--orange)
      }
      &:hover {
        transform: scale(var(--s-scale));
        transition: var(--transition);
        }
`;

const Dropdown = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  width: 100%;
  padding: 20px 0;
  min-height: 100px;

  text-align: left;
  font-family: var(--font-text);
  font-size: var(--fs-xs);
  font-weight: 500;
  line-height: 1.5;

  color: var(--text);
  background: linear-gradient(rgba(22, 28, 39, 1) 0%, rgba(14, 18, 25, 1) 100%);
  border-right: solid 1.5px var(--orange);
  border-bottom: solid 1.5px var(--orange);
  border-left: solid 1.5px var(--orange);
  p {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    display: flex;
    margin: 0 auto;
    p {
      max-width: 90%;
    }
  }
`;


const About = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [clicked, setClicked] = useState(false)
  const revealContainer = useRef(null)
  
  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }
    
    sr.reveal(revealContainer.current, srConfig())
  }, [])

  const toggle = i => {
    if (clicked === i) {
      return setClicked(null);
    }
    setClicked(i);
  };

  return (
    <StyledAboutContainer id="about" ref={revealContainer}>
      <h2 className="section__heading-top">About</h2>
      <div className="inner">
        <Side>
          <AboutImg />
        </Side>
        <Accordian>
          {accordionData.map((item, i ) => {
            return (
              <>
                <Tab onClick={() => toggle(i)} key={i}>
                  <h1>{item.tab}</h1>
                  <span>{clicked === i ? <UpIcon /> : <PlusIcon />}</span>
                </Tab>
                {clicked === i ? (
                  <Dropdown>
                    <p>{item.content}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Accordian>
      </div>
    </StyledAboutContainer>
  );
};

export default About
