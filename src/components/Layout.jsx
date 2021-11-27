import React from 'react'
import { About, Archive, CTA, Experience, Featured, Footer, Hero, ToTop } from '../sections'
import styled from 'styled-components'

const Main = styled.main`
  padding: 0 150px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: 1080px) {
    padding: 0 100px;
  }

  @media (max-width: 768px) {
    padding: 0 50px;
  }

  @media (max-width: 480px) {
    padding: 0 25px;
  }
`;

const Layout = () => {
  return (
    <>
      <Main>
        <Hero />
        {/* <About /> */}
        {/* <Featured /> */}
        {/* <Experience /> */}
        {/* <Archive /> */}
        {/* <CTA /> */}
        {/* <ToTop /> */}
        {/* <Footer /> */}
      </Main>
    </>
  )
}

export default Layout
