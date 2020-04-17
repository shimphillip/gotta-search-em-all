import React, { useState, useEffect } from 'react';
import Container from './PokedexStyles';
import LeftPanel from './LeftPanel';
import Divider from './Divider';
import RightPanel from './RightPanel';
import { pokemonAPI, pickRandom } from '../helpers';

const Pokedex = () => {
  const [pokemon, setPokemon] = useState({
    pokemonIndex: 6,
    pokemonData: {},
    pokemonDescription: '',
    speciesData: {},
    evolutionSprites: [],
    evolutionNames: [],
    moves: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    changePokemon(pokemon.pokemonIndex);
  }, []);

  async function changePokemon(defaultPokemonIndex) {
    try {
      // setLoading(true);
      const pokemonData = await fetch(
        `${pokemonAPI}pokemon/${defaultPokemonIndex}`
      ).then((response) => response.json());

      const pokemonIndex = pokemonData.id;
      const speciesRequest = pokemonData.species.url;
      const moves = pokemonData.moves;

      const speciesData = await fetch(speciesRequest).then((response) =>
        response.json()
      );

      const flavorTexts = speciesData.flavor_text_entries
        .filter((entry) => entry.language.name === 'en')
        .map((entry) => entry.flavor_text);

      const description = pickRandom(flavorTexts);
      // setLoading(false);

      const evolutionRequest = speciesData.evolution_chain.url;

      const evolutionData = await fetch(evolutionRequest).then((response) =>
        response.json()
      );

      const evolutions = [];
      const first = evolutionData.chain;
      let second;
      let third;

      const evolution1 = fetch(`${pokemonAPI}pokemon/${first.species.name}/`);
      evolutions.push(evolution1);
      second = first.evolves_to[0];

      if (second) {
        const evolution2 = fetch(
          `${pokemonAPI}pokemon/${second.species.name}/`
        );
        evolutions.push(evolution2);
        third = second.evolves_to[0];
      }

      if (third) {
        const evolution3 = fetch(`${pokemonAPI}pokemon/${third.species.name}/`);
        evolutions.push(evolution3);
      }

      Promise.all(evolutions).then((responses) => {
        Promise.all(responses.map((response) => response.json())).then(
          (pokemons) => {
            const sprites = pokemons.map((pokemon) => {
              return pokemon.sprites.front_default;
            });
            const names = pokemons.map((pokemon) => {
              return pokemon.name;
            });
            setPokemon({
              ...pokemon,
              pokemonData,
              pokemonIndex,
              speciesData,
              pokemonDescription: description,
              evolutionSprites: sprites,
              evolutionNames: names,
              moves,
            });
          }
        );
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <div className="inner-container">
        <LeftPanel {...pokemon} />
        <Divider />
        <RightPanel {...pokemon} />
      </div>
    </Container>
  );
};

export default Pokedex;
