import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Pokedex from './components/Pokedex';

const theme = {
  colors: {
    pokedexColor: '#ce372b',
  },
  darkBorders: `
    border: 2px solid black;
    border-radius: 15px;
  `,
  lightBorders: `
    padding: 5px;
    border: inset #b31818 3px;
    border-radius: 3px;
  `,
  screen: `
    background: linear-gradient(14deg, rgb(165, 205, 83) 60%, rgb(193, 217, 144) 65%);
    padding: 5px;
    border-radius: 3px;
    font-family: "VT323";
    border: inset #879a65 3px;
  `,
};

const AppContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const App = () => (
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
            height: 100vh;
          }
        `}
      />
      <Pokedex />
    </AppContainer>
  </ThemeProvider>
);

export default App;
