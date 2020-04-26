import React, { Suspense } from 'react'
import styled from 'styled'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import Pokedex from './components/Pokedex'
import { theme } from './components/shared'
import pikachu from './assets/pikachu.png'
import { Loading } from './components/shared'

const AppContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 4rem;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 10px;
    font-family: 'Staatliches';
    letter-spacing: 5px;

    .red {
      color: #df1c18;
    }
  }
`

const App = () => (
  <ThemeProvider theme={theme}>
    <AppContainer>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Muli&display=swap');
          * {
            box-sizing: inherit;
            margin: 0;
            padding: 0;
          }

          html {
            box-sizing: border-box;
            font-size: 15px;
          }

          body {
            font-family: 'VT323', monospace;
            height: 100vh;
            background-image: url(${pikachu});
            background-position: bottom left;
            background-size: cover;
          }
        `}
      />
      <h1>
        Gotta <span className="red">search'em</span> all
      </h1>
      <Suspense fallback={<Loading />}>
        <Pokedex />
      </Suspense>
    </AppContainer>
  </ThemeProvider>
)

export default App
