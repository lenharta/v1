import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { usePrefersReducedMotion } from '../hooks'
import { srConfig } from '../config'
import sr from '../utils/sr'
import Modal from '../components/Modal';
import { Gpt3 } from '../assets';
import { projectData } from '../config';

const StyledFeatured = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  max-width: 1000px auto;
  padding-top: 50px;
`;

const StyledProjectContainer = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  padding: 100px 0;
  max-width: 1000px;
`;

const StyledProject = styled.a`
  position: relative;
  border-radius: 15px;
  border: solid 1px;
  max-width: 800px;
  overflow: hidden;
  @media (max-width: 1080px) {
    width: 100%;
  }
  img {
    display: flex;
    width: 100%;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(227, 130, 41, 0.45);
  }
`;

const ModalContainer = styled.div`
  position: absolute;

`;

const Featured = () => {
  const [showModal, setShowModal] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()
  const revealContainer = useRef(null)
  
  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }
    
    sr.reveal(revealContainer.current, srConfig())
  }, [])

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <>
      <StyledFeatured id="projects" ref={revealContainer}>
        <h2 className="section__heading-top">Projects</h2>

        <StyledProjectContainer>
          <StyledProject onClick={openModal}>
            <div className="overlay"></div>
            <img src={Gpt3} />
          </StyledProject>
            <Modal
              showModal={showModal} 
              setShowModal={setShowModal} 
            />
        </StyledProjectContainer>

      </StyledFeatured>
    </>
  )
}

export default Featured

// <a> link Container with blue border (Rotate on scroll animation)
// Picture of Project behind
// Skewed Div with opac border (translates horizontally on hover) => Div inside Title of project w/ < See more that translates on hover
// full screen Modal Pop-up with more information (github + external link) opac background
// use props with ID to map information in modal