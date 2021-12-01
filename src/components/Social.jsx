import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { usePrefersReducedMotion } from '../hooks'
import { navbarDelay } from '../utils'
import { Icons } from '../assets'
import { socialMedia } from '../config'

const SocialMenu = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  height: 100vh;
  bottom: 0;
  left: 55px;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const SocialList = styled.ul`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: 100%;
  width: 40px;
  margin-top: 120px;
  li {
    list-style: none;
    margin: 30px 0;
    }
    svg {
      width: 30px;
      height: 30px;
      &:hover {
        stroke: var(--text);
        }
      }
`;

const Social = () => {
  const [isMounted, setIsMounted] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navbarDelay);
    return () => clearTimeout(timeout);
  }, [])

  return (
    <>
      <SocialMenu>
        {prefersReducedMotion ? (
          <SocialList>
              {socialMedia.map(({ name, url }, i) => (
                <li key={i}>
                  <a href={url} aria-label={name}>
                    <Icons name={name} />
                  </a>
                </li>
              ))}
          </SocialList>
        ) : (
          <>
          </>
        )}
      </SocialMenu>
    </>
  )
}

export default Social
