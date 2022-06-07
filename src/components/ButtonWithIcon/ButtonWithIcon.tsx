import React from 'react'
import { ButtonWithIconContainer } from './styles'

type Props = {
  label: string
}

const ButtonWithIcon: React.FC<Props> = ({ label }): JSX.Element => (
  <ButtonWithIconContainer>{label}</ButtonWithIconContainer>
)

export default ButtonWithIcon
