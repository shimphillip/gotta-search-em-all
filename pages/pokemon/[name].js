import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Post({
  pokemonData,
  speciesData,
  pokemonDescriptions,
  evolutionNames,
  evolutionSprites,
}) {
  console.log(pokemonData);
  console.log(speciesData);
  console.log(pokemonDescriptions);
  console.log(evolutionNames);
  console.log(evolutionSprites);

  const rows = [
    {
      name: pokemonData.name,
      pokemonIndex: pokemonData.id,
      picture: pokemonData.sprites.front_default,
      description:
        pokemonDescriptions[
          Math.floor(Math.random() * pokemonDescriptions.length)
        ],
    },
  ];

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Pokemon Number</TableCell>
              <TableCell align="right">Picture</TableCell>
              <TableCell align="right">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.pokemonIndex}</TableCell>
                  <TableCell align="right">
                    <img src={row.picture} />
                    {/* <Image
                      src={row.picture}
                      alt="Pokemon Picture"
                      width={50}
                      height={50}
                    /> */}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
  // Render post...
}

const getUniqueItems = (arr) => {
  const uniqueItems = [arr[0]];

  for (let i = 0; i < arr.length - 1; i++) {
    let current = arr[i];
    let next = arr[i + 1];

    if (current.slice(0, 10) !== next.slice(0, 10)) {
      uniqueItems.push(next);
    }
  }

  return uniqueItems;
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=156&offset=0'
  );
  const pokemons = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = pokemons.results.map((pokemon) => ({
    params: { name: pokemon.name },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const pokemonAPI = 'https://pokeapi.co/api/v2/';
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  const pokemonData = await res.json();
  const speciesRequest = pokemonData.species.url;

  const speciesData = await fetch(speciesRequest).then((response) =>
    response.json()
  );

  const flavorTexts = speciesData.flavor_text_entries
    .filter((entry) => entry.language.name === 'en')
    .map((entry) => entry.flavor_text);
  const descriptions = getUniqueItems(flavorTexts);

  const evolutionData = await fetch(speciesData.evolution_chain.url).then(
    (response) => response.json()
  );

  const evolutions = [];
  const first = evolutionData.chain;
  let second;
  let third;

  const evolution1 = fetch(`${pokemonAPI}pokemon/${first.species.name}/`);
  evolutions.push(evolution1);
  second = first.evolves_to[0];

  if (second) {
    const evolution2 = fetch(`${pokemonAPI}pokemon/${second.species.name}/`);
    evolutions.push(evolution2);
    third = second.evolves_to[0];
  }

  if (third) {
    const evolution3 = fetch(`${pokemonAPI}pokemon/${third.species.name}/`);
    evolutions.push(evolution3);
  }

  const responses = await Promise.all(evolutions);
  const pokemons = await Promise.all(
    responses.map((response) => response.json())
  );
  const sprites = pokemons.map((pokemon) => {
    return { sprite: pokemon.sprites.front_default };
  });
  const names = pokemons.map((pokemon) => {
    return pokemon.name;
  });

  console.log(pokemonData);
  console.log(speciesData);
  console.log(descriptions);
  console.log(names);
  console.log(sprites);

  return {
    props: {
      pokemonData,
      speciesData,
      pokemonDescriptions: descriptions,
      evolutionNames: names,
      evolutionSprites: sprites,
    },
  };
  // Pass post data to the page via props
}

export default Post;
