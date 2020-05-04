import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faArrowLeft,
  faMicrophone,
} from '@fortawesome/free-solid-svg-icons'
import Container, { SpeakButton } from './styles'
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

  const handleSpeech = async (description: string) => {
    const awaitVoices = new Promise(
      (resolve) => (window.speechSynthesis.onvoiceschanged = resolve)
    ).then(() => {
      const speechSynthesis = window.speechSynthesis
      const voice = speechSynthesis.getVoices()[1]
      let utterThis = new SpeechSynthesisUtterance(description)
      utterThis = Object.assign(utterThis, {
        voice,
        pitch: 1,
        rate: 1,
      })
      speechSynthesis.speak(utterThis)
    })
  }

  return (
    <Container>
      <Button
        onClick={() => handleButton(index - 1)}
        aria-label="Previous move"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </Button>
      <div className="description">
        {descriptions[index]}
        <SpeakButton onClick={() => handleSpeech(descriptions[index])}>
          <FontAwesomeIcon icon={faMicrophone} />
        </SpeakButton>
      </div>
      <Button onClick={() => handleButton(index + 1)} aria-label="Next move">
        <FontAwesomeIcon icon={faArrowRight} />
      </Button>
    </Container>
  )
}

export default Description
