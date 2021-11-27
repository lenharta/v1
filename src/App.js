import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Layout, Social, Contact, Nav } from './components'
import { GlobalStyle, theme } from './styles'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Layout />
        {/* <Social />
        <Contact /> */}
      </ThemeProvider>
    </>
  )
}

export default App
