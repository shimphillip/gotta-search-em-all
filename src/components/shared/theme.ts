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
      border: inset #b31818 2px;
      border-radius: 50px;
      display: flex;
      flex-direction: column;
    `,
  screen: `
      background: #a5cd53;
      padding: 20px;
      border-radius: 50px;
      font-family: "VT323";
      border: #879a65 2px;
    `,
  spriteScreen: `
      width: 100%;
      display: flex;
      image-rendering: pixelated;
      border: #9aa28b 2px;
      border-radius: 50%;
      margin: 10px 0;
      // background: #cad5b5
      background: linear-gradient(15deg, #cad5b5 64%, #dde2d4 70%, #dde2d4 81%, #fff 86%, #dde2d4 89%, #dde2d4 100%);
    `,
  spriteControl: `
      height: 35px;
      width: 35px;
      border: groove grey 3px;
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
