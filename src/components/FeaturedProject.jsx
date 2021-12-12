import React from 'react'
import styled from 'styled-components';
import { Icons } from '../assets';

const StyledProject = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  margin-bottom: 100px;
  grid-template-columns: repeat(12, 1fr);
  color: var(--text);

  .project__img {
    position: relative;
    grid-column: 1 / 8;
    grid-row: 1 / -1;
    width: 100%;
    align-items: center;
    border-radius: 15px;
    overflow: hidden;
    z-index: 1;
    
    &:before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 3;
      background: var(--orange);
      opacity: 0.4;
      &:hover {
        background: transparent;
      }
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .project__content {
    position: relative;
    right: 0;
    width: 100%;
    height: 100%;
    grid-column: -1 / 7;
    grid-row: 1 / -1;
    text-align: right;
    z-index: 10;

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
    }

    .project__tech {
      font-family: var(--font-link);
      font-size: 14px;
      color: var(--orange);
    }

    .links {
      ${({ theme }) => theme.mixins.flexCenter};
      width: 100%;
      justify-content: flex-end;
      font-family: var(--font-link);
      transform: translateX(25px);
      a {
        padding: 25px;
        svg {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
`;

const FeaturedProject = (props) => {
  return (
    <>
      <StyledProject >
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
