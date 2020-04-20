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
      display: flex;
      flex-direction: column;
    `,
  screen: `
      background: linear-gradient(14deg, rgb(165, 205, 83) 60%, rgb(193, 217, 144) 65%);
      padding: 5px;
      border-radius: 3px;
      font-family: "VT323";
      border: inset #879a65 3px;
    `,
  spriteScreen: `
      width: 100%;
      display: flex;
      image-rendering: pixelated;
      border: inset #9aa28b 3px;
      border-radius: 5px;
      margin: 10px 0;
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
    //   transform: rotate(60deg);
      color: black;
      padding: 1px;
      border-color: #b06868;
      font-size: 15px;

      &:hover {
          border-color: #b8ed7c;
      }
    `,
};

export default theme;
