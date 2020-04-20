import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Container from './PokedexStyles';
import LeftPanel from './LeftPanel';
import Divider from './Divider';
import RightPanel from './RightPanel';
import { pokemonAPI, pickRandom } from '../helpers';

const NUMBER_OF_POKEMONS = 807;

const Pokedex = () => {
  const [pokemon, setPokemon] = useState({
    pokemonData: {},
    pokemonDescription: '',
    speciesData: {},
    evolutionSprites: [],
    evolutionNames: [],
    moves: [],
  });
  const [pokemonIndex, setPokemonIndex] = useState(
    localStorage.getItem('pokemonIndex') || 25
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    changePokemon(pokemonIndex);
    localStorage.setItem('pokemonIndex', pokemonIndex);
  }, [pokemonIndex]);

  async function changePokemon(pokemonIndex) {
    try {
      setLoading(true);
      const pokemonData = await fetch(
        `${pokemonAPI}pokemon/${pokemonIndex}`
      ).then((response) => response.json());

      const speciesRequest = pokemonData.species.url;
      const moves = pokemonData.moves;

      const speciesData = await fetch(speciesRequest).then((response) =>
        response.json()
      );

      const flavorTexts = speciesData.flavor_text_entries
        .filter((entry) => entry.language.name === 'en')
        .map((entry) => entry.flavor_text);

      const description = pickRandom(flavorTexts);
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

            setLoading(false);
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

  const changePokemonIndex = (newIndex) => {
    if (newIndex < 0 || newIndex > NUMBER_OF_POKEMONS) {
      return;
    }

    setPokemonIndex(newIndex);
  };

  return (
    <>
      {loading && (
        <Loader
          type="Bars"
          color="#DF1C18"
          height={150}
          width={150}
        />
      )}

      {!loading && (
        <Container>
          <div className="inner-container">
            <LeftPanel pokemon={pokemon} />
            <Divider />
            <RightPanel
              pokemon={pokemon}
              pokemonIndex={pokemonIndex}
              changePokemonIndex={changePokemonIndex}
            />
          </div>
        </Container>
      )}
    </>
  );
};

export default Pokedex;
