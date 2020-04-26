import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVenus, faUndo } from '@fortawesome/free-solid-svg-icons'
import Container from './styles'
import { Button } from '../../shared'
import { PokeBall } from '../../shared'
import { SpritesProps, SpriteProps } from './types'

interface SpriteComponentProps {
  sprites?: SpritesProps
  name: string
  [key: string]: any
}

const Sprite = ({ sprites, name }: SpriteComponentProps) => {
  const [sprite, setSprite] = useState<SpriteProps>({
    front: true,
    female: false,
    shiny: false,
  })
  const [src, setSrc] = useState<string | null>('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (sprites) {
      const source = buildImage(sprite)
      setSrc(sprites[source])
    }
  }, [sprite, sprites])

  function buildImage({ front, shiny, female }: SpriteProps): string {
    const direction = front ? 'front' : 'back'
    const light = shiny ? '_shiny' : '_default'
    const gender = female ? '_female' : ''

    if (light === '_default' && gender === '_female') {
      return direction + gender
    }
    return direction + light + gender
  }

  const handleChange = (attribute: string) => {
    // make a copy and update its state
    const spriteCopy = { ...sprite, [attribute]: !sprite[attribute] }
    const source = buildImage(spriteCopy)

    // run the bounce animiation if there is no avaliable sprite
    if (sprites && !sprites[source]) {
      setError(true)
      return setTimeout(() => {
        setError(false)
      }, 500)
    }

    return setSprite({ ...sprite, [attribute]: !sprite[attribute] })
  }

  const renderScreen = () => {
    if (src) {
      return <img src={src} alt={name} />
    }

    return <PokeBall nameClass="bigScreen" />
  }

  return (
    <Container error={error}>
      {renderScreen()}
      <div className="controls">
        <Button active={sprite.female} onClick={() => handleChange('female')}>
          <FontAwesomeIcon icon={faVenus} />
        </Button>
        <Button
          active={sprite.shiny}
          className="shiny"
          onClick={() => handleChange('shiny')}
        >
          Shiny
        </Button>
        <Button active={!sprite.front} onClick={() => handleChange('front')}>
          <FontAwesomeIcon icon={faUndo} />
        </Button>
      </div>
    </Container>
  )
}

export default Sprite
