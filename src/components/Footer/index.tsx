import React from 'react'
import Container from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <Container>
      &copy; {new Date().getFullYear()} Phillip Shim{' '}
      <a
        href="https://github.com/shimphillip/gotta-search-em-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faCode} />
      </a>
    </Container>
  )
}

export default Footer
