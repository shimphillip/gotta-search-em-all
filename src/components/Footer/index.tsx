import React from 'react'
import Container from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import pikachu from '../../assets/pikachu.gif'

const Footer = () => {
  return (
    <Container>
      &copy; {new Date().getFullYear()} Phillip Shim{' '}
      <img src={pikachu} alt="pikachu gif" />
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
