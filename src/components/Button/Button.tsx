import React from 'react'
import { ButtonContainer } from './styles'

type Props = {
  label: string
  className?: string
}

const Button: React.FC<Props> = ({ label, className = 'primary' }): JSX.Element => (
  <ButtonContainer className={className}>{label}</ButtonContainer>
)

Button.defaultProps = {
  className: 'primary'
}

export default Button
