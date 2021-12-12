import { useRef, useEffect } from 'react'
import styled from 'styled-components';
import { Icons } from '../assets';
import { usePrefersReducedMotion } from '../hooks';
import sr from '../utils/sr';
import { srConfig } from '../config';

const StyledProject = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  grid-template-columns: repeat(12, 1fr);
  color: var(--text);

  &:not(:last-of-type) {
    margin-bottom: 100px;
    @media (max-width: 768px) {
      margin-bottom: 70px;
    }
    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  .project__img {
    position: relative;
    grid-column: 1 / 8;
    grid-row: 1 / -1;
    width: 100%;
    align-items: center;
    border-radius: 15px;
    overflow: hidden;
    z-index: 1;

    @media (max-width: 1080px) {
      grid-column: 10 / 1;
    }

    @media (max-width: 768px) {
      grid-column: 1 / -1;
    }
    
    &:before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 3;
      background: var(--orange);
      opacity: 0.6;
      filter: grayscale(15%);
      &:hover {
        background: none;
      }
      @media (max-width: 768px) {
        background: var(--bg-navy);
        opacity: 0.95;
      }
    }

    img {
      width: 100%;
      height: 100%;
      @media (max-width: 768px) {
        object-fit: cover;
        filter: grayscale(100%) contrast(1);
      }
    }
  }

  .project__content {
    position: relative;
    right: 0;
    width: 100%;
    height: 100%;
    grid-column: -1 / 6;
    grid-row: 1 / -1;
    text-align: right;
    z-index: 10;

    @media (max-width: 1080px) {
      grid-column: 5 / -1;
    }
    @media (max-width: 768px) {
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      text-align: left;
    }
    @media (max-width: 480px) {
      padding: 25px 25px 20px;
    }

    .featured__title {
      font-family: var(--font-link);
      font-size: 16px;
      color: var(--orange);
      margin-bottom: 5px;
    }

    .project__title {
      font-family: var(--font-heading);
      font-size: 32px;
      letter-spacing: 1.1px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .project__info {
      font-size: 14px;
      font-family: var(--font-text);
      font-weight: 400;
      background: var(--bg-lgtnavy);
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 15px;

      @media (max-width: 768px) {
        background: none;
        padding: 0;
      }
    }

    .project__tech {
      font-family: var(--font-link);
      font-size: 14px;
      color: var(--orange);

      @media (max-width: 768px) {
        font-size: 10px;
        padding-top: 10px
      }
    }

    .links {
      ${({ theme }) => theme.mixins.flexCenter};
      width: 100%;
      justify-content: flex-end;
      font-family: var(--font-link);
      transform: translateX(25px);

      @media (max-width: 768px) {
        justify-content: flex-start;
        transform: translateX(-25px);
        margin-top: 20px;
      }

      a {
        padding: 25px;
        svg {
          width: 40px;
          height: 40px;
          @media (max-width: 768px) {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
`;

const FeaturedProject = (props) => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const revealContainer = useRef(null)
  
  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }
    
    sr.reveal(revealContainer.current, srConfig())
  }, [])

  return (
    <>
      <StyledProject ref={revealContainer}>
        <div className="project__img">
          <img src={props.projectImg} alt={props.alt} />
        </div>

        <div className="project__content">
          <h2 className="featured__title">Featured Project</h2>

          <h1 className="project__title">{props.title}</h1>

          <div className="project__info">
            <p>{props.content}</p>
          </div>
          
          <h2 className="project__tech">{props.tech}</h2>

          <div className="links">
            <a href={props.githubLink} aria-label="Github Link">
              <Icons name="GitHub" />
            </a>

            <a href={props.url} aria-label="Website Link">
              <Icons name="External" />
            </a>
          </div>
        </div>
      </StyledProject> 
    </>
  )
}

export default FeaturedProject
