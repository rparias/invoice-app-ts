import React from 'react'
import { ButtonWithIconContainer } from './styles'
import { ReactComponent as PlusIcon } from '../../assets/icon-plus.svg'

type Props = {
  label: string
}

const ButtonWithIcon: React.FC<Props> = ({ label }): JSX.Element => (
  <ButtonWithIconContainer>
    <PlusIcon className="icon" />
    {label}
  </ButtonWithIconContainer>
)

export default ButtonWithIcon
