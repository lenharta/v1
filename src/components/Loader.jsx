import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BrandLoader } from '../assets/logos';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: var(--x-dark-navy);
  z-index: 99;

  .logo__wrapper {
    max-width: 100px;
    svg {
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }
  }
`;

const Loader = () => {

  return (
    <StyledLoader>
      <div className="logo__wrapper">
        <BrandLoader />
      </div>
    </StyledLoader>
  )
}

export default Loader
