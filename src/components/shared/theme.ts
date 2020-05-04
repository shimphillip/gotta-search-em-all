const theme = {
  colors: {
    pokedexColor: '#ce372b',
  },
  darkBorders: `
      border: 2px solid black;
      border-radius: 15px;
    `,
  lightBorders: `
      padding: 10px;
      border: 2px solid #b31818;
      border-radius: 50px;
      display: flex;
      flex-direction: column;
    `,
  screen: `
      background: #a5cd53;
      padding: 20px;
      border-radius: 50px;
      font-family: "VT323";
    `,
  spriteScreen: `
      width: 100%;
      display: flex;
      image-rendering: pixelated;
      border-radius: 50%;
      margin: 10px 0;
      background: #cad5b5;
    `,
  spriteControl: `
      height: 35px;
      width: 35px;
      border-radius: 20px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
      padding: 1px;
      border-color: #b06868;
      font-size: 15px;

      &:hover {
          border-color: #b8ed7c;
      }
    `,
}

export default theme
