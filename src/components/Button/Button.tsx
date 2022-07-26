import React from 'react'
import { ButtonContainer } from './styles'

type style = 'primary' | 'danger' | 'light' | 'dark'

type Props = {
  label: string
  type?: style
}

const Button: React.FC<Props> = ({ label, type = 'primary' }): JSX.Element => (
  <ButtonContainer styleButton={type}>{label}</ButtonContainer>
)

Button.defaultProps = {
  type: 'primary'
}

export default Button
