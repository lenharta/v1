import React from 'react'
import styled from 'styled-components'

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
`;

const Loader = () => {
  return (
    <StyledLoader>
      <h1>Hello World</h1>
    </StyledLoader>
  )
}

export default Loader
