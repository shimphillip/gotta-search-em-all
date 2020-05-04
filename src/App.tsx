import React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import Container from './AppStyles'
import Pokedex from './components/Pokedex'
import { theme } from './components/shared'
import Footer from 'components/Footer'
import globalStyles from './globaStyles'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Global styles={globalStyles} />
        <h1>
          Gotta <span className="red">search'em</span> all
        </h1>
        <Pokedex />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App
