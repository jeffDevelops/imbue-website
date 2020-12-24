import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './_styled/GlobalStyles'
import Router from './Router'
import { theme } from './_styled/Theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  )
}

export default App
