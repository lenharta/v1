import React from 'react'
import { About, Archive, CTA, Experience, Featured, Hero } from '../sections'
import styled from 'styled-components'

const StyledMainContainer = styled.div`
  padding: 0 8rem;
`;

const Layout = () => {
  return (
    <>
      <StyledMainContainer>
        <Hero />
        <About />
        <Featured />
        <Experience />
        <Archive />
        <CTA />
      </StyledMainContainer>
    </>
  )
}

export default Layout
