import styled from 'styled-components'

type Props = {
  color: string | undefined
}

const ButtonContainer = styled.button<Props>`
  cursor: pointer;
  padding: 17px 28px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  border: none;
  border-radius: 28px;
  background-color: ${(props) => (props.color !== undefined ? props.color : '#FFF')};
`

export { ButtonContainer }
