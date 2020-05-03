type TypeMaps = {
  [key: string]: {
    immunes: string[]
    weaknesses: string[]
    strengths: string[]
    [key: string]: any
  }
}

export const typeMaps: TypeMaps = {
  normal: {
    immunes: ['Ghost'],
    weaknesses: ['Rock', 'Steel'],
    strengths: [],
  },
  fire: {
    immunes: [],
    weaknesses: ['Fire', 'Water', 'Rock', 'Dragon'],
    strengths: ['Grass', 'Ice', 'Bug', 'Steel'],
  },
  water: {
    immunes: [],
    weaknesses: ['Water', 'Grass', 'Dragon'],
    strengths: ['Fire', 'Ground', 'Rock'],
  },
  electric: {
    immunes: ['Ground'],
    weaknesses: ['Electric', 'Grass', 'Dragon'],
    strengths: ['Water', 'Flying'],
  },
  grass: {
    immunes: [],
    weaknesses: ['Fire', 'Grass', 'Poison', 'Flying', 'Bug', 'Dragon', 'Steel'],
    strengths: ['Water', 'Ground', 'Rock'],
  },
  ice: {
    immunes: [],
    weaknesses: ['Fire', 'Water', 'Ice', 'Steel'],
    strengths: ['Grass', 'Ground', 'Flying', 'Dragon'],
  },
  fighting: {
    immunes: ['Ghost'],
    weaknesses: ['Poison', 'Flying', 'Psychic', 'Bug', 'Fairy'],
    strengths: ['Normal', 'Ice', 'Rock', 'Dark', 'Steel'],
  },
  poison: {
    immunes: ['Steel'],
    weaknesses: ['Poison', 'Ground', 'Rock', 'Ghost'],
    strengths: ['Grass', 'Fairy'],
  },
  ground: {
    immunes: ['Flying'],
    weaknesses: ['Grass', 'Bug'],
    strengths: ['Fire', 'Electric', 'Poison', 'Rock', 'Steel'],
  },
  flying: {
    immunes: [],
    weaknesses: ['Electric', 'Rock', 'Steel'],
    strengths: ['Grass', 'Fighting', 'Bug'],
  },
  psychic: {
    immunes: ['Dark'],
    weaknesses: ['Psychic', 'Steel'],
    strengths: ['Fighting', 'Poison'],
  },
  bug: {
    immunes: [],
    weaknesses: [
      'Fire',
      'Fighting',
      'Poison',
      'Flying',
      'Ghost',
      'Steel',
      'Fairy',
    ],
    strengths: ['Grass', 'Psychic', 'Dark'],
  },
  rock: {
    immunes: [],
    weaknesses: ['Fighting', 'Ground', 'Steel'],
    strengths: ['Fire', 'Ice', 'Flying', 'Bug'],
  },
  ghost: {
    immunes: ['Normal'],
    weaknesses: ['Dark'],
    strengths: ['Psychic', 'Ghost'],
  },
  dragon: {
    immunes: ['Fairy'],
    weaknesses: ['Steel'],
    strengths: ['Dragon'],
  },
  dark: {
    immunes: [],
    weaknesses: ['Fighting', 'Dark', 'Fairy'],
    strengths: ['Psychic', 'Ghost'],
  },
  steel: {
    immunes: [],
    weaknesses: ['Fire', 'Water', 'Electric', 'Steel'],
    strengths: ['Ice', 'Rock', 'Fairy'],
  },
  fairy: {
    immunes: [],
    weaknesses: ['Fire', 'Poison', 'Steel'],
    strengths: ['Fighting', 'Dragon', 'Dark'],
  },
}
