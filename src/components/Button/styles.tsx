import styled from 'styled-components'

type Props = {
  color: string | undefined
}

const ButtonContainer = styled.button<Props>`
  background-color: ${(props) => (props.color !== undefined ? props.color : '#FFF')};
`

export { ButtonContainer }
