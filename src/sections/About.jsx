import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { accordionData, srConfig } from '../config';
import { usePrefersReducedMotion } from '../hooks';
import sr from '../utils/sr'
import { UpIcon, PlusIcon, AboutImg } from '../assets'

const StyledAboutContainer = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  max-width: 1000px;


  .inner {
    ${({ theme }) => theme.mixins.flexCenter};
    width: 100%;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const Side = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  width: 40%;
  height: 100%;
  padding: 75px 0px;
  margin: 0 50px;
  
  @media (max-width: 768px) {
    display: block;
    margin: 0px auto;
    padding: 25px 0;
    width: 50%;
  }
`;

const Accordian = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  width: 60%;
  border-radius: 15px;
  padding: 0;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const Tab = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
  width: 100%;
  margin: 20px 0 0;
  padding: 10px 0;
  background-color: rgba(22, 28, 39, 1);
  border: solid 1.5px var(--orange);
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 2px 10px 35px 1px var(--navy-tint);
  h1 {
    padding: 0 20px;
    color: var(--orange);
    font-family: var(--font-link);
    font-size: var(--fs-md);
    }
    svg {
      margin: 10px 20px;
      stroke: var(--orange)
      }
      &:hover {
        transform: scale(var(--s-scale));
        }

`;

const Dropdown = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  width: 95%;
  min-height: 100px;
  text-align: left;
  font-family: var(--font-text);
  font-weight: 500;
  color: var(--text);
  background-color: var(--bg-lgtnavy);
  border-right: solid 1.5px var(--orange);
  border-bottom: solid 1.5px var(--orange);
  border-left: solid 1.5px var(--orange);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  p {
    max-width: 90%;
    }

  @media (max-width: 768px) {
    display: flex;
    width: 95%;
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
      <h2 className="section__heading-top">&lt;About&gt;</h2>
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
      <h2 className="section__heading-bottom">&lt;/About&gt;</h2>
    </StyledAboutContainer>
  );
};

export default About
