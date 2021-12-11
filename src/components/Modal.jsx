import { useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { Icons } from '../assets'
import { projectData } from '../config';

const Background = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  width: 100%;
  height: 100%;
  position: fixed;
`;

const StyledModal = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 900px;
  height: 500px;
  box-shadow: 0 5px 16px var(--orange-tint);
  border: solid 1px var(--orange);
  background: radial-gradient(circle at 50% 50%, rgba(22, 28, 39, 1) 0%, rgba(14, 18, 25, 1) 100%);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  color: var(--text);
  border-radius: 25px;
  z-index: 10;

  @media (max-width: 768px) {
    width: 700px;
    height: 450px;
  }

  @media (max-width: 480px) {
    width: 325px;
    height: 200px;
    grid-template-columns: 1fr;
    padding: 0 25px;
  }
`;

const ModalLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 100%;

  div {
    ${({ theme }) => theme.mixins.flexCenter};
    width: 100%;
    a {
      padding: 15px;
      cursor: pointer;
      svg {
        width: 50px;
        &:hover {
          color: var(--text);
        }
      }
    }
  }

  @media (max-width: 480px) {
    display: flex;
    width: 100%;
  }
`;

const ModalContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column: span 2;
  padding: 50px;
  height: 100%;

  @media (max-width: 480px) {
    display: none;   
  }
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

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;

    div {
      width: 20px;
    }
  }
`;

const Modal = ({showModal, setShowModal}) => {
  const animation = useSpring({
    config: {
      duration: 275
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `scale(100%)` : `scale(0%)`
  })

  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showModal) {
      setShowModal(false)
    }
  }, [setShowModal, showModal])

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  return (
    <>
      {showModal ? (
        <Background>
          <animated.div style={animation}>
          <StyledModal showModal={showModal}>
            <ModalLinks>
              <div>
                <a href="#">
                  <Icons name="External" />
                </a>
              </div>

              <div>
                <a href="#">
                  <Icons name="GitHub" />
                </a>
              </div>
            </ModalLinks>

            <ModalContent>
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

// .overlay {
  // position: absolute;
  // width: 100%;
  // height: 100%;
  // background-color: rgba(227, 130, 41, 0.45);
// }