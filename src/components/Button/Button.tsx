import React from 'react'
import { ButtonContainer } from './styles'

type Props = {
  text: string
  color: string
}
const Button: React.FC<Props> = ({ text, color }): JSX.Element => (
  <ButtonContainer color={color}>
    <span className="dot" />
    {text}
  </ButtonContainer>
)

export default Button
