import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Pokedex from './components/Pokedex';

const theme = {};

const AppContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Global
          styles={css`
            @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

            * {
              box-sizing: inherit;
              margin: 0;
              padding: 0;
            }

            html {
              box-sizing: border-box;
              font-size: 20px;
            }

            body {
              font-family: 'VT323', monospace;
            }
          `}
        />
        <Pokedex />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
