import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Icons } from '../assets';
import { socialMedia, srConfig } from '../config';
import { usePrefersReducedMotion } from '../hooks';
import sr from '../utils/sr';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter}
  height: 150px;
  width: 100%;
  color: var(--text);
`;

const StyledFooterInner = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  font-family: var(--font-link);
  font-size: var(--fs-xs);

  .mobile__social {
    display: none;
    flex-direction: row;

    @media (max-width: 768px) {
      ${({ theme }) => theme.mixins.flexBetween}
    }

    li {
      list-style: none;
      margin-bottom: 30px;
      a {
        svg {
          width: 30px;
          height: 30px;
          &:hover,
          &:focus {
            stroke: var(--text);
            transform: translateY(-5px);
            transition: var(--transition);
          }
        }
      }
    }
  }

  .github__data {
    ${({ theme }) => theme.mixins.flexCenter}
    margin-top: 10px;
    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;

const Footer = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const revealContainer = useRef(null)
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch('https://api.github.com/repos/lenharta/portfolio-v1')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch(e => console.error(e));
  }, []);
  
  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }
    
    sr.reveal(revealContainer.current, srConfig())
  }, [])

  return (
    <>
      <StyledFooter ref={revealContainer} tabIndex="-1">
        <StyledFooterInner>
          <div className="mobile__social">
            {socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icons name={name} />
                </a>
              </li>
            ))}
          </div>
          <h3>Designed & Built by Andrew Lenhart</h3>
          {githubInfo.stars && githubInfo.forks && (
            <div className="github__data">
              <div>
                <Icons name="Star" />
                <span>{githubInfo.stars.toLocaleString()}</span>
              </div>
              <div>
                <Icons name="Fork" />
                <span>{githubInfo.forks.toLocaleString()}</span>
              </div> 
            </div>
          )}
        </StyledFooterInner>
      </StyledFooter>
    </>
  )
}

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer