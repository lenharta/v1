import React from 'react'
import styled from 'styled-components'
import { Icons } from '../assets';
import { socialMedia } from '../config';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter}
  height: 150px;
  width: 100%;
  background: radial-gradient(circle at 30% 30%, rgba(14, 18, 25, .55) 0%, rgba(14, 18, 25, .75) 100%);
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
`;

const Footer = () => {
  return (
    <>
      <StyledFooter>
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
        </StyledFooterInner>
      </StyledFooter>
    </>
  )
}

export default Footer