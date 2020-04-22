import styled, { CreateStyled } from '@emotion/styled'
import { theme } from './components/shared'

// template strings inside props of emotion styled will automatically have prop types defined
type Theme = typeof theme

export default styled as CreateStyled<Theme>
