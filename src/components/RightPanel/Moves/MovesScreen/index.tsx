import React from 'react'
import Container from './styles'
import { padTexts } from '../../../../helpers'
import { Loading } from '../../../shared'
import { MoveInfoProps } from '../../../shared/types'
import TypeItem from '../../../shared/TypeItem'

interface MovesScreen {
  moveInfo?: MoveInfoProps
  loading: boolean
}

const MovesScreen = ({ moveInfo, loading }: MovesScreen) => {
  if (loading || !moveInfo) {
    return (
      <Container>
        <Loading noBackground />
      </Container>
    )
  }

  const {
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
  } = moveInfo

  return (
    <Container>
      <div className="flex">
        <div className="move-left">
          <div className="move-name">{name}</div>
          <p>{padTexts('Accuracy', accuracy, '.', 20)}</p>
          <p>{padTexts('Power', power, '.', 20)}</p>
          <p>{padTexts('pp', pp, '.', 20)}</p>
        </div>
        <div className="move-right">
          <TypeItem name={type} size="small" />
          <p>{padTexts('Class:', damageClass, '.', 20)}</p>
          <p>{padTexts('Learned At:', learnedAt, '.', 20)}</p>
          <p>{padTexts('Method:', learnMethod, '.', 20)}</p>
        </div>
      </div>
      <div className="move-description outer">
        <div className="inner">
          <p>{moveDescription}</p>
          <hr />
          <p>
            <strong>Effect:</strong> {effectDescription}
          </p>
        </div>
      </div>
    </Container>
  )
}

export default MovesScreen
