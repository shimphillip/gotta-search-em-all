import React, { useState, KeyboardEvent } from 'react'
import Container from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../../shared'
import { ChangePokemonIndex } from '../../shared/types'

interface ControlsProps {
  pokemonIndex: number
  changePokemonIndex: ChangePokemonIndex
}

const NUMBER_OF_POKEMONS = 807

const Controls = ({ pokemonIndex, changePokemonIndex }: ControlsProps) => {
  const [index, setIndex] = useState(pokemonIndex)
  const [error, setError] = useState(false)

  const checkError = (index: number): boolean => {
    if (index < 1 || index > NUMBER_OF_POKEMONS) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 500)

      return true
    }
    return false
  }

  const handleButton = (newIndex: number) => {
    const isError = checkError(newIndex)
    if (isError) {
      return
    }

    setIndex(newIndex)
    changePokemonIndex(newIndex)
  }

  const handleInputChange = (newIndex: string) => {
    const numberIndex = Number(newIndex)
    setIndex(numberIndex)
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    const code = e.keyCode || e.which

    if (code === 13) {
      const isError = checkError(index)
      if (isError) {
        return
      }
      changePokemonIndex(index)
    }
  }

  return (
    <Container error={error}>
      <Button onClick={() => handleButton(pokemonIndex - 1)}>
        <FontAwesomeIcon icon={faArrowDown} />
      </Button>
      <span>
        No:{' '}
        <input
          type="text"
          className="input"
          value={index}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyPress={(e) => handleKeyPress(e)}
        />
      </span>
      <Button onClick={() => handleButton(pokemonIndex + 1)}>
        <FontAwesomeIcon icon={faArrowUp} />
      </Button>
    </Container>
  )
}

export default Controls
