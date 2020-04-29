import { css } from '@emotion/core'
import pikachu from './assets/pikachu.png'

const globalCSS = css`
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
`

export default globalCSS
