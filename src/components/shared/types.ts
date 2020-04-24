export interface PokemonProps {
  pokemonData: {
    name: string
    sprites: {
      back_female: string | null
      back_shiny_female: string | null
      back_default: string | null
      front_female: string | null
      front_shiny_female: string | null
      back_shiny: string | null
      front_default: string | null
      front_shiny: string | null
      [key: string]: string | null
    }
    types: TypeProps[]
    stats: Stat[]
    moves: MovesProps[]
  }
  pokemonDescription: string
  speciesData: SpeciesDataProps
  evolutionSprites: string[]
  evolutionNames: string[]
}

export interface SpeciesDataProps {
  flavor_text_entries: FlavorTextEntriesProps[]
  evolution_chain: {
    url: string
  }
}

interface FlavorTextEntriesProps {
  language: {
    name: string
  }
  flavor_text: string
}

export interface TypeProps {
  type: {
    name: string
  }
}

export interface Stat {
  stat: {
    name: string
  }
  base_stat: number
}

export interface MovesProps {
  move: {
    name: string
    url: string
  }
  version_group_details: VersionGroupDetails[]
}

export interface VersionGroupDetails {
  level_learned_at: number
  move_learn_method: {
    name: string
  }
}

export interface MoveInfoProps {
  name: string
  learnedAt: string | number
  accuracy: number
  damageClass: string
  power: number
  pp: number
  type: string
  effectDescription: string
  learnMethod: string
  moveDescription: string
}

// functions

export type ChangePokemonIndex = (newIndex: number) => void
