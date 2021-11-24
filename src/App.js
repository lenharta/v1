import React from 'react'
import { Nav, Layout, Footer, Social, Contact, ToTop } from './components'
import { GlobalStyle } from './styles'


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Layout />
      <Social />
      <Contact />
      <ToTop />
      <Footer />
    </>
  )
}

export default App
