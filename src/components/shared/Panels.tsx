import React, { useEffect } from 'react'
import { usePokemon } from 'hooks'
import LeftPanel from 'components/LeftPanel'
import Divider from 'components/Divider'
import RightPanel from 'components/RightPanel'
import { useDispatch } from 'react-redux'
import { UPDATE_DATA } from 'reducers/pokemonReducer'

const Panels = () => {
  const { pokemon, pokemonIndex, changePokemonIndex, loading } = usePokemon()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({
      type: UPDATE_DATA,
      data: {
        pokemon: pokemon,
        pokemonIndex: pokemonIndex,
      },
    })
  }, [pokemon, pokemonIndex, loading])

  return (
    <>
      <LeftPanel pokemon={pokemon} pokemonIndex={pokemonIndex} />
      <Divider />
      <RightPanel
        pokemon={pokemon}
        pokemonIndex={pokemonIndex}
        changePokemonIndex={changePokemonIndex}
      />
    </>
  )
}

export default Panels
