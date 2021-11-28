import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Layout, Social, Nav, Loader, Email } from './components'
import { GlobalStyle, theme } from './styles'

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 6600)
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        { isLoading ? (
          <Loader />
        ) : (
          <>
            <Nav />
            <Layout />
            {/* <Social /> */}
            {/* <Email /> */}
          </>
        )}

      </ThemeProvider>
    </>
  )
}



export default App

// IDEAS
// Most used tech (cursor physics) logo section
// animated loading screen
// Custom Twitter API section
// Custom GitHub API section
// Custom 404 page
