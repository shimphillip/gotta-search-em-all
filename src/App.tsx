import React from 'react'
import styled from 'styled'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import Pokedex from './components/Pokedex'
import { theme } from './components/shared'
import pikachu from './assets/pikachu.png'
import Footer from 'components/Footer'

const AppContainer = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 4rem;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 10px;
    font-family: 'Staatliches', sans-serif;
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
          /* width */
          ::-webkit-scrollbar {
            width: 10px;
          }

          /* Track */
          ::-webkit-scrollbar-track {
            background: #cad5b5;
          }

          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: #888;
          }

          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}
      />
      <h1>
        Gotta <span className="red">search'em</span> all
      </h1>
      <Pokedex />
      <Footer />
    </AppContainer>
  </ThemeProvider>
)

export default App
