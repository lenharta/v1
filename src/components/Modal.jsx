import { useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { Gpt3 } from '../assets'
import { projectData } from '../config';

const Background = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  position: fixed;
`;

const StyledModal = styled.div`
  width: 900px;
  height: 550px;
  box-shadow: 0 5px 16px var(--orange-tint);
  border: solid 1px var(--orange);
  background: radial-gradient(circle at 50% 50%, rgba(22, 28, 39, 1) 0%, rgba(14, 18, 25, 1) 100%);
  transition: var(--transition);
  color: var(--text);
  border-radius: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
`;

const ModalImg = styled.div`
  
`;

const ModalContent = styled.div`
  
`;

const ModalClose = styled.a`
  ${({ theme }) => theme.mixins.flexCenter};
  position: absolute;
  top: 25px;
  right: 25px;
  height: 50px;
  width: 50px;
  div {
    ${({ theme }) => theme.mixins.flexCenter};
    position: absolute;
    height: 3px;
    width: 35px;
    background: var(--orange);
    &:nth-child(1) {
      transform: rotate(45deg);
    }
    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
`;

const Modal = ({showModal, setShowModal}) => {
  const modalRef = useRef()

  const animation = useSpring({
    config: {
      duration: 275
    },
    opacity: showModal ? 1 : 0,
    transition: showModal ? `all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)` : `all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)`,
    transform: showModal ? `translateY(0%)` : `translateY(100%)`
  })


  return (
    <>
      {showModal ? (
        <Background>
          <animated.div style={animation}>
          <StyledModal showModal={showModal}>
            <ModalImg src={Gpt3} alt="GPT3 Website" />
            
            <ModalContent>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
            </ModalContent>
            <ModalClose aria-label="Close modal" onClick={() => setShowModal(prev => !prev)}>
              <div />
              <div />
            </ModalClose>
          </StyledModal>
          </animated.div>
        </Background>
      ) : null}
    </>
  )
}

export default Modal

// {projectData.map(({ title, content, tech, url, githubLink }, id) => (
//   <div key={id}>
    
//   </div>
// ))}