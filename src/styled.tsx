//**
//** This file resolves all the types within styled components
//**

import styled, { CreateStyled } from '@emotion/styled'
import { theme } from './components/shared'

type Theme = typeof theme

export default styled as CreateStyled<Theme>
