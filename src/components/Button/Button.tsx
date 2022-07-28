import React from 'react'
import { ButtonContainer } from './styles'

type style = 'primary' | 'danger' | 'gray-light' | 'gray-dark'

type Props = {
  label: string
  className?: style
}

const Button: React.FC<Props> = ({ label, className = 'primary' }): JSX.Element => (
  <ButtonContainer className={className}>{label}</ButtonContainer>
)

Button.defaultProps = {
  className: 'primary'
}

export default Button
