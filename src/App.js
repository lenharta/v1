import React from 'react'
import { Layout, Social, Contact, Nav } from './components'
import { GlobalStyle } from './styles'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Layout />
      <Social />
      <Contact />
    </>
  )
}

export default App
