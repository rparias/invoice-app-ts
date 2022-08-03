import React from 'react'
import { ButtonContainer } from './styles'

type Props = {
  label: string
  type?: 'button' | 'submit' | 'reset' | undefined
  className?: string
  onClick?: () => void
}

const Button: React.FC<Props> = ({ label, className, type, onClick }): JSX.Element => (
  <ButtonContainer type={type} className={className} onClick={onClick}>
    {label}
  </ButtonContainer>
)

Button.defaultProps = {
  className: 'primary',
  type: 'button',
  onClick: () => null
}

export default Button
