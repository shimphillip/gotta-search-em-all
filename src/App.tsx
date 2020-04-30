import React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from 'react-router-dom'

import Container from './AppStyles'
import globalCSS from './globaStyles'
import Pokedex from './components/Pokedex'
import { theme } from './components/shared'
import Footer from 'components/Footer'

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Container>
        <Global styles={globalCSS} />
        <h1>
          Gotta <span className="red">search'em</span> all
        </h1>
        <Pokedex />
        <Footer />
      </Container>
    </ThemeProvider>
  </Router>
)

export default App
