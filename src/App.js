import React from 'react'
import { Layout, Social, Contact } from './components'
import { GlobalStyle } from './styles'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout />
      <Social />
      <Contact />
    </>
  )
}

export default App
