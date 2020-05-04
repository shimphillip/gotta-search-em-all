import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Container from './styles'
import { Button } from '../../shared'

interface DescriptionProps {
  descriptions: string[]
}

const Description = ({ descriptions }: DescriptionProps) => {
  const [index, setIndex] = useState(0)

  const handleButton = (newIndex: number) => {
    if (newIndex > descriptions.length - 1) {
      return setIndex(0)
    }

    if (newIndex < 0) {
      return setIndex(descriptions.length - 1)
    }
    setIndex(newIndex)
  }

  return (
    <Container>
      <Button
        onClick={() => handleButton(index - 1)}
        aria-label="Previous move"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </Button>
      <div className="description">{descriptions[index]}</div>
      <Button onClick={() => handleButton(index + 1)} aria-label="Next move">
        <FontAwesomeIcon icon={faArrowRight} />
      </Button>
    </Container>
  )
}

export default Description
