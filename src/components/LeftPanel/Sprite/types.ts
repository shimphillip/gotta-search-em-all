export interface SpritesProps {
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

export interface SpriteProps {
  front: boolean
  female: boolean
  shiny: boolean
  [key: string]: boolean
}
