import React from 'react'
import { Nav, Hero } from './components'
import { IconExternal, IconFolder, IconGithub, IconInstagram, IconLinkedin, IconTwitter } from './components/icons'
import { GlobalStyle } from './styles'


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Hero />
      <IconFolder />
      <IconGithub />
      <IconExternal />
      <IconTwitter />
      <IconInstagram />
      <IconLinkedin />
    </>
  )
}

export default App
