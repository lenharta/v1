import React from 'react'
import { About, Archive, CTA, Experience, Featured, Footer, Hero, ToTop } from '../sections'
import styled from 'styled-components'

const StyledMainContainer = styled.div`
  padding: 0 150px;
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
        <ToTop />
        <Footer />
      </StyledMainContainer>
    </>
  )
}

export default Layout
