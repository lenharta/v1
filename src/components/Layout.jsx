import React from 'react'
import { About, Archive, CTA, Experience, Featured, Footer, Hero, Nav, ToTop } from '../sections'
import styled from 'styled-components'

const StyledMainContainer = styled.div`
  padding: 0 6rem;
`;

const Layout = () => {
  return (
    <>
      <StyledMainContainer>
        <Nav />
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
