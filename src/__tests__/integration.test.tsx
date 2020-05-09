import React from 'react'
import { render } from '@testing-library/react'
import Name from '../components/LeftPanel/Name'

// src/components/LeftPanel/Name/index.tsx

const renderWithProps = {
  name: 'Pikachu',
  pokemonIndex: 25,
}

describe(`Integration test for Gotta Search'em All`, () => {
  it(`should load Pikachu on the homepage`, () => {
    const { getByTestId } = render(<Name {...renderWithProps} />)
    const pokemonName = getByTestId('pokemon-name').textContent
    const pokemonIndex = getByTestId('pokemon-index').textContent

    expect(pokemonName).toBe(`Pikachu`)
    expect(pokemonIndex).toBe(`no. 25`)
  })
})
