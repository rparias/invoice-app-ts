import React from 'react'
import { ButtonWithIconContainer } from './styles'
import { ReactComponent as PlusIcon } from '../../assets/icon-plus.svg'

type Props = {
  label: string
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
}

const ButtonWithIcon: React.FC<Props> = ({ label, type, onClick }): JSX.Element => (
  <ButtonWithIconContainer type={type} onClick={onClick}>
    <PlusIcon className="icon" />
    {label}
  </ButtonWithIconContainer>
)

ButtonWithIcon.defaultProps = {
  type: 'button',
  onClick: () => null
}

export default ButtonWithIcon
