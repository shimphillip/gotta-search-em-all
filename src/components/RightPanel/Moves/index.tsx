import React, { useState, useEffect } from 'react'
import Container from './styles'
import MovesScreen from './MovesScreen'
import { pickRandom } from '../../../helpers'
import { Button } from '../../shared'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { MoveInfoProps } from '../../sharedTypes'
import { MovesProps, EntryProps } from './types'

// todo dynamically randomize moveIndex based on the length of the array

interface MovesComponentProps {
  moves?: MovesProps[]
}

const Moves = ({ moves }: MovesComponentProps) => {
  const [moveIndex, setMoveIndex] = useState(0)
  const [moveInfo, setMoveInfo] = useState<MoveInfoProps | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (moves) {
      fetchMove(moves)
    }
  }, [moveIndex, moves])

  async function fetchMove(moves: MovesProps[]) {
    if (!moves.length) {
      return
    }
    setLoading(true)

    const { name } = moves[moveIndex].move
    const { url } = moves[moveIndex].move
    const learnedAt = moves[moveIndex].version_group_details[0].level_learned_at
    const learnMethod =
      moves[moveIndex].version_group_details[0].move_learn_method.name

    const data = await fetch(url).then((response) => response.json())
    const accuracy = data.accuracy
    const damageClass = data.damage_class.name
    const power = data.power
    const pp = data.pp
    const type = data.type.name
    const effectChance = data.effect_chance
    let effectDescription = data.effect_entries.filter((entry: EntryProps) => {
      return entry.language.name === 'en'
    })[0].effect

    effectDescription = effectDescription.replace(
      '$effect_chance',
      effectChance
    )

    const flavorTexts = data.flavor_text_entries
      .filter((entry: EntryProps) => entry.language.name === 'en')
      .map((entry: EntryProps) => entry.flavor_text)
    const moveDescription = pickRandom(flavorTexts)

    setLoading(false)
    setMoveInfo({
      name,
      learnedAt,
      accuracy,
      damageClass,
      power,
      pp,
      type,
      effectDescription,
      learnMethod,
      moveDescription,
    })
  }

  const handleNegativeIndex = (): void => {
    if (!moves) {
      return
    }

    if (!moves[moveIndex - 1]) {
      return setMoveIndex(moves.length - 1)
    }
    setMoveIndex(moveIndex - 1)
  }

  const handlePositiveIndex = (): void => {
    if (!moves) {
      return
    }

    if (!moves[moveIndex + 1]) {
      return setMoveIndex(0)
    }
    setMoveIndex(moveIndex + 1)
  }

  return (
    <Container>
      <Button onClick={handleNegativeIndex}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Button>
      <MovesScreen moveInfo={moveInfo} loading={loading} />
      <Button onClick={handlePositiveIndex}>
        <FontAwesomeIcon icon={faArrowRight} />
      </Button>
    </Container>
  )
}

export default Moves
