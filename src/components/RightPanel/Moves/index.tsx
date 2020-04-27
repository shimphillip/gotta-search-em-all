import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import Container from './styles'
import MovesScreen from './MovesScreen'
import { pickRandom } from '../../../helpers'
import { Button } from '../../shared'
import { MoveInfoProps } from '../../shared/types'
import { MovesProps, EntryProps } from './types'
import { pickRandomIndex } from '../../../helpers'

interface MovesComponentProps {
  moves?: MovesProps[]
}

const Moves = ({ moves }: MovesComponentProps) => {
  const [moveInfo, setMoveInfo] = useState<MoveInfoProps | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMove(moves)
  }, [moves])

  async function fetchMove(moves: MovesProps[] | undefined) {
    if (!moves || !moves.length) {
      return
    }
    setLoading(true)
    const moveIndex = pickRandomIndex(moves)

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

  return (
    <Container>
      <MovesScreen moveInfo={moveInfo} loading={loading} />
      <Button onClick={() => fetchMove(moves)} aria-label="Get Random">
        <FontAwesomeIcon icon={faRandom} />
      </Button>
    </Container>
  )
}

export default Moves
